from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class NiveauScolaire(models.TextChoices):
    """Niveaux du système éducatif malgache"""
    PRIMAIRE = 'PRIMAIRE', 'Primaire'
    COLLEGE = 'COLLEGE', 'Collège'
    LYCEE = 'LYCEE', 'Lycée'


class TypeContenu(models.TextChoices):
    """Types de contenus pédagogiques"""
    TEXTE = 'TEXTE', 'Texte'
    PDF = 'PDF', 'PDF'
    VIDEO = 'VIDEO', 'Vidéo'
    QUIZ = 'QUIZ', 'Quiz'
    AUDIO = 'AUDIO', 'Audio'
    LIEN = 'LIEN', 'Lien externe'


class Classe(models.Model):
    """
    Modèle représentant une classe du système éducatif malgache
    De la 11ème au Terminale (avec séries A, C, D, L, OSE, S)
    """
    nom = models.CharField(max_length=50, unique=True, help_text="Ex: 3ème, Terminale S")
    niveau = models.CharField(
        max_length=20,
        choices=NiveauScolaire.choices,
        help_text="Niveau scolaire"
    )
    serie = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        help_text="Série pour le lycée (A, C, D, L, OSE, S)"
    )
    ordre = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(22)],
        help_text="Ordre de la classe (1=11ème, 22=Terminale S)"
    )
    description = models.TextField(blank=True, help_text="Description de la classe")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['ordre']
        verbose_name = "Classe"
        verbose_name_plural = "Classes"

    def __str__(self):
        return self.nom


class Matiere(models.Model):
    """
    Modèle représentant une matière scolaire
    """
    nom = models.CharField(max_length=100, unique=True, help_text="Ex: Mathématiques")
    code = models.CharField(max_length=20, unique=True, help_text="Ex: MATH")
    icone = models.CharField(
        max_length=50,
        default='📚',
        help_text="Emoji ou nom d'icône"
    )
    couleur = models.CharField(
        max_length=7,
        default='#3B82F6',
        help_text="Code couleur hexadécimal"
    )
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['nom']
        verbose_name = "Matière"
        verbose_name_plural = "Matières"

    def __str__(self):
        return f"{self.icone} {self.nom}"


class Programme(models.Model):
    """
    Modèle représentant un programme scolaire (chapitre)
    """
    classe = models.ForeignKey(
        Classe,
        on_delete=models.CASCADE,
        related_name='programmes',
        help_text="Classe concernée"
    )
    matiere = models.ForeignKey(
        Matiere,
        on_delete=models.CASCADE,
        related_name='programmes',
        help_text="Matière concernée"
    )
    titre_chapitre = models.CharField(max_length=200, help_text="Titre du chapitre")
    objectifs = models.TextField(help_text="Objectifs pédagogiques")
    competences = models.TextField(help_text="Compétences à acquérir")
    ordre = models.IntegerField(
        default=1,
        validators=[MinValueValidator(1)],
        help_text="Ordre du chapitre dans le programme"
    )
    trimestre = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(3)],
        default=1,
        help_text="Trimestre (1, 2 ou 3)"
    )
    duree_estimee = models.IntegerField(
        null=True,
        blank=True,
        help_text="Durée estimée en heures"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['classe__ordre', 'matiere__nom', 'ordre']
        verbose_name = "Programme"
        verbose_name_plural = "Programmes"
        unique_together = ['classe', 'matiere', 'ordre']

    def __str__(self):
        return f"{self.classe.nom} - {self.matiere.nom} - {self.titre_chapitre}"


class Ressource(models.Model):
    """
    Modèle représentant une ressource pédagogique
    """
    programme = models.ForeignKey(
        Programme,
        on_delete=models.CASCADE,
        related_name='ressources',
        help_text="Programme associé"
    )
    titre = models.CharField(max_length=200, help_text="Titre de la ressource")
    description = models.TextField(help_text="Description de la ressource")
    type_contenu = models.CharField(
        max_length=20,
        choices=TypeContenu.choices,
        default=TypeContenu.TEXTE,
        help_text="Type de contenu"
    )
    contenu = models.TextField(
        blank=True,
        help_text="Contenu textuel (pour type TEXTE)"
    )
    url_fichier = models.URLField(
        blank=True,
        null=True,
        help_text="URL du fichier (PDF, vidéo, etc.)"
    )
    fichier = models.FileField(
        upload_to='ressources/%Y/%m/',
        blank=True,
        null=True,
        help_text="Fichier uploadé"
    )
    tags = models.JSONField(
        default=list,
        blank=True,
        help_text="Tags pour la recherche"
    )
    auteur = models.CharField(
        max_length=100,
        blank=True,
        help_text="Auteur de la ressource"
    )
    source = models.CharField(
        max_length=200,
        blank=True,
        help_text="Source de la ressource"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Ressource"
        verbose_name_plural = "Ressources"

    def __str__(self):
        return f"{self.titre} ({self.type_contenu})"


class Orientation(models.Model):
    """
    Modèle pour les métiers et orientations professionnelles
    """
    titre = models.CharField(max_length=200, help_text="Nom du métier/carrière")
    description = models.TextField(help_text="Description du métier")
    filiere = models.CharField(
        max_length=100,
        help_text="Filière recommandée (ex: Scientifique, Littéraire)"
    )
    series_recommandees = models.JSONField(
        default=list,
        help_text="Séries recommandées (ex: ['S', 'C', 'D'])"
    )
    debouches = models.TextField(help_text="Débouchés professionnels")
    competences_requises = models.TextField(help_text="Compétences nécessaires")
    niveau_etudes = models.CharField(
        max_length=100,
        help_text="Niveau d'études requis (ex: Bac+3, Bac+5)"
    )
    salaire_moyen = models.CharField(
        max_length=100,
        blank=True,
        help_text="Salaire moyen estimé"
    )
    perspectives = models.TextField(
        blank=True,
        help_text="Perspectives d'évolution"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['titre']
        verbose_name = "Orientation"
        verbose_name_plural = "Orientations"

    def __str__(self):
        return self.titre


class Bourse(models.Model):
    """
    Modèle pour les bourses et aides financières
    """
    titre = models.CharField(max_length=200, help_text="Nom de la bourse")
    organisme = models.CharField(max_length=200, help_text="Organisme proposant la bourse")
    description = models.TextField(help_text="Description de la bourse")
    conditions = models.TextField(help_text="Conditions d'éligibilité")
    niveaux_concernes = models.JSONField(
        default=list,
        help_text="Niveaux concernés (ex: ['COLLEGE', 'LYCEE'])"
    )
    montant = models.CharField(
        max_length=100,
        blank=True,
        help_text="Montant de la bourse"
    )
    deadline = models.DateField(
        null=True,
        blank=True,
        help_text="Date limite de candidature"
    )
    url_candidature = models.URLField(
        blank=True,
        help_text="Lien pour candidater"
    )
    documents_requis = models.TextField(
        blank=True,
        help_text="Documents nécessaires"
    )
    contact = models.TextField(
        blank=True,
        help_text="Informations de contact"
    )
    est_active = models.BooleanField(
        default=True,
        help_text="Bourse actuellement disponible"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-est_active', 'deadline']
        verbose_name = "Bourse"
        verbose_name_plural = "Bourses"

    def __str__(self):
        return f"{self.titre} - {self.organisme}"
