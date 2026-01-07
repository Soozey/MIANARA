
const CONFERENCE_STORAGE_KEY = 'mianara_conferences';
const REGISTRATION_STORAGE_KEY = 'mianara_registrations';

// Initial Demo Data
const DEMO_CONFERENCES = [
    {
        id: 1,
        title: "L'IA en Afrique : Opportunités et Défis",
        description: "Une conférence exclusive sur l'impact de l'intelligence artificielle sur l'économie africaine.",
        speaker: "Dr. Sarah Rakoto",
        date: "2025-12-15T14:00:00",
        price: 0,
        status: "APPROVED", // APPROVED, PENDING, REJECTED
        link: "https://meet.google.com/abc-defg-hij",
        platform: "Google Meet",
        replayUrl: null,
        tags: ["Technologie", "Innovation"]
    },
    {
        id: 2,
        title: "Entreprendre à Madagascar",
        description: "Les clés pour réussir sa création d'entreprise dans le contexte local.",
        speaker: "Riry N.",
        date: "2025-11-20T10:00:00",
        price: 15000,
        status: "APPROVED",
        link: "https://zoom.us/j/123456789",
        platform: "Zoom",
        replayUrl: "https://youtube.com/watch?v=demo123",
        tags: ["Entrepreneuriat", "Business"]
    },
    {
        id: 3,
        title: "Introduction à la Cybersécurité",
        description: "Protéger vos données personnelles et professionnelles.",
        speaker: "Hery T.",
        date: "2026-02-10T15:00:00",
        price: 5000,
        status: "PENDING", // En attente de validation
        link: "https://teams.microsoft.com/l/meetup-join/...",
        platform: "Microsoft Teams",
        replayUrl: null,
        tags: ["Sécurité", "Informatique"]
    }
];

export const conferenceService = {
    getAll: async () => {
        // Simulate API delay
        await new Promise(r => setTimeout(r, 500));

        const stored = JSON.parse(localStorage.getItem(CONFERENCE_STORAGE_KEY));
        if (!stored) {
            localStorage.setItem(CONFERENCE_STORAGE_KEY, JSON.stringify(DEMO_CONFERENCES));
            return DEMO_CONFERENCES;
        }
        return stored;
    },

    create: async (conferenceData) => {
        await new Promise(r => setTimeout(r, 500));
        const stored = JSON.parse(localStorage.getItem(CONFERENCE_STORAGE_KEY) || '[]');

        const newConf = {
            id: Date.now(),
            ...conferenceData,
            status: "PENDING", // Default status for user submissions
            createdAt: new Date().toISOString()
        };

        stored.push(newConf);
        localStorage.setItem(CONFERENCE_STORAGE_KEY, JSON.stringify(stored));
        return newConf;
    },

    updateStatus: async (id, status) => {
        const stored = JSON.parse(localStorage.getItem(CONFERENCE_STORAGE_KEY) || '[]');
        const updated = stored.map(c => c.id === id ? { ...c, status } : c);
        localStorage.setItem(CONFERENCE_STORAGE_KEY, JSON.stringify(updated));
        return updated.find(c => c.id === id);
    },

    delete: async (id) => {
        let stored = JSON.parse(localStorage.getItem(CONFERENCE_STORAGE_KEY) || '[]');
        stored = stored.filter(c => c.id !== id);
        localStorage.setItem(CONFERENCE_STORAGE_KEY, JSON.stringify(stored));
    },

    register: async (conferenceId, user) => {
        await new Promise(r => setTimeout(r, 500));
        const registrations = JSON.parse(localStorage.getItem(REGISTRATION_STORAGE_KEY) || '[]');

        // Prevent duplicate registration
        if (registrations.some(r => r.conferenceId === conferenceId && r.userEmail === user.email)) {
            return { success: false, message: "Déjà inscrit" };
        }

        registrations.push({
            conferenceId,
            userEmail: user.email,
            userName: user.username,
            registeredAt: new Date().toISOString()
        });

        localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(registrations));
        return { success: true };
    },

    isRegistered: (conferenceId, userEmail) => {
        if (!userEmail) return false;
        const registrations = JSON.parse(localStorage.getItem(REGISTRATION_STORAGE_KEY) || '[]');
        return registrations.some(r => r.conferenceId === conferenceId && r.userEmail === userEmail);
    },

    getRegistrationsCount: (conferenceId) => {
        const registrations = JSON.parse(localStorage.getItem(REGISTRATION_STORAGE_KEY) || '[]');
        return registrations.filter(r => r.conferenceId === conferenceId).length;
    }
};
