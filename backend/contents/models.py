from django.db import models
from django.conf import settings
from ckeditor.fields import RichTextField

class Content(models.Model):
    class FileType(models.TextChoices):
        VIDEO = 'VIDEO', 'Video'
        AUDIO = 'AUDIO', 'Audio'
        TEXT = 'TEXT', 'Text/PDF'

    class Status(models.TextChoices):
        DRAFT = 'DRAFT', 'Brouillon'
        PENDING = 'PENDING', 'En attente de validation'
        PUBLISHED = 'PUBLISHED', 'Publié'

    class Category(models.TextChoices):
        LANGUE = 'LANGUE', 'Formation linguistique'
        SCOLAIRE = 'SCOLAIRE', 'Éducation scolaire'
        ORIENTATION = 'ORIENTATION', 'Orientation professionnelle'
        CANDIDATURE = 'CANDIDATURE', 'Techniques de candidature'
        ENTREPRENEURIAT = 'ENTREPRENEURIAT', 'Entrepreneuriat & Gestion'
        PRO = 'PRO', 'Formation professionnelle'
        SANTE = 'SANTE', 'Santé & Hygiène'
        PERSO = 'PERSO', 'Développement personnel'
        CITOYEN = 'CITOYEN', 'Vie Citoyenne'
        SOCIAL = 'SOCIAL', 'Sensibilisation Sociale'
        ECOLOGIE = 'ECOLOGIE', 'Environnement & Écologie'
        SECURITE = 'SECURITE', 'Sécurité (Globale)'
        FINANCE = 'FINANCE', 'Finances personnelles'
        ECONOMIE = 'ECONOMIE', 'Économie & Industrie'
        AUTRE = 'AUTRE', 'Autre'

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, help_text="Courte description pour les cartes.")
    body = RichTextField(blank=True, help_text="Contenu complet de l'article.")
    category = models.CharField(max_length=20, choices=Category.choices, default=Category.AUTRE)
    status = models.CharField(max_length=10, choices=Status.choices, default=Status.DRAFT)
    
    file_type = models.CharField(max_length=10, choices=FileType.choices)
    file_url = models.FileField(upload_to='contents/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='contents')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_premium = models.BooleanField(default=False, help_text="Is this content for premium users only?")

    level = models.CharField(max_length=100, blank=True, help_text="Niveau cible (ex: Débutant, Lycée...)")
    quiz = models.JSONField(default=list, blank=True, help_text="Liste des questions du quiz au format JSON")

    # Monetization & Legal
    is_monetized = models.BooleanField(default=False, help_text="Le créateur souhaite monétiser ce contenu")
    license_accepted = models.BooleanField(default=False, help_text="Le créateur a accepté la licence de distribution")

    def __str__(self):
        return self.title

class Question(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE, related_name='questions')
    type = models.CharField(max_length=50, help_text="Type de question (ex: Grammaire, Vocabulaire)")
    prompt = models.TextField(help_text="L'énoncé de la question")
    answer = models.TextField(help_text="La réponse attendue")

    def __str__(self):
        return f"{self.type} - {self.content.title}"
