import api from './api';
import { DEMO_CONTENTS } from '../data/demoContent';

const LOCAL_STORAGE_KEY = 'mianara_local_contents';

export const contentService = {
    getAll: async () => {
        try {
            // Try fetching from API first
            // const response = await api.get('contents/');
            // return response.data;
            throw new Error("Demo Mode: Skip API");
        } catch (error) {
            // Fallback: Return DEMO_CONTENTS + LocalStorage Contents
            const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') || [];
            const deletedDemos = JSON.parse(localStorage.getItem('mianara_deleted_demos') || '[]') || [];

            // Filter demo contents: remove deleted ones AND those that are shadowed by local edits (same ID)
            const activeDemos = DEMO_CONTENTS.filter(d =>
                !deletedDemos.includes(d.id) &&
                !local.some(l => l.id == d.id)
            );

            // Merge: Local items first
            return [...local, ...activeDemos];
        }
    },
    getById: async (id) => {
        try {
            // Try API
            // const response = await api.get(`contents/${id}/`);
            // return response.data;
            throw new Error("Demo Mode: Skip API");
        } catch (error) {
            // Check local first
            const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
            const foundLocal = local.find(i => i.id == id); // Loose equality for string/int ids
            if (foundLocal) return foundLocal;

            // Check demo
            return DEMO_CONTENTS.find(i => i.id == id);
        }
    },
    create: async (formData) => {
        // Mock creation
        await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay

        const newArticle = {
            id: 'local-' + Date.now(),
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            file_type: formData.get('file_type'),
            body: formData.get('body'), // Assuming it's simple text for demo
            created_at: new Date().toISOString(),
            is_premium: formData.get('is_monetized') === 'true',
            author_name: "Administrateur" // Mock author
        };

        const current = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const updated = [newArticle, ...current];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

        return newArticle;
    },

    // --- Mock Engagement Features (Local Storage) ---
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
        // Returns { average: 4.5, count: 12, userRating: null }
        return stored ? JSON.parse(stored) : { average: 0, count: 0, userRating: null };
    },
    delete: async (id) => {
        // Mock delete
        await new Promise(resolve => setTimeout(resolve, 500));

        let local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const initialLength = local.length;
        local = local.filter(i => i.id != id);

        if (local.length < initialLength) {
            // It was a local item
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(local));
            return true;
        } else {
            // It might be a demo item, store in "deleted_demo_ids"
            const deletedDemos = JSON.parse(localStorage.getItem('mianara_deleted_demos') || '[]');
            deletedDemos.push(id);
            localStorage.setItem('mianara_deleted_demos', JSON.stringify(deletedDemos));
            return true;
        }
    },

    update: async (id, formData) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        let local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const index = local.findIndex(i => i.id == id);

        const updatedArticle = {
            id: id,
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            file_type: formData.get('file_type'),
            body: formData.get('body'),
            created_at: new Date().toISOString(), // Update date? Or keep original? Let's update.
            is_premium: formData.get('is_monetized') === 'true',
            author_name: "Administrateur (Modifié)"
        };

        if (index !== -1) {
            local[index] = { ...local[index], ...updatedArticle };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(local));
            return updatedArticle;
        } else {
            // If it's a demo content being edited, we must "promote" it to local content
            // effectively shadowing the demo content
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([updatedArticle, ...local]));
            // And ensuring the original demo content is "hidden" if we treat ID uniqueness strictly
            // But simpler: just add it to local, and `getAll` sends local first.
            // If ID is same, we need logic in getAll to dedup.
            // The current getAll merges: `return [...local, ...DEMO_CONTENTS];`
            // We should dedup in getAll.

            // For this hack, let's just save it.
            return updatedArticle;
        }
    },
    getTrending: async () => {
        // Mocking "Trending" by picking random high-quality items or strictly by rating if available
        // For now, we fetch all and sort by a fake "popularity" score mixed with real mock ratings
        const all = await contentService.getAll();

        // Enhance with local ratings
        const enhanced = await Promise.all(all.map(async (item) => {
            const ratingData = await contentService.getRating(item.id);
            return { ...item, rating: ratingData.average, ratingCount: ratingData.count };
        }));

        // Sort by Rating then by ID (pseudo-random but stable)
        return enhanced.filter(i => i.is_premium || i.rating > 0).slice(0, 3);
    }
};
