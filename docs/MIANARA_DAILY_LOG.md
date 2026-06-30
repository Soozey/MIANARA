# MIANARA — Journal quotidien

## 2026-06-15 — Branche daily/mianara-2026-06-15

### Objectif

Corriger une priorité P0/P1 réelle : sécuriser l’authentification, les rôles et les accès API, puis stabiliser le lint frontend.

### Contexte

- Les fichiers docs/MIANARA_AUDIT.md, docs/MIANARA_ROADMAP.md et docs/MIANARA_DAILY_LOG.md étaient absents du dépôt.
- Le Drive de référence redirige vers une connexion Google dans l’environnement actuel ; son contenu n’a pas pu être lu automatiquement.
- La priorité a donc été choisie à partir de l’état réel du code.

### Réalisé

- Activation de JWTAuthentication dans Django REST Framework.
- Remplacement du AllowAny global par une permission lecture publique / écriture authentifiée.
- Ajout de permissions backend dédiées :
  - lecture publique et écriture admin pour le catalogue étudiant ;
  - création de contenus réservée CREATOR/ADMIN/staff/superuser ;
  - modification/suppression de contenus réservée à l’auteur ou aux admins.
- Blocage de l’auto-attribution de rôle privilégié à l’inscription : les nouveaux comptes restent STUDENT.
- Suppression du bypass frontend admin/admin123.
- Ajout automatique du header Authorization Bearer dans le client API frontend.
- Configuration API frontend via variables Vite avec fallback production.
- Correction du lint frontend, notamment le bug `result` non défini dans Library.jsx.
- Externalisation de SECRET_KEY, DEBUG, ALLOWED_HOSTS et CORS via variables d’environnement.
- Création et mise à jour de .env.example.
- Création des documents de suivi audit, roadmap et journal quotidien.

### Tests exécutés

- Backend : `python manage.py check`
- Backend : `python manage.py test -v 2`
- Frontend : `npm run lint`
- Frontend : `npm run build`

### Résultat

- Backend check : OK.
- Backend tests : OK.
- Frontend lint : OK.
- Frontend build : OK avec warnings non bloquants.

### Problèmes restants

- Vérifier les vraies variables d’environnement sur le serveur avant production.
- Plusieurs services frontend conservent encore des fallbacks de démonstration.
- README.md n’était pas aligné avec l’architecture Django + React actuelle.
- npm audit signalait des vulnérabilités à qualifier.
- Des fichiers médias de test non suivis existent localement dans backend/media/contents ; ils n’ont pas été supprimés sans validation spécifique.

### Priorité recommandée demain

P0 : vérifier la configuration production sur VPS/Hostinger, compléter README.md, puis couvrir tous les endpoints créateur/admin/modération par des tests.

## 2026-06-16 — Branche daily/mianara-2026-06-16

### Objectif

Finaliser la préparation production P0/P1 : documentation, suppression des fallbacks demo silencieux, correction des warnings build, qualification npm audit, rôles MODERATOR, profil utilisateur et workflow de modération backend.

### Contexte

- La branche `daily/mianara-2026-06-15` était propre et poussée.
- Le commit précédent `8e69940` a été repris par cherry-pick sur `daily/mianara-2026-06-16` car `main` ne contenait pas encore ce travail.
- Le Drive reste inaccessible sans connexion Google ; le cadrage fonctionnel fourni par la discussion sert de référence de travail.

### Réalisé

- README.md réaligné avec l’architecture actuelle Django/DRF + React/Vite.
- Ajout de `frontend/.env.example`.
- Ajout du rôle backend `MODERATOR` avec migration Django.
- Ajout de `GET/PATCH /api/users/me/`.
- JWT enrichi avec rôle et informations utilisateur ; la réponse de connexion contient le profil normalisé.
- Frontend AuthContext aligné avec les rôles backend : `isAdmin`, `isModerator`, `isCreator`.
- Règles backend de modération renforcées :
  - créateur = soumission de contenu ;
  - publication = MODERATOR/ADMIN/staff/superuser uniquement ;
  - publication directe par créateur refusée.
