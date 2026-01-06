
// Données de démonstration pour l'Espace Étudiant (Programme Malagasy)

export const CLASSES_DEMO = {
    LYCEE: [
        { id: 'term-c', nom: 'Terminale', serie: 'C', niveau: 'LYCEE', description: 'Série Scientifique (Maths & Physique)' },
        { id: 'term-d', nom: 'Terminale', serie: 'D', niveau: 'LYCEE', description: 'Série Scientifique (Biologie & Géologie)' },
        { id: 'term-a', nom: 'Terminale', serie: 'A', niveau: 'LYCEE', description: 'Série Littéraire' },
        { id: 'prem-c', nom: 'Première', serie: 'C', niveau: 'LYCEE' },
        { id: 'prem-d', nom: 'Première', serie: 'D', niveau: 'LYCEE' },
        { id: 'prem-a', nom: 'Première', serie: 'A', niveau: 'LYCEE' },
        { id: 'seconde', nom: 'Seconde', serie: 'Générale', niveau: 'LYCEE' },
    ],
    COLLEGE: [
        { id: '3eme', nom: '3ème', niveau: 'COLLEGE' },
        { id: '4eme', nom: '4ème', niveau: 'COLLEGE' },
        { id: '5eme', nom: '5ème', niveau: 'COLLEGE' },
        { id: '6eme', nom: '6ème', niveau: 'COLLEGE' },
    ],
    PRIMAIRE: [
        { id: 'cm2', nom: '7ème (CM2)', niveau: 'PRIMAIRE' },
        { id: 'cm1', nom: '8ème (CM1)', niveau: 'PRIMAIRE' },
    ]
};

export const MATIERES_DEMO = {
    'term-c': [
        { id: 101, nom: 'Mathématiques', couleur: '#3b82f6', icone: '📐', coef: 5 },
        { id: 102, nom: 'Physique-Chimie', couleur: '#ef4444', icone: '⚡', coef: 5 },
        { id: 103, nom: 'SVT', couleur: '#10b981', icone: '🧬', coef: 2 },
        { id: 104, nom: 'Malagasy', couleur: '#f59e0b', icone: '🇲🇬', coef: 2 },
        { id: 105, nom: 'Philosophie', couleur: '#8b5cf6', icone: '🤔', coef: 2 },
        { id: 106, nom: 'Français', couleur: '#06b6d4', icone: '📝', coef: 2 },
        { id: 107, nom: 'Anglais', couleur: '#ec4899', icone: '🇬🇧', coef: 2 },
    ],
    'term-d': [
        { id: 201, nom: 'SVT', couleur: '#10b981', icone: '🧬', coef: 5 },
        { id: 202, nom: 'Mathématiques', couleur: '#3b82f6', icone: '📐', coef: 4 },
        { id: 203, nom: 'Physique-Chimie', couleur: '#ef4444', icone: '⚡', coef: 4 },
        { id: 204, nom: 'Malagasy', couleur: '#f59e0b', icone: '🇲🇬', coef: 2 },
        { id: 205, nom: 'Français', couleur: '#06b6d4', icone: '📝', coef: 2 },
    ],
    'seconde': [
        { id: 301, nom: 'Mathématiques', couleur: '#3b82f6', icone: '📐' },
        { id: 302, nom: 'Physique-Chimie', couleur: '#ef4444', icone: '⚡' },
        { id: 303, nom: 'Malagasy', couleur: '#f59e0b', icone: '🇲🇬' },
        { id: 304, nom: 'Français', couleur: '#06b6d4', icone: '📝' },
    ]
};

export const PROGRAMMES_DEMO = {
    // Maths Terminale C (ID Matière 101)
    101: [
        {
            id: 1,
            titre_chapitre: "Nombres Complexes",
            trimestre: 1,
            ordre: 1,
            objectifs: "Maîtriser la forme algébrique, trigonométrique et exponentielle.",
            competences: "Résoudre des équations dans C. Application à la géométrie.",
            nombre_ressources: 3,
            ressources: [
                { id: 1, titre: "Cours : Introduction aux complexes", type_contenu: "PDF", url_fichier: "#" },
                { id: 2, titre: "Vidéo : Forme trigonométrique", type_contenu: "VIDEO", url_fichier: "#" },
                { id: 3, titre: "Exercices corrigés : Équations", type_contenu: "EXO", url_fichier: "#" },
            ]
        },
        {
            id: 2,
            titre_chapitre: "Arithmétique",
            trimestre: 1,
            ordre: 2,
            objectifs: "Comprendre la divisibilité dans Z, PGCD, PPCM.",
            competences: "Utiliser la congruence pour résoudre des problèmes.",
            nombre_ressources: 2,
            ressources: [
                { id: 4, titre: "Cours complet Arithmétique", type_contenu: "PDF", url_fichier: "#" },
                { id: 5, titre: "Quiz : Divisibilité", type_contenu: "QUIZ", url_fichier: "#" },
            ]
        },
        {
            id: 3,
            titre_chapitre: "Fonctions Logarithmes & Exponentielles",
            trimestre: 2,
            ordre: 3,
            objectifs: "Étude complète de fonctions ln et exp.",
            competences: "Calcul de limites, dérivées et primitives.",
            nombre_ressources: 4,
            ressources: [
                { id: 6, titre: "Fiche de révision : Limites usuelles", type_contenu: "PDF", url_fichier: "#" },
            ]
        }
    ],
    // Physique Terminale C (ID Matière 102)
    102: [
        {
            id: 10,
            titre_chapitre: "Mécanique de Newton",
            trimestre: 1,
            ordre: 1,
            objectifs: "Appliquer les 3 lois de Newton.",
            competences: "Étude du mouvement d'un projectile et d'un satellite.",
            nombre_ressources: 3,
            ressources: [
                { id: 20, titre: "Cours : Les lois de Newton", type_contenu: "PDF", url_fichier: "#" },
                { id: 21, titre: "TP Virtuel : Chute libre", type_contenu: "VIDEO", url_fichier: "#" },
            ]
        },
        {
            id: 11,
            titre_chapitre: "Électricité (RC, RL, RLC)",
            trimestre: 2,
            ordre: 2,
            objectifs: "Étude des oscillations électriques.",
            competences: "Établir l'équation différentielle.",
            nombre_ressources: 2,
            ressources: [
                { id: 22, titre: "Schémas et Formules", type_contenu: "PDF", url_fichier: "#" },
            ]
        }
    ]
};
