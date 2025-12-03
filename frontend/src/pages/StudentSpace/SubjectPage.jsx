import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, Clock } from 'lucide-react';
import studentApi from '../../services/studentApi';
import ProgramItem from '../../components/StudentSpace/ProgramItem';
import FilterBar from '../../components/StudentSpace/FilterBar';

const SubjectPage = () => {
    const { classe: classeId, matiere: matiereId } = useParams();
    const navigate = useNavigate();

    const [programmes, setProgrammes] = useState([]);
    const [classeInfo, setClasseInfo] = useState(null);
    const [matiereInfo, setMatiereInfo] = useState(null); // On pourrait avoir besoin d'un endpoint pour ça ou le déduire
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ trimestre: '', type: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // 1. Récupérer les infos de la classe
                const classeData = await studentApi.getClasseById(classeId);
                setClasseInfo(classeData);

                // 2. Trouver les infos de la matière dans la liste de la classe
                // Note: Idéalement on aurait un endpoint /matieres/:id
                const matiere = classeData.matieres.find(m => m.id === parseInt(matiereId));
                setMatiereInfo(matiere);

                // 3. Récupérer les programmes
                const programmesData = await studentApi.getProgrammes({
                    classe: classeId,
                    matiere: matiereId,
                    trimestre: filters.trimestre
                });
                setProgrammes(programmesData);

            } catch (error) {
                console.error("Erreur chargement données:", error);
            } finally {
                setLoading(false);
            }
        };

        if (classeId && matiereId) {
            fetchData();
        }
    }, [classeId, matiereId, filters.trimestre]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleResetFilters = () => {
        setFilters({ trimestre: '', type: '' });
    };

    // Filtrage local pour le type de contenu (si l'API ne le supporte pas directement sur /programmes)
    // Ou si on veut filtrer les ressources affichées dans les programmes
    // Pour l'instant on filtre juste les programmes affichés

    if (loading) {
        return (
            <div className="student-space flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!classeInfo || !matiereInfo) {
        return (
            <div className="student-space text-center py-12">
                <h2 className="text-xl font-bold text-slate-700">Matière introuvable</h2>
                <button
                    onClick={() => navigate(`/etudiants/programmes/${classeId}`)}
                    className="mt-4 text-blue-600 hover:underline"
                >
                    Retour à la classe
                </button>
            </div>
        );
    }

    return (
        <div className="student-space">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate(`/etudiants/programmes/${classeId}`)}
                    className="flex items-center text-slate-500 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    Retour à la classe {classeInfo.nom}
                </button>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8 overflow-hidden relative">
                    <div
                        className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full -mr-16 -mt-16 pointer-events-none"
                        style={{ backgroundColor: matiereInfo.couleur }}
                    ></div>

                    <div className="relative z-10 flex items-start gap-6">
                        <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-sm"
                            style={{ backgroundColor: `${matiereInfo.couleur}20`, color: matiereInfo.couleur }}
                        >
                            {matiereInfo.icone}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800 mb-2">{matiereInfo.nom}</h1>
                            <div className="flex items-center gap-4 text-slate-500 text-sm">
                                <span className="flex items-center gap-1">
                                    <BookOpen size={16} />
                                    {programmes.length} chapitres
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={16} />
                                    Programme officiel
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <FilterBar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onReset={handleResetFilters}
                />

                <div className="space-y-4">
                    {programmes.length > 0 ? (
                        programmes.map((programme) => (
                            <ProgramItem key={programme.id} programme={programme} />
                        ))
                    ) : (
                        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                            <p className="text-slate-500">Aucun programme trouvé pour cette sélection.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubjectPage;