- Suppression de la synchronisation automatique de contenus demo au démarrage frontend.
- `contentService` utilise l’API réelle pour contenus CRUD et affiche des erreurs humaines.
- `Library.jsx` et `ContentView.jsx` n’utilisent plus de fallback demo silencieux.
- `studentApi` utilise les endpoints `/api/students/...` au lieu du mode demo forcé.
- Correction du proxy Vite vers Django local `127.0.0.1:8000`.
- Correction des warnings build :
  - @import CSS ;
  - import demo dynamique/statique ;
  - Browserslist/caniuse-lite obsolète ;
  - bundle > 500 kB via manualChunks.
- npm audit ramené à 0 vulnérabilité.

### Tests exécutés

- Backend : `python manage.py check`
- Backend : `python manage.py test -v 2`
- Frontend : `npm install`
- Frontend : `npm run lint`
- Frontend : `npm run build`
- Frontend : `npm audit --json`

### Résultat

- Backend check : OK.
- Backend tests : OK, 16 tests exécutés.
- Frontend lint : OK.
- Frontend build : OK sans warning bloquant.
- npm audit : 0 vulnérabilité.

### Problèmes restants

- Favoris, notes personnelles, analytics et commentaires doivent être persistés côté backend.
- Certaines pages étudiant doivent encore afficher des états d’erreur/retry plus complets.
- Les données demo restent présentes pour page de démonstration/seed dev explicite, mais ne doivent plus être source principale silencieuse.
- PWA/offline et protection des mineurs restent à implémenter.

### Priorité recommandée demain

P0 : implémenter les endpoints backend persistés pour favoris, notes personnelles et analytics simples, puis connecter le frontend sans localStorage de production.

## 2026-06-29 — Branche daily/mianara-content-readiness-2026-06-29

### Objectif

Vérifier si MIANARA est techniquement prêt à recevoir de vrais contenus et exercices avant création massive.

### Réalisé

- Vérification Git : branche précédente `daily/mianara-2026-06-16` propre et poussée ; nouvelle branche dédiée créée.
- Audit des corrections sécurité précédentes : JWT, permissions globales, rôles, inscription sécurisée, Authorization Bearer frontend et `.gitignore` ciblé confirmés.
- Extension progressive du modèle `Content` : slug, langue, matière, compétence, public cible, tags, date de publication et motif de modération.
- Filtrage public corrigé : seuls les contenus `PUBLISHED` sont lisibles publiquement ; auteurs et modérateurs gardent les vues nécessaires.
- Ajout du socle QCM/QCU MVP : `Quiz`, `QuizQuestion`, `AnswerChoice`, `QuizAttempt`, `QuizAnswer`.
- Ajout de l’endpoint `POST /api/contents/quizzes/<id>/attempts/` avec correction automatique.
- Protection de la lecture publique des quiz : les bonnes réponses et explications ne sont pas exposées avant correction.
- Admin Django enrichi pour contenus, quiz, questions, choix et tentatives.
- Ajout d’un exemple JSON minimal d’import : `backend/import_examples/content_readiness_minimal.json`.
- Création/mise à jour des docs Content Readiness : modèle de contenu, modèle d’exercices, guide d’import et checklist production.

### Tests exécutés

- Backend ciblé : `python manage.py test contents -v 2` — OK, 17 tests.
- Backend complet : `python manage.py check && python manage.py test -v 2` — OK, 24 tests.
- Frontend : `npm run lint` — OK.
- Frontend : `npm run build` — OK.
- Frontend : `npm audit --json` — 0 vulnérabilité après `npm audit fix` sans `--force`.

### Résultat intermédiaire

- Socle contenu/quiz backend prêt pour un pilote limité.
- Création massive encore déconseillée tant que frontend QCM, favoris, notes, commentaires et analytics ne sont pas persistés.

### Priorité recommandée ensuite

P0 : connecter le frontend au nouveau modèle QCM et implémenter les endpoints persistés favoris/notes/analytics avant création massive.

