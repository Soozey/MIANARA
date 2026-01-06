import { useNavigate } from 'react-router-dom';
import { Heart, ShieldCheck, Cross, Stethoscope, Brain, Droplets, AlertOctagon } from 'lucide-react';

const SantePage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'hygiene',
            title: "Hygiène & Sécurité",
            icon: <ShieldCheck size={28} />,
            description: "Les gestes simples pour éviter les maladies",
            color: "blue",
            subsections: [
                { name: "Eau Potable & Purification", path: "/library?category=hygiene&tag=eau" },
                { name: "Hygiène des mains et des aliments", path: "/library?category=hygiene&tag=mains" },
                { name: "Assainissement (Latrines...)", path: "/library?category=hygiene&tag=latrines" }
            ]
        },
        {
            id: 'secourisme',
            title: "Secourisme",
            icon: <Cross size={28} />,
            description: "Savoir réagir en cas d'urgence",
            color: "red",
            subsections: [
                { name: "La PLS (Position Latérale de Sécurité)", path: "/library?category=secourisme&tag=pls" },
                { name: "Que faire en cas de brûlure ?", path: "/library?category=secourisme&tag=brulure" },
                { name: "Étouffement : La méthode Heimlich", path: "/library?category=secourisme&tag=heimlich" }
            ]
        },
        {
            id: 'sante-communautaire',
            title: "Santé communautaire",
            icon: <Heart size={28} />,
            description: "Protéger sa famille et son village",
            color: "pink",
            subsections: [
                { name: "Vaccination : Pourquoi c'est important", path: "/library?category=sante-communautaire&tag=vaccin" },
                { name: "Planning familial & Contraception", path: "/library?category=sante-communautaire&tag=planning" },
                { name: "Lutte contre le Paludisme", path: "/library?category=sante-communautaire&tag=palu" }
            ]
        },
        {
            id: 'maladies',
            title: "Maladies & Croyances",
            icon: <AlertOctagon size={28} />,
            description: "Démêler le vrai du faux (Sorcellerie ou Maladie ?)",
            color: "purple",
            subsections: [
                { name: "L'Épilepsie n'est pas un sort", path: "/library?category=maladies&tag=epilepsie" },
                { name: "Comprendre l'Ambalavelona", path: "/library?category=maladies&tag=ambalavelona" },
                { name: "Santé mentale et Dépression", path: "/library?category=maladies&tag=mental" }
            ]
        },
        {
            id: 'bien-etre',
            title: "Bien-être mental",
            icon: <Brain size={28} />,
            description: "Un esprit sain dans un corps sain",
            color: "green",
            subsections: [
                { name: "Gérer le stress au quotidien", path: "/library?category=bien-etre&tag=stress" },
                { name: "L'importance du sommeil", path: "/library?category=bien-etre&tag=sommeil" },
                { name: "Alimentation équilibrée locale", path: "/library?category=bien-etre&tag=nutrition" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-50">
            {/* Header */}
            <div className="bg-white border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-rose-100 text-rose-800 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Santé & Bien-être
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        Prendre Soin de <span className="text-rose-600">La Vie</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Des conseils pratiques pour protéger votre santé, celle de vos proches, et comprendre les maladies sans tabou.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-rose-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
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

export default SantePage;
