import { useNavigate } from 'react-router-dom';
import { Sparkles, Mic, Clock, Brain, Award, TrendingUp, Heart, Star, Target, Shield } from 'lucide-react';

const DeveloppementPersonnelPage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'confiance',
            title: "Confiance en soi",
            icon: <Sparkles size={28} />,
            description: "Croire en ses capacités et oser agir",
            color: "purple",
            subsections: [
                { name: "Vaincre le syndrome de l'imposteur", path: "/library?category=confiance&tag=imposteur" },
                { name: "S'affirmer sans agressivité", path: "/library?category=confiance&tag=affirmation" },
                { name: "Dépasser la peur du jugement", path: "/library?category=confiance&tag=peur" }
            ]
        },
        {
            id: 'communication',
            title: "Art oratoire & Communication",
            icon: <Mic size={28} />,
            description: "Convaincre, écouter et s'exprimer avec impact",
            color: "blue",
            subsections: [
                { name: "Prise de parole en public", path: "/library?category=communication&tag=public" },
                { name: "L'écoute active", path: "/library?category=communication&tag=ecoute" },
                { name: "Convaincre en 3 minutes (Pitch)", path: "/library?category=communication&tag=pitch" }
            ]
        },
        {
            id: 'temps',
            title: "Gestion du temps",
            icon: <Clock size={28} />,
            description: "Maîtriser son agenda pour être productif",
            color: "green",
            subsections: [
                { name: "Définir ses priorités (Eisenhower)", path: "/library?category=temps&tag=priorites" },
                { name: "Vaincre la procrastination", path: "/library?category=temps&tag=procrastination" },
                { name: "L'art de dire NON", path: "/library?category=temps&tag=non" }
            ]
        },
        {
            id: 'discipline',
            title: "Discipline personnelle",
            icon: <Brain size={28} />,
            description: "Le pouvoir des habitudes et de la persévérance",
            color: "indigo",
            subsections: [
                { name: "La règle des 2 minutes", path: "/library?category=discipline&tag=habitudes" },
                { name: "Le Kaizen (Petits pas)", path: "/library?category=discipline&tag=kaizen" },
                { name: "Autodiscipline au quotidien", path: "/library?category=discipline&tag=routine" }
            ]
        },
        {
            id: 'leadership',
            title: "Leadership",
            icon: <Award size={28} />,
            description: "Inspirer les autres et gérer des équipes",
            color: "amber",
            subsections: [
                { name: "Qu'est-ce qu'un bon leader ?", path: "/library?category=leadership&tag=leader" },
                { name: "Gérer les conflits", path: "/library?category=leadership&tag=conflit" },
                { name: "Déléguer efficacement", path: "/library?category=leadership&tag=delegation" }
            ]
        },
        {
            id: 'echecs',
            title: "Gestion des échecs",
            icon: <TrendingUp size={28} />,
            description: "Savoir tomber pour mieux se relever",
            color: "red",
            subsections: [
                { name: "L'échec comme apprentissage", path: "/library?category=echecs&tag=apprentissage" },
                { name: "La résilience", path: "/library?category=echecs&tag=resilience" },
                { name: "Pivoter après un échec", path: "/library?category=echecs&tag=pivot" }
            ]
        },
        {
            id: 'croissance',
            title: "Croissance professionnelle",
            icon: <Target size={28} />,
            description: "Construire sa carrière sur le long terme",
            color: "cyan",
            subsections: [
                { name: "Planifier sa carrière", path: "/library?category=croissance&tag=carriere" },
                { name: "Le Réseautage (Networking)", path: "/library?category=croissance&tag=reseau" },
                { name: "Se former en continu", path: "/library?category=croissance&tag=formation" }
            ]
        },
        {
            id: 'savoir-vivre',
            title: "Savoir-vivre & Valeurs",
            icon: <Heart size={28} />,
            description: "L'attitude qui fait la différence",
            color: "pink",
            subsections: [
                { name: "L'éthique au travail", path: "/library?category=savoir-vivre&tag=ethique" },
                { name: "Respect et ponctualité", path: "/library?category=savoir-vivre&tag=respect" },
                { name: "Intelligence émotionnelle", path: "/library?category=savoir-vivre&tag=emotion" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
            {/* Header */}
            <div className="bg-white border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Développement Personnel
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        L'École de la <span className="text-purple-600">Vie</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Tout ce qu'on aurait dû vous apprendre à l'école pour réussir votre vie professionnelle et personnelle.
                        Soft skills, mental et savoir-être.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-purple-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
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

export default DeveloppementPersonnelPage;
