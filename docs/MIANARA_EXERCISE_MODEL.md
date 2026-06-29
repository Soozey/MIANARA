# MIANARA — Modèle d’exercices et quiz

Dernière mise à jour : 2026-06-29

## Conclusion courte

Le MVP dispose maintenant d’un socle QCM/QCU backend minimal : quiz publié, questions, choix, bonnes réponses protégées côté lecture publique, tentative utilisateur authentifié et correction automatique.

## Modèles

### `Quiz`

- `content` : contenu associé, optionnel pour permettre un exercice autonome ;
- `title` ;
- `description` ;
- `level` ;
- `subject` ;
- `competency` ;
- `language` ;
- `status` : `DRAFT`, `PENDING`, `PUBLISHED`, `ARCHIVED` ;
- `author` ;
- `published_at`.

### `QuizQuestion`

- `quiz` ;
- `type` : `single_choice` ou `multiple_choice` ;
- `prompt` ;
- `explanation` ;
- `order` ;
- `points`.

### `AnswerChoice`

- `question` ;
- `text` ;
- `is_correct` ;
- `order`.

### `QuizAttempt`

- `quiz` ;
- `user` ;
- `score` ;
- `max_score` ;
- `created_at` ;
- `percentage` calculé.

### `QuizAnswer`

- `attempt` ;
- `question` ;
- `selected_choices` ;
- `is_correct` ;
- `earned_points`.

## Endpoints

- `GET /api/contents/quizzes/` : quiz publiés visibles publiquement ; auteur/modérateur voit davantage selon rôle.
- `POST /api/contents/quizzes/` : création réservée aux créateurs/modérateurs/admins.
- `GET /api/contents/quizzes/<id>/` : détail du quiz.
- `PATCH /api/contents/quizzes/<id>/` : modification selon permissions.
- `POST /api/contents/quizzes/<id>/attempts/` : enregistre une tentative et retourne score/correction pour utilisateur connecté.

## Correction automatique

- QCU : exactement un choix sélectionné.
- QCM : plusieurs choix possibles.
- Une réponse est correcte uniquement si l’ensemble des choix sélectionnés correspond exactement à l’ensemble des choix corrects.
- Les points de la question sont attribués seulement si la réponse est correcte.
- Les explications et `is_correct` ne sont pas exposés à un lecteur public avant correction.

## Distinctions MVP

- Quiz attaché à un article : `Quiz.content` rempli.
- Exercice autonome : `Quiz.content` vide, mais `subject`, `level`, `competency` renseignés.
- Évaluation courte : même modèle `Quiz`, avec un nombre limité de questions.
- Parcours futur : non implémenté, à construire plus tard au-dessus de `QuizAttempt`.

## Tests ajoutés

- Quiz publié visible publiquement sans fuite des bonnes réponses.
- Tentative quiz enregistrée pour utilisateur connecté.
- Correction automatique QCU validée.
- Tentative refusée pour utilisateur anonyme.
- Créateur empêché de publier directement un quiz.

## Limites actuelles

- Pas encore de banque de questions réutilisable.
- Pas encore de statistiques agrégées par quiz ou compétence.
- Pas encore de progression complète par parcours.
- Pas encore d’interface frontend complète pour répondre aux nouveaux endpoints QCM.
- Pas encore d’import automatisé en base ; le format JSON est documenté et un exemple minimal existe.
