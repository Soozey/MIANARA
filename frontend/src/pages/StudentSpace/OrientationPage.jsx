import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import studentApi from '../../services/studentApi';

const OrientationPage = () => {
    const navigate = useNavigate();
    const [orientations, setOrientations] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrientations = async () => {
            try {
                const data = await studentApi.getOrientationsByFiliere();
                setOrientations(data);
            } catch (error) {
                console.error("Erreur chargement orientations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrientations();
    }, []);

    return (
        <div className="student-space">
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={() => navigate('/etudiants')}
                    className="flex items-center text-slate-500 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    Retour au tableau de bord
                </button>

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">Orientation & Carrières</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Découvrez les métiers d'avenir à Madagascar et choisissez la filière qui correspond à vos ambitions.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {Object.entries(orientations).map(([filiere, items]) => (
                            <div key={filiere} className="level-group">
                                <h2 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
                                    <Briefcase className="text-blue-500" size={24} />
                                    {filiere}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                                            <h3 className="font-bold text-lg text-slate-800 mb-2">{item.titre}</h3>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {item.series_recommandees && item.series_recommandees.map((serie) => (
                                                    <span key={serie} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">
                                                        Série {serie}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="space-y-3 text-sm text-slate-600">
                                                <div className="flex items-start gap-2">
                                                    <GraduationCap size={16} className="mt-0.5 text-slate-400" />
                                                    <span>{item.niveau_etudes}</span>
                                                </div>
                                                {item.debouches && (
                                                    <div className="flex items-start gap-2">
                                                        <TrendingUp size={16} className="mt-0.5 text-slate-400" />
                                                        <span className="line-clamp-2">{item.debouches}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrientationPage;
