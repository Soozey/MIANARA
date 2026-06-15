import { Link, useSearchParams } from 'react-router-dom';
import { Languages as LanguagesIcon, BookOpen, Headphones, Mic, PenTool, Video, Globe, ChevronRight, Briefcase, Plane, Lightbulb } from 'lucide-react';

const LanguesPage = () => {
    const [searchParams] = useSearchParams();
    const activeLang = searchParams.get('lang') || 'anglais';

    const languages = [
        {
            id: 'anglais',
            name: 'Anglais',
            flag: '🇺🇸',
            tag: 'Incontournable',
            description: 'La langue universelle des affaires, du voyage, de la science et d\'Internet. Une compétence obligatoire pour une carrière internationale.',
            color: 'blue',
            levels: [
                { name: 'Beginner (A1-A2)', description: 'Bases pour voyager et comprendre' },
                { name: 'Intermediate (B1-B2)', description: 'Travail en entreprise et conversation fluides' },
                { name: 'Advanced (C1-C2)', description: 'Bilinguisme et négociation complexe' }
            ],
            resources: [
                { icon: <BookOpen size={18} />, title: 'Grammar', count: 50 },
                { icon: <Video size={18} />, title: 'Séries TV', count: 120 },
                { icon: <Mic size={18} />, title: 'Speaking', count: 25 },
                { icon: <Briefcase size={18} />, title: 'Business English', count: 20 }
            ]
        },
        {
            id: 'mandarin',
            name: 'Mandarin',
            flag: '🇨🇳',
            tag: 'Incontournable',
            description: 'Essentiel pour comprendre et interagir avec l\'économie chinoise en plein essor.',
            color: 'red',
            levels: [
                { name: 'HSK 1-2', description: 'Initiation aux tons et caractères de base' },
                { name: 'HSK 3-4', description: 'Communication quotidienne et professionnelle simple' },
                { name: 'HSK 5-6', description: 'Maîtrise professionnelle avancée' }
            ],
            resources: [
                { icon: <PenTool size={18} />, title: 'Caractères', count: 200 },
                { icon: <Headphones size={18} />, title: 'Tons & Audio', count: 50 },
                { icon: <Globe size={18} />, title: 'Culture Business', count: 15 }
            ]
        },
        {
            id: 'francais',
            name: 'Français',
            flag: '🇫🇷',
            tag: 'Officiel',
            description: 'Toujours pertinent, notamment en Afrique francophone et au Canada, en plus de son rôle historique et administratif.',
            color: 'indigo',
            levels: [
                { name: 'Intermédiaire (B1-B2)', description: 'Expression écrite administrative et pro' },
                { name: 'Avancé (C1-C2)', description: 'Excellence littéraire et rhétorique' }
            ],
            resources: [
                { icon: <BookOpen size={18} />, title: 'Orthographe', count: 80 },
                { icon: <PenTool size={18} />, title: 'Rédaction pro', count: 40 },
                { icon: <Briefcase size={18} />, title: 'CV & Lettres', count: 25 }
            ]
        },
        {
            id: 'espagnol',
            name: 'Espagnol',
            flag: '🇪🇸',
            tag: 'Opportunité',
            description: 'Pour l\'Amérique latine, l\'Espagne, et une large partie des États-Unis.',
            color: 'orange',
            levels: [
                { name: 'Débutant', description: 'Hola ! Bases de la conversation' },
                { name: 'Intermédiaire', description: 'Voyage et commerce international' }
            ],
            resources: [
                { icon: <BookOpen size={18} />, title: 'Vocabulaire', count: 45 },
                { icon: <Video size={18} />, title: 'Telenovelas', count: 30 }
            ]
        },
        {
            id: 'arabe',
            name: 'Arabe',
            flag: '🇸🇦',
            tag: 'Opportunité',
            description: 'Pour le Moyen-Orient et l\'Afrique du Nord, avec des économies en développement.',
            color: 'emerald',
            levels: [
                { name: 'Débutant', description: 'Lire et écrire l\'alphabet arabe' },
                { name: 'Intermédiaire', description: 'Arabe littéraire vs dialectes' }
            ],
            resources: [
                { icon: <PenTool size={18} />, title: 'Calligraphie', count: 20 },
                { icon: <Globe size={18} />, title: 'Culture & Islam', count: 30 }
            ]
        },
        {
            id: 'allemand',
            name: 'Allemand',
            flag: '🇩🇪',
            tag: 'Innovation',
            description: 'La langue de l\'innovation et de la première puissance économique européenne.',
            color: 'slate',
            levels: [
                { name: 'Débutant', description: 'Bases solides de la structure allemande' },
                { name: 'Pro (B2+)', description: 'Ingénierie et commerce technique' }
            ],
            resources: [
                { icon: <Lightbulb size={18} />, title: 'Technique', count: 25 },
                { icon: <BookOpen size={18} />, title: 'Grammaire', count: 60 }
            ]
        },
        {
            id: 'portugais',
            name: 'Portugais',
            flag: '🇧🇷',
            tag: 'Opportunité',
            description: 'Utile pour le Brésil, le Portugal et certaines parties de l\'Afrique (Mozambique, Angola).',
            color: 'green',
            levels: [
                { name: 'Débutant', description: 'Conversation de base et voyage' }
            ],
            resources: [
                { icon: <Video size={18} />, title: 'Dialogues', count: 20 }
            ]
        }
    ];

    const selectedLanguage = languages.find(l => l.id === activeLang) || languages[0];

    const guides = [
        {
            icon: <Globe className="text-blue-500" />,
            title: "Carrière Globale",
            combo: "Anglais + Mandarin ou Espagnol",
            desc: "Pour travailler dans des multinationales et le commerce international."
        },
        {
            icon: <Plane className="text-orange-500" />,
            title: "Voyages & Tourisme",
            combo: "Anglais + Espagnol ou Portugais",
            desc: "Pour explorer les Amériques, l'Europe et l'Afrique."
        },
        {
            icon: <Lightbulb className="text-yellow-500" />,
            title: "Économie & Innovation",
            combo: "Anglais + Mandarin ou Allemand",
            desc: "Pour l'ingénierie, la tech et l'industrie de pointe."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-10 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <LanguagesIcon size={32} />
                        <span className="text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full">Espace Étudiant</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Centre de Langues</h1>
                    <p className="text-slate-300 max-w-2xl">
                        L'anglais est le socle. Ajoutez une ou deux langues majeures pour vous ouvrir les portes du monde globalisé.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 w-full">

                {/* How to choose Guide */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Briefcase size={24} className="text-slate-400" />
                        Comment choisir vos langues ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {guides.map((guide, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-blue-300 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-50 rounded-lg">{guide.icon}</div>
                                    <h3 className="font-bold text-slate-800">{guide.title}</h3>
                                </div>
                                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-md self-start">
                                    {guide.combo}
                                </div>
                                <p className="text-sm text-slate-500">{guide.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar List */}
                    <div className="lg:col-span-4 space-y-3">
                        <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-2">Langues disponibles</h3>
                        {languages.map((lang) => (
                            <Link
                                key={lang.id}
                                to={`/etudiants/langues?lang=${lang.id}`}
                                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${activeLang === lang.id
                                        ? `bg-white border-${lang.color}-500 shadow-md ring-1 ring-${lang.color}-500`
                                        : 'bg-white border-transparent hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{lang.flag}</span>
                                    <div>
                                        <div className="font-bold text-slate-800">{lang.name}</div>
                                        <div className={`text-[10px] uppercase font-bold tracking-wider text-${activeLang === lang.id ? lang.color + '-600' : 'slate-400'}`}>
                                            {lang.tag}
                                        </div>
                                    </div>
                                </div>
                                {activeLang === lang.id && <ChevronRight size={16} className={`text-${lang.color}-500`} />}
                            </Link>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 h-full">
                            <div className="flex items-start gap-6 mb-8">
                                <span className="text-6xl shadow-sm rounded-xl overflow-hidden block">{selectedLanguage.flag}</span>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-slate-800 mb-2">{selectedLanguage.name}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{selectedLanguage.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <Lightbulb size={20} className="text-amber-500" />
                                        Niveaux & Objectifs
                                    </h3>
                                    <div className="space-y-3">
                                        {selectedLanguage.levels.map((level, idx) => (
                                            <div key={idx} className={`p-3 rounded-lg bg-${selectedLanguage.color}-50 border border-${selectedLanguage.color}-100`}>
                                                <div className={`font-bold text-${selectedLanguage.color}-700`}>{level.name}</div>
                                                <div className="text-sm text-slate-600">{level.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <BookOpen size={20} className="text-blue-500" />
                                        Ressources pédagogiques
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedLanguage.resources.map((res, idx) => (
                                            <Link
                                                key={idx}
                                                to={`/library?category=${selectedLanguage.id}&type=${res.title.toLowerCase()}`}
                                                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-center transition-colors group"
                                            >
                                                <div className="flex justify-center mb-2 text-slate-400 group-hover:text-slate-600">{res.icon}</div>
                                                <div className="text-sm font-semibold text-slate-700">{res.title}</div>
                                                <div className="text-xs text-slate-400">{res.count} leçons</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                                <Link
                                    to={`/library?category=${selectedLanguage.id}`}
                                    className={`inline-flex items-center gap-2 px-6 py-3 bg-${selectedLanguage.color}-600 text-white font-bold rounded-lg hover:bg-${selectedLanguage.color}-700 transition-colors`}
                                >
                                    Commencer l'apprentissage
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguesPage;
