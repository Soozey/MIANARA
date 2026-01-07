import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronLeft } from 'lucide-react';
import studentApi from '../../services/studentApi';
import SearchBar from '../../components/StudentSpace/SearchBar';
import './StudentSpace.css';

const ProgramsList = () => {
    const navigate = useNavigate();
    const [classes, setClasses] = useState({ PRIMAIRE: [], COLLEGE: [], LYCEE: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await studentApi.getClassesByLevel();
                setClasses(data);
            } catch (error) {
                console.error("Erreur lors du chargement des classes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClasses();
    }, []);

    const handleClassClick = (classeId) => {
        navigate(`/etudiants/programmes/${classeId}`);
    };

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

                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">Programmes Scolaires</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Sélectionnez votre classe pour accéder à tous les cours, exercices et ressources pédagogiques conformes au programme officiel.
                    </p>
                </div>

                <SearchBar />

                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-slate-500">Chargement des classes...</p>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {['LYCEE', 'COLLEGE', 'PRIMAIRE'].map((level) => (
                            classes[level] && classes[level].length > 0 && (
                                <div key={level} className="level-group">
                                    <h2 className="text-xl font-bold text-slate-700 mb-6 border-b border-slate-200 pb-2">
                                        {level === 'LYCEE' ? 'Lycée' : level === 'COLLEGE' ? 'Collège' : 'Primaire'}
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {classes[level].map((classe) => (
                                            <div
                                                key={classe.id}
                                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group text-center"
                                                onClick={() => handleClassClick(classe.id)}
                                            >
                                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                                                    {level === 'LYCEE' ? '🎓' : level === 'COLLEGE' ? '📚' : '🎒'}
                                                </div>
                                                <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600">
                                                    {classe.nom}
                                                </h3>
                                                {classe.serie && (
                                                    <span className="inline-block mt-2 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                                                        Série {classe.serie}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgramsList;
