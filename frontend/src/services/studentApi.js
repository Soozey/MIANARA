import axios from 'axios';

const API_URL = 'http://localhost:8000/api/students';

const studentApi = {
    // Classes
    getClasses: async () => {
        const response = await axios.get(`${API_URL}/classes/`);
        return response.data;
    },

    getClassesByLevel: async () => {
        const response = await axios.get(`${API_URL}/classes/par_niveau/`);
        return response.data;
    },

    getClasseById: async (id) => {
        const response = await axios.get(`${API_URL}/classes/${id}/`);
        return response.data;
    },

    // Matières
    getMatieres: async () => {
    },

    // Ressources
    getRessources: async (programmeId) => {
        const response = await axios.get(`${API_URL}/programmes/${programmeId}/ressources/`);
        return response.data;
    },

    // Orientation
    getOrientations: async (filters = {}) => {
        const params = new URLSearchParams();
        if (filters.filiere) params.append('filiere', filters.filiere);
        if (filters.serie) params.append('serie', filters.serie);

        const response = await axios.get(`${API_URL}/orientations/`, { params });
        return response.data;
    },

    getOrientationsByFiliere: async () => {
        const response = await axios.get(`${API_URL}/orientations/par_filiere/`);
        return response.data;
    },

    // Bourses
    getBourses: async (filters = {}) => {
        const params = new URLSearchParams();
        if (filters.actives) params.append('actives', 'true');
        if (filters.niveau) params.append('niveau', filters.niveau);

        const response = await axios.get(`${API_URL}/bourses/`, { params });
        return response.data;
    }
};

export default studentApi;
