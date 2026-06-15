from django.urls import reverse
from django.test import override_settings
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User
from .models import Content

from django.core.files.uploadedfile import SimpleUploadedFile
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
            'file_url': self.test_file
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

    def test_list_content(self):
        Content.objects.create(author=self.user, **self.content_data)
        url = reverse('content-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

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
        content = Content.objects.create(author=self.user, title='Original', file_type='TEXT')
        self.client.force_authenticate(user=other_creator)
        url = reverse('content-detail', args=[content.pk])
        response = self.client.patch(url, {'title': 'Changed'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        content.refresh_from_db()
        self.assertEqual(content.title, 'Original')
