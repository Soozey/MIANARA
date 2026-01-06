import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { conferenceService } from "../services/conferenceService";

export default function Conference() {
    const { user } = useAuth();
    const [conferences, setConferences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        speaker: "",
        date: "",
        price: 0,
        description: "",
        link: "",
        platform: "Google Meet",
        tags: ""
    });

    const fetchConferences = async () => {
        try {
            const data = await conferenceService.getAll();
            setConferences(data);
        } catch (error) {
            console.error("Failed to load conferences", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchConferences();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        const conf = {
            ...formData,
            tags: formData.tags.split(',').map(t => t.trim()),
            price: Number(formData.price)
        };
        await conferenceService.create(conf);
        setIsCreating(false);
        setFormData({ title: "", speaker: "", date: "", price: 0, description: "", link: "", platform: "Google Meet", tags: "" });
        fetchConferences();
        alert("Conférence proposée avec succès ! Elle sera examinée par l'équipe.");
    };

    const handleStatusUpdate = async (id, status) => {
        await conferenceService.updateStatus(id, status);
        fetchConferences();
    };

    const handleRegister = async (confId) => {
        if (!user) {
            alert("Veuillez vous connecter pour vous inscrire.");
            return;
        }
        await conferenceService.register(confId, user);
        // Force refresh to update UI (in a real app, optimize this)
        fetchConferences();
        alert("Inscription validée !");
    };

    if (loading) return <div className="p-8 text-center">Chargement...</div>;

    const pendingConferences = conferences.filter(c => c.status === "PENDING");
    const approvedConferences = conferences.filter(c => c.status === "APPROVED");

    const upcoming = approvedConferences
        .filter(c => new Date(c.date) > new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const replays = approvedConferences
        .filter(c => new Date(c.date) <= new Date() || c.replayUrl);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">🎤 Conférences & Lives</h1>
                    <p className="text-lg text-gray-600">Apprenez en direct avec nos experts et visionnez les replays.</p>
                </div>
                <button
                    onClick={() => setIsCreating(true)}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg flex items-center gap-2"
                >
                    <span>➕</span> Proposer une conférence
                </button>
            </div>

            {/* ADMIN DASHBOARD */}
            {user?.isAdmin && pendingConferences.length > 0 && (
                <div className="mb-12 bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                        <span>🛡️</span> Espace Administration - En attente de validation
                    </h2>
                    <div className="grid gap-4">
                        {pendingConferences.map(conf => (
                            <div key={conf.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 border border-orange-100">
                                <div>
                                    <h3 className="font-bold text-gray-900">{conf.title}</h3>
                                    <p className="text-sm text-gray-500">Par {conf.speaker} • {new Date(conf.date).toLocaleString()}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleStatusUpdate(conf.id, "APPROVED")}
                                        className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium"
                                    >
                                        ✅ Valider
                                    </button>
                                    <button
                                        onClick={() => handleStatusUpdate(conf.id, "REJECTED")}
                                        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-medium"
                                    >
                                        ❌ Refuser
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* CREATION FORM MODAL */}
            {isCreating && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
                        <button
                            onClick={() => setIsCreating(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Proposer une conférence</h2>
                        <form onSubmit={handleCreate} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre de l'événement</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                        value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Intervenant / Formateur</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                        value={formData.speaker} onChange={e => setFormData({ ...formData, speaker: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date et Heure</label>
                                    <input required type="datetime-local" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                        value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Prix (Ar) - 0 pour Gratuit</label>
                                    <input required type="number" min="0" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                        value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea required rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                    value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Plateforme</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                        value={formData.platform} onChange={e => setFormData({ ...formData, platform: e.target.value })}>
                                        <option>Google Meet</option>
                                        <option>Zoom</option>
                                        <option>Microsoft Teams</option>
                                        <option>Youtube Live</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Lien de la réunion</label>
                                    <input required type="url" placeholder="https://..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                        value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (séparés par des virgules)</label>
                                <input type="text" placeholder="Tech, Business, Santé..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                                    value={formData.tags} onChange={e => setFormData({ ...formData, tags: e.target.value })} />
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                                <button type="button" onClick={() => setIsCreating(false)} className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">Annuler</button>
                                <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-lg">Soumettre</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* UPCOMING EVENTS */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-indigo-100 p-2 rounded-lg text-2xl">📅</span> Prochains Événements
            </h2>

            {upcoming.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {upcoming.map(conf => {
                        const isRegistered = conferenceService.isRegistered(conf.id, user?.email);
                        return (
                            <div key={conf.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white relative">
                                    {conf.price === 0 ? (
                                        <span className="absolute top-4 right-4 bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full uppercase">Gratuit</span>
                                    ) : (
                                        <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">{conf.price.toLocaleString()} Ar</span>
                                    )}
                                    <div className="text-indigo-100 font-medium mb-1">{new Date(conf.date).toLocaleDateString()} à {new Date(conf.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                    <h3 className="text-xl font-bold leading-tight">{conf.title}</h3>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                            {conf.speaker.charAt(0)}
                                        </div>
                                        <span className="text-gray-700 font-medium">{conf.speaker}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-6 flex-1">{conf.description}</p>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">📺 {conf.platform}</span>
                                            <span>👥 {conferenceService.getRegistrationsCount(conf.id)} inscrits</span>
                                        </div>

                                        {isRegistered ? (
                                            <a href={conf.link} target="_blank" rel="noopener noreferrer"
                                                className="block w-full text-center py-3 bg-green-50 text-green-700 font-bold rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
                                                🔗 Accéder à la réunion
                                            </a>
                                        ) : (
                                            <button onClick={() => handleRegister(conf.id)}
                                                className="block w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md">
                                                S'inscrire
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl mb-16">
                    <p className="text-gray-500 text-lg">Aucune conférence à venir pour le moment.</p>
                </div>
            )}

            {/* REPLAYS */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-red-100 p-2 rounded-lg text-2xl">▶️</span> Replays Récents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {replays.length > 0 ? replays.map(conf => (
                    <div key={conf.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                        {conf.replayUrl ? (
                            <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer">
                                {/* Thumbnail Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-lg">{conf.title}</h3>
                                </div>
                                <span className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform">▶️</span>
                            </div>
                        ) : (
                            <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
                                Replay non disponible
                            </div>
                        )}
                        <div className="p-4">
                            <p className="text-sm text-gray-500 mb-2">Diffusé le {new Date(conf.date).toLocaleDateString()}</p>
                            <h3 className="font-bold text-gray-900 mb-2">{conf.title}</h3>
                            <p className="text-gray-600 text-xs line-clamp-2">{conf.description}</p>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-full text-center py-12 bg-gray-50 rounded-2xl">
                        <p className="text-gray-500">Aucun replay disponible.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
