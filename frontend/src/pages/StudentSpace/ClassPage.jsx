import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen } from 'lucide-react';
import studentApi from '../../services/studentApi';
import SubjectCard from '../../components/StudentSpace/SubjectCard';
import SearchBar from '../../components/StudentSpace/SearchBar';

const ClassPage = () => {
    const { classe: classeId } = useParams();
    const navigate = useNavigate();
    const [classeData, setClasseData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClasseDetails = async () => {
            try {
                const data = await studentApi.getClasseById(classeId);
                setClasseData(data);
            } catch (error) {
                console.error("Erreur lors du chargement de la classe:", error);
            } finally {
                setLoading(false);
            }
        };

        if (classeId) {
            fetchClasseDetails();
        }
    }, [classeId]);

    const handleSubjectClick = (matiereId) => {
        navigate(`/etudiants/programmes/${classeId}/${matiereId}`);
    };

    if (loading) {
        return (
            <div className="student-space flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!classeData) {
        return (
            <div className="student-space text-center py-12">
                <h2 className="text-xl font-bold text-slate-700">Classe introuvable</h2>
                <button
                    onClick={() => navigate('/etudiants/programmes')}
                    className="mt-4 text-blue-600 hover:underline"
                >
                    Retour aux programmes
                </button>
            </div>
        );
    }

    return (
        <div className="student-space">
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={() => navigate('/etudiants/programmes')}
                    className="flex items-center text-slate-500 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    Retour aux classes
                </button>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-10">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl text-blue-600">
                            {classeData.niveau === 'LYCEE' ? '🎓' : classeData.niveau === 'COLLEGE' ? '📚' : '🎒'}
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl font-bold text-slate-800 mb-2">{classeData.nom}</h1>
                            <p className="text-slate-600">{classeData.description || `Programme officiel de la classe de ${classeData.nom}`}</p>
                            <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                    <BookOpen size={16} />
                                    {classeData.matieres ? classeData.matieres.length : 0} matières
                                </span>
                                {classeData.serie && (
                                    <span className="bg-slate-100 px-3 py-1 rounded-full font-medium text-slate-700">
                                        Série {classeData.serie}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold text-slate-700 mb-6">Matières disponibles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {classeData.matieres && classeData.matieres.map((matiere) => (
                            <SubjectCard
                                key={matiere.id}
                                matiere={matiere}
                                onClick={() => handleSubjectClick(matiere.id)}
                            />
                        ))}
                    </div>

                    {(!classeData.matieres || classeData.matieres.length === 0) && (
                        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                            <p className="text-slate-500">Aucune matière disponible pour le moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassPage;
