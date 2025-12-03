import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Award, Search } from 'lucide-react';
import studentApi from '../../services/studentApi';
import './StudentSpace.css';

const StudentSpace = () => {
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
            <div className="student-header">
                <h1>Espace Étudiant MIANÀRA</h1>
                <p>
                    Accédez à tous les programmes scolaires officiels de Madagascar,
                    de la 11ème à la Terminale.
                </p>
            </div>

            {/* Navigation Rapide */}
            <div className="dashboard-grid">
                <div className="feature-card" onClick={() => navigate('/etudiants/programmes')}>
                    <div className="feature-icon">
                        <BookOpen size={32} />
                    </div>
                    <h3>Programmes Scolaires</h3>
                    <p>Consultez les cours, exercices et ressources par classe et matière.</p>
                </div>

                <div className="feature-card" onClick={() => navigate('/etudiants/orientation')}>
                    <div className="feature-icon">
                        <GraduationCap size={32} />
                    </div>
                    <h3>Orientation & Carrières</h3>
                    <p>Découvrez les métiers d'avenir et choisissez votre filière.</p>
                </div>

                <div className="feature-card" onClick={() => navigate('/etudiants/bourses')}>
                    <div className="feature-icon">
                        <Award size={32} />
                    </div>
                    <h3>Bourses & Aides</h3>
                    <p>Trouvez des financements pour vos études supérieures.</p>
                </div>
            </div>

            {/* Liste des Classes */}
            <div className="classes-section">
                <h2 className="section-title">
                    <Search size={24} />
                    Parcourir par classe
                </h2>

                {loading ? (
                    <p>Chargement des classes...</p>
                ) : (
                    <>
                        {classes.LYCEE && classes.LYCEE.length > 0 && (
                            <div className="level-group">
                                <h3 className="level-title">Lycée</h3>
                                <div className="classes-grid">
                                    {classes.LYCEE.map((classe) => (
                                        <div
                                            key={classe.id}
                                            className="class-card"
                                            onClick={() => handleClassClick(classe.id)}
                                        >
                                            <div className="class-icon">🎓</div>
                                            <div className="class-name">{classe.nom}</div>
                                            {classe.serie && <div className="class-info">Série {classe.serie}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {classes.COLLEGE && classes.COLLEGE.length > 0 && (
                            <div className="level-group">
                                <h3 className="level-title">Collège</h3>
                                <div className="classes-grid">
                                    {classes.COLLEGE.map((classe) => (
                                        <div
                                            key={classe.id}
                                            className="class-card"
                                            onClick={() => handleClassClick(classe.id)}
                                        >
                                            <div className="class-icon">📚</div>
                                            <div className="class-name">{classe.nom}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {classes.PRIMAIRE && classes.PRIMAIRE.length > 0 && (
                            <div className="level-group">
                                <h3 className="level-title">Primaire</h3>
                                <div className="classes-grid">
                                    {classes.PRIMAIRE.map((classe) => (
                                        <div
                                            key={classe.id}
                                            className="class-card"
                                            onClick={() => handleClassClick(classe.id)}
                                        >
                                            <div className="class-icon">🎒</div>
                                            <div className="class-name">{classe.nom}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentSpace;
