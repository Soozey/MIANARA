import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Award, Brain, Languages, Calendar, ClipboardCheck, Lightbulb } from 'lucide-react';

export default function Student() {
    const navigate = useNavigate();

    const mainSections = [
        {
            id: 'programmes',
            title: "Programme scolaire malgache",
            icon: <BookOpen size={28} />,
            description: "Accédez aux cours officiels de la 11ème à la Terminale",
            path: "/etudiants",
            color: "blue",
            subsections: [
                { name: "Primaire (11ème → 7ème)", path: "/etudiants?level=primaire" },
                { name: "Collège (6ème → 3ème)", path: "/etudiants?level=college" },
                { name: "Lycée (2nde → Tle A/C/D/L/S/OSE)", path: "/etudiants?level=lycee" }
            ]
        },
        {
            id: 'methodologie',
            title: "Méthodologie scolaire",
            icon: <Brain size={28} />,
            description: "Apprenez à apprendre et réussir vos examens",
            path: "/library?category=methodologie",
            color: "purple",
            subsections: [
                { name: "Apprendre à apprendre", path: "/library?category=apprendre" },
                { name: "Organisation des révisions", path: "/library?category=revisions" },
                { name: "Préparation aux examens", path: "/library?category=examens" }
            ]
        },
        {
            id: 'langues',
            title: "Langues étrangères",
            icon: <Languages size={28} />,
            description: "Français, Anglais et autres langues pour réussir",
            path: "/etudiants/langues",
            color: "green",
            subsections: [
                { name: "Français", path: "/etudiants/langues?lang=francais" },
                { name: "Anglais", path: "/etudiants/langues?lang=anglais" },
                { name: "Autres langues", path: "/etudiants/langues?lang=autres" }
            ]
        },
        {
            id: 'orientation',
            title: "Orientation & Carrières",
            icon: <GraduationCap size={28} />,
            description: "Découvrez les métiers d'avenir et choisissez votre filière",
            path: "/etudiants/orientation",
            color: "indigo",
            subsections: [
                { name: "Métiers d'avenir", path: "/orientation" },
                { name: "Filières post-bac", path: "/etudiants/orientation" },
                { name: "Études à l'étranger", path: "/etudiants/bourses" }
            ]
        },
        {
            id: 'bourses',
            title: "Bourses & Aides",
            icon: <Award size={28} />,
            description: "Financements disponibles pour vos études",
            path: "/etudiants/bourses",
            color: "amber",
            subsections: [
                { name: "Bourses nationales", path: "/etudiants/bourses?type=nationale" },
                { name: "Bourses internationales", path: "/etudiants/bourses?type=internationale" },
                { name: "Aides sociales", path: "/etudiants/bourses?type=aide" }
            ]
        }
    ];

    const contentTypes = [
        { icon: "📖", label: "Leçons", description: "Cours complets en texte" },
        { icon: "✏️", label: "Exercices", description: "Pratique avec correction" },
        { icon: "📋", label: "Fiches de révision", description: "Résumés essentiels" },
        { icon: "❓", label: "Quiz & Cartes", description: "Questions/réponses interactives" },
        { icon: "📅", label: "Plannings", description: "Organisation des révisions" },
        { icon: "🎯", label: "Examens blancs", description: "Préparation aux épreuves" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                        🎓 Espace Étudiant MIANÀRA
                    </span>
                    <h1 className="text-4xl font-bold mb-4">Réussis tes études !</h1>
                    <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
                        Programmes scolaires officiels, méthodologie, langues et orientation.
                        Tout ce dont tu as besoin pour exceller.
                    </p>
                </div>
            </div>

            {/* Main Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mainSections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group"
                        >
                            <div
                                className={`p-6 cursor-pointer`}
                                onClick={() => navigate(section.path)}
                            >
                                <div className={`w-14 h-14 rounded-xl bg-${section.color}-100 text-${section.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
                                <p className="text-sm text-slate-500 mb-4">{section.description}</p>
                            </div>

                            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
                                <ul className="space-y-2">
                                    {section.subsections.map((sub, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={sub.path}
                                                className={`text-sm text-${section.color}-600 hover:text-${section.color}-800 hover:underline flex items-center gap-2`}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Types */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
                        Types de contenus disponibles
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {contentTypes.map((type, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-4 text-center border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-3xl mb-2">{type.icon}</div>
                                <h4 className="font-semibold text-slate-700 text-sm">{type.label}</h4>
                                <p className="text-xs text-slate-400 mt-1">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Access Button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate('/etudiants')}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <BookOpen size={20} />
                        Accéder aux programmes scolaires
                    </button>
                </div>
            </div>
        </div>
    );
}
