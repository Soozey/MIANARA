export const DEMO_CONTENTS = [
    // 🎯 CIBLE 1 : Système éducatif
    {
        id: 1,
        title: "Apprendre une langue étrangère efficacement",
        category: "Formation linguistique",
        level: "Tout public",
        summary:
            "Maîtriser une langue = grammaire, vocabulaire, compréhension et expression. Focus sur la pratique réelle.",
        body:
            "La maîtrise d’une langue étrangère repose sur quatre piliers : grammaire, vocabulaire, compréhension orale et expression orale. Dans le contexte malgache, privilégier des méthodes pratiques : radios étrangères, échanges avec des natifs en ligne, écriture quotidienne. L’école doit pousser à utiliser la langue dans des situations réelles, plutôt que de se limiter aux exercices théoriques.",
        questions: [
            {
                type: "Grammaire",
                prompt: "Quelle est la différence entre « je parle » et « j’ai parlé » ?",
                answer:
                    "« Je parle » = présent (action en cours). « J’ai parlé » = passé composé (action terminée dans le passé).",
            },
            {
                type: "Vocabulaire",
                prompt: "Donne trois mots français qui viennent du malgache.",
                answer:
                    "Exemples souvent cités: « pirogue », « ravinala » (via noms propres), « lémurien » (de ‘lemur’ latin, associé à Madagascar). On peut aussi citer des toponymes et emprunts récents.",
            },
            {
                type: "Règle de vie",
                prompt:
                    "Pourquoi la patience est essentielle dans l’apprentissage d’une langue ?",
                answer:
                    "Parce que les progrès sont cumulatifs et lents ; la régularité prime sur l’intensité ponctuelle.",
            },
        ],
    },
    {
        id: 2,
        title: "Programme scolaire et vie pratique",
        category: "Éducation scolaire",
        level: "Tout public",
        summary:
            "Un programme utile inclut finance, civisme, entrepreneuriat et savoir-vivre.",
        body:
            "Un programme scolaire adapté à Madagascar devrait inclure des matières utiles à la vie quotidienne : éducation financière, civisme, entrepreneuriat et savoir-vivre. Ces cours préparent les jeunes à l’autonomie en évitant la dépendance exclusive à la fonction publique.",
        questions: [
            {
                type: "Principe",
                prompt: "Pourquoi intégrer l’éducation financière à l’école ?",
                answer:
                    "Pour apprendre à budgétiser, éviter les dettes, planifier l’épargne et les projets.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « nous apprenons » au futur simple.",
                answer: "Nous apprendrons.",
            },
            {
                type: "Règle de vie",
                prompt:
                    "Cite un exemple de ‘compétence de vie’ utile dès le collège (hors matières académiques).",
                answer: "Gérer un budget simple ; savoir rédiger un courrier officiel ; règles de sécurité routière.",
            },
        ],
    },

    // 🎯 CIBLE 2 : Étudiants et chercheurs d’emploi
    {
        id: 3,
        title: "Comment choisir son métier ?",
        category: "Orientation professionnelle",
        level: "Lycée / Post-bac",
        summary:
            "Identifier compétences + passions et les croiser avec les besoins du marché.",
        body:
            "Choisir un métier, c’est d’abord identifier ses compétences et passions. En Guinée comme à Madagascar, beaucoup se tournent vers des emplois accessibles comme le taxi-moto. Pourtant, des métiers d’avenir existent : digital, agriculture modernisée, artisanat. Un bilan de compétences aligne talents et besoins du marché.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « reconversion » en une phrase.",
                answer:
                    "Changement de métier ou de filière professionnelle, souvent après une première expérience.",
            },
            {
                type: "Principe",
                prompt: "À quoi sert un bilan de compétences ?",
                answer:
                    "À identifier ses points forts/faibles, ses motivations et les métiers compatibles.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « je choisis » au futur simple.",
                answer: "Je choisirai.",
            },
        ],
    },
    {
        id: 4,
        title: "Un CV qui attire l’attention",
        category: "Techniques de candidature",
        level: "Tout public",
        summary:
            "CV clair, concis, orienté résultats ; expériences concrètes et profil en ligne.",
        body:
            "Un CV doit être clair, concis et adapté au poste visé. Mettre en avant les expériences pratiques (stages, projets communautaires, bénévolat). Une mise en page sobre aide à la lecture. Un profil LinkedIn structuré accroît la visibilité.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Que signifie « réalisations quantifiées » dans un CV ?",
                answer:
                    "Des résultats chiffrés (ex.: +20% de ventes, 150 dossiers traités).",
            },
            {
                type: "Principe",
                prompt:
                    "Pourquoi adapter le CV à chaque offre au lieu d’un CV ‘unique’ ?",
                answer:
                    "Pour coller aux mots-clés, compétences et priorités du poste ciblé.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « nous présentons » au passé composé.",
                answer: "Nous avons présenté.",
            },
        ],
    },
    {
        id: 5,
        title: "Les métiers du digital en Afrique",
        category: "Métiers d’avenir",
        level: "Tout public",
        summary:
            "Opportunités en dev, marketing digital, data… accessibles via des formations locales et en ligne.",
        body:
            "Le digital ouvre des opportunités : développement web, marketing digital, maintenance, gestion de données. Des compétences accessibles existent via des formations locales et en ligne. Pour les jeunes malgaches, investir dans ces compétences peut ouvrir l’emploi international.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Que veut dire « télétravail » ?",
                answer:
                    "Travailler à distance, souvent via internet, pour un client/employeur.",
            },
            {
                type: "Principe",
                prompt:
                    "Cite deux plateformes où apprendre gratuitement des bases du digital.",
                answer: "YouTube (cours sérieux), OpenClassrooms (parcours gratuits), Coursera (audits libres).",
            },
            {
                type: "Grammaire",
                prompt: "Transforme « il code » au passé composé.",
                answer: "Il a codé.",
            },
        ],
    },

    // 🚀 CIBLE 3 : Autoentrepreneuriat / création d’emploi
    {
        id: 6,
        title: "Pourquoi formaliser son entreprise ?",
        category: "Entrepreneuriat",
        level: "Tout public",
        summary:
            "Accès au financement, crédibilité, protection et possibilité de grandir.",
        body:
            "La formalisation permet d’accéder aux financements, de protéger son activité et de gagner la confiance des clients. À Madagascar, beaucoup d’entreprises informelles limitent leur croissance. L’enregistrement fiscal est une étape clé pour évoluer.",
        questions: [
            {
                type: "Principe",
                prompt: "Donne 2 avantages concrets de la formalisation.",
                answer: "Contrats plus faciles, accès aux marchés publics/privés, facturation légale.",
            },
            {
                type: "Vocabulaire",
                prompt: "Définis « NIF ». ",
                answer: "Numéro d’Identification Fiscale.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « je crée » au conditionnel présent.",
                answer: "Je créerais.",
            },
        ],
    },
    {
        id: 7,
        title: "Le business plan simplifié",
        category: "Gestion d’entreprise",
        level: "Tout public",
        summary:
            "3 questions clés : idée, clients, financement/gestion. Court mais utile.",
        body:
            "Un business plan n’a pas besoin d’être complexe. Il répond à trois questions : mon idée, mes clients, mon financement/gestion. Pour un artisan ou un agriculteur, un plan court et clair aide à structurer et à convaincre.",
        questions: [
            {
                type: "Grammaire",
                prompt: "Conjugue « je planifie » au futur simple.",
                answer: "Je planifierai.",
            },
            {
                type: "Principe",
                prompt: "À quoi servent les ‘objectifs SMART’ ?",
                answer: "À fixer des objectifs Spécifiques, Mesurables, Atteignables, Réalistes, Temporels.",
            },
            {
                type: "Règle de vie",
                prompt: "Pourquoi écrire ses idées aide à les clarifier ?",
                answer: "Écrire oblige à ordonner, prioriser et détecter les incohérences.",
            },
        ],
    },
    {
        id: 8,
        title: "Créer une activité sans financement",
        category: "Innovation locale",
        level: "Tout public",
        summary:
            "Démarrer petit, utiliser les ressources locales, réinvestir les premiers bénéfices.",
        body:
            "Beaucoup d’activités démarrent avec peu de fonds : produits agricoles transformés, artisanat, services numériques. Commencer petit, utiliser les ressources locales et réinvestir les premiers bénéfices : une voie réaliste.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Que signifie « bootstrapping » ?",
                answer:
                    "Lancer et faire croître un projet avec très peu de fonds externes.",
            },
            {
                type: "Principe",
                prompt: "Donne 2 idées d’activité ‘low-cost’ locales.",
                answer: "Briquettes écologiques, service de dactylographie/PAO, transformation manioc/lait.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « ils créent » au passé composé.",
                answer: "Ils ont créé.",
            },
        ],
    },

    // 🌱 Formations / santé & sécurité / société
    {
        id: 9,
        title: "La bureautique, clé de l’emploi moderne",
        category: "Formation professionnelle",
        level: "Débutant",
        summary:
            "Word/Excel/PowerPoint ouvrent des portes dans l’administration et le commerce.",
        body:
            "La maîtrise de Word, Excel et PowerPoint est devenue indispensable. Rédiger, calculer, présenter : ces outils servent partout (administration, commerce, éducation).",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « tableur ». ",
                answer: "Logiciel de feuille de calcul (ex. Excel).",
            },
            {
                type: "Principe",
                prompt: "Cite 2 usages d’Excel utiles en TPE.",
                answer: "Suivi de stock, budget, facturation simple, tableaux de bord.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « je rédige » au futur simple.",
                answer: "Je rédigerai.",
            },
        ],
    },
    {
        id: 10,
        title: "Hygiène et sécurité au travail",
        category: "Santé et sécurité",
        level: "Tout public",
        summary:
            "Gestes simples = moins d’accidents, plus de productivité.",
        body:
            "Dans les ateliers, champs ou bureaux, l’hygiène et la sécurité sont essentielles : EPI, consignes, propreté. Moins de risques = plus de santé et de productivité.",
        questions: [
            {
                type: "Grammaire",
                prompt: "Mets « ils se lavent » au futur simple.",
                answer: "Ils se laveront.",
            },
            {
                type: "Principe",
                prompt: "Que signifie ‘risque professionnel’ ?",
                answer: "Un danger lié au poste de travail (accident, maladie pro).",
            },
            {
                type: "Règle de vie",
                prompt: "Pourquoi l’hygiène protège la communauté ?",
                answer: "Elle réduit la transmission de maladies (main, eau, aliments).",
            },
        ],
    },

    // 🌍 Développement personnel et société
    {
        id: 11,
        title: "La confiance en soi dès l’école",
        category: "Développement personnel",
        level: "Prim./Collège",
        summary:
            "Parler en public, gérer son temps, croire en soi : armes pour la vie.",
        body:
            "Apprendre à s’exprimer, gérer son temps et croire en ses capacités devrait commencer tôt. Ces compétences servent à l’école puis au travail.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « assurance ». ",
                answer: "Confiance en ses moyens ; sentiment de sécurité intérieure.",
            },
            {
                type: "Principe",
                prompt: "Pourquoi l’échec est-il utile ?",
                answer: "Il permet d’apprendre, de corriger ses erreurs et de s’améliorer.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « je réussis » au futur simple.",
                answer: "Je réussirai.",
            },
        ],
    },
];
