# MIANARA — Guide d’import des contenus

Dernière mise à jour : 2026-06-29

## Objectif

Définir un format stable avant la création massive de contenus, fiches, articles, quiz et exercices. Ce guide ne remplace pas le cahier des charges du Drive ; il sert de contrat technique temporaire tant que le Drive n’est pas accessible automatiquement.

## Format recommandé

JSON est recommandé pour conserver une structure claire entre contenus, quiz, questions, réponses et explications.

Exemples disponibles :

- `backend/import_examples/content_readiness_minimal.json` : exemple minimal de validation de structure.
- `backend/import_examples/pilot_lot_2.json` : lot pilote limité avec 5 contenus publiables et 2 quiz QCU/QCM.

## Structure JSON proposée

```json
{
  "contents": [
    {
      "type": "article",
      "title": "Titre",
      "slug": "titre",
      "summary": "Résumé court",
      "body": "Texte complet",
      "language": "fr",
      "level": "college",
      "subject": "francais",
      "competency": "comprehension_ecrite",
      "category": "SCOLAIRE",
      "tags": ["lecture", "compréhension"],
      "status": "draft",
      "quiz": {
        "title": "Quiz associé",
        "questions": [
          {
            "type": "single_choice",
            "question": "Question ?",
            "choices": [
              {"text": "Réponse A", "is_correct": true},
              {"text": "Réponse B", "is_correct": false}
            ],
            "explanation": "Explication de la bonne réponse."
          }
        ]
      }
    }
  ]
}
```

## Correspondance avec le backend actuel

- `summary` devient `Content.description`.
- `body` devient `Content.body`.
- `language` accepte `fr`, `mg`, `fr-mg`.
- `level`, `subject`, `competency`, `category`, `tags` alimentent les champs de classification.
- `status: draft` doit être importé en `DRAFT` ou `PENDING` selon le workflow choisi.
- `quiz` devient un enregistrement `Quiz` avec `QuizQuestion` et `AnswerChoice`.

## Validations attendues

- Un titre est obligatoire.
- Le statut par défaut doit rester brouillon ou soumis, jamais publié automatiquement.
- Au moins une bonne réponse par question.
- Une question `single_choice` doit avoir une seule bonne réponse.
- Une question `multiple_choice` peut avoir plusieurs bonnes réponses.
- Les slugs doivent être uniques ou régénérés.
- Les contenus publiés doivent être validés par modérateur/admin.

## Commande d’import

Une commande d’import pilote est disponible côté backend. Elle valide le JSON, importe les contenus, crée les quiz/questions/choix et reste prudente par défaut : un statut `published` devient `PENDING` sauf si `--publish-pilot` est explicitement fourni pour un lot local validé.

```bash
cd backend
python manage.py import_mianara_content import_examples/content_readiness_minimal.json --dry-run
python manage.py import_mianara_content import_examples/pilot_lot_2.json --dry-run
python manage.py import_mianara_content import_examples/pilot_lot_2.json --publish-pilot
```

Options utiles :

- `--dry-run` : valide sans écrire en base.
- `--publish-pilot` : autorise la publication directe uniquement pour un pilote local contrôlé.
- `--author <username>` : choisit le compte créateur utilisé pour l’import.

## Procédure de test recommandée

1. Valider le JSON avec un parseur standard.
2. Lancer une future commande `--dry-run`.
3. Importer en statut `DRAFT` ou `PENDING`.
4. Vérifier dans l’admin Django.
5. Publier un seul contenu pilote.
6. Tester la lecture publique et le quiz associé.
7. Ne lancer la création massive qu’après validation du pilote.

## Erreurs possibles

- catégorie inconnue ;
- langue inconnue ;
- slug en doublon ;
- question sans choix ;
- choix correct absent ;
- fichier média manquant ;
- tentative de publication directe sans validation.
