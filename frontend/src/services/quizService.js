import api from './api';

const apiError = (message, error) => {
    const detail = error?.response?.data?.detail || error?.response?.data?.message;
    return new Error(detail || message);
};

export const quizService = {
    getPublishedForContent: async (contentId) => {
        try {
            const response = await api.get('contents/quizzes/', { params: { content: contentId } });
            return response.data;
        } catch (error) {
            throw apiError("Impossible de charger les quiz publiés pour ce contenu.", error);
        }
    },

    submitAttempt: async (quizId, payload) => {
        try {
            const response = await api.post(`contents/quizzes/${quizId}/attempts/`, payload);
            return response.data;
        } catch (error) {
            throw apiError("Impossible d'envoyer vos réponses. Connectez-vous puis réessayez.", error);
        }
    },
};
