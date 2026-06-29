# MIANARA — Guide d’import des contenus

Dernière mise à jour : 2026-06-29

## Objectif

Définir un format stable avant la création massive de contenus, fiches, articles, quiz et exercices. Ce guide ne remplace pas le cahier des charges du Drive ; il sert de contrat technique temporaire tant que le Drive n’est pas accessible automatiquement.

## Format recommandé

JSON est recommandé pour conserver une structure claire entre contenus, quiz, questions, réponses et explications.

Exemple minimal disponible :

- `backend/import_examples/content_readiness_minimal.json`

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

Aucune commande d’import automatisée n’a été ajoutée dans cette session afin d’éviter un import non validé avant accord humain.

Commande cible proposée pour une prochaine session :

```bash
python manage.py import_mianara_content backend/import_examples/content_readiness_minimal.json --dry-run
python manage.py import_mianara_content path/to/content.json
```

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
