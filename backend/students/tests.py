from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User
from .models import Classe


class StudentCatalogPermissionTests(APITestCase):
    def test_public_can_read_classes(self):
        Classe.objects.create(nom='3ème', niveau='COLLEGE', ordre=9)
        response = self.client.get(reverse('classe-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_anonymous_user_cannot_write_classes(self):
        response = self.client.post(
            reverse('classe-list'),
            {'nom': 'Terminale S', 'niveau': 'LYCEE', 'serie': 'S', 'ordre': 22},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Classe.objects.count(), 0)

    def test_admin_role_can_write_classes(self):
        admin = User.objects.create_user(
            username='admin-role', password='testpassword', role=User.Role.ADMIN
        )
        self.client.force_authenticate(user=admin)
        response = self.client.post(
            reverse('classe-list'),
            {'nom': 'Terminale S', 'niveau': 'LYCEE', 'serie': 'S', 'ordre': 22},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Classe.objects.count(), 1)
