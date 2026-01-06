import { useNavigate } from 'react-router-dom';
import { Compass, Briefcase, GraduationCap, FileText, Users, TrendingUp, Target, Search, Building, UserCheck } from 'lucide-react';

const OrientationCarrierePage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'orientation-pro',
            title: "Orientation professionnelle",
            icon: <Compass size={28} />,
            description: "Trouver sa voie et définir son projet professionnel",
            color: "blue",
            subsections: [
                { name: "Tests d'orientation", path: "/library?category=orientation-pro&tag=test" },
                { name: "Conseils d'experts", path: "/library?category=orientation-pro&tag=conseil" },
                { name: "Reconversion", path: "/library?category=orientation-pro&tag=reconversion" }
            ]
        },
        {
            id: 'metiers',
            title: "Métiers & Compétences",
            icon: <Briefcase size={28} />,
            description: "Panorama des carrières d'aujourd'hui et de demain",
            color: "indigo",
            subsections: [
                { name: "Métiers d'avenir (Digital, Vert...)", path: "/library?category=metiers&tag=avenir" },
                { name: "Métiers du digital", path: "/library?category=metiers&tag=digital" },
                { name: "Métiers interchangeables", path: "/library?category=metiers&tag=transferable" },
                { name: "Métiers en disparition", path: "/library?category=metiers&tag=disparition" }
            ]
        },
        {
            id: 'recherche-emploi',
            title: "Recherche d'emploi",
            icon: <FileText size={28} />,
            description: "Tous les outils pour décrocher le job de vos rêves",
            color: "purple",
            subsections: [
                { name: "CV & Lettre de motivation", path: "/library?category=recherche-emploi&tag=cv" },
                { name: "Préparer l'entretien", path: "/library?category=recherche-emploi&tag=entretien" },
                { name: "Réseaux sociaux professionnels", path: "/library?category=recherche-emploi&tag=linkedin" },
                { name: "Techniques de recherche", path: "/library?category=recherche-emploi&tag=strategie" }
            ]
        },
        {
            id: 'employabilite',
            title: "Employabilité sans diplôme",
            icon: <TrendingUp size={28} />,
            description: "Réussir sa carrière grâce à ses compétences et son expérience",
            color: "green",
            subsections: [
                { name: "Valoriser l'expérience", path: "/library?category=employabilite&tag=experience" },
                { name: "Soft skills (Savoir-être)", path: "/library?category=employabilite&tag=softskills" },
                { name: "Formations courtes", path: "/library?category=employabilite&tag=formation" }
            ]
        },
        {
            id: 'bilan',
            title: "Bilan de compétences",
            icon: <Target size={28} />,
            description: "Faire le point pour mieux rebondir",
            color: "orange",
            subsections: [
                { name: "Auto-évaluation", path: "/library?category=bilan&tag=auto" },
                { name: "Identifier ses forces", path: "/library?category=bilan&tag=swot" },
                { name: "Construire son projet", path: "/library?category=bilan&tag=projet" }
            ]
        },
        {
            id: 'annuaire',
            title: "Annuaire & Réseaux",
            icon: <Users size={28} />,
            description: "Où chercher ? Qui contacter ?",
            color: "teal",
            subsections: [
                { name: "Sites d'emploi (Jobboards)", path: "/library?category=annuaire&tag=sites" },
                { name: "Entreprises qui recrutent", path: "/library?category=annuaire&tag=entreprises" },
                { name: "Organisations & Asso", path: "/library?category=annuaire&tag=asso" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Espace Carrière
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        Construisez votre <span className="text-blue-600">Avenir Professionnel</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Étudiant, chercheur d'emploi ou en reconversion ? Retrouvez tous les outils,
                        guides et conseils pour orienter votre parcours et booster votre employabilité.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div className={`p-6 bg-gradient-to-br from-${section.color}-50 to-white`}>
                                <div className={`w-14 h-14 rounded-xl bg-white text-${section.color}-600 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
                                <p className="text-sm text-slate-500 min-h-[40px]">{section.description}</p>
                            </div>

                            {/* Links List */}
                            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                                <ul className="space-y-1">
                                    {section.subsections.map((sub, idx) => (
                                        <li key={idx}>
                                            <button
                                                onClick={() => navigate(sub.path)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-${section.color}-700 hover:bg-${section.color}-50 transition-colors flex items-center justify-between group/link`}
                                            >
                                                {sub.name}
                                                <span className={`text-${section.color}-300 opacity-0 group-hover/link:opacity-100 transition-opacity`}>→</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Access / CTO */}
                <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour votre CV ?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                            Découvrez nos modèles gratuits et nos guides de rédaction pour créer un CV percutant en moins de 30 minutes.
                        </p>
                        <button
                            onClick={() => navigate("/library?category=recherche-emploi&tag=cv")}
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md"
                        >
                            Accéder aux Modèles de CV
                        </button>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default OrientationCarrierePage;
