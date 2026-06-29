from pathlib import Path

from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.management import call_command
from django.test import override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User
from .models import AnswerChoice, Content, Quiz, QuizQuestion

import shutil
import tempfile


TEST_MEDIA_ROOT = tempfile.mkdtemp()


@override_settings(MEDIA_ROOT=TEST_MEDIA_ROOT)
class ContentTests(APITestCase):
    @classmethod
    def tearDownClass(cls):
        super().tearDownClass()
        shutil.rmtree(TEST_MEDIA_ROOT, ignore_errors=True)

    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser', password='testpassword', role=User.Role.CREATOR
        )
        file_content = b"file_content"
        self.test_file = SimpleUploadedFile("test.txt", file_content, content_type="text/plain")
        self.content_data = {
            'title': 'Test Content',
            'description': 'Test Description',
            'file_type': 'TEXT',
            'file_url': self.test_file,
            'language': 'fr',
            'subject': 'Français',
            'level': 'Collège',
        }

    def test_create_content(self):
        self.client.force_authenticate(user=self.user)
        url = reverse('content-list')
        response = self.client.post(url, self.content_data, format='multipart')
        if response.status_code != status.HTTP_201_CREATED:
            print(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Content.objects.count(), 1)
        self.assertEqual(Content.objects.get().title, 'Test Content')

    def test_creator_content_is_pending_by_default(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.post(reverse('content-list'), self.content_data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Content.objects.get().status, Content.Status.PENDING)

    def test_creator_cannot_request_direct_publication_on_create(self):
        self.client.force_authenticate(user=self.user)
        payload = {**self.content_data, 'status': Content.Status.PUBLISHED}
        response = self.client.post(reverse('content-list'), payload, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Content.objects.count(), 0)

    def test_moderator_can_publish_content(self):
        moderator = User.objects.create_user(
            username='moderator', password='testpassword', role=User.Role.MODERATOR
        )
        content = Content.objects.create(
            author=self.user, title='Pending', file_type='TEXT', status=Content.Status.PENDING
        )
        self.client.force_authenticate(user=moderator)
        response = self.client.patch(
            reverse('content-detail', args=[content.pk]),
            {'status': Content.Status.PUBLISHED},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        content.refresh_from_db()
        self.assertEqual(content.status, Content.Status.PUBLISHED)
        self.assertIsNotNone(content.published_at)

    def test_moderator_can_refuse_with_reason(self):
        moderator = User.objects.create_user(
            username='moderator2', password='testpassword', role=User.Role.MODERATOR
        )
        content = Content.objects.create(
            author=self.user, title='Pending', file_type='TEXT', status=Content.Status.PENDING
        )
        self.client.force_authenticate(user=moderator)
        response = self.client.patch(
            reverse('content-detail', args=[content.pk]),
            {'status': Content.Status.REFUSED, 'moderation_reason': 'Source à vérifier.'},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        content.refresh_from_db()
        self.assertEqual(content.status, Content.Status.REFUSED)

    def test_refuse_requires_reason(self):
        moderator = User.objects.create_user(
            username='moderator3', password='testpassword', role=User.Role.MODERATOR
        )
        content = Content.objects.create(
            author=self.user, title='Pending', file_type='TEXT', status=Content.Status.PENDING
        )
        self.client.force_authenticate(user=moderator)
        response = self.client.patch(
            reverse('content-detail', args=[content.pk]),
            {'status': Content.Status.REFUSED},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_creator_cannot_publish_existing_content(self):
        content = Content.objects.create(
            author=self.user, title='Pending', file_type='TEXT', status=Content.Status.PENDING
        )
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            reverse('content-detail', args=[content.pk]),
            {'status': Content.Status.PUBLISHED},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        content.refresh_from_db()
        self.assertEqual(content.status, Content.Status.PENDING)

    def test_anonymous_user_can_list_only_published_content(self):
        Content.objects.create(author=self.user, title='Draft', file_type='TEXT', status=Content.Status.DRAFT)
        Content.objects.create(author=self.user, title='Published', file_type='TEXT', status=Content.Status.PUBLISHED)
        response = self.client.get(reverse('content-list'), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'Published')

    def test_anonymous_user_cannot_read_unpublished_detail(self):
        content = Content.objects.create(author=self.user, title='Draft', file_type='TEXT', status=Content.Status.DRAFT)
        response = self.client.get(reverse('content-detail', args=[content.pk]), format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_creator_can_see_own_unpublished_content(self):
        content = Content.objects.create(author=self.user, title='Draft', file_type='TEXT', status=Content.Status.DRAFT)
        self.client.force_authenticate(user=self.user)
        response = self.client.get(reverse('content-detail', args=[content.pk]), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Draft')

    def test_anonymous_user_cannot_create_content(self):
        url = reverse('content-list')
        response = self.client.post(url, self.content_data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Content.objects.count(), 0)

    def test_student_user_cannot_create_content(self):
        student = User.objects.create_user(
            username='student', password='testpassword', role=User.Role.STUDENT
        )
        self.client.force_authenticate(user=student)
        url = reverse('content-list')
        response = self.client.post(url, self.content_data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(Content.objects.count(), 0)

    def test_non_author_cannot_update_content(self):
        other_creator = User.objects.create_user(
            username='othercreator', password='testpassword', role=User.Role.CREATOR
        )
        content = Content.objects.create(
            author=self.user,
            title='Original',
            file_type='TEXT',
            status=Content.Status.PUBLISHED,
        )
        self.client.force_authenticate(user=other_creator)
        url = reverse('content-detail', args=[content.pk])
        response = self.client.patch(url, {'title': 'Changed'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        content.refresh_from_db()
        self.assertEqual(content.title, 'Original')


class QuizReadinessTests(APITestCase):
    def setUp(self):
        self.creator = User.objects.create_user(
            username='quizcreator', password='testpassword', role=User.Role.CREATOR
        )
        self.moderator = User.objects.create_user(
            username='quizmoderator', password='testpassword', role=User.Role.MODERATOR
        )
        self.student = User.objects.create_user(
            username='quizstudent', password='testpassword', role=User.Role.STUDENT
        )
        self.content = Content.objects.create(
            author=self.creator,
            title='Article publié',
            file_type='TEXT',
            status=Content.Status.PUBLISHED,
            subject='Mathématiques',
            level='Collège',
        )
        self.quiz = Quiz.objects.create(
            author=self.creator,
            content=self.content,
            title='Quiz minimal',
            status=Quiz.Status.PUBLISHED,
            subject='Mathématiques',
            level='Collège',
        )
        self.question = QuizQuestion.objects.create(
            quiz=self.quiz,
            type=QuizQuestion.QuestionType.SINGLE_CHOICE,
            prompt='Combien font 2 + 2 ?',
            explanation='2 + 2 = 4.',
            points=1,
        )
        self.correct = AnswerChoice.objects.create(question=self.question, text='4', is_correct=True)
        self.wrong = AnswerChoice.objects.create(question=self.question, text='5', is_correct=False)

    def test_published_quiz_visible_without_leaking_correct_answer(self):
        response = self.client.get(reverse('quiz-detail', args=[self.quiz.pk]), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        choice = response.data['questions'][0]['choices'][0]
        self.assertNotIn('is_correct', choice)
        self.assertNotIn('explanation', response.data['questions'][0])

    def test_quiz_attempt_records_score_for_authenticated_user(self):
        self.client.force_authenticate(user=self.student)
        response = self.client.post(
            reverse('quiz-attempts', args=[self.quiz.pk]),
            {'answers': [{'question_id': self.question.pk, 'selected_choice_ids': [self.correct.pk]}]},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['score'], 1)
        self.assertEqual(response.data['max_score'], 1)
        self.assertTrue(response.data['answers'][0]['is_correct'])

    def test_quiz_attempt_requires_authenticated_user(self):
        response = self.client.post(
            reverse('quiz-attempts', args=[self.quiz.pk]),
            {'answers': [{'question_id': self.question.pk, 'selected_choice_ids': [self.correct.pk]}]},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_creator_cannot_publish_quiz_directly(self):
        self.client.force_authenticate(user=self.creator)
        response = self.client.post(
            reverse('quiz-list'),
            {
                'title': 'Publication directe refusée',
                'content': self.content.pk,
                'status': Quiz.Status.PUBLISHED,
                'questions': [],
            },
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class ImportMianaraContentCommandTests(APITestCase):
    def import_example_path(self):
        return Path(__file__).resolve().parents[1] / 'import_examples' / 'content_readiness_minimal.json'

    def test_import_command_dry_run_does_not_create_content(self):
        call_command('import_mianara_content', str(self.import_example_path()), dry_run=True)
        self.assertEqual(Content.objects.count(), 0)
        self.assertEqual(Quiz.objects.count(), 0)

    def test_import_command_creates_published_pilot_content_and_quiz(self):
        call_command('import_mianara_content', str(self.import_example_path()), publish_pilot=True)
        self.assertEqual(Content.objects.count(), 1)
        self.assertEqual(Quiz.objects.count(), 1)
        content = Content.objects.get()
        quiz = Quiz.objects.get()
        self.assertEqual(content.status, Content.Status.DRAFT)
        self.assertEqual(content.language, Content.Language.FR)
        self.assertEqual(quiz.questions.count(), 1)
        self.assertEqual(quiz.questions.first().choices.count(), 2)
