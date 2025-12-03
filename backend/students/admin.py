from django.contrib import admin
from .models import Classe, Matiere, Programme, Ressource, Orientation, Bourse


class RessourceInline(admin.TabularInline):
    """Inline pour afficher les ressources dans un programme"""
    model = Ressource
    extra = 1
    fields = ['titre', 'type_contenu', 'url_fichier', 'tags']


@admin.register(Classe)
class ClasseAdmin(admin.ModelAdmin):
    """Administration des classes"""
    list_display = ['nom', 'niveau', 'serie', 'ordre', 'created_at']
    list_filter = ['niveau', 'serie']
    search_fields = ['nom', 'description']
    ordering = ['ordre']


@admin.register(Matiere)
class MatiereAdmin(admin.ModelAdmin):
    """Administration des matières"""
    list_display = ['nom', 'code', 'icone', 'couleur']
    search_fields = ['nom', 'code']
    ordering = ['nom']


@admin.register(Programme)
class ProgrammeAdmin(admin.ModelAdmin):
    """Administration des programmes"""
    list_display = ['titre_chapitre', 'classe', 'matiere', 'trimestre', 'ordre']
    list_filter = ['classe__niveau', 'matiere', 'trimestre']
    search_fields = ['titre_chapitre', 'objectifs', 'competences']
    ordering = ['classe__ordre', 'matiere__nom', 'ordre']
    inlines = [RessourceInline]
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('classe', 'matiere', 'titre_chapitre')
        }),
        ('Contenu pédagogique', {
            'fields': ('objectifs', 'competences', 'duree_estimee')
        }),
        ('Organisation', {
            'fields': ('ordre', 'trimestre')
        }),
    )


@admin.register(Ressource)
class RessourceAdmin(admin.ModelAdmin):
    """Administration des ressources"""
    list_display = ['titre', 'programme', 'type_contenu', 'auteur', 'created_at']
    list_filter = ['type_contenu', 'programme__matiere', 'created_at']
    search_fields = ['titre', 'description', 'auteur', 'tags']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('programme', 'titre', 'description', 'type_contenu')
        }),
        ('Contenu', {
            'fields': ('contenu', 'url_fichier', 'fichier')
        }),
        ('Métadonnées', {
            'fields': ('tags', 'auteur', 'source')
        }),
    )


@admin.register(Orientation)
class OrientationAdmin(admin.ModelAdmin):
    """Administration des orientations"""
    list_display = ['titre', 'filiere', 'niveau_etudes']
    list_filter = ['filiere', 'niveau_etudes']
    search_fields = ['titre', 'description', 'debouches']
    ordering = ['titre']
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('titre', 'description', 'filiere', 'series_recommandees')
        }),
        ('Détails', {
            'fields': ('debouches', 'competences_requises', 'niveau_etudes')
        }),
        ('Informations complémentaires', {
            'fields': ('salaire_moyen', 'perspectives')
        }),
    )


@admin.register(Bourse)
class BourseAdmin(admin.ModelAdmin):
    """Administration des bourses"""
    list_display = ['titre', 'organisme', 'montant', 'deadline', 'est_active']
    list_filter = ['est_active', 'organisme', 'deadline']
    search_fields = ['titre', 'description', 'organisme']
    ordering = ['-est_active', 'deadline']
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('titre', 'organisme', 'description', 'est_active')
        }),
        ('Éligibilité', {
            'fields': ('conditions', 'niveaux_concernes', 'documents_requis')
        }),
        ('Détails financiers', {
            'fields': ('montant', 'deadline')
        }),
        ('Contact et candidature', {
            'fields': ('url_candidature', 'contact')
        }),
    )
    
    actions = ['activer_bourses', 'desactiver_bourses']
    
    def activer_bourses(self, request, queryset):
        """Action pour activer plusieurs bourses"""
        queryset.update(est_active=True)
        self.message_user(request, f"{queryset.count()} bourse(s) activée(s).")
    activer_bourses.short_description = "Activer les bourses sélectionnées"
    
    def desactiver_bourses(self, request, queryset):
        """Action pour désactiver plusieurs bourses"""
        queryset.update(est_active=False)
        self.message_user(request, f"{queryset.count()} bourse(s) désactivée(s).")
    desactiver_bourses.short_description = "Désactiver les bourses sélectionnées"
