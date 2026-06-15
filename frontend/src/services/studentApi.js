import api from './api';

const apiError = (message, error) => {
    const detail = error?.response?.data?.detail || error?.response?.data?.message;
    return new Error(detail || message);
};

const studentApi = {
    getClasses: async () => {
        try {
            const response = await api.get('students/classes/');
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les classes. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getClassesByLevel: async () => {
        try {
            const response = await api.get('students/classes/par_niveau/');
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les classes par niveau. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getClasseById: async (id) => {
        try {
            const response = await api.get(`students/classes/${id}/`);
            return response.data;
        } catch (error) {
            if (error?.response?.status === 404) {
                return null;
            }
            throw apiError("Impossible de charger cette classe. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getMatieres: async () => {
        try {
            const response = await api.get('students/matieres/');
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les matières. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getProgrammes: async ({ classe, matiere, trimestre } = {}) => {
        try {
            const params = {};
            if (classe) params.classe = classe;
            if (matiere) params.matiere = matiere;
            if (trimestre) params.trimestre = trimestre;
            const response = await api.get('students/programmes/', { params });
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les programmes. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getRessources: async (programmeId) => {
        try {
            const response = await api.get('students/ressources/', {
                params: programmeId ? { programme: programmeId } : {}
            });
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les ressources. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getOrientations: async (filters = {}) => {
        try {
            const response = await api.get('students/orientations/', { params: filters });
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les orientations. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getBourses: async (filters = {}) => {
        try {
            const response = await api.get('students/bourses/', { params: filters });
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les bourses. Vérifiez votre connexion puis réessayez.", error);
        }
    }
};

export default studentApi;
