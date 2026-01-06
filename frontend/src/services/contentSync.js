import { DEMO_CONTENTS } from "../data/demoContent";
import { contentService } from "./contentService";
import api from "./api";

// Map demo content fields to API fields
const mapDemoToApi = (demoItem) => ({
    title: demoItem.title,
    category: "AUTRE", // Default fallback, or we need a map. The demo data has human readable categories "Formation linguistique"
    // but the backend expects keys "LANGUE". We should probably map them or let the backend handle it.
    // For now, let's try to map some common ones or send the text and see if backend accepts it 
    // (it won't if it's a ChoiceField with strict validation).
    // Let's do a quick map based on the demo content we saw.
    level: demoItem.level,
    description: demoItem.summary, // Map summary to description
    body: demoItem.body,
    file_type: "TEXT", // Default to TEXT for these articles
    questions: demoItem.questions || [],
    quiz: demoItem.quiz || [], // Map the new quiz field
});

const CATEGORY_MAPPING = {
    "Formation linguistique": "LANGUE",
    "Éducation scolaire": "SCOLAIRE",
    "Orientation professionnelle": "ORIENTATION",
    "Techniques de candidature": "CANDIDATURE",
    "Entrepreneuriat & Gestion": "ENTREPRENEURIAT",
    "Formation professionnelle": "PRO",
    "Santé & Hygiène": "SANTE",
    "Développement personnel": "PERSO",
    "Vie Citoyenne": "CITOYEN",
    "Sensibilisation Sociale": "SOCIAL",
    "Environnement & Écologie": "ECOLOGIE",
    "Sécurité (Globale)": "SECURITE",
    "Finances personnelles": "FINANCE",
    "Économie & Industrie": "ECONOMIE",
    "Autre": "AUTRE",
    // Add mappings for new categories in demoContent if any
    "Métiers d’avenir": "PRO", // Fallback
    "Entrepreneuriat": "ENTREPRENEURIAT",
    "Gestion d’entreprise": "ENTREPRENEURIAT",
    "Innovation locale": "ENTREPRENEURIAT",
    "Santé et sécurité": "SANTE",
    "Vie sociale et citoyenneté": "CITOYEN",
    "Environnement": "ECOLOGIE",
    "Éducation / Sécurité": "SCOLAIRE",
    "Société / Sécurité": "SECURITE",
    "Économie / Agro-industrie": "ECONOMIE",
    "Société / Sécurité routière": "SECURITE",
    "Intelligence Artificielle": "PRO",
    "Métiers d'Avenir": "PRO",
    "Médias / Sécurité Numérique": "SECURITE",
    "Sécurité Numérique": "SECURITE"
};

export const syncDemoContent = async () => {
    console.log("🔄 Starting demo content sync...");
    try {
        const existing = await contentService.getAll();
        const existingTitles = new Set(existing.map((c) => c.title));

        let addedCount = 0;
        let updatedCount = 0;

        for (const item of DEMO_CONTENTS) {
            const payload = mapDemoToApi(item);
            // Apply category mapping
            if (CATEGORY_MAPPING[item.category]) {
                payload.category = CATEGORY_MAPPING[item.category];
            }

            if (!existingTitles.has(item.title)) {
                // Create new
                try {
                    await api.post("contents/", payload);
                    console.log(`✅ Imported: ${item.title}`);
                    addedCount++;
                } catch (err) {
                    console.error(`❌ Failed to import ${item.title}:`, err.response?.data || err.message);
                }
            } else {
                // Update existing (body, summary/desc, AND quiz)
                const existingItem = existing.find(c => c.title === item.title);
                if (existingItem) {
                    try {
                        // Only patch the body and summary to keep it clean, AND quiz
                        await api.patch(`contents/${existingItem.id}/`, {
                            body: payload.body,
                            description: payload.description,
                            quiz: payload.quiz
                        });
                        console.log(`🔄 Updated details for: ${item.title}`);
                        updatedCount++;
                    } catch (err) {
                        console.error(`❌ Failed to update ${item.title}:`, err.response?.data || err.message);
                    }
                }
            }
        }

        if (addedCount > 0 || updatedCount > 0) {
            console.log(`🎉 Sync complete! Added ${addedCount}, Updated ${updatedCount}.`);
        } else {
            console.log("👍 Everything is up to date.");
        }
    } catch (err) {
        console.error("Sync failed:", err);
    }
};
