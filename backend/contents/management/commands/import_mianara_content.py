import json
from pathlib import Path

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils.text import slugify

from contents.models import AnswerChoice, Content, Quiz, QuizQuestion


STATUS_MAP = {
    'draft': Content.Status.DRAFT,
    'pending': Content.Status.PENDING,
    'submitted': Content.Status.PENDING,
    'published': Content.Status.PUBLISHED,
}

QUESTION_TYPES = {
    'single_choice': QuizQuestion.QuestionType.SINGLE_CHOICE,
    'multiple_choice': QuizQuestion.QuestionType.MULTIPLE_CHOICE,
}


class Command(BaseCommand):
    help = "Importe un petit lot JSON MIANARA de contenus et quiz, avec dry-run par défaut recommandé."

    def add_arguments(self, parser):
        parser.add_argument('path', help='Chemin du fichier JSON à importer')
        parser.add_argument('--dry-run', action='store_true', help="Valide le fichier sans écrire en base")
        parser.add_argument(
            '--publish-pilot',
            action='store_true',
            help="Autorise la publication directe pour un lot pilote local validé. Sans cette option, published devient pending.",
        )
        parser.add_argument(
            '--author',
            default='mianara-pilot-creator',
            help="Nom d'utilisateur créateur utilisé pour l'import pilote",
        )

    def handle(self, *args, **options):
        path = Path(options['path'])
        dry_run = options['dry_run']
        publish_pilot = options['publish_pilot']
        author_username = options['author']

        if not path.exists():
            raise CommandError(f"Fichier introuvable : {path}")

        try:
            payload = json.loads(path.read_text(encoding='utf-8'))
        except json.JSONDecodeError as exc:
            raise CommandError(f"JSON invalide : {exc}") from exc

        contents = payload.get('contents')
        if not isinstance(contents, list) or not contents:
            raise CommandError("Le fichier doit contenir une liste non vide 'contents'.")

        User = get_user_model()
        author = None
        if not dry_run:
            author, _ = User.objects.get_or_create(
                username=author_username,
                defaults={'email': f'{author_username}@example.local', 'role': getattr(User.Role, 'CREATOR', 'CREATOR')},
            )

        summary = {'contents': 0, 'quizzes': 0, 'questions': 0, 'choices': 0}

        with transaction.atomic():
            for index, item in enumerate(contents, start=1):
                self._validate_content(item, index)
                normalized_status = self._normalize_status(item.get('status', 'draft'), publish_pilot)
                slug = item.get('slug') or slugify(item['title'])

                if not dry_run:
                    content = self._upsert_content(item, slug, normalized_status, author)
                else:
                    content = None

                summary['contents'] += 1
                quiz_payload = item.get('quiz')
                if quiz_payload:
                    quiz_counts = self._process_quiz(
                        quiz_payload=quiz_payload,
                        content=content,
                        item=item,
                        author=author,
                        status=Quiz.Status.PUBLISHED if normalized_status == Content.Status.PUBLISHED else Quiz.Status.PENDING,
                        dry_run=dry_run,
                    )
                    for key, value in quiz_counts.items():
                        summary[key] += value

            if dry_run:
                transaction.set_rollback(True)

        mode = 'DRY-RUN' if dry_run else 'IMPORT'
        self.stdout.write(self.style.SUCCESS(
            f"{mode} OK — contenus={summary['contents']}, quiz={summary['quizzes']}, "
            f"questions={summary['questions']}, choix={summary['choices']}"
        ))

    def _validate_content(self, item, index):
        if not isinstance(item, dict):
            raise CommandError(f"Contenu #{index} invalide : objet attendu.")
        if not item.get('title'):
            raise CommandError(f"Contenu #{index} : title obligatoire.")
        if not item.get('body'):
            raise CommandError(f"Contenu #{index} : body obligatoire.")

        category = item.get('category', Content.Category.AUTRE)
        if category not in Content.Category.values:
            raise CommandError(f"Contenu #{index} : category inconnue '{category}'.")

        language = item.get('language', Content.Language.FR)
        if language not in Content.Language.values:
            raise CommandError(f"Contenu #{index} : language inconnue '{language}'.")

        tags = item.get('tags', [])
        if tags is not None and (not isinstance(tags, list) or not all(isinstance(tag, str) for tag in tags)):
            raise CommandError(f"Contenu #{index} : tags doit être une liste de textes.")

        quiz = item.get('quiz')
        if quiz:
            self._validate_quiz(quiz, index)

    def _validate_quiz(self, quiz, content_index):
        if not quiz.get('title'):
            raise CommandError(f"Contenu #{content_index} : quiz.title obligatoire.")
        questions = quiz.get('questions')
        if not isinstance(questions, list) or not questions:
            raise CommandError(f"Contenu #{content_index} : quiz.questions doit être une liste non vide.")
        for q_index, question in enumerate(questions, start=1):
            q_type = question.get('type', 'single_choice')
            if q_type not in QUESTION_TYPES:
                raise CommandError(f"Contenu #{content_index}, question #{q_index} : type inconnu '{q_type}'.")
            if not question.get('question'):
                raise CommandError(f"Contenu #{content_index}, question #{q_index} : question obligatoire.")
            choices = question.get('choices')
            if not isinstance(choices, list) or len(choices) < 2:
                raise CommandError(f"Contenu #{content_index}, question #{q_index} : au moins deux choix sont requis.")
            correct_count = sum(1 for choice in choices if choice.get('is_correct') is True)
            if correct_count < 1:
                raise CommandError(f"Contenu #{content_index}, question #{q_index} : au moins une bonne réponse est requise.")
            if q_type == 'single_choice' and correct_count != 1:
                raise CommandError(f"Contenu #{content_index}, question #{q_index} : une QCU exige une seule bonne réponse.")

    def _normalize_status(self, raw_status, publish_pilot):
        status = STATUS_MAP.get(str(raw_status).lower(), Content.Status.DRAFT)
        if status == Content.Status.PUBLISHED and not publish_pilot:
            return Content.Status.PENDING
        return status

    def _upsert_content(self, item, slug, status, author):
        defaults = {
            'title': item['title'],
            'description': item.get('summary') or item.get('description', ''),
            'body': item['body'],
            'category': item.get('category', Content.Category.AUTRE),
            'status': status,
            'file_type': self._file_type_for(item.get('type')),
            'author': author,
            'level': item.get('level', ''),
            'subject': item.get('subject', ''),
            'competency': item.get('competency', ''),
            'language': item.get('language', Content.Language.FR),
            'target_audience': item.get('target_audience', ''),
            'tags': item.get('tags', []),
            'license_accepted': True,
        }
        content = Content.objects.filter(slug=slug).first()
        if content:
            for field, value in defaults.items():
                setattr(content, field, value)
            content.save()
            return content
        return Content.objects.create(slug=slug, **defaults)

    def _file_type_for(self, content_type):
        if content_type == 'audio':
            return Content.FileType.AUDIO
        if content_type == 'video':
            return Content.FileType.VIDEO
        if content_type == 'pdf':
            return Content.FileType.PDF
        return Content.FileType.TEXT

    def _process_quiz(self, quiz_payload, content, item, author, status, dry_run):
        counts = {'quizzes': 1, 'questions': 0, 'choices': 0}
        if not dry_run:
            quiz = Quiz.objects.filter(content=content, title=quiz_payload['title']).first()
            if quiz is None:
                quiz = Quiz.objects.create(
                    content=content,
                    title=quiz_payload['title'],
                    description=quiz_payload.get('description', ''),
                    level=item.get('level', ''),
                    subject=item.get('subject', ''),
                    competency=item.get('competency', ''),
                    language=item.get('language', Content.Language.FR),
                    status=status,
                    author=author,
                )
            else:
                quiz.description = quiz_payload.get('description', '')
                quiz.level = item.get('level', '')
                quiz.subject = item.get('subject', '')
                quiz.competency = item.get('competency', '')
                quiz.language = item.get('language', Content.Language.FR)
                quiz.status = status
                quiz.author = author
                quiz.save()
                quiz.questions.all().delete()
        else:
            quiz = None

        for order, question_payload in enumerate(quiz_payload['questions'], start=1):
            counts['questions'] += 1
            if not dry_run:
                question = QuizQuestion.objects.create(
                    quiz=quiz,
                    type=QUESTION_TYPES[question_payload.get('type', 'single_choice')],
                    prompt=question_payload['question'],
                    explanation=question_payload.get('explanation', ''),
                    order=order,
                    points=question_payload.get('points', 1),
                )
            else:
                question = None
            for choice_order, choice_payload in enumerate(question_payload['choices'], start=1):
                counts['choices'] += 1
                if not dry_run:
                    AnswerChoice.objects.create(
                        question=question,
                        text=choice_payload['text'],
                        is_correct=choice_payload.get('is_correct', False),
                        order=choice_order,
                    )
        return counts
