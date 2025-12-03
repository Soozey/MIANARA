import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentService } from "../services/contentService";
import api from "../services/api";

export default function AddArticle() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        category: "AUTRE",
        level: "",
        description: "",
        body: "",
        file_type: "TEXT",
        questions: [],
    });

    const [newQuestion, setNewQuestion] = useState({
        type: "Grammaire",
        prompt: "",
        answer: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleQuestionChange = (e) => {
        const { name, value } = e.target;
        setNewQuestion((prev) => ({ ...prev, [name]: value }));
    };

    const addQuestion = () => {
        if (!newQuestion.prompt || !newQuestion.answer) return;
        setFormData((prev) => ({
            ...prev,
            questions: [...prev.questions, newQuestion],
        }));
        setNewQuestion({ type: "Grammaire", prompt: "", answer: "" });
    };

    const removeQuestion = (index) => {
        setFormData((prev) => ({
            ...prev,
            questions: prev.questions.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Using direct API call or service if updated
            // Assuming contentService.create is not yet implemented or we use api directly
            await api.post("contents/", formData);
            navigate("/library");
        } catch (err) {
            console.error(err);
            setError("Erreur lors de la création de l'article.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md my-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Ajouter un nouvel article</h1>

            {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Titre */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Catégorie */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="LANGUE">Formation linguistique</option>
                            <option value="SCOLAIRE">Éducation scolaire</option>
                            <option value="ORIENTATION">Orientation professionnelle</option>
                            <option value="CANDIDATURE">Techniques de candidature</option>
                            <option value="ENTREPRENEURIAT">Entrepreneuriat & Gestion</option>
                            <option value="PRO">Formation professionnelle</option>
                            <option value="SANTE">Santé & Hygiène</option>
                            <option value="PERSO">Développement personnel</option>
                            <option value="CITOYEN">Vie Citoyenne</option>
                            <option value="SOCIAL">Sensibilisation Sociale</option>
                            <option value="ECOLOGIE">Environnement & Écologie</option>
                            <option value="SECURITE">Sécurité (Globale)</option>
                            <option value="FINANCE">Finances personnelles</option>
                            <option value="ECONOMIE">Économie & Industrie</option>
                            <option value="AUTRE">Autre</option>
                        </select>
                    </div>

                    {/* Niveau */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Niveau cible</label>
                        <input
                            type="text"
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            placeholder="Ex: Débutant, Lycée..."
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Résumé */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Résumé (Description courte)</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="2"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Corps de l'article */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contenu de l'article</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        rows="10"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md font-mono text-sm"
                        placeholder="Vous pouvez utiliser du HTML simple ici..."
                    />
                </div>

                {/* Section Questions */}
                <div className="border-t pt-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Questions de compréhension</h3>

                    {/* Liste des questions ajoutées */}
                    {formData.questions.length > 0 && (
                        <ul className="space-y-3 mb-6">
                            {formData.questions.map((q, idx) => (
                                <li key={idx} className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold uppercase text-gray-500">{q.type}</span>
                                        <p className="font-medium">{q.prompt}</p>
                                        <p className="text-sm text-gray-600 mt-1">Rép: {q.answer}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeQuestion(idx)}
                                        className="text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Supprimer
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Formulaire ajout question */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={newQuestion.type}
                                    onChange={handleQuestionChange}
                                    className="w-full p-2 border border-blue-200 rounded text-sm"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-gray-600 mb-1">Question</label>
                                <input
                                    type="text"
                                    name="prompt"
                                    value={newQuestion.prompt}
                                    onChange={handleQuestionChange}
                                    className="w-full p-2 border border-blue-200 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-600 mb-1">Réponse attendue</label>
                            <input
                                type="text"
                                name="answer"
                                value={newQuestion.answer}
                                onChange={handleQuestionChange}
                                className="w-full p-2 border border-blue-200 rounded text-sm"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={addQuestion}
                            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
                        >
                            Ajouter cette question
                        </button>
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold text-lg shadow-md transition-all disabled:opacity-50"
                    >
                        {loading ? "Publication..." : "Publier l'article"}
                    </button>
                </div>
            </form>
        </div>
    );
}