## 2026-06-29 — Branche daily/mianara-local-validation-2026-06-29

### Objectif

Reprendre après Content Readiness, vérifier l’état réel du dépôt, corriger l’exemple d’environnement backend, lancer MIANARA localement et valider les pages/API principales avant GitHub.

### Branche

- Départ : `daily/mianara-content-readiness-2026-06-29` propre et poussée.
- Travail : `daily/mianara-local-validation-2026-06-29`.

### Vérifications fichiers

- Documents Content Readiness présents : modèle de contenu, modèle exercices/quiz, guide d’import, checklist production, audit, roadmap et journal.
- Exemple import présent : `backend/import_examples/content_readiness_minimal.json`.
- `backend/.env.example` corrigé pour distinguer les variables réellement lues par `settings.py` et les informations documentaires SQLite/médias/JWT.
- `frontend/.env.example` présent avec `VITE_API_ORIGIN` et `VITE_API_BASE_URL` locaux.

### Corrections effectuées

- Correction de `backend/.env.example` après alerte de cohérence.
- Correction README : ligne Authorization Bearer, endpoints quiz, commandes locales check/migrate/tests, précision sur le fallback local Vite.
- Correction frontend : en mode développement, `frontend/src/config.js` utilise par défaut `http://127.0.0.1:8000` au lieu du domaine production si aucune variable Vite n’est fournie.

### Tests exécutés

- Backend : `python manage.py check` — OK.
- Backend : `python manage.py migrate --noinput` — OK, migrations appliquées localement.
- Backend : `python manage.py test -v 2` — OK, 24 tests.
- Frontend : `npm install` — OK.
- Frontend : `npm run lint` — OK.
- Frontend : `npm run build` — OK.
- Frontend : `npm audit --json` — 0 vulnérabilité.

### Lancement local

- Backend lancé : `http://127.0.0.1:8000/`.
- API contenus : `http://127.0.0.1:8000/api/contents/` — 200.
- API quiz : `http://127.0.0.1:8000/api/contents/quizzes/` — 200.
- Admin Django : `http://127.0.0.1:8000/admin/` — page login accessible.
- Frontend lancé : `http://127.0.0.1:5173/`.

### Pages / parcours vérifiés

- Accueil `/` — 200, redirection SPA prévue vers bibliothèque.
- Bibliothèque `/library` — 200.
- Détail contenu `/content/1` — 200 côté SPA, API détail contenu 1 — 200.
- Login `/login` — 200.
- Register `/register` — 200.
- Contribute `/contribute` et AddArticle `/add-article` — routes accessibles.
- Inscription API testée : rôle forcé à `STUDENT` malgré tentative `ADMIN`.
- Connexion API testée : token obtenu.
- Profil API `/api/users/me/` testé : profil `STUDENT` retourné.

### Erreurs / limites trouvées

- Le navigateur automatisé Hermes a été instable au lancement Chrome ; la console disponible n’a pas remonté d’erreur, mais la validation visuelle complète reste à refaire manuellement dans un navigateur humain.
- `backend/db.sqlite3` a été modifié localement par les migrations et le test d’inscription. Le fichier n’est pas ajouté au commit pour éviter de pousser une base locale.
- Les quiz existent côté API mais aucun quiz publié n’est présent dans la base locale actuelle.
- Interface modération/créateur encore partielle côté frontend.

### Conclusion

- Local lançable : oui.
- GitHub à mettre à jour avec les corrections de configuration/documentation.
- Contenus pilotes autorisés, mais création massive toujours déconseillée avant connexion frontend QCM + persistance favoris/notes/analytics.

## 2026-06-29 — Branche daily/mianara-pilot-lot-2-2026-06-29

### Objectif

Continuer avec un deuxième lot pilote limité et lancer MIANARA en local sur l’ordinateur.

### Branche

- Départ : `daily/mianara-local-validation-2026-06-29`.
- Travail : `daily/mianara-pilot-lot-2-2026-06-29`.

### Contenu ajouté

