from rest_framework import serializers
from .models import Content, Question
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
        fields = ['id', 'title', 'description', 'body', 'level', 'category', 'status', 'file_type', 'file_url', 'thumbnail', 'author', 'created_at', 'is_premium', 'questions', 'quiz']

    def create(self, validated_data):
        questions_data = validated_data.pop('questions', [])
        content = Content.objects.create(**validated_data)
        for question_data in questions_data:
            Question.objects.create(content=content, **question_data)
        return content
