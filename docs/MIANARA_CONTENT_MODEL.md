# MIANARA — Modèle de contenu

Dernière mise à jour : 2026-06-29

## Conclusion courte

Le modèle de contenu est maintenant utilisable pour commencer des contenus pilotes, mais il reste incomplet pour une V1 complète. La création massive doit attendre la validation humaine du format d’import et du workflow éditorial.

## Modèle actuel

### `Content`

Champs principaux disponibles :

- `title` : titre du contenu ;
- `slug` : slug indexé, généré automatiquement si absent ;
- `description` : résumé court ;
- `body` : corps riche HTML/CKEditor ;
- `category` : catégorie fonctionnelle MIANARA ;
- `status` : `DRAFT`, `PENDING`, `SUBMITTED`, `APPROVED`, `REFUSED`, `PUBLISHED`, `ARCHIVED` ;
- `file_type` : `TEXT`, `PDF`, `AUDIO`, `VIDEO` ;
- `file_url` : fichier lié ;
- `thumbnail` : image d’illustration ;
- `author` : utilisateur créateur ;
- `language` : `fr`, `mg`, `fr-mg` ;
- `level` : niveau cible ;
- `subject` : matière ou domaine ;
- `competency` : compétence visée ;
- `target_audience` : public cible ;
- `tags` : liste JSON de tags ;
- `moderation_reason` : motif de refus ou note de modération ;
- `published_at` : date de publication ;
- `quiz` : ancien format JSON conservé pour compatibilité.

### `Question`

Ancien modèle de question libre attachée à `Content`. Il est conservé pour ne pas casser l’existant, mais ne doit pas devenir le socle principal des QCM MVP.

## Workflow cible MVP

- Créateur : crée un brouillon ou soumet un contenu.
- Backend : force la création créateur en `PENDING`.
- Modérateur/admin : peut valider, refuser avec motif, publier ou archiver.
- Public : ne voit que les contenus `PUBLISHED`.
- Auteur connecté : peut voir ses propres contenus non publiés.
- Autre créateur : ne peut pas modifier le contenu d’un autre créateur.

## Endpoints

- `GET /api/contents/` : liste publique filtrée sur les contenus publiés, ou liste étendue pour auteur/modérateur selon rôle.
- `POST /api/contents/` : création réservée aux rôles autorisés.
- `GET /api/contents/<id>/` : détail visible si publié, auteur, ou modérateur/admin.
- `PATCH /api/contents/<id>/` : modification auteur ou modérateur/admin.
- `DELETE /api/contents/<id>/` : suppression auteur ou modérateur/admin.

## Règles de validation

- Un créateur ne peut pas publier directement.
- `REFUSED` exige `moderation_reason`.
- `tags` doit rester une liste de chaînes.
- `published_at` est renseigné automatiquement à la publication et vidé si le contenu n’est plus publié.

## Ce qui est prêt

- Articles texte simples.
- Fiches pédagogiques simples via `body`, `subject`, `level`, `competency`.
- Audio/vidéo/PDF via fichier ou média simple.
- Catégories, niveau, matière, langue, tags.
- Workflow brouillon/soumis/refusé/publié/archivé côté backend.
- Lecture publique limitée aux contenus publiés.
- Admin Django enrichi pour gérer les champs de contenu.

## Limites actuelles

- Pas encore de modèle séparé `ContentCategory`, `LearningLevel`, `Subject`, `Skill` : les valeurs sont textuelles pour garder le MVP simple.
- Pas encore de versioning éditorial.
- Pas encore de protection mineurs dédiée.
- Favoris, notes personnelles, commentaires et analytics restent à persister côté backend.
- Frontend créateur/modération encore partiel.

## Recommandation

Autoriser un premier lot pilote limité uniquement après relecture humaine du guide d’import et des tests. Pour la création massive, ajouter ensuite les endpoints persistés favoris/notes/progression et une vraie interface modérateur.
