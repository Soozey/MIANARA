import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Lightbulb, Bike, School, Globe, Heart } from 'lucide-react';

const SocieteCulturePage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'vsp',
            title: "Vie Sociale & Professionnelle (VSP)",
            icon: <Users size={28} />,
            description: "Réussir son intégration sociale et professionnelle",
            color: "blue",
            subsections: [
                { name: "Savoir-être en entreprise", path: "/library?category=vsp&tag=entreprise" },
                { name: "Gérer les relations hiérarchiques", path: "/library?category=vsp&tag=hierarchie" },
                { name: "La communication non-violente", path: "/library?category=vsp&tag=communication" }
            ]
        },
        {
            id: 'famille',
            title: "Solidarité & Famille",
            icon: <Heart size={28} />,
            description: "Les valeurs qui nous unissent",
            color: "rose",
            subsections: [
                { name: "L'entraide familiale : Force ou frein ?", path: "/library?category=famille&tag=entraide" },
                { name: "Éducation des enfants", path: "/library?category=famille&tag=education" },
                { name: "Soutien aux aînés", path: "/library?category=famille&tag=aines" }
            ]
        },
        {
            id: 'jeunesse',
            title: "Jeunesse & Réalités Éco",
            icon: <Bike size={28} />,
            description: "Comprendre et survivre à la réalité locale",
            color: "amber",
            subsections: [
                { name: "Le phénomène Taxi-moto", path: "/library?category=jeunesse&tag=transport" },
                { name: "La débrouillardise (Système D)", path: "/library?category=jeunesse&tag=debrouille" },
                { name: "Jeunes et emploi précaire", path: "/library?category=jeunesse&tag=emploi" }
            ]
        },
        {
            id: 'education-critique',
            title: "Éducation Critique",
            icon: <School size={28} />,
            description: "Au-delà des bancs de l'école",
            color: "indigo",
            subsections: [
                { name: "L'école prépare-t-elle à la vie ?", path: "/library?category=education-critique&tag=debat" },
                { name: "Ce qu'on n'apprend pas en classe", path: "/library?category=education-critique&tag=manque" },
                { name: "L'importance de l'auto-formation", path: "/library?category=education-critique&tag=auto" }
            ]
        },
        {
            id: 'pensee-critique',
            title: "Pensée Critique",
            icon: <Lightbulb size={28} />,
            description: "Ne jamais cesser de questionner",
            color: "violet",
            subsections: [
                { name: "La connaissance est une arme", path: "/library?category=pensee-critique&tag=savoir" },
                { name: "Vérifier ses sources (Fact-checking)", path: "/library?category=pensee-critique&tag=sources" },
                { name: "Développer son esprit d'analyse", path: "/library?category=pensee-critique&tag=analyse" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50">
            {/* Header */}
            <div className="bg-white border-b border-indigo-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Société & Réalités
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        Comprendre <span className="text-indigo-600">Notre Monde</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Un regard lucide sur notre société, nos défis économiques et la nécessité de penser par soi-même.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-indigo-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div className={`p-6 bg-gradient-to-br from-${section.color}-50 to-white border-b border-${section.color}-100/50`}>
                                <div className={`w-14 h-14 rounded-xl bg-white text-${section.color}-600 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
                                <p className="text-sm text-slate-500 min-h-[40px]">{section.description}</p>
                            </div>

                            {/* Links List */}
                            <div className="p-4 bg-slate-50/30">
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
            </div>
        </div>
    );
};

export default SocieteCulturePage;
