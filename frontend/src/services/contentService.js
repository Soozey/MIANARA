import api from './api';

export const contentService = {
    getAll: async () => {
        const response = await api.get('contents/');
        return response.data;
    },
    getById: async (id) => {
        const response = await api.get(`contents/${id}/`);
        return response.data;
    },
};
