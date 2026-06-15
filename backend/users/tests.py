from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import User


class UserRegistrationTests(APITestCase):
    def test_registration_cannot_self_assign_privileged_role(self):
        response = self.client.post(
            reverse('auth_register'),
            {
                'username': 'newuser',
                'email': 'newuser@example.com',
                'password': 'SafePassword123!',
                'role': User.Role.ADMIN,
            },
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        user = User.objects.get(username='newuser')
        self.assertEqual(user.role, User.Role.STUDENT)
        self.assertNotEqual(user.role, User.Role.ADMIN)
