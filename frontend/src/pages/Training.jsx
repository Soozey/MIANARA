import { useNavigate } from 'react-router-dom';
import { Monitor, Briefcase, ShoppingBag, Sprout, Hammer, Zap, Share2 } from 'lucide-react';

export default function Training() {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'informatique',
            title: "Informatique & Numérique",
            icon: <Monitor size={28} />,
            description: "Maîtriser les outils digitaux indispensables",
            color: "blue",
            subsections: [
                { name: "Bureautique (Word, Excel...)", path: "/library?category=informatique&tag=bureautique" },
                { name: "PAO (Design Graphique)", path: "/library?category=informatique&tag=pao" },
                { name: "Maintenance informatique", path: "/library?category=informatique&tag=maintenance" }
            ]
        },
        {
            id: 'gestion',
            title: "Gestion & Administration",
            icon: <Briefcase size={28} />,
            description: "Gérer efficacement une structure",
            color: "slate",
            subsections: [
                { name: "Secrétariat & Accueil", path: "/library?category=gestion-admin&tag=secretariat" },
                { name: "Comptabilité & Paie", path: "/library?category=gestion-admin&tag=compta" },
                { name: "Gestion de stock", path: "/library?category=gestion-admin&tag=stock" },
                { name: "Ressources Humaines", path: "/library?category=gestion-admin&tag=rh" }
            ]
        },
        {
            id: 'commerce',
            title: "Commerce & Marketing",
            icon: <ShoppingBag size={28} />,
            description: "Vendre plus et mieux",
            color: "pink",
            subsections: [
                { name: "Techniques de Vente", path: "/library?category=commerce&tag=vente" },
                { name: "Prospection client", path: "/library?category=commerce&tag=prospection" },
                { name: "Marketing Digital", path: "/library?category=commerce&tag=marketing" }
            ]
        },
        {
            id: 'agriculture',
            title: "Agriculture & Élevage",
            icon: <Sprout size={28} />,
            description: "Produire de la nourriture durablement",
            color: "green",
            subsections: [
                { name: "Riziculture performante (SRI)", path: "/library?category=agriculture&tag=riz" },
                { name: "Élevage (Volaille, Porcs)", path: "/library?category=agriculture&tag=elevage" },
                { name: "Arboriculture fruitière", path: "/library?category=agriculture&tag=arbres" }
            ]
        },
        {
            id: 'transformation',
            title: "Transformation Locale",
            icon: <Hammer size={28} />,
            description: "Créer des produits finis valorisés",
            color: "amber",
            subsections: [
                { name: "Produits agricoles (Jus, confitures)", path: "/library?category=transformation&tag=agro" },
                { name: "Savonnerie & Cosmétique", path: "/library?category=transformation&tag=cosmetique" },
                { name: "Artisanat & Matières premières", path: "/library?category=transformation&tag=artisanat" }
            ]
        },
        {
            id: 'energie',
            title: "Énergie & Environnement",
            icon: <Zap size={28} />,
            description: "Solutions écologiques et économiques",
            color: "teal",
            subsections: [
                { name: "Charbon écologique (Antrano)", path: "/library?category=energie&tag=charbon" },
                { name: "Techniques durables", path: "/library?category=energie&tag=durable" },
                { name: "Recyclage & Valorisation", path: "/library?category=energie&tag=recyclage" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Header */}
            <div className="bg-white border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Espace Formation
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        Compétences <span className="text-blue-600">Pratiques</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Des savoir-faire directement exploitables pour améliorer votre employabilité ou renforcer votre activité.
                        Apprenez, appliquez, réussissez.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-blue-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
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
}
