from django.db import models
from django.conf import settings
from django.utils import timezone
from django.utils.text import slugify
from ckeditor.fields import RichTextField


class Content(models.Model):
    class FileType(models.TextChoices):
        VIDEO = 'VIDEO', 'Video'
        AUDIO = 'AUDIO', 'Audio'
        TEXT = 'TEXT', 'Text/PDF'
        PDF = 'PDF', 'PDF'

    class Status(models.TextChoices):
        DRAFT = 'DRAFT', 'Brouillon'
        PENDING = 'PENDING', 'Soumis à validation'
        SUBMITTED = 'SUBMITTED', 'Soumis à validation'
        APPROVED = 'APPROVED', 'Validé'
        REFUSED = 'REFUSED', 'Refusé'
        PUBLISHED = 'PUBLISHED', 'Publié'
        ARCHIVED = 'ARCHIVED', 'Archivé'

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

    class Language(models.TextChoices):
        FR = 'fr', 'Français'
        MG = 'mg', 'Malgache'
        BI = 'fr-mg', 'Français et malgache'

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=280, blank=True, db_index=True)
    description = models.TextField(blank=True, help_text="Courte description pour les cartes.")
    body = RichTextField(blank=True, help_text="Contenu complet de l'article.")
    category = models.CharField(max_length=20, choices=Category.choices, default=Category.AUTRE)
    status = models.CharField(max_length=12, choices=Status.choices, default=Status.DRAFT)

    file_type = models.CharField(max_length=10, choices=FileType.choices)
    file_url = models.FileField(upload_to='contents/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)

    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='contents')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True, null=True)
    is_premium = models.BooleanField(default=False, help_text="Is this content for premium users only?")

    level = models.CharField(max_length=100, blank=True, help_text="Niveau cible (ex: Débutant, Lycée...)")
    subject = models.CharField(max_length=120, blank=True, help_text="Matière ou domaine principal.")
    competency = models.CharField(max_length=180, blank=True, help_text="Compétence visée par le contenu.")
    language = models.CharField(max_length=8, choices=Language.choices, default=Language.FR)
    target_audience = models.CharField(max_length=120, blank=True, help_text="Public cible principal.")
    tags = models.JSONField(default=list, blank=True)
    moderation_reason = models.TextField(blank=True, help_text="Motif de refus ou note de modération.")
    quiz = models.JSONField(default=list, blank=True, help_text="Ancien format de quiz JSON conservé pour compatibilité")

    # Monetization & Legal
    is_monetized = models.BooleanField(default=False, help_text="Le créateur souhaite monétiser ce contenu")
    license_accepted = models.BooleanField(default=False, help_text="Le créateur a accepté la licence de distribution")

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)[:240] or 'contenu'
            slug = base_slug
            index = 2
            queryset = Content.objects.filter(slug=slug)
            if self.pk:
                queryset = queryset.exclude(pk=self.pk)
            while queryset.exists():
                slug = f"{base_slug}-{index}"
                index += 1
                queryset = Content.objects.filter(slug=slug)
                if self.pk:
                    queryset = queryset.exclude(pk=self.pk)
            self.slug = slug
        if self.status == self.Status.PUBLISHED and self.published_at is None:
            self.published_at = timezone.now()
        if self.status != self.Status.PUBLISHED:
            self.published_at = None
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Question(models.Model):
    """Ancien modèle d'exercice libre, conservé pour compatibilité frontend."""
    content = models.ForeignKey(Content, on_delete=models.CASCADE, related_name='questions')
    type = models.CharField(max_length=50, help_text="Type de question (ex: Grammaire, Vocabulaire)")
    prompt = models.TextField(help_text="L'énoncé de la question")
    answer = models.TextField(help_text="La réponse attendue")

    def __str__(self):
        return f"{self.type} - {self.content.title}"


class Quiz(models.Model):
    class Status(models.TextChoices):
        DRAFT = 'DRAFT', 'Brouillon'
        PENDING = 'PENDING', 'Soumis à validation'
        PUBLISHED = 'PUBLISHED', 'Publié'
        ARCHIVED = 'ARCHIVED', 'Archivé'

    content = models.ForeignKey(Content, on_delete=models.CASCADE, related_name='qcm_quizzes', blank=True, null=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    level = models.CharField(max_length=100, blank=True)
    subject = models.CharField(max_length=120, blank=True)
    competency = models.CharField(max_length=180, blank=True)
    language = models.CharField(max_length=8, choices=Content.Language.choices, default=Content.Language.FR)
    status = models.CharField(max_length=10, choices=Status.choices, default=Status.DRAFT)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='quizzes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.status == self.Status.PUBLISHED and self.published_at is None:
            self.published_at = timezone.now()
        if self.status != self.Status.PUBLISHED:
            self.published_at = None
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class QuizQuestion(models.Model):
    class QuestionType(models.TextChoices):
        SINGLE_CHOICE = 'single_choice', 'Choix unique'
        MULTIPLE_CHOICE = 'multiple_choice', 'Choix multiple'

    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    type = models.CharField(max_length=20, choices=QuestionType.choices, default=QuestionType.SINGLE_CHOICE)
    prompt = models.TextField()
    explanation = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    points = models.PositiveIntegerField(default=1)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.prompt[:80]


class AnswerChoice(models.Model):
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE, related_name='choices')
    text = models.TextField()
    is_correct = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.text[:80]


class QuizAttempt(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='attempts')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='quiz_attempts')
    score = models.PositiveIntegerField(default=0)
    max_score = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def percentage(self):
        return 0 if not self.max_score else round((self.score / self.max_score) * 100, 2)


class QuizAnswer(models.Model):
    attempt = models.ForeignKey(QuizAttempt, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    selected_choices = models.ManyToManyField(AnswerChoice, blank=True)
    is_correct = models.BooleanField(default=False)
    earned_points = models.PositiveIntegerField(default=0)
