import { CLASSES_DEMO, MATIERES_DEMO, PROGRAMMES_DEMO } from '../data/studentDemoData';

// Simulation d'un délai réseau pour le réalisme (optionnel)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const IS_DEMO = true; // Force demo mode

const studentApi = {
    // Classes
    getClasses: async () => {
        if (IS_DEMO) {
            await delay(500);
            return [...CLASSES_DEMO.LYCEE, ...CLASSES_DEMO.COLLEGE, ...CLASSES_DEMO.PRIMAIRE];
        }
    },

    getClassesByLevel: async () => {
        if (IS_DEMO) {
            await delay(600);
            return CLASSES_DEMO;
        }
    },

    getClasseById: async (id) => {
        if (IS_DEMO) {
            await delay(300);
            // Recherche dans tous les niveaux
            const all = [...CLASSES_DEMO.LYCEE, ...CLASSES_DEMO.COLLEGE, ...CLASSES_DEMO.PRIMAIRE];
            const classe = all.find(c => c.id === id);

            if (classe) {
                // Attacher les matières
                return {
                    ...classe,
                    matieres: MATIERES_DEMO[id] || [] // Retourne vide si pas de matières définies
                };
            }
            return null;
        }
    },

    // Matières
    getMatieres: async () => {
        // ...
    },

    // Programmes (Chapitres + Ressources)
    getProgrammes: async ({ classe, matiere, trimestre }) => {
        if (IS_DEMO) {
            await delay(400);
            let progs = PROGRAMMES_DEMO[matiere] || [];

            if (trimestre) {
                progs = progs.filter(p => p.trimestre === parseInt(trimestre));
            }
            return progs;
        }
    },

    // Ressources
    getRessources: async (programmeId) => {
        // Déjà inclus dans getProgrammes en mode démo
        return [];
    },

    // Orientation
    getOrientations: async (filters = {}) => {
        await delay(500);
        return []; // À remplir plus tard
    },

    // Bourses
    getBourses: async (filters = {}) => {
        await delay(500);
        return []; // À remplir plus tard
    }
};

export default studentApi;
