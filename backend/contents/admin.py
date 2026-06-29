from django.contrib import admin
from .models import AnswerChoice, Content, Question, Quiz, QuizAnswer, QuizAttempt, QuizQuestion


class AnswerChoiceInline(admin.TabularInline):
    model = AnswerChoice
    extra = 2


class QuizQuestionInline(admin.TabularInline):
    model = QuizQuestion
    extra = 1


@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'status', 'category', 'file_type', 'language', 'level', 'subject', 'created_at')
    list_filter = ('status', 'file_type', 'category', 'language', 'is_premium')
    search_fields = ('title', 'description', 'body', 'subject', 'level', 'author__username')
    readonly_fields = ('created_at', 'updated_at', 'published_at')
    prepopulated_fields = {'slug': ('title',)}

    fieldsets = (
        ('Informations générales', {
            'fields': ('title', 'slug', 'description', 'category', 'status', 'moderation_reason', 'is_premium')
        }),
        ('Contenu', {
            'fields': ('body', 'file_type', 'file_url', 'thumbnail')
        }),
        ('Classification pédagogique', {
            'fields': ('language', 'level', 'subject', 'competency', 'target_audience', 'tags')
        }),
        ('Ancien quiz intégré', {
            'fields': ('quiz',),
            'classes': ('collapse',)
        }),
        ('Méta-données', {
            'fields': ('author', 'created_at', 'updated_at', 'published_at'),
            'classes': ('collapse',)
        }),
    )

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser or getattr(request.user, 'role', None) in {'ADMIN', 'MODERATOR'}:
            return qs
        return qs.filter(author=request.user)

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.author = request.user
        super().save_model(request, obj, form, change)

    def has_change_permission(self, request, obj=None):
        if not obj:
            return True
        if request.user.is_superuser or getattr(request.user, 'role', None) in {'ADMIN', 'MODERATOR'}:
            return True
        return obj.author == request.user

    def has_delete_permission(self, request, obj=None):
        if not obj:
            return True
        if request.user.is_superuser or getattr(request.user, 'role', None) in {'ADMIN', 'MODERATOR'}:
            return True
        return obj.author == request.user


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('prompt', 'type', 'content')
    search_fields = ('prompt', 'answer', 'content__title')


@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'author', 'status', 'language', 'level', 'subject', 'created_at')
    list_filter = ('status', 'language', 'subject', 'level')
    search_fields = ('title', 'description', 'content__title', 'author__username')
    readonly_fields = ('created_at', 'updated_at', 'published_at')
    inlines = [QuizQuestionInline]

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.author = request.user
        super().save_model(request, obj, form, change)


@admin.register(QuizQuestion)
class QuizQuestionAdmin(admin.ModelAdmin):
    list_display = ('prompt', 'quiz', 'type', 'points', 'order')
    list_filter = ('type', 'quiz')
    search_fields = ('prompt', 'explanation', 'quiz__title')
    inlines = [AnswerChoiceInline]


@admin.register(AnswerChoice)
class AnswerChoiceAdmin(admin.ModelAdmin):
    list_display = ('text', 'question', 'is_correct', 'order')
    list_filter = ('is_correct',)
    search_fields = ('text', 'question__prompt')


class QuizAnswerInline(admin.TabularInline):
    model = QuizAnswer
    extra = 0
    readonly_fields = ('question', 'is_correct', 'earned_points')
    filter_horizontal = ('selected_choices',)


@admin.register(QuizAttempt)
class QuizAttemptAdmin(admin.ModelAdmin):
    list_display = ('quiz', 'user', 'score', 'max_score', 'created_at')
    list_filter = ('quiz', 'created_at')
    search_fields = ('quiz__title', 'user__username')
    readonly_fields = ('quiz', 'user', 'score', 'max_score', 'created_at')
    inlines = [QuizAnswerInline]