- Fichier pilote : `backend/import_examples/pilot_lot_2.json`.
- Volume volontairement limité : 5 contenus publiables et 2 quiz.
- Répartition :
  - 3 articles ;
  - 2 fiches pédagogiques ;
  - 1 contenu en malgache ;
  - 1 contenu bilingue français/malgache ;
  - 2 quiz QCU/QCM liés à des contenus.

### Import technique

- Commande ajoutée : `python manage.py import_mianara_content <json>`.
- Mode sécurisé : `--dry-run` valide sans écrire.
- Publication directe bloquée par défaut : un statut `published` devient `PENDING` sans `--publish-pilot`.
- Option pilote local : `--publish-pilot` autorise la publication contrôlée pour vérifier l’affichage.
- Tests automatisés ajoutés pour dry-run et import avec quiz.

### Import local exécuté

```bash
cd backend
python manage.py import_mianara_content import_examples/pilot_lot_2.json --dry-run
python manage.py import_mianara_content import_examples/pilot_lot_2.json --publish-pilot
```

Résultat :

- Dry-run OK : 5 contenus, 2 quiz, 2 questions, 7 choix.
- Import OK : 5 contenus, 2 quiz, 2 questions, 7 choix.
- API quiz locale : `GET /api/contents/quizzes/` retourne des quiz publiés.

### Lancement local

- Backend Django disponible sur `http://127.0.0.1:8000/`.
- Frontend Vite disponible sur `http://127.0.0.1:5173/`.
- Page recommandée pour validation humaine : `http://127.0.0.1:5173/library`.

### Vérifications exécutées

- `python manage.py check` — OK.
- `python manage.py test -v 2` — OK, 26 tests.
- `npm install` — OK.
- `npm run lint` — OK.
- `npm run build` — OK.
- `npm audit --json` — 0 vulnérabilité.
- `GET http://127.0.0.1:8000/api/contents/` — 200.
- `GET http://127.0.0.1:8000/api/contents/quizzes/` — 200 avec quiz publiés du lot pilote.
- `GET http://127.0.0.1:5173/library` — 200.

### Limites

- `backend/db.sqlite3` est modifié localement par l’import pilote et ne doit pas être commitée.
- Le lot 2 reste un pilote de validation, pas une création massive.
- Prochaine priorité : connecter l’interface frontend aux quiz publiés, puis persister favoris/notes/analytics côté backend.

## 2026-06-30 — Branche daily/mianara-frontend-published-quizzes-2026-06-30

### Objectif

Connecter l’interface frontend aux quiz publiés liés aux contenus MIANARA, sans fuite des réponses correctes côté lecture publique.

### Réalisé

- Ajout du filtre backend `GET /api/contents/quizzes/?content=<id>` pour récupérer uniquement les quiz publiés liés au contenu affiché.
- Ajout d’un test backend couvrant ce filtrage par contenu.
- Ajout du service frontend `quizService` pour charger les quiz publiés et soumettre les tentatives.
- Ajout du composant `PublishedQuizPanel` dans `ContentView.jsx` :
  - affiche les QCU en boutons radio ;
  - affiche les QCM en cases à cocher ;
  - demande une connexion avant correction/soumission ;
  - envoie les réponses à l’API `POST /api/contents/quizzes/<id>/attempts/` ;
  - affiche score, pourcentage et explications retournées par l’API.
- Ajout d’un script frontend `npm test` avec tests Node natifs pour les utilitaires quiz.

### Vérifications exécutées

- Backend : `python manage.py test -v 2` — OK, 27 tests.
- Frontend : `npm test` — OK, 3 tests.
- Frontend : `npm run lint` — OK.
- Frontend : `npm run build` — OK.
- Frontend : `npm audit --json` — 0 vulnérabilité.

### Limites

- La correction complète exige une connexion, conformément à l’API actuelle qui masque `is_correct` et `explanation` en lecture publique.
- `backend/db.sqlite3` reste modifiée localement par les imports/tests pilotes et ne doit pas être commitée.
- Prochaine priorité : persister favoris/notes personnelles/analytics côté backend ou améliorer l’expérience quiz anonyme si souhaité.
