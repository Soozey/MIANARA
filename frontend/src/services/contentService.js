import api from './api';

const apiError = (message, error) => {
    const detail = error?.response?.data?.detail || error?.response?.data?.message;
    return new Error(detail || message);
};

export const contentService = {
    getAll: async () => {
        try {
            const response = await api.get('contents/');
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les contenus. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    getById: async (id) => {
        try {
            const response = await api.get(`contents/${id}/`);
            return response.data;
        } catch (error) {
            if (error?.response?.status === 404) {
                throw new Error("Ce contenu est introuvable ou n'est plus disponible.");
            }
            throw apiError("Impossible de charger ce contenu. Vérifiez votre connexion puis réessayez.", error);
        }
    },

    create: async (formData) => {
        try {
            const response = await api.post('contents/', formData);
            return response.data;
        } catch (error) {
            throw apiError("Impossible de créer ce contenu. Vérifiez vos droits et les champs saisis.", error);
        }
    },

    update: async (id, formData) => {
        try {
            const response = await api.patch(`contents/${id}/`, formData);
            return response.data;
        } catch (error) {
            throw apiError("Impossible de modifier ce contenu. Vérifiez vos droits et les champs saisis.", error);
        }
    },

    delete: async (id) => {
        try {
            await api.delete(`contents/${id}/`);
            return true;
        } catch (error) {
            throw apiError("Impossible de supprimer ce contenu. Vérifiez vos droits puis réessayez.", error);
        }
    },

    // Fonctionnalités locales temporaires en attente d'endpoints dédiés.
    // Elles ne remplacent pas les contenus API et seront migrées backend.
    getComments: async (id) => {
        const key = `mianara_comments_${id}`;
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [];
    },

    addComment: async (id, commentData) => {
        const key = `mianara_comments_${id}`;
        const current = await contentService.getComments(id);
        const newComment = {
            id: Date.now(),
            ...commentData,
            date: new Date().toISOString()
        };
        const updated = [newComment, ...current];
        localStorage.setItem(key, JSON.stringify(updated));
        return newComment;
    },

    getRating: async (id) => {
        const key = `mianara_ratings_${id}`;
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : { average: 0, count: 0, userRating: null };
    },

    submitRating: async (id, rating) => {
        const key = `mianara_ratings_${id}`;
        const current = await contentService.getRating(id);
        const next = {
            average: rating,
            count: current.userRating ? current.count : current.count + 1,
            userRating: rating
        };
        localStorage.setItem(key, JSON.stringify(next));
        return next;
    },

    getTrending: async () => {
        const all = await contentService.getAll();
        return all.filter(item => item.is_premium || item.status === 'PUBLISHED').slice(0, 3);
    }
};
