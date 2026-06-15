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
