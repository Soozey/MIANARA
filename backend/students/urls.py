from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (
    ClasseViewSet,
    MatiereViewSet,
    ProgrammeViewSet,
    RessourceViewSet,
    OrientationViewSet,
    BourseViewSet
)

# Création du router
router = DefaultRouter()
router.register(r'classes', ClasseViewSet, basename='classe')
router.register(r'matieres', MatiereViewSet, basename='matiere')
router.register(r'programmes', ProgrammeViewSet, basename='programme')
router.register(r'ressources', RessourceViewSet, basename='ressource')
router.register(r'orientations', OrientationViewSet, basename='orientation')
router.register(r'bourses', BourseViewSet, basename='bourse')

urlpatterns = [
    path('', include(router.urls)),
]
