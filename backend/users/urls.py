from django.urls import path
from .views import ProfileView, RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('me/', ProfileView.as_view(), name='user_profile'),
]
