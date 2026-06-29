from django.db import transaction
from rest_framework import generics, status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from config.permissions import IsContentActorOrReadOnly, has_moderation_access
from .models import AnswerChoice, Content, Quiz, QuizAnswer, QuizAttempt, QuizQuestion
from .serializers import ContentSerializer, QuizAttemptCreateSerializer, QuizAttemptSerializer, QuizSerializer


class ContentList(generics.ListCreateAPIView):
    serializer_class = ContentSerializer
    permission_classes = [IsContentActorOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        queryset = Content.objects.select_related('author').prefetch_related('questions')
        if has_moderation_access(user):
            return queryset
        if user and user.is_authenticated:
            return queryset.filter(status=Content.Status.PUBLISHED) | queryset.filter(author=user)
        return queryset.filter(status=Content.Status.PUBLISHED)

    def perform_create(self, serializer):
        status_value = serializer.validated_data.get('status')
        if status_value != Content.Status.PUBLISHED or not has_moderation_access(self.request.user):
            status_value = Content.Status.PENDING
        serializer.save(author=self.request.user, status=status_value)


class ContentDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContentSerializer
    permission_classes = [IsContentActorOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        queryset = Content.objects.select_related('author').prefetch_related('questions')
        if has_moderation_access(user):
            return queryset
        if user and user.is_authenticated:
            return queryset.filter(status=Content.Status.PUBLISHED) | queryset.filter(author=user)
        return queryset.filter(status=Content.Status.PUBLISHED)


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    permission_classes = [IsContentActorOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        queryset = Quiz.objects.select_related('author', 'content').prefetch_related('questions__choices')
        if has_moderation_access(user):
            return queryset
        if user and user.is_authenticated:
            return queryset.filter(status=Quiz.Status.PUBLISHED) | queryset.filter(author=user)
        return queryset.filter(status=Quiz.Status.PUBLISHED)

    def perform_create(self, serializer):
        status_value = serializer.validated_data.get('status')
        if status_value != Quiz.Status.PUBLISHED or not has_moderation_access(self.request.user):
            status_value = Quiz.Status.PENDING
        serializer.save(author=self.request.user, status=status_value)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def attempts(self, request, pk=None):
        quiz = self.get_object()
        if quiz.status != Quiz.Status.PUBLISHED and not has_moderation_access(request.user):
            return Response(
                {'detail': "Ce quiz n'est pas disponible."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = QuizAttemptCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        answers_payload = serializer.validated_data['answers']
        questions = {
            question.id: question
            for question in QuizQuestion.objects.filter(quiz=quiz).prefetch_related('choices')
        }

        with transaction.atomic():
            attempt = QuizAttempt.objects.create(
                quiz=quiz,
                user=request.user,
                max_score=sum(question.points for question in questions.values()),
            )
            total_score = 0
            for answer_payload in answers_payload:
                question = questions.get(answer_payload['question_id'])
                if question is None:
                    transaction.set_rollback(True)
                    return Response(
                        {'detail': "Une réponse concerne une question qui n'appartient pas à ce quiz."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                selected_ids = set(answer_payload['selected_choice_ids'])
                valid_ids = set(question.choices.values_list('id', flat=True))
                if not selected_ids.issubset(valid_ids):
                    transaction.set_rollback(True)
                    return Response(
                        {'detail': "Une réponse contient un choix invalide pour ce quiz."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                if question.type == QuizQuestion.QuestionType.SINGLE_CHOICE and len(selected_ids) != 1:
                    transaction.set_rollback(True)
                    return Response(
                        {'detail': "Une question à choix unique exige une seule réponse."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                correct_ids = set(question.choices.filter(is_correct=True).values_list('id', flat=True))
                is_correct = selected_ids == correct_ids
                earned_points = question.points if is_correct else 0
                total_score += earned_points
                answer = QuizAnswer.objects.create(
                    attempt=attempt,
                    question=question,
                    is_correct=is_correct,
                    earned_points=earned_points,
                )
                answer.selected_choices.set(AnswerChoice.objects.filter(id__in=selected_ids))

            attempt.score = total_score
            attempt.save(update_fields=['score'])

        return Response(QuizAttemptSerializer(attempt).data, status=status.HTTP_201_CREATED)
