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
                prompt: "Pourquoi l’entraînement progressif à l’oral aide-t-il ?",
                answer: "Il réduit la peur, augmente la clarté et la persuasion.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « je crois » au futur simple.",
                answer: "Je croirai.",
            },
        ],
    },
    {
        id: 12,
        title: "Le civisme, base d’une société forte",
        category: "Vie sociale et citoyenneté",
        level: "Tout public",
        summary:
            "Respect des règles, propreté, anti-corruption : progrès collectif.",
        body:
            "Le civisme, c’est respecter les autres, garder les rues propres, lutter contre la corruption. Sans civisme, les lois restent des papiers sans valeur.",
        questions: [
            {
                type: "Principe juridique",
                prompt: "Définis « infraction ». ",
                answer: "Violation d’une règle ou d’une loi.",
            },
            {
                type: "Vocabulaire",
                prompt: "Que veut dire « solidarité » ?",
                answer: "Aide mutuelle et responsabilité partagée au sein d’un groupe.",
            },
            {
                type: "Règle de vie",
                prompt:
                    "Pourquoi jeter ses déchets à la poubelle est un acte citoyen ?",
                answer:
                    "Parce que cela protège la santé publique et l’environnement de tous.",
            },
        ],
    },
    {
        id: 13,
        title: "La connaissance est une arme",
        category: "Sensibilisation sociale",
        level: "Tout public",
        summary:
            "Informer sur corruption, prostitution, arnaques : se protéger et agir.",
        body:
            "L’ignorance nourrit la pauvreté et les abus. Former à reconnaître les dangers (prostitution, corruption, arnaques) protège et responsabilise.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « transparence ». ",
                answer:
                    "Possibilité de vérifier les décisions/flux (financiers, administratifs).",
            },
            {
                type: "Principe juridique",
                prompt: "Qu’est-ce qu’un ‘droit fondamental’ ?",
                answer:
                    "Un droit essentiel reconnu à toute personne (ex. éducation, expression).",
            },
            {
                type: "Règle de vie",
                prompt: "Pourquoi vérifier les sources protège-t-il des abus ?",
                answer:
                    "Pour éviter la désinformation et repérer les pièges (escroqueries, faux documents).",
            },
        ],
    },

    // 🌿 Environnement (extraits)
    {
        id: 14,
        title: "Planter un arbre, c’est planter un futur",
        category: "Environnement",
        level: "Tout public",
        summary:
            "Un arbre protège l’eau, le sol et l’air : acte citoyen simple.",
        body:
            "Un arbre n’est pas que de l’ombre : il retient l’eau, protège les sols, capte du CO₂. Dans un contexte de déforestation, replanter est vital.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Que veut dire « reboisement » ?",
                answer: "Action de replanter des arbres sur une zone dégradée.",
            },
            {
                type: "Principe",
                prompt: "Pourquoi ne faut-il pas couper sans replanter ?",
                answer:
                    "Érosion, perte de biodiversité, baisse des nappes, risques d’inondation.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « nous protégeons » au futur simple.",
                answer: "Nous protégerons.",
            },
        ],
    },
    {
        id: 15,
        title: "Déchets plastiques : l’ennemi invisible",
        category: "Environnement",
        level: "Tout public",
        summary:
            "Réduire, réutiliser, recycler ; bannir les sachets à usage unique.",
        body:
            "Les plastiques s’accumulent dans les marchés, rivières, champs. Réduire les sachets, privilégier les paniers et le tri sélectif : gestes clés.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « biodégradable ». ",
                answer: "Qui peut être décomposé naturellement par les organismes vivants.",
            },
            {
                type: "Principe",
                prompt: "Donne 2 habitudes anti-plastique au marché.",
                answer: "Amener un panier/récipient réutilisable ; refuser les sachets.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « ils trient » au passé composé.",
                answer: "Ils ont trié.",
            },
        ],
    },

    // 🔒 Protection & société
    {
        id: 16,
        title: "Prévenir le harcèlement scolaire",
        category: "Éducation / Sécurité",
        level: "Collège / Lycée",
        summary:
            "Sensibiliser, former, règles claires : l’école doit être sûre.",
        body:
            "Moqueries, humiliations, agressions : le harcèlement détruit. Prévenir = éduquer, écouter, sanctionner. Parents/équipe éducative impliqués.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Que veut dire « intimidation » ?",
                answer: "Pression/menace visant à faire peur ou à faire céder quelqu’un.",
            },
            {
                type: "Principe",
                prompt: "Cite 2 signes d’alerte chez un élève harcelé.",
                answer: "Isolement, chute des notes, refus d’aller à l’école, anxiété.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « ils respectent » au conditionnel présent.",
                answer: "Ils respecteraient.",
            },
        ],
    },
    {
        id: 17,
        title: "Prévenir le viol : éducation et protection",
        category: "Société / Sécurité",
        level: "Tout public",
        summary:
            "Respect du consentement, vigilance communautaire, soutien aux victimes.",
        body:
            "La prévention passe par l’éducation au consentement, la vigilance (trajets, lieux à risque), des lois appliquées et un soutien réel aux victimes.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « consentement ». ",
                answer: "Accord libre et éclairé ; sans pression ni contrainte.",
            },
            {
                type: "Principe juridique",
                prompt: "Qu’est-ce qu’une infraction pénale ?",
                answer: "Une action interdite par la loi et passible de sanction.",
            },
            {
                type: "Règle de vie",
                prompt:
                    "Cite un réflexe de sécurité simple pour les trajets du soir.",
                answer: "Prévenir un proche, marcher accompagné, zones éclairées, téléphone chargé.",
            },
        ],
    },

    // 💸 Budget & économie de la vie
    {
        id: 18,
        title: "La gestion budgétaire familiale",
        category: "Finances personnelles",
        level: "Tout public",
        summary:
            "Noter dépenses, prévoir revenus, éviter dettes = sérénité.",
        body:
            "Un budget simple (revenus – dépenses) évite les dettes surprises. Noter, catégoriser, prioriser : trois habitudes qui changent la vie.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « taux d’intérêt ». ",
                answer: "Coût de l’emprunt (ou rémunération de l’épargne) en pourcentage.",
            },
            {
                type: "Principe",
                prompt: "Donne 2 astuces pour éviter les achats impulsifs.",
                answer: "Attendre 24h avant d’acheter ; liste écrite et montant plafond.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « nous économisons » au futur simple.",
                answer: "Nous économiserons.",
            },
        ],
    },
    {
        id: 19,
        title: "Transformer localement = créer de la valeur",
        category: "Économie / Agro-industrie",
        level: "Tout public",
        summary:
            "Du riz brut au biscuit : la valeur ajoutée reste au pays.",
        body:
            "Transformer le manioc en farine, le lait en fromage, le riz en galette multiplie la valeur, crée des emplois et stabilise les revenus.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « valeur ajoutée ». ",
                answer: "Richesse créée par la transformation/production sur un produit.",
            },
            {
                type: "Principe",
                prompt: "Qu’est-ce qu’une ‘chaîne de valeur’ ?",
                answer:
                    "Ensemble des étapes qui augmentent la valeur d’un produit (production → vente).",
            },
            {
                type: "Grammaire",
                prompt: "Mets « ils transforment » au passé composé.",
                answer: "Ils ont transformé.",
            },
        ],
    },
    {
        id: 20,
        title: "Code de la route : survie sur deux roues",
        category: "Société / Sécurité routière",
        level: "Tout public",
        summary:
            "Casque, feux, priorités : règles simples qui sauvent des vies.",
        body:
            "À Tana et ailleurs, le trafic est dense. Le respect du code (casque, feux, priorités, pas de surcharge) réduit drastiquement les accidents.",
        questions: [
            {
                type: "Principe juridique",
                prompt: "Qu’est-ce qu’une ‘infraction routière’ ?",
                answer: "Violation du code de la route (amende/sanction).",
            },
            {
                type: "Vocabulaire",
                prompt: "Définis « priorité ». ",
                answer: "Droit de passer avant les autres usagers selon la règle en vigueur.",
            },
            {
                type: "Règle de vie",
                prompt: "Pourquoi le casque sauve des vies ?",
                answer:
                    "Il réduit fortement le traumatisme crânien en cas de chute/choc.",
            },
        ],
    },
    // 🆕 Nouveaux contenus (Mise à jour)
    {
        id: 21,
        title: "IA : Amie ou ennemie de l'emploi ?",
        category: "Intelligence Artificielle",
        level: "Tout public",
        summary:
            "Comprendre l'IA : elle ne remplace pas l'humain, elle change le travail. Les métiers à transformer.",
        body:
            "L’Intelligence Artificielle (IA) est un outil qui automatise les tâches répétitives (comptabilité, traduction basique). Elle crée de nouveaux métiers ('prompt engineer', maintenance IA) et augmente la productivité des autres (médecins, agriculteurs). Il faut apprendre à travailler avec l'IA, pas contre elle.",
        questions: [
            {
                type: "Principe",
                prompt: "Qu'est-ce qu'un 'prompt' en IA ?",
                answer: "Une instruction textuelle donnée à une IA pour générer un résultat.",
            },
            {
                type: "Vocabulaire",
                prompt: "Définis « automatisation ».",
                answer: "Exécution de tâches par des machines sans intervention humaine directe.",
            },
            {
                type: "Règle de vie",
                prompt: "Pourquoi faut-il développer la pensée critique face à l'IA ?",
                answer: "Pour vérifier les informations générées et ne pas dépendre aveuglément de la machine.",
            },
        ],
    },
    {
        id: 22,
        title: "Nouvelle économie : les métiers qui émergent",
        category: "Métiers d'Avenir",
        level: "Lycée / Post-bac",
        summary:
            "Découvrez les métiers en forte croissance à Madagascar et dans le monde : data, énergies renouvelables, e-commerce.",
        body:
            "L’économie évolue rapidement. Les métiers de la 'data science', des énergies renouvelables, du marketing digital et de l'artisanat de luxe (avec exportation) sont en forte demande. L'informatique n'est pas qu'un métier ; c'est une compétence transversale essentielle.",
        questions: [
            {
                type: "Principe",
                prompt: "Donne 2 métiers liés aux énergies renouvelables.",
                answer: "Installateur de panneaux solaires, ingénieur éolien.",
            },
            {
                type: "Vocabulaire",
                prompt: "Qu'est-ce que le 'cloud computing' ?",
                answer: "Stockage et accès aux données via internet plutôt que sur un disque dur local.",
            },
            {
                type: "Grammaire",
                prompt: "Mets « l'économie évolue » au passé simple.",
                answer: "L'économie évolua.",
            },
        ],
    },
    {
        id: 23,
        title: "Le danger des Deepfakes et de l'image",
        category: "Médias / Sécurité Numérique",
        level: "Tout public",
        summary:
            "Apprenez à reconnaître les images et les vidéos manipulées par l'IA et à protéger votre réputation.",
        body:
            "Les technologies Deepfake permettent de créer des vidéos et audios hyper-réalistes, mais totalement faux. Sur Internet, tout n'est pas vrai. Le danger est la désinformation et l'usurpation d'identité. Vérifier les sources est un réflexe de survie numérique.",
        questions: [
            {
                type: "Principe",
                prompt: "Cite 2 moyens de vérifier une image ou vidéo suspecte.",
                answer: "Recherche inversée d'image, vérifier la source (média reconnu), observer les détails (mains, ombres).",
            },
            {
                type: "Vocabulaire",
                prompt: "Qu'est-ce qu'un « bot » ?",
                answer: "Programme informatique automatisé qui interagit sur internet (souvent pour spammer ou influencer).",
            },
            {
                type: "Règle de vie",
                prompt: "Pourquoi signaler les Deepfakes est important pour la communauté ?",
                answer: "Pour éviter la propagation de fausses informations et protéger les victimes.",
            },
        ],
    },
    {
        id: 24,
        title: "Lutte contre le Racisme et l'Exclusion",
        category: "Vie Citoyenne",
        level: "Tout public",
        summary:
            "Le racisme est une violence. Apprendre à respecter les différences, lutter contre les discriminations et promouvoir l'unité.",
        body:
            "Le racisme est une idéologie basée sur la supériorité d'un groupe, source de violence et d'inégalités. À Madagascar, comme ailleurs, la discrimination basée sur l'origine (régionale, sociale, etc.) ralentit le progrès national. L'éducation et le respect de la Constitution sont les meilleures armes.",
        questions: [
            {
                type: "Principe juridique",
                prompt: "Définis « discrimination ».",
                answer: "Traitement inégal et défavorable d'une personne basé sur des critères comme l'origine, le sexe, etc.",
            },
            {
                type: "Vocabulaire",
                prompt: "Que veut dire « inclusion » ?",
                answer: "Action d'intégrer tout le monde, quelles que soient les différences.",
            },
            {
                type: "Règle de vie",
                prompt: "Quel est ton rôle face à un acte de discrimination ?",
                answer: "Ne pas participer, soutenir la victime et signaler si nécessaire.",
            },
        ],
    },
    {
        id: 25,
        title: "La Politesse : Clé de la réussite professionnelle",
        category: "Développement Personnel",
        level: "Tout public",
        summary:
            "L'usage correct des langues (politesse, courtoisie) et le respect des normes sociales ouvrent les portes.",
        body:
            "L'excellence académique est incomplète sans la politesse et le savoir-vivre. Un mail bien rédigé, un ton respectueux, la courtoisie : ces qualités font la différence dans l'emploi, les affaires et la vie sociale. La maîtrise des langues (malgache, français, anglais) doit s'accompagner du respect.",
        questions: [
            {
                type: "Vocabulaire",
                prompt: "Définis « courtoisie ».",
                answer: "Politesse raffinée, respect des autres et bonnes manières.",
            },
            {
                type: "Principe",
                prompt: "Donne 2 règles de politesse dans un échange professionnel par email.",
                answer: "Commencer par une salutation, être concis, finir par une formule de politesse.",
            },
            {
                type: "Grammaire",
                prompt: "Conjugue « il doit étudier » à l'imparfait.",
                answer: "Il devait étudier.",
            },
        ],
    },
    {
        id: 26,
        title: "Dangers cachés des Réseaux Sociaux",
        category: "Sécurité Numérique",
        level: "Collège / Lycée",
        summary:
            "Addiction, cyberharcèlement, perte de temps, fausse image : utiliser les réseaux sociaux avec intelligence.",
        body:
            "Les réseaux sociaux sont utiles pour communiquer, mais ils présentent des risques majeurs : addiction, cyberharcèlement, diffusion de fausses nouvelles (fake news), et un impact négatif sur l'estime de soi. Le temps passé devant l'écran doit être géré pour ne pas voler le temps des études et des projets réels.",
        questions: [
            {
                type: "Principe",
                prompt: "Qu'est-ce que le 'FOMO' (Fear of Missing Out) ?",
                answer: "La peur de rater quelque chose d'important si on n'est pas connecté.",
            },
            {
                type: "Vocabulaire",
                prompt: "Définis « cyberharcèlement ».",
                answer: "Harcèlement effectué via les outils numériques (réseaux sociaux, messages).",
            },
            {
                type: "Règle de vie",
                prompt: "Quelle est ta règle de 'déconnexion' quotidienne ?",
                answer: "Ex: Pas d'écran 1h avant de dormir, ou pas de téléphone à table.",
            },
        ],
    },
    {
        id: 27,
        title: "L'Importance Vraie des Études (long terme)",
        category: "Éducation scolaire",
        level: "Lycée / Post-bac",
        summary:
            "Les études sont un investissement à long terme, pas juste un diplôme. Elles enseignent la méthode, la rigueur et l'adaptation.",
        body:
            "Dans un marché du travail changeant (comme les métiers à disparaître vs. ceux à créer), l'importance des études n'est pas le diplôme lui-même, mais la capacité qu'elles développent : la rigueur, la méthode, la pensée analytique et la capacité d'adaptation. Ces compétences sont l'unique garantie de rester employable face aux évolutions technologiques.",
        questions: [
            {
                type: "Principe",
                prompt: "Cite 2 compétences que l'école enseigne, utiles dans tous les métiers.",
                answer: "La capacité d'apprendre, la gestion du temps, le travail en équipe.",
            },
            {
                type: "Vocabulaire",
                prompt: "Définis « obsolescence ».",
                answer: "Le fait de devenir périmé ou dépassé (ex: une compétence technique).",
            },
            {
                type: "Grammaire",
                prompt: "Mets « tu apprends » au passé simple.",
                answer: "Tu appris.",
            },
        ],
    },
];
