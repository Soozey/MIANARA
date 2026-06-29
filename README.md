# MIANARA — Plateforme éducative web/mobile

MIANARA est une plateforme éducative, citoyenne et solidaire pensée pour Madagascar et les contextes de connexion limitée. Elle vise une expérience mobile-first avec contenus texte, fiches, audio, vidéo, quiz/QCM, favoris, notes personnelles, profils utilisateurs, espace créateur, validation/modération et préparation PWA.

## État actuel

Le dépôt contient deux applications principales :

- `backend/` : API Django + Django REST Framework + SimpleJWT.
- `frontend/` : application React + Vite.

Le code historique Node/SQLite mentionné auparavant dans ce README n’est plus l’architecture principale du projet.

## Architecture backend

Technologies :

- Python / Django
- Django REST Framework
- SimpleJWT pour l’authentification
- SQLite en développement
- `django-cors-headers`
- Apps principales :
  - `users` : utilisateurs, rôles, profil, JWT enrichi ;
  - `contents` : contenus éducatifs, statuts, quiz/questions ;
  - `students` : classes, matières, programmes, ressources, orientations, bourses.

Endpoints principaux :

- `POST /api/token/` : connexion JWT avec profil utilisateur dans la réponse.
- `POST /api/token/refresh/` : rafraîchissement JWT.
- `POST /api/users/register/` : inscription sécurisée.
- `GET/PATCH /api/users/me/` : profil utilisateur authentifié.
- `GET/POST /api/contents/` : contenus.
- `GET/PATCH/DELETE /api/contents/<id>/` : détail contenu.
- `GET/POST /api/contents/quizzes/` : quiz/QCM.
- `POST /api/contents/quizzes/<id>/attempts/` : tentative et correction automatique.
- `GET /api/students/...` : catalogue étudiant.

## Architecture frontend

Technologies :

- React
- Vite / rolldown-vite
- React Router
- Axios
- Tailwind CSS

L’URL API est configurable via variables Vite. Le client Axios ajoute automatiquement le header JWT :

`Authorization: Bearer <token>`

## Rôles

Rôles backend actuels :

- `STUDENT` : utilisateur apprenant par défaut.
- `JOB_SEEKER` : utilisateur en recherche d’emploi.
- `CREATOR` : peut proposer des contenus.
- `MODERATOR` : peut modérer/publier les contenus.
- `ADMIN` : administration fonctionnelle.

Règles importantes :

- Un nouvel utilisateur ne peut pas choisir lui-même un rôle privilégié à l’inscription.
- Le rôle par défaut est `STUDENT`.
- Les droits sont vérifiés côté backend, jamais seulement côté frontend.
- Les créateurs ne peuvent pas publier directement un contenu : la publication passe par modération.

## Sécurité

Mesures en place :

- Authentification JWT activée côté DRF.
- Permissions backend dédiées pour contenus et catalogue étudiant.
- Accès écriture catalogue étudiant réservé aux admins.
- Création contenu réservée aux CREATOR/MODERATOR/ADMIN/staff/superuser.
- Publication contenu réservée aux MODERATOR/ADMIN/staff/superuser.
- Profil utilisateur exposé via endpoint authentifié.
- Variables sensibles externalisées dans l’environnement.

À vérifier en production :

- `DJANGO_SECRET_KEY` doit être une vraie valeur secrète, jamais commitée.
- `DJANGO_DEBUG=false`.
- `DJANGO_ALLOWED_HOSTS` doit contenir les domaines de production.
- `DJANGO_CORS_ALLOW_ALL_ORIGINS=false`.
- `DJANGO_CORS_ALLOWED_ORIGINS` doit contenir uniquement les origines frontend autorisées.
- HTTPS obligatoire via Nginx + Certbot ou équivalent.

## Variables d’environnement

Exemple racine : `.env.example`

Backend :

```env
DJANGO_SECRET_KEY=change-me-with-a-long-random-secret
DJANGO_DEBUG=false
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,mianàra.com,www.mianàra.com,xn--mianra-lta.com,www.xn--mianra-lta.com
DJANGO_CORS_ALLOW_ALL_ORIGINS=false
DJANGO_CORS_ALLOWED_ORIGINS=https://mianàra.com,https://www.mianàra.com,https://xn--mianra-lta.com,https://www.xn--mianra-lta.com
```

