import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import studentApi from '../../services/studentApi';

const ScholarshipsPage = () => {
    const navigate = useNavigate();
    const [bourses, setBourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterActive, setFilterActive] = useState(true);

    useEffect(() => {
        const fetchBourses = async () => {
            try {
                setLoading(true);
                const data = await studentApi.getBourses({ actives: filterActive });
                setBourses(data);
            } catch (error) {
                console.error("Erreur chargement bourses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBourses();
    }, [filterActive]);

    return (
        <div className="student-space">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => navigate('/etudiants')}
                    className="flex items-center text-slate-500 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    Retour au tableau de bord
                </button>

                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">Bourses & Aides</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explorez les opportunités de financement pour vos études : bourses d'État, aides internationales et programmes spéciaux.
                    </p>
                </div>

                <div className="flex justify-end mb-6">
                    <label className="flex items-center cursor-pointer gap-2 text-sm text-slate-600">
                        <input
                            type="checkbox"
                            checked={filterActive}
                            onChange={(e) => setFilterActive(e.target.checked)}
                            className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        Afficher uniquement les bourses actives
                    </label>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {bourses.length > 0 ? (
                            bourses.map((bourse) => (
                                <div key={bourse.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-slate-800">{bourse.titre}</h3>
                                            {bourse.est_active && !bourse.est_expiree ? (
                                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                                                    <CheckCircle size={12} /> Active
                                                </span>
                                            ) : (
                                                <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full font-medium">
                                                    Expirée
                                                </span>
                                            )}
                                        </div>

                                        <div className="text-blue-600 font-medium mb-3">{bourse.organisme}</div>
                                        <p className="text-slate-600 mb-4 text-sm">{bourse.description}</p>

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                            {bourse.montant && (
                                                <div className="flex items-center gap-1">
                                                    <span className="font-semibold">Montant:</span> {bourse.montant}
                                                </div>
                                            )}
                                            {bourse.deadline && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={16} />
                                                    <span className="font-semibold">Date limite:</span> {bourse.deadline}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[200px]">
                                        <div className="mb-4">
                                            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Conditions</h4>
                                            <p className="text-xs text-slate-600 line-clamp-3">{bourse.conditions}</p>
                                        </div>

                                        {bourse.url_candidature && (
                                            <a
                                                href={bourse.url_candidature}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                            >
                                                Postuler <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                                <p className="text-slate-500">Aucune bourse trouvée pour le moment.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScholarshipsPage;
