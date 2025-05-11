from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from unittest.mock import patch, MagicMock
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from .models import CustomUser

class RegisterViewTests(APITestCase):
    def setUp(self):
        self.register_url = reverse('register')
        self.valid_payload = {
            'phone_number': '1234567890',
            'password': 'testpass123',
            'full_name': 'Test User'
        }

    def test_valid_registration(self):
        """Test registration with valid data"""
        response = self.client.post(self.register_url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)
        self.assertTrue(CustomUser.objects.filter(phone_number='1234567890').exists())

    def test_invalid_registration_missing_fields(self):
        """Test registration with missing required fields"""
        invalid_payload = {
            'phone_number': '1234567890',
            'password': 'testpass123'
        }
        response = self.client.post(self.register_url, invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_invalid_registration_duplicate_phone_number(self):
        """Test registration with existing phone number"""
        CustomUser.objects.create_user(**self.valid_payload)
        response = self.client.post(self.register_url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

class LoginViewTests(APITestCase):
    def setUp(self):
        self.login_url = reverse('login')
        self.user = CustomUser.objects.create_user(
            phone_number='1234567890',
            password='testpass123',
            full_name='Test User'
        )
        self.valid_payload = {
            'phone_number': '1234567890',
            'password': 'testpass123'
        }

    def test_valid_login(self):
        """Test login with valid credentials"""
        response = self.client.post(self.login_url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)

    def test_invalid_login_wrong_password(self):
        """Test login with wrong password"""
        invalid_payload = self.valid_payload.copy()
        invalid_payload['password'] = 'wrongpass'
        response = self.client.post(self.login_url, invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

class LogoutViewTests(APITestCase):
    def setUp(self):
        self.logout_url = reverse('logout')
        self.user = CustomUser.objects.create_user(
            phone_number='1234567890',
            password='testpass123',
            full_name='Test User'
        )
        self.refresh = RefreshToken.for_user(self.user)
        self.access = AccessToken.for_user(self.user)

        self.client.force_authenticate(user=self.user)

    def test_successful_logout(self):
        """Test successful logout with valid refresh token"""
        payload = {
            'refresh': str(self.refresh),
            }
        # print('------payload: ', payload)
        response = self.client.post(self.logout_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Successfully logged out')

    def test_logout_with_invalid_token(self):
        """Test logout attempt with invalid refresh token"""
        payload = {'refresh': 'invalid-token'}
        response = self.client.post(self.logout_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

class ProfileViewTests(APITestCase):
    def setUp(self):
        self.profile_url = reverse('profile')
        self.user = CustomUser.objects.create_user(
            phone_number='1234567890',
            password='testpass123',
            full_name='Test User'
        )

    def test_get_profile_authenticated(self):
        """Test retrieving profile for authenticated user"""
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['phone_number'], self.user.phone_number)

    def test_get_profile_unauthenticated(self):
        """Test profile access without authentication"""
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)