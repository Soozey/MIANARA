# MIANARA — Roadmap MVP puis V1

Dernière mise à jour : 2026-06-15

## Principe

Le cahier des charges du Drive reste la référence principale. Tant que son contenu n’est pas accessible automatiquement, cette roadmap est basée sur l’état réel du code et doit être ajustée après relecture humaine ou accès Drive.

## MVP — Priorités obligatoires

### 1. Sécurité et socle API

- Finaliser JWT côté backend et frontend.
- Vérifier les rôles côté backend : STUDENT, JOB_SEEKER, CREATOR, ADMIN.
- Empêcher toute élévation de privilèges depuis le frontend.
- Restreindre création/modification/suppression des contenus aux rôles autorisés.
- Restreindre le catalogue scolaire et les référentiels aux admins en écriture.
- Externaliser SECRET_KEY, DEBUG, CORS, ALLOWED_HOSTS.
- Ajouter tests de permissions sur chaque famille d’endpoint.

### 2. Parcours utilisateur MVP

- Inscription fiable avec rôle par défaut sécurisé.
- Connexion réelle sans bypass ou faux jeton.
- Profil utilisateur lisible et modifiable dans le périmètre autorisé.
- Lecture des contenus depuis l’API.
- Affichage humain des erreurs réseau, auth et permissions.

### 3. Contenus éducatifs

- Articles et contenus pédagogiques réels.
- Quiz/QCM associés aux contenus.
- Correction automatique basique et affichage du score.
- Favoris et notes si présents dans le cahier des charges MVP.
- Distinction claire brouillon / en attente / publié.

### 4. Créateur et modération

- Création de contenu par CREATOR/ADMIN uniquement.
- Modification par auteur ou ADMIN.
- Modération des contenus en attente.
- Interface admin cohérente avec les permissions backend.

### 5. Qualité frontend

- Lint vert.
- Build vert.
- Responsive mobile sur pages principales : accueil, bibliothèque, lecture, connexion, inscription, espace étudiant.
- Suppression progressive des mocks comme source principale.

### 6. Déploiement

- .env.example complet.
- README à jour pour Django + React.
- Procédure VPS/Hostinger.
- Procédure sauvegarde base et médias.
- Checklist sécurité pré-production.

## V1 — Après MVP stable

- Recherche avancée et filtres complets.
- Notifications utiles.
- Tableau de bord créateur.
- Statistiques de progression apprenant.
- Amélioration UX quiz et certificats si prévu au cahier des charges.
- Optimisation performance frontend : code splitting, bundle size.
- Observabilité minimale : logs applicatifs et erreurs serveur.

## Priorité recommandée après la branche 2026-06-15

P0 : vérifier la configuration production réelle sur le VPS/Hostinger, compléter README.md, puis ajouter les tests manquants sur tous les endpoints créateur/admin/modération.
