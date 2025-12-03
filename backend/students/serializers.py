from rest_framework import serializers
from .models import Classe, Matiere, Programme, Ressource, Orientation, Bourse


class MatiereSerializer(serializers.ModelSerializer):
    """Serializer pour les matières"""
    
    class Meta:
        model = Matiere
        fields = ['id', 'nom', 'code', 'icone', 'couleur', 'description']


class ClasseSerializer(serializers.ModelSerializer):
    """Serializer pour les classes avec matières associées"""
    matieres = serializers.SerializerMethodField()
    nombre_programmes = serializers.SerializerMethodField()
    
    class Meta:
        model = Classe
        fields = [
            'id', 'nom', 'niveau', 'serie', 'ordre', 'description',
            'matieres', 'nombre_programmes', 'created_at', 'updated_at'
        ]
    
    def get_matieres(self, obj):
        """Retourne les matières qui ont des programmes pour cette classe"""
        matieres = Matiere.objects.filter(programmes__classe=obj).distinct()
        return MatiereSerializer(matieres, many=True).data
    
    def get_nombre_programmes(self, obj):
        """Compte le nombre de programmes pour cette classe"""
        return obj.programmes.count()


class ClasseListSerializer(serializers.ModelSerializer):
    """Serializer léger pour les listes de classes"""
    
    class Meta:
        model = Classe
        fields = ['id', 'nom', 'niveau', 'serie', 'ordre']


class RessourceSerializer(serializers.ModelSerializer):
    """Serializer pour les ressources pédagogiques"""
    
    class Meta:
        model = Ressource
        fields = [
            'id', 'programme', 'titre', 'description', 'type_contenu',
            'contenu', 'url_fichier', 'fichier', 'tags', 'auteur', 'source',
            'created_at', 'updated_at'
        ]


class RessourceListSerializer(serializers.ModelSerializer):
    """Serializer léger pour les listes de ressources"""
    
    class Meta:
        model = Ressource
        fields = ['id', 'titre', 'type_contenu', 'tags', 'created_at']


class ProgrammeSerializer(serializers.ModelSerializer):
    """Serializer complet pour les programmes avec ressources"""
    classe = ClasseListSerializer(read_only=True)
    matiere = MatiereSerializer(read_only=True)
    ressources = RessourceListSerializer(many=True, read_only=True)
    nombre_ressources = serializers.SerializerMethodField()
    
    # Pour la création/modification
    classe_id = serializers.PrimaryKeyRelatedField(
        queryset=Classe.objects.all(),
        source='classe',
        write_only=True
    )
    matiere_id = serializers.PrimaryKeyRelatedField(
        queryset=Matiere.objects.all(),
        source='matiere',
        write_only=True
    )
    
    class Meta:
        model = Programme
        fields = [
            'id', 'classe', 'matiere', 'classe_id', 'matiere_id',
            'titre_chapitre', 'objectifs', 'competences', 'ordre',
            'trimestre', 'duree_estimee', 'ressources', 'nombre_ressources',
            'created_at', 'updated_at'
        ]
    
    def get_nombre_ressources(self, obj):
        """Compte le nombre de ressources pour ce programme"""
        return obj.ressources.count()


class ProgrammeListSerializer(serializers.ModelSerializer):
    """Serializer léger pour les listes de programmes"""
    classe_nom = serializers.CharField(source='classe.nom', read_only=True)
    matiere_nom = serializers.CharField(source='matiere.nom', read_only=True)
    matiere_icone = serializers.CharField(source='matiere.icone', read_only=True)
    nombre_ressources = serializers.SerializerMethodField()
    
    class Meta:
        model = Programme
        fields = [
            'id', 'classe_nom', 'matiere_nom', 'matiere_icone',
            'titre_chapitre', 'trimestre', 'nombre_ressources'
        ]
    
    def get_nombre_ressources(self, obj):
        return obj.ressources.count()


class OrientationSerializer(serializers.ModelSerializer):
    """Serializer pour les orientations et métiers"""
    
    class Meta:
        model = Orientation
        fields = [
            'id', 'titre', 'description', 'filiere', 'series_recommandees',
            'debouches', 'competences_requises', 'niveau_etudes',
            'salaire_moyen', 'perspectives', 'created_at', 'updated_at'
        ]


class OrientationListSerializer(serializers.ModelSerializer):
    """Serializer léger pour les listes d'orientations"""
    
    class Meta:
        model = Orientation
        fields = ['id', 'titre', 'filiere', 'niveau_etudes', 'series_recommandees']


class BourseSerializer(serializers.ModelSerializer):
    """Serializer pour les bourses"""
    est_expiree = serializers.SerializerMethodField()
    
    class Meta:
        model = Bourse
        fields = [
            'id', 'titre', 'organisme', 'description', 'conditions',
            'niveaux_concernes', 'montant', 'deadline', 'url_candidature',
            'documents_requis', 'contact', 'est_active', 'est_expiree',
            'created_at', 'updated_at'
        ]
    
    def get_est_expiree(self, obj):
        """Vérifie si la deadline est passée"""
        if obj.deadline:
            from django.utils import timezone
            return obj.deadline < timezone.now().date()
        return False


class BourseListSerializer(serializers.ModelSerializer):
    """Serializer léger pour les listes de bourses"""
    est_expiree = serializers.SerializerMethodField()
    
    class Meta:
        model = Bourse
        fields = [
            'id', 'titre', 'organisme', 'montant', 'deadline',
            'est_active', 'est_expiree'
        ]
    
    def get_est_expiree(self, obj):
        if obj.deadline:
            from django.utils import timezone
            return obj.deadline < timezone.now().date()
        return False