Frontend :

```env
VITE_API_ORIGIN=https://mianàra.com
VITE_API_BASE_URL=https://mianàra.com/api
```

## Installation locale

Prérequis :

- Python 3.11+
- Node.js récent
- npm

Depuis la racine du dépôt :

```bash
git clone https://github.com/Soozey/MIANARA.git
cd MIANARA
```

### Backend

```bash
cd backend
python -m pip install -r requirements.txt
python manage.py check
python manage.py migrate --noinput
python manage.py test -v 2
python manage.py createsuperuser  # optionnel pour accéder à /admin/
python manage.py runserver 127.0.0.1:8000
```

API locale :

```text
http://127.0.0.1:8000/api/
```

### Frontend

Dans un autre terminal :

```bash
cd frontend
npm install
npm run dev
```

Créer éventuellement `frontend/.env.local` pour surcharger l’URL API. En développement, si aucune variable Vite n’est fournie, le frontend pointe maintenant par défaut vers `http://127.0.0.1:8000` ; en build production, le fallback reste `https://mianàra.com`.

```env
VITE_API_ORIGIN=http://127.0.0.1:8000
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

## Tests et qualité

Backend :

```bash
cd backend
python manage.py check
python manage.py test -v 2
```

Frontend :

```bash
cd frontend
npm run lint
npm run build
npm audit
```

## Build frontend

```bash
cd frontend
npm run build
```

Les fichiers de production sont générés dans `frontend/dist/`.

## Déploiement VPS / Hostinger

Schéma recommandé :

- Backend Django servi par Gunicorn ou Uvicorn derrière Nginx.
- Frontend React buildé et servi en statique par Nginx.
- HTTPS via Certbot.
- Variables d’environnement configurées sur le serveur.
- Base SQLite possible pour MVP limité, PostgreSQL recommandé pour production durable.

Exemple indicatif :

```bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip nodejs npm nginx

git clone https://github.com/Soozey/MIANARA.git /var/www/mianara
cd /var/www/mianara/backend
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput

cd ../frontend
npm install
npm run build
```

Nginx doit :

- servir `frontend/dist` pour le site ;
- proxyfier `/api/` vers le backend Django ;
- proxyfier `/admin/` vers le backend Django ;
- servir `/media/` si les médias restent locaux.

## Sauvegarde / restauration

À mettre en place avant production :

- sauvegarde régulière de `backend/db.sqlite3` si SQLite est conservé ;
- sauvegarde régulière de `backend/media/` ;
- export planifié avant chaque déploiement ;
- procédure de restauration testée sur un environnement séparé.

Aucune suppression de base, média, migration ou upload ne doit être faite sans sauvegarde et validation humaine explicite.

## Données de démonstration

Les données demo ne doivent pas masquer une indisponibilité API en production.

Règle :

- source principale = API réelle ;
- si l’API échoue = message UX clair + bouton réessayer ;
- les données demo restent uniquement pour seed/dev explicite ou page de démonstration identifiée.

## Limites actuelles

- Les favoris, notes personnelles, analytics et certains engagements restent partiellement locaux ou à implémenter côté backend.
- Certaines pages étudiant doivent encore gérer plus finement les erreurs API.
- Le bundle frontend reste volumineux ; une analyse de code splitting est nécessaire.
- La PWA et la protection mineurs restent à cadrer/implémenter.
- Le README devra être ajusté après accès complet au cahier des charges Drive.

## Roadmap synthétique

### MVP

1. Sécurité backend stricte et rôles complets.
2. Lecture de contenus API sans fallback silencieux.
3. Quiz/QCM avec correction automatique.
4. Favoris et notes personnelles persistés backend.
5. Espace créateur avec soumission de contenu.
6. Back-office de modération.
7. Documentation VPS/Hostinger et sauvegarde.
8. Responsive mobile-first sur les pages principales.

### V1

1. PWA/offline léger pour connexion limitée.
2. Recommandations simples.
3. Analytics créateur/admin.
4. Expérience bilingue français/malgache.
5. Protection des mineurs et modération renforcée.
6. Optimisation performance et bundle splitting.
