from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('quizzes', views.QuizViewSet, basename='quiz')

urlpatterns = [
    path('', views.ContentList.as_view(), name='content-list'),
    path('<int:pk>/', views.ContentDetail.as_view(), name='content-detail'),
    path('', include(router.urls)),
]
