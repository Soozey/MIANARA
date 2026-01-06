
const SIDEBAR_CATEGORIES = {
    "BIBLIOTHEQUE": { label: "Bibliothèque", sub: [] }, // Usually global
    "SCOLAIRE": {
        label: "Espace Étudiant",
        sub: [
            { id: "LYCEE", label: "Lycée (Seconde - Terminale)" },
            { id: "COLLEGE", label: "Collège (6ème - 3ème)" },
            { id: "PRIMAIRE", label: "Primaire" }
        ]
    },
    "ORIENTATION": { label: "Orientation & Carrière", sub: [] }, // Simple category
    "ENTREPRENEURIAT": {
        label: "Entrepreneuriat",
        sub: [
            { id: "CREATION", label: "Création d'entreprise" },
            { id: "GESTION", label: "Gestion & Finance" },
            { id: "MARKETING", label: "Marketing & Vente" }
        ]
    },
    "PRO": {
        label: "Formations Pro",
        sub: [
            { id: "INFORMATIQUE", label: "Informatique & Numérique" },
            { id: "COMMERCE", label: "Commerce & Marketing" },
            { id: "AGRI", label: "Agriculture & Élevage" }
        ]
    },
    "PERSO": { label: "Développement Personnel", sub: [] },
    "CITOYEN": { label: "Citoyenneté", sub: [] },
    "SANTE": { label: "Santé & Bien-être", sub: [] },
    "SOCIAL": { label: "Société & Culture", sub: [] }
};
