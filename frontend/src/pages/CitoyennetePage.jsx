import { useNavigate } from 'react-router-dom';
import { Users, Trash2, GraduationCap, Scale, ShieldCheck, AlertTriangle, Vote, Landmark } from 'lucide-react';

const CitoyennetePage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'civisme',
            title: "Civisme & Vivre-ensemble",
            icon: <Users size={28} />,
            description: "Respect, solidarité et valeurs communes",
            color: "blue",
            subsections: [
                { name: "Le Fihavanana au quotidien", path: "/library?category=civisme&tag=fihavanana" },
                { name: "Voisinage et politesse", path: "/library?category=civisme&tag=politesse" },
                { name: "Respect des biens publics", path: "/library?category=civisme&tag=public" }
            ]
        },
        {
            id: 'environnement',
            title: "Propreté & Environnement",
            icon: <Trash2 size={28} />,
            description: "Mon quartier propre, ma responsabilité",
            color: "green",
            subsections: [
                { name: "Gestion des ordures ménagères", path: "/library?category=environnement&tag=dechets" },
                { name: "Hygiène publique (Eaux usées...)", path: "/library?category=environnement&tag=hygiene" },
                { name: "Reboisement et espaces verts", path: "/library?category=environnement&tag=vert" }
            ]
        },
        {
            id: 'ecole',
            title: "École & Société",
            icon: <GraduationCap size={28} />,
            description: "L'éducation, pilier de la nation",
            color: "purple",
            subsections: [
                { name: "Relation Parents-École", path: "/library?category=ecole&tag=parents" },
                { name: "Respect des enseignants", path: "/library?category=ecole&tag=profs" },
                { name: "Lutte contre l'abandon scolaire", path: "/library?category=ecole&tag=abandon" }
            ]
        },
        {
            id: 'droits',
            title: "Loi, Droits & Responsabilités",
            icon: <Scale size={28} />,
            description: "Connaître ses droits pour mieux vivre",
            color: "indigo",
            subsections: [
                { name: "Papiers d'identité & État civil", path: "/library?category=droits&tag=papiers" },
                { name: "Droits de l'enfant et de la femme", path: "/library?category=droits&tag=droits" },
                { name: "Déclarer une naissance/décès", path: "/library?category=droits&tag=etatcivil" }
            ]
        },
        {
            id: 'securite',
            title: "Sécurité",
            icon: <ShieldCheck size={28} />,
            description: "Se protéger et protéger les autres",
            color: "red",
            subsections: [
                { name: "Code de la route & Piétons", path: "/library?category=securite&tag=route" },
                { name: "Sécurité Routière (Conducteurs)", path: "/library?category=securite&tag=conduite" },
                { name: "Sécurité Numérique (Arnaques...)", path: "/library?category=securite&tag=cyber" }
            ]
        },
        {
            id: 'derives',
            title: "Lutte contre les dérives",
            icon: <AlertTriangle size={28} />,
            description: "Refuser l'inacceptable",
            color: "orange",
            subsections: [
                { name: "Non à la Corruption", path: "/library?category=derives&tag=corruption" },
                { name: "Racisme et discriminations", path: "/library?category=derives&tag=racisme" },
                { name: "Désinformation (Fake News)", path: "/library?category=derives&tag=fake" }
            ]
        },
        {
            id: 'engagement',
            title: "Engagement citoyen",
            icon: <Vote size={28} />,
            description: "Acteur, pas spectateur",
            color: "teal",
            subsections: [
                { name: "Pourquoi et comment Voter ?", path: "/library?category=engagement&tag=vote" },
                { name: "Créer une association", path: "/library?category=engagement&tag=asso" },
                { name: "Bénévolat communautaire", path: "/library?category=engagement&tag=benevolat" }
            ]
        },
        {
            id: 'elus',
            title: "Guide des élus locaux",
            icon: <Landmark size={28} />,
            description: "Qui fait quoi dans ma commune ?",
            color: "slate",
            subsections: [
                { name: "Le rôle du Maire", path: "/library?category=elus&tag=maire" },
                { name: "Députés et Sénateurs", path: "/library?category=elus&tag=parlement" },
                { name: "Le Chef Fokontany", path: "/library?category=elus&tag=fokontany" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
            {/* Header */}
            <div className="bg-white border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                        Citoyenneté & Société
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        Le Cœur Social de <span className="text-emerald-600">Mianàra</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Apprendre à vivre ensemble, connaître ses droits, respecter ses devoirs et s'engager pour le bien commun.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl shadow-sm border border-emerald-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div className={`p-6 bg-gradient-to-br from-${section.color}-50 to-white border-b border-${section.color}-100/50`}>
                                <div className={`w-12 h-12 rounded-xl bg-white text-${section.color}-600 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {section.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{section.title}</h3>
                                <p className="text-xs text-slate-500 min-h-[40px] leading-relaxed">{section.description}</p>
                            </div>

                            {/* Links List */}
                            <div className="p-4 bg-slate-50/30">
                                <ul className="space-y-1">
                                    {section.subsections.map((sub, idx) => (
                                        <li key={idx}>
                                            <button
                                                onClick={() => navigate(sub.path)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-${section.color}-700 hover:bg-${section.color}-50 transition-colors flex items-center justify-between group/link`}
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

export default CitoyennetePage;
