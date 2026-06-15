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
- README.md n’est pas aligné avec l’architecture Django + React actuelle.
- npm audit signale des vulnérabilités à qualifier.
- Des fichiers médias de test non suivis existent localement dans backend/media/contents ; ils n’ont pas été supprimés sans validation spécifique.

### Priorité recommandée demain

P0 : vérifier la configuration production sur VPS/Hostinger, compléter README.md, puis couvrir tous les endpoints créateur/admin/modération par des tests.
