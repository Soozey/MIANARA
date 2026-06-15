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

### P1 — Qualité frontend

Constat initial :
- Le lint frontend échouait sur imports inutilisés, variables non utilisées et un bug réel dans Library.jsx (`result` non défini).

Correction démarrée le 2026-06-15 :
- Lint frontend corrigé.
- Library.jsx stabilisé.
- Les appels de lecture contenus utilisent maintenant l’API réelle avant fallback UX.

Reste à faire :
- Réduire la dépendance aux données de démonstration.
- Harmoniser les messages d’erreur et états vides.
- Vérifier responsive mobile sur les pages clés.

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
- npm audit signale des vulnérabilités à qualifier.
- Des données de démonstration restent utilisées dans plusieurs services frontend.

## Recommandation immédiate

Continuer par le durcissement de la configuration production Django, puis l’harmonisation frontend/backend des rôles utilisateur et de la modération.
