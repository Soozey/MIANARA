from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q, Count
from .models import Classe, Matiere, Programme, Ressource, Orientation, Bourse
from .serializers import (
    ClasseSerializer, ClasseListSerializer,
    MatiereSerializer,
    ProgrammeSerializer, ProgrammeListSerializer,
    RessourceSerializer, RessourceListSerializer,
    OrientationSerializer, OrientationListSerializer,
    BourseSerializer, BourseListSerializer
)


class ClasseViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour les classes
    Permet de lister, créer, modifier et supprimer des classes
    """
    queryset = Classe.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['niveau', 'serie']
    search_fields = ['nom', 'description']
    ordering_fields = ['ordre', 'nom']
    ordering = ['ordre']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ClasseListSerializer
        return ClasseSerializer
    
    @action(detail=False, methods=['get'])
    def par_niveau(self, request):
        """Retourne les classes groupées par niveau"""
        classes_par_niveau = {}
        for niveau in ['PRIMAIRE', 'COLLEGE', 'LYCEE']:
            classes = Classe.objects.filter(niveau=niveau)
            classes_par_niveau[niveau] = ClasseListSerializer(classes, many=True).data
        return Response(classes_par_niveau)


class MatiereViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour les matières
    """
    queryset = Matiere.objects.all()
    serializer_class = MatiereSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nom', 'code']
    ordering_fields = ['nom', 'code']
    ordering = ['nom']


class ProgrammeViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour les programmes scolaires
    Avec recherche full-text et filtres avancés
    """
    queryset = Programme.objects.select_related('classe', 'matiere').prefetch_related('ressources')
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['classe', 'matiere', 'trimestre']
    search_fields = ['titre_chapitre', 'objectifs', 'competences']
    ordering_fields = ['ordre', 'created_at']
    ordering = ['classe__ordre', 'matiere__nom', 'ordre']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProgrammeListSerializer
        return ProgrammeSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filtre par nom de classe (ex: "3ème")
        classe_nom = self.request.query_params.get('classe_nom', None)
        if classe_nom:
            queryset = queryset.filter(classe__nom__icontains=classe_nom)
        
        # Filtre par code matière (ex: "MATH")
        matiere_code = self.request.query_params.get('matiere_code', None)
        if matiere_code:
            queryset = queryset.filter(matiere__code__iexact=matiere_code)
        
        # Filtre par série (ex: "S")
        serie = self.request.query_params.get('serie', None)
        if serie:
            queryset = queryset.filter(classe__serie__iexact=serie)
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def recherche_globale(self, request):
        """
        Recherche full-text dans les programmes
        Paramètre: ?q=mot-clé
        """
        query = request.query_params.get('q', '')
        if not query:
            return Response({'results': []})
        
        # Recherche dans titre, objectifs, compétences
        programmes = Programme.objects.filter(
            Q(titre_chapitre__icontains=query) |
            Q(objectifs__icontains=query) |
            Q(competences__icontains=query) |
            Q(classe__nom__icontains=query) |
            Q(matiere__nom__icontains=query)
        ).select_related('classe', 'matiere')[:20]
        
        serializer = ProgrammeListSerializer(programmes, many=True)
        return Response({'results': serializer.data, 'count': len(serializer.data)})
    
    @action(detail=True, methods=['get'])
    def ressources(self, request, pk=None):
        """Retourne toutes les ressources d'un programme"""
        programme = self.get_object()
        ressources = programme.ressources.all()
        serializer = RessourceSerializer(ressources, many=True)
        return Response(serializer.data)


class RessourceViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour les ressources pédagogiques
    """
    queryset = Ressource.objects.select_related('programme', 'programme__classe', 'programme__matiere')
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['type_contenu', 'programme']
    search_fields = ['titre', 'description', 'tags', 'auteur']
    ordering_fields = ['created_at', 'titre']
    ordering = ['-created_at']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return RessourceListSerializer
        return RessourceSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filtre par tags
        tags = self.request.query_params.get('tags', None)
        if tags:
            tag_list = tags.split(',')
            for tag in tag_list:
                queryset = queryset.filter(tags__contains=[tag.strip()])
        
        return queryset


class OrientationViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour les orientations et métiers
    """
    queryset = Orientation.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['filiere', 'niveau_etudes']
    search_fields = ['titre', 'description', 'debouches', 'competences_requises']
    ordering_fields = ['titre', 'created_at']
    ordering = ['titre']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return OrientationListSerializer
        return OrientationSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filtre par série recommandée
        serie = self.request.query_params.get('serie', None)
        if serie:
            queryset = queryset.filter(series_recommandees__contains=[serie])
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def par_filiere(self, request):
        """Retourne les orientations groupées par filière"""
        filieres = Orientation.objects.values_list('filiere', flat=True).distinct()
        orientations_par_filiere = {}
        for filiere in filieres:
            orientations = Orientation.objects.filter(filiere=filiere)
            orientations_par_filiere[filiere] = OrientationListSerializer(orientations, many=True).data
        return Response(orientations_par_filiere)


class BourseViewSet(viewsets.ModelViewSet):
    """
    ViewSet pour les bourses et aides
    """
    queryset = Bourse.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['organisme', 'est_active']
    search_fields = ['titre', 'description', 'conditions', 'organisme']
    ordering_fields = ['deadline', 'created_at', 'titre']
    ordering = ['-est_active', 'deadline']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return BourseListSerializer
        return BourseSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filtre par niveau concerné
        niveau = self.request.query_params.get('niveau', None)
        if niveau:
            queryset = queryset.filter(niveaux_concernes__contains=[niveau])
        
        # Filtre pour n'afficher que les bourses actives
        actives_seulement = self.request.query_params.get('actives', None)
        if actives_seulement == 'true':
            queryset = queryset.filter(est_active=True)
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def actives(self, request):
        """Retourne uniquement les bourses actives et non expirées"""
        from django.utils import timezone
        bourses = Bourse.objects.filter(
            est_active=True
        ).filter(
            Q(deadline__isnull=True) | Q(deadline__gte=timezone.now().date())
        )
        serializer = BourseSerializer(bourses, many=True)
        return Response(serializer.data)
