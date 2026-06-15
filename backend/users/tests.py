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

    def test_profile_requires_authentication(self):
        response = self.client.get(reverse('user_profile'))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_profile_returns_role_flags_for_authenticated_user(self):
        user = User.objects.create_user(
            username='moderator', password='testpassword', role=User.Role.MODERATOR
        )
        self.client.force_authenticate(user=user)
        response = self.client.get(reverse('user_profile'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['role'], User.Role.MODERATOR)
        self.assertTrue(response.data['is_moderator'])
        self.assertTrue(response.data['is_creator'])
        self.assertFalse(response.data['is_admin'])

    def test_token_response_includes_user_profile_and_role_claims(self):
        User.objects.create_user(
            username='creator', password='testpassword', role=User.Role.CREATOR
        )
        response = self.client.post(
            reverse('token_obtain_pair'),
            {'username': 'creator', 'password': 'testpassword'},
            format='json',
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertEqual(response.data['user']['role'], User.Role.CREATOR)
        self.assertTrue(response.data['user']['is_creator'])
