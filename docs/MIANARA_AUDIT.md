# MIANARA — Audit technique

Dernière mise à jour : 2026-06-15

## Source et limites

- Référence principale attendue : cahier des charges MIANARA dans le Drive.
- État constaté : le Drive redirige vers une connexion Google dans l’environnement actuel ; son contenu n’a donc pas pu être vérifié automatiquement.
- Les constats ci-dessous proviennent du code du dépôt GitHub au 2026-06-15.

## Constats P0 / P1

### P0 — Sécurité backend et contrôle d’accès

Constat initial :
- Django REST Framework était configuré sans authentification par défaut.
- Les permissions globales autorisaient tous les accès.
- Les endpoints étudiants exposaient des ModelViewSet complets, donc lecture, création, modification et suppression.
- L’inscription permettait de fournir un rôle dans le payload.
- Le frontend contenait un bypass de connexion démo admin/admin123.

Correction démarrée le 2026-06-15 :
- Authentification JWT activée côté DRF.
- Permissions par défaut remises en lecture publique / écriture authentifiée.
- Permissions métiers ajoutées pour contenus et catalogue étudiant.
- Auto-attribution de rôle privilégié bloquée à l’inscription.
- Bypass frontend de connexion démo retiré.

Correction complémentaire démarrée le 2026-06-15 :
- SECRET_KEY, DEBUG, ALLOWED_HOSTS et CORS sont maintenant configurables via variables d’environnement.
- .env.example documente les variables attendues.

Reste à faire :
- Vérifier tous les endpoints créateur/admin/modération.
- Ajouter un endpoint profil utilisateur ou personnaliser le token JWT pour exposer proprement le rôle utile au frontend.

Correction complémentaire du 2026-06-16 :
- Ajout du rôle `MODERATOR` côté backend.
- Ajout de `GET/PATCH /api/users/me/`.
- JWT enrichi avec username, email, rôle, is_staff et is_superuser ; la réponse de connexion contient aussi le profil normalisé.
- Règles de publication renforcées : un créateur peut soumettre, mais seuls MODERATOR/ADMIN/staff/superuser peuvent publier.
- Tests de régression ajoutés pour profil, token, création en attente, refus de publication directe et publication par modérateur.

### P1 — Qualité frontend

Constat initial :
- Le lint frontend échouait sur imports inutilisés, variables non utilisées et un bug réel dans Library.jsx (`result` non défini).

Correction démarrée le 2026-06-15 :
- Lint frontend corrigé.
- Library.jsx stabilisé.
- Les appels de lecture contenus utilisent maintenant l’API réelle avant fallback UX.

Correction complémentaire du 2026-06-16 :
- Les lectures principales de contenus passent par l’API réelle.
- La bibliothèque et la lecture de contenu affichent une erreur humaine et un bouton de reprise au lieu d’un fallback demo silencieux.
- La synchronisation automatique des contenus demo au démarrage a été supprimée.
- Le proxy Vite pointe vers Django local `127.0.0.1:8000`.
- Les warnings build @import, import demo et bundle > 500 kB ont été corrigés ; Browserslist/caniuse-lite a été mis à jour.

Reste à faire :
- Migrer commentaires, notes/favoris et analytics vers des endpoints backend persistés.

### P1 — Documentation et déploiement

Constat :
- Les fichiers docs/MIANARA_AUDIT.md, docs/MIANARA_ROADMAP.md et docs/MIANARA_DAILY_LOG.md étaient absents.
- README.md décrit encore une ancienne installation Node/SQLite alors que le dépôt contient maintenant un backend Django et un frontend React.

Reste à faire :
- Mettre à jour README.md et .env.example.
- Documenter installation locale, tests, build et déploiement VPS/Hostinger.
- Définir une procédure de sauvegarde base de données et médias.

## Risques actifs

- Vérifier les vraies valeurs d’environnement sur le serveur avant production.
- npm audit : 0 vulnérabilité après `npm audit fix` sans `--force` le 2026-06-29.
- Des données de démonstration restent utilisées dans plusieurs services frontend hors bibliothèque principale.

## Audit Content Readiness — 2026-06-29

### Corrections précédentes vérifiées

Présent dans le code :

- `backend/config/permissions.py` existe et centralise les rôles admin, modération et création.
- `REST_FRAMEWORK` utilise `JWTAuthentication`.
- Les permissions globales ne sont plus `AllowAny` en écriture.
- Les endpoints étudiants utilisent `IsAdminRoleOrReadOnly`.
- L’inscription force le rôle `STUDENT` et ignore l’auto-attribution `ADMIN` ou `CREATOR`.
- Le bypass frontend `admin/admin123` n’est pas utilisé dans `AuthContext`/login.
- `frontend/src/services/api.js` ajoute `Authorization: Bearer <token>`.
- `.gitignore` couvre `backend/media/contents/test_*.txt`.
- Des tests backend couvrent auth, rôles, contenus et étudiants.

### Modèle contenu

Prêt pour pilote limité : articles texte, fichiers média simples, langue, niveau, matière, compétence, tags, auteur, statut, publication, motif de refus.

Encore incomplet pour création massive : référentiels normalisés `Subject/Level/Skill`, favoris, notes, commentaires, analytics persistés, interface frontend complète de modération.

### Modèle exercices/quiz

Ajout du socle QCM/QCU MVP : `Quiz`, `QuizQuestion`, `AnswerChoice`, `QuizAttempt`, `QuizAnswer`, endpoint de tentative et correction automatique.

Limites : pas encore de parcours, statistiques agrégées ou interface frontend complète pour le nouveau modèle QCM.

### Fallbacks demo

Les pages principales bibliothèque/détail appellent l’API réelle avec états loading/error/empty. Des usages locaux restent pour notes/commentaires/ratings, explicitement temporaires, et doivent devenir des endpoints backend avant production avancée.

## Recommandation immédiate

Autoriser seulement un premier lot pilote de contenus et quiz. Ne pas lancer la création massive tant que favoris, notes, analytics et interface modération/créateur complète ne sont pas finalisés.
