from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User
from .models import Content

from django.core.files.uploadedfile import SimpleUploadedFile

class ContentTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client.force_authenticate(user=self.user)
        file_content = b"file_content"
        self.test_file = SimpleUploadedFile("test.txt", file_content, content_type="text/plain")
        self.content_data = {
            'title': 'Test Content',
            'description': 'Test Description',
            'file_type': 'TEXT',
            'file_url': self.test_file
        }

    def test_create_content(self):
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
