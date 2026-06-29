from rest_framework import serializers
from config.permissions import has_moderation_access
from .models import (
    AnswerChoice,
    Content,
    Question,
    Quiz,
    QuizAnswer,
    QuizAttempt,
    QuizQuestion,
)
from users.serializers import UserSerializer


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'type', 'prompt', 'answer']


class ContentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    questions = QuestionSerializer(many=True, required=False)

    class Meta:
        model = Content
        fields = [
            'id', 'title', 'slug', 'description', 'body', 'level', 'subject',
            'competency', 'language', 'target_audience', 'tags', 'category',
            'status', 'moderation_reason', 'file_type', 'file_url', 'thumbnail',
            'author', 'created_at', 'updated_at', 'published_at', 'is_premium',
            'questions', 'quiz'
        ]
        read_only_fields = ['author', 'created_at', 'updated_at', 'published_at']

    def validate_status(self, value):
        request = self.context.get('request')
        user = getattr(request, 'user', None)
        if value in {Content.Status.PUBLISHED, Content.Status.APPROVED, Content.Status.REFUSED, Content.Status.ARCHIVED}:
            if not has_moderation_access(user):
                raise serializers.ValidationError(
                    "Seuls les modérateurs et administrateurs peuvent valider, refuser, publier ou archiver un contenu."
                )
        return value

    def validate_tags(self, value):
        if value in (None, ''):
            return []
        if not isinstance(value, list) or not all(isinstance(item, str) for item in value):
            raise serializers.ValidationError("Les tags doivent être une liste de textes.")
        return value

    def validate(self, attrs):
        status = attrs.get('status')
        reason = attrs.get('moderation_reason', '')
        if status == Content.Status.REFUSED and not reason:
            raise serializers.ValidationError({
                'moderation_reason': "Un motif de refus est requis pour refuser un contenu."
            })
        return attrs

    def create(self, validated_data):
        questions_data = validated_data.pop('questions', [])
        content = Content.objects.create(**validated_data)
        for question_data in questions_data:
            Question.objects.create(content=content, **question_data)
        return content


class AnswerChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerChoice
        fields = ['id', 'text', 'is_correct', 'order']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        user = getattr(request, 'user', None)
        if not has_moderation_access(user) and instance.question.quiz.author_id != getattr(user, 'id', None):
            data.pop('is_correct', None)
        return data


class QuizQuestionSerializer(serializers.ModelSerializer):
    choices = AnswerChoiceSerializer(many=True)

    class Meta:
        model = QuizQuestion
        fields = ['id', 'type', 'prompt', 'explanation', 'order', 'points', 'choices']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        user = getattr(request, 'user', None)
        if not has_moderation_access(user) and instance.quiz.author_id != getattr(user, 'id', None):
            data.pop('explanation', None)
        return data


class QuizSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    questions = QuizQuestionSerializer(many=True, required=False)

    class Meta:
        model = Quiz
        fields = [
            'id', 'content', 'title', 'description', 'level', 'subject',
            'competency', 'language', 'status', 'author', 'created_at',
            'updated_at', 'published_at', 'questions'
        ]
        read_only_fields = ['author', 'created_at', 'updated_at', 'published_at']

    def validate_status(self, value):
        request = self.context.get('request')
        if value == Quiz.Status.PUBLISHED and not has_moderation_access(getattr(request, 'user', None)):
            raise serializers.ValidationError(
                "Seuls les modérateurs et administrateurs peuvent publier un quiz."
            )
        return value

    def create(self, validated_data):
        questions_data = validated_data.pop('questions', [])
        quiz = Quiz.objects.create(**validated_data)
        self._save_questions(quiz, questions_data)
        return quiz

    def update(self, instance, validated_data):
        questions_data = validated_data.pop('questions', None)
        instance = super().update(instance, validated_data)
        if questions_data is not None:
            instance.questions.all().delete()
            self._save_questions(instance, questions_data)
        return instance

    def _save_questions(self, quiz, questions_data):
        for question_data in questions_data:
            choices_data = question_data.pop('choices', [])
            question = QuizQuestion.objects.create(quiz=quiz, **question_data)
            for choice_data in choices_data:
                AnswerChoice.objects.create(question=question, **choice_data)


class QuizAttemptAnswerInputSerializer(serializers.Serializer):
    question_id = serializers.IntegerField()
    selected_choice_ids = serializers.ListField(
        child=serializers.IntegerField(), allow_empty=False
    )


class QuizAttemptCreateSerializer(serializers.Serializer):
    answers = QuizAttemptAnswerInputSerializer(many=True)

    def validate_answers(self, value):
        question_ids = [item['question_id'] for item in value]
        if len(question_ids) != len(set(question_ids)):
            raise serializers.ValidationError("Une question ne peut être répondue qu'une seule fois par tentative.")
        return value


class QuizAnswerSerializer(serializers.ModelSerializer):
    selected_choice_ids = serializers.SerializerMethodField()
    explanation = serializers.CharField(source='question.explanation', read_only=True)

    class Meta:
        model = QuizAnswer
        fields = ['question', 'selected_choice_ids', 'is_correct', 'earned_points', 'explanation']

    def get_selected_choice_ids(self, obj):
        return list(obj.selected_choices.values_list('id', flat=True))


class QuizAttemptSerializer(serializers.ModelSerializer):
    answers = QuizAnswerSerializer(many=True, read_only=True)
    percentage = serializers.FloatField(read_only=True)

    class Meta:
        model = QuizAttempt
        fields = ['id', 'quiz', 'user', 'score', 'max_score', 'percentage', 'created_at', 'answers']
        read_only_fields = fields
