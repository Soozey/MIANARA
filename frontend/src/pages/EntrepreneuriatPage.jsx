import { useNavigate } from 'react-router-dom';
import { Lightbulb, FileCheck, Banknote, BarChart3, Package, Building, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const EntrepreneuriatPage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'bases',
            title: "Bases de l'entrepreneuriat",
            icon: <Lightbulb size={28} />,
            description: "Comprendre l'esprit d'entreprise et se lancer",
            color: "amber",
            subsections: [
                { name: "L'esprit d'entreprise", path: "/library?category=bases&tag=mindset" },
                { name: "Mythes vs Réalité", path: "/library?category=bases&tag=mythes" },
                { name: "Passer de l'idée à l'action", path: "/library?category=bases&tag=action" }
            ]
        },
        {
            id: 'formalisation',
            title: "Formalisation & Obligations",
            icon: <FileCheck size={28} />,
            description: "Structurer son activité légalement (NIF, STAT, RCS)",
            color: "blue",
            subsections: [
                { name: "Types d'entreprise (EI, SARL...)", path: "/library?category=formalisation&tag=statut" },
                { name: "Impôts & Taxes", path: "/library?category=formalisation&tag=impot" },
                { name: "Obligations sociales (CNaPS...)", path: "/library?category=formalisation&tag=social" }
            ]
        },
        {
            id: 'creation',
            title: "Création d'entreprise",
            icon: <Building size={28} />,
            description: "Construire des fondations solides pour votre projet",
            color: "indigo",
            subsections: [
                { name: "Trouver une idée de business", path: "/library?category=creation&tag=idee" },
                { name: "Faire une étude de marché", path: "/library?category=creation&tag=marche" },
                { name: "Le Business Plan simplifié", path: "/library?category=creation&tag=business-plan" }
            ]
        },
        {
            id: 'financement',
            title: "Financement",
            icon: <Banknote size={28} />,
            description: "Trouver l'argent pour démarrer et grandir",
            color: "green",
            subsections: [
                { name: "L'Autofinancement (Bootstrapping)", path: "/library?category=financement&tag=auto" },
                { name: "La Microfinance", path: "/library?category=financement&tag=microfinance" },
                { name: "Partenaires & Investisseurs", path: "/library?category=financement&tag=investisseur" }
            ]
        },
        {
            id: 'gestion',
            title: "Gestion & Organisation",
            icon: <BarChart3 size={28} />,
            description: "Piloter son entreprise au quotidien",
            color: "purple",
            subsections: [
                { name: "Gestion financière de base", path: "/library?category=gestion&tag=finance" },
                { name: "Le Fonds de Roulement (BFR)", path: "/library?category=gestion&tag=bfr" },
                { name: "Gestion de projet", path: "/library?category=gestion&tag=projet" },
                { name: "Optimisation & Productivité", path: "/library?category=gestion&tag=prod" }
            ]
        },
        {
            id: 'production',
            title: "Production & Valeur ajoutée",
            icon: <Package size={28} />,
            description: "Fabriquer, Transformer, Vendre",
            color: "orange",
            subsections: [
                { name: "Transformation locale (Vita Malagasy)", path: "/library?category=production&tag=local" },
                { name: "L'Artisanat moderne", path: "/library?category=production&tag=artisanat" },
                { name: "Agro-transformation", path: "/library?category=production&tag=agro" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Header */}
            <div className="bg-white border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Espace Entrepreneuriat
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        Créez votre propre <span className="text-amber-600">Réussite</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Indépendant, créateur ou futur patron : accédez aux ressources essentielles pour lancer,
                        formaliser et développer votre activité à Madagascar.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-amber-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
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

                {/* Quick Access / Toolkit */}
                <div className="mt-16 bg-amber-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Prêt à vous lancer ?</h2>
                        <p className="text-amber-100 mb-8 max-w-xl mx-auto">
                            Téléchargez notre modèle de Business Plan Simplifié et commencez à structurer votre projet dès aujourd'hui.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => navigate("/library?category=creation&tag=business-plan")}
                                className="bg-white text-amber-600 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors shadow-md"
                            >
                                Modèle Business Plan
                            </button>
                            <button
                                onClick={() => navigate("/library?category=formalisation&tag=statut")}
                                className="bg-amber-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-800 transition-colors border border-amber-500"
                            >
                                Guide Formalisation
                            </button>
                        </div>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default EntrepreneuriatPage;
