# MIANARA — Checklist production

Dernière mise à jour : 2026-06-29

## Sécurité

- Définir `DJANGO_SECRET_KEY` avec une vraie valeur secrète hors Git.
- `DJANGO_DEBUG=false` en production.
- `DJANGO_ALLOWED_HOSTS` limité aux domaines/IP autorisés.
- `DJANGO_CORS_ALLOW_ALL_ORIGINS=false` en production.
- `DJANGO_CORS_ALLOWED_ORIGINS` limité aux domaines frontend.
- Vérifier HTTPS et redirections HTTP vers HTTPS.
- Vérifier les rôles `STUDENT`, `CREATOR`, `MODERATOR`, `ADMIN` côté backend.
- Vérifier qu’aucune auto-attribution `ADMIN` ou `CREATOR` n’est possible à l’inscription.
- Vérifier qu’aucune vraie clé API, aucun mot de passe et aucun `.env` réel n’est committé.

## Base de données

- SQLite acceptable uniquement pour développement/MVP local.
- Définir la stratégie PostgreSQL ou équivalent avant montée en charge.
- Sauvegarder la base avant migration production.
- Tester restauration sur environnement séparé.

## Médias

- Configurer `MEDIA_URL` et `MEDIA_ROOT`.
- Prévoir sauvegarde des fichiers médias.
- Vérifier limites de taille upload.
- Prévoir traitement images/audio/vidéo avant V1.

## Variables d’environnement

- Backend : voir `.env.example` et `backend/.env.example`.
- Frontend : voir `frontend/.env.example`.
- Vérifier `VITE_API_BASE_URL` vers `/api` production.

## Tests

Avant déploiement :

```bash
cd backend
python manage.py check
python manage.py test -v 2

cd ../frontend
npm install
npm run lint
npm run build
npm audit
```

## Build et déploiement

- Construire le frontend avec Vite.
- Servir les assets frontend via hébergeur statique ou reverse proxy.
- Servir Django via WSGI/ASGI de production, pas `runserver`.
- Configurer les statiques Django si l’admin est utilisé.
- Vérifier les endpoints `/api/contents/`, `/api/contents/quizzes/`, `/api/users/me/`.

## Monitoring minimal

- Logs Django applicatifs.
- Logs serveur web/reverse proxy.
- Alertes erreur 5xx.
- Suivi espace disque pour base, médias et logs.

## Rollback

- Conserver la branche/commit déployé précédent.
- Sauvegarder base et médias avant migration.
- Documenter procédure de retour à l’ancienne version.
- Ne jamais supprimer migrations ou médias pour corriger un déploiement.

## Blocages avant V1

- Persistance backend de favoris, notes personnelles, commentaires et analytics.
- Interface modération/créateur complète.
- PWA/offline.
- Protection mineurs et modération renforcée.
