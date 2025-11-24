from django.urls import path
from . import views

urlpatterns = [
    path('', views.ContentList.as_view(), name='content-list'),
    path('<int:pk>/', views.ContentDetail.as_view(), name='content-detail'),
]
