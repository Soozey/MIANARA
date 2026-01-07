export const DEMO_CONTENTS = [
    // 🎯 CIBLE 1 : Système éducatif
    {
        id: 1,
        title: "Apprendre une langue étrangère efficacement",
        category: "Formation linguistique",
        level: "Tout public",
        readingTime: 6,
        summary:
            "Maîtriser une langue = grammaire, vocabulaire, compréhension et expression. Découvrez comment transformer votre quotidien en salle de classe.",
        body: `
            <p>Apprendre une nouvelle langue, c'est comme ouvrir une fenêtre sur un nouveau monde. Que ce soit pour les études, le travail ou simplement le plaisir, la maîtrise d'une langue étrangère est un atout inestimable. Mais comment s'y prendre efficacement, surtout quand on n'a pas l'occasion de voyager ?</p>
            
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Groupe d'étudiants discutant" class="rounded-xl my-8 w-full object-cover">

            <h2>Les 4 Piliers de l'Apprentissage</h2>
            <p>Pour maîtriser une langue, il ne suffit pas de connaître des listes de vocabulaire par cœur. Il faut travailler simultanément sur quatre compétences essentielles :</p>
            <ul>
                <li><strong>La Compréhension Orale (Écouter)</strong> : Habituez votre oreille aux sons, au rythme et à l'accent.</li>
                <li><strong>La Compréhension Écrite (Lire)</strong> : Enrichissez votre vocabulaire et observez la grammaire en contexte.</li>
                <li><strong>L'Expression Orale (Parler)</strong> : C'est souvent le plus difficile ! Osez parler, même avec des fautes.</li>
                <li><strong>L'Expression Écrite (Écrire)</strong> : Structurez votre pensée et fixez l'orthographe.</li>
            </ul>

            <blockquote>
                "Avoir une autre langue, c'est posséder une deuxième âme." — Charlemagne
            </blockquote>

            <h2>L'Immersion à Domicile : C'est Possible !</h2>
            <p>Vous n'avez pas besoin d'aller à Londres ou à Paris pour vus immerger. À Madagascar, nous avons accès à des outils formidables :</p>
            
            <h3>1. Changez votre environnement numérique</h3>
            <p>Mettez votre téléphone, votre Facebook et Google en anglais ou en français. Cela vous forcera à apprendre le vocabulaire technique du quotidien sans effort.</p>

            <h3>2. La "Règle des 15 Minutes"</h3>
            <p>La régularité bat l'intensité. Il vaut mieux pratiquer <strong>15 minutes chaque jour</strong> (dans le bus, en attendant un ami) plutôt que 3 heures le samedi. Le cerveau a besoin de répétition pour ancrer les connaissances à long terme.</p>

            <h3>3. Parlez seul (ou à votre miroir)</h3>
            <p>Cela peut paraître étrange, mais raconter votre journée à voix haute dans la langue cible est un excellent exercice. "Je suis en train de cuisiner le riz..." -> "I am cooking rice...". Cela crée des automatismes.</p>

            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Prendre des notes et apprendre en ligne" class="rounded-xl my-8 w-full object-cover">

            <h2>Ressources Gratuites pour Démarrer</h2>
            <p>Ne laissez pas le manque d'argent être un obstacle. Internet regorge de trésors :</p>
            <ul>
                <li><strong>Duolingo</strong> : Pour gamifier l'apprentissage.</li>
                <li><strong>BBC Learning English</strong> : Excellent pour l'anglais britannique.</li>
                <li><strong>RFI Savoirs</strong> : Pour le français, avec des actualités mondiales.</li>
                <li><strong>YouTube</strong> : Cherchez "Learn English with TV Series" pour apprendre avec vos séries préférées.</li>
            </ul>
        `,
        quiz: [
            {
                id: 1,
                question: "Quels sont les 4 piliers de l'apprentissage d'une langue selon l'article ?",
                options: [
                    "Grammaire, Orthographe, Conjugaison, Vocabulaire",
                    "Écouter, Parler, Lire, Écrire",
                    "Anglais, Français, Espagnol, Mandarin",
                    "Mémoriser, Réciter, Copier, Traduire"
                ],
                answer: 1,
                explanation: "La maîtrise d'une langue repose sur la compréhension (orale/écrite) et l'expression (orale/écrite).",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Dans la phrase « J'ai parlé avec mon ami », quel est le temps du verbe ?",
                options: ["Présent", "Futur simple", "Passé composé", "Imparfait"],
                answer: 2,
                explanation: "« J'ai parlé » est formé de l'auxiliaire 'avoir' au présent + le participe passé 'parlé'. C'est une action terminée.",
                category: "Grammaire"
            },
            {
                id: 3,
                question: "Selon la 'Règle des 15 minutes', qu'est-ce qui est le plus efficace ?",
                options: [
                    "Étudier 3 heures une fois par semaine",
                    "Étudier 15 minutes tous les jours",
                    "Lire un dictionnaire avant de dormir",
                    "Ne rien faire tant qu'on n'a pas 1h devant soi"
                ],
                answer: 1,
                explanation: "La régularité prime sur l'intensité. Le cerveau retient mieux par petites touches fréquentes.",
                category: "Logique"
            },
            {
                id: 4,
                question: "Que signifie le mot « Immersion » dans ce contexte ?",
                options: [
                    "Nager sous l'eau",
                    "Se plonger dans un environnement où la langue est partout",
                    "Traduire mot à mot un texte",
                    "Apprendre une liste de verbes irréguliers"
                ],
                answer: 1,
                explanation: "L'immersion consiste à s'entourer de la langue (téléphone, radio, lectures) pour que le cerveau s'y habitue.",
                category: "Vocabulaire"
            },
            {
                id: 5,
                question: "Quelle ressource gratuite est suggérée pour apprendre avec des actualités mondiales en français ?",
                options: ["Netflix", "RFI Savoirs", "Tik Tok", "Un manuel scolaire des années 90"],
                answer: 1,
                explanation: "RFI Savoirs propose des contenus audio et écrits adaptés à l'apprentissage du français.",
                category: "Compréhension"
            }
        ],
    },
    {
        id: 2,
        title: "Programme scolaire et vie pratique",
        category: "Éducation scolaire",
        level: "Tout public",
        readingTime: 5,
        summary:
            "Un programme utile inclut finance, civisme, entrepreneuriat et savoir-vivre. Préparons les jeunes à la vraie vie.",
        body: `
            <p>L'école est le socle de notre société, mais prépare-t-elle suffisamment aux défis de la vie adulte ? Au-delà des mathématiques et de l'histoire, il existe des compétences "de vie" indispensables pour s'épanouir et réussir au 21ème siècle.</p>

            <h2>1. L'Éducation Financière : Le Grand Oublié</h2>
            <p>Combien de jeunes sortent du lycée sans savoir gérer un budget ? Savoir gagner de l'argent est une chose, savoir le gérer en est une autre.</p>
            <ul>
                <li><strong>Le Budget</strong> : Apprendre la règle du 50/30/20 (50% besoins, 30% envies, 20% épargne).</li>
                <li><strong>L'Épargne</strong> : Comprendre que mettre de côté 1000 Ar par jour peut financer un projet en fin d'année.</li>
                <li><strong>L'Investissement</strong> : La différence entre un passif (qui coûte de l'argent) et un actif (qui rapporte de l'argent).</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1554224155-9727b5394033?auto=format&fit=crop&w=800&q=80" alt="Calculatrice et gestion financière" class="rounded-xl my-8 w-full object-cover">

            <h2>2. Le Civisme et le Savoir-Vivre</h2>
            <p>La réussite n'est pas qu'individuelle, elle est collective. Le civisme, c'est comprendre que ma liberté s'arrête là où commence celle des autres.</p>
            <blockquote>
                "L'éducation est l'arme la plus puissante pour changer le monde." — Nelson Mandela
            </blockquote>
            <p>Cela passe par des gestes simples : respecter la propreté des lieux publics, connaître ses droits mais aussi ses devoirs envers la communauté, et savoir débattre sans violence.</p>

            <h2>3. L'Esprit d'Entreprise dès le Collège</h2>
            <p>Tout le monde ne sera pas patron, mais tout le monde devrait avoir l'esprit d'entreprise. C'est quoi ?</p>
            <ul>
                <li>C'est voir un problème et chercher une solution (au lieu de se plaindre).</li>
                <li>C'est prendre des initiatives.</li>
                <li>C'est savoir travailler en équipe pour un but commun.</li>
            </ul>
            <p>En intégrant ces notions tôt, nous formons une génération de "problem-solvers" (résolveurs de problèmes) dont Madagascar a tant besoin.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Quelle est la règle 50/30/20 pour gérer son budget ?",
                options: [
                    "50% Besoins, 30% Envies, 20% Épargne",
                    "50% Épargne, 30% Loyer, 20% Nourriture",
                    "50% Dettes, 30% Loisirs, 20% Impôts",
                    "50% Famille, 30% Amis, 20% Soi-même"
                ],
                answer: 0,
                explanation: "C'est une méthode d'équilibre : 50% pour le nécessaire (loyer, riz), 30% pour le plaisir, et 20% obligatoires pour l'épargne.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "En finance, quelle est la différence entre un Actif et un Passif ?",
                options: [
                    "L'Actif rapporte de l'argent, le Passif en coûte",
                    "L'Actif c'est le sport, le Passif c'est dormir",
                    "L'Actif c'est la banque, le Passif c'est l'état",
                    "Il n'y a aucune différence"
                ],
                answer: 0,
                explanation: "Un actif met de l'argent dans votre poche (invesstissement). Un passif en enlève (dépense, crédit consommation).",
                category: "Vocabulaire"
            },
            {
                id: 3,
                question: "Pourquoi le civisme est-il important pour la réussite collective ?",
                options: [
                    "Pour éviter d'aller en prison uniquement",
                    "Parce que ma liberté s'arrête là où commence celle des autres",
                    "Pour faire plaisir au Président",
                    "Ce n'est pas important, seul l'argent compte"
                ],
                answer: 1,
                explanation: "Le respect mutuel et des règles communes permet à la société de fonctionner harmonieusement.",
                category: "Logique"
            },
            {
                id: 4,
                question: "Conjugue le verbe 'Apprendre' au futur simple (Nous) :",
                options: ["Nous apprenons", "Nous apprendrons", "Nous avons appris", "Nous apprendrions"],
                answer: 1,
                explanation: "Au futur simple, la terminaison avec 'nous' est toujours '-ons' ajoutée au radical.",
                category: "Grammaire"
            },
            {
                id: 5,
                question: "Que signifie avoir 'l'esprit d'entreprise' selon l'article ?",
                options: [
                    "Être riche rapidement",
                    "Avoir beaucoup d'employés",
                    "Voir un problème et chercher une solution",
                    "Ne jamais prendre de vacances"
                ],
                answer: 2,
                explanation: "L'entrepreneuriat, c'est avant tout une attitude de résolution de problèmes et de prise d'initiative.",
                category: "Compréhension"
            }
        ],
    },

    // 🎯 CIBLE 2 : Étudiants et chercheurs d’emploi
    {
        id: 3,
        title: "Comment choisir son métier ?",
        category: "Orientation professionnelle",
        level: "Lycée / Post-bac",
        readingTime: 7,
        summary:
            "Identifier compétences + passions et les croiser avec les besoins du marché. Trouvez votre Ikigai.",
        body: `
            <p>Choisir son futur métier est angoissant. "Est-ce que je vais trouver du travail ?" "Est-ce que ça va me plaire ?" Pour répondre à ces questions, il existe une méthode japonaise éprouvée : l'<strong>Ikigai</strong>.</p>

            <h2>Qu'est-ce que l'Ikigai ?</h2>
            <p>C'est votre "raison d'être". Imaginez quatre cercles qui s'entrecroisent :</p>
            <ol>
                <li><strong>Ce que vous aimez</strong> (Votre passion)</li>
                <li><strong>Ce pour quoi vous êtes doué</strong> (Votre vocation)</li>
                <li><strong>Ce dont le monde a besoin</strong> (Votre mission)</li>
                <li><strong>Ce pour quoi vous pouvez être payé</strong> (Votre profession)</li>
            </ol>
            <p>Le métier idéal se trouve au centre de ces quatre cercles.</p>

            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Personne réfléchissant à son plan de carrière" class="rounded-xl my-8 w-full object-cover">

            <h2>Analyser le Marché Malgache</h2>
            <p>Aimer chanter est super, mais si personne ne paie pour cela, c'est un hobby, pas un métier. Observez la réalité économique autour de vous :</p>
            <ul>
                <li><strong>L'Agriculture modernisée</strong> : Transformation alimentaire, export de vanille/épices, permaculture.</li>
                <li><strong>Le Numérique (BPO & Tech)</strong> : Madagascar est une destination phare pour l'externalisation. Développeurs, assistants virtuels, rédacteurs sont très recherchés.</li>
                <li><strong>Les Énergies Renouvelables</strong> : Le solaire et l'hydroélectrique sont l'avenir de notre énergie.</li>
            </ul>

            <h2>Osez le Bilan de Compétences</h2>
            <p>Prenez une feuille blanche. Listez vos "Hard Skills" (savoir coder, parler anglais, conduire un tracteur) et vos "Soft Skills" (savoir écouter, être ponctuel, gérer le stress). Parfois, on a des trésors cachés qu'on ignore !</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Que signifie 'Ikigai' ?",
                options: ["Un art martial", "Raison d'être", "Manger sainement", "Travailler dur"],
                answer: 1,
                explanation: "L'Ikigai est un concept japonais qui signifie 'la raison pour laquelle on se lève le matin' (somme de passion, vocation, mission, profession).",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Selon l'article, qu'est-ce qui est nécessaire pour qu'une passion devienne un métier ?",
                options: ["Que quelqu'un soit prêt à payer pour ça", "Être le meilleur du monde", "Avoir un diplôme universitaire", "Avoir l'accord de ses parents"],
                answer: 0,
                explanation: "Si personne ne paie, c'est un hobby. Le marché valide le métier.",
                category: "Logique"
            },
            {
                id: 3,
                question: "Quel secteur est cité comme une opportunité majeure à Madagascar ?",
                options: ["La construction navale", "L'industrie aérospatiale", "Le Numérique (BPO & Tech)", "L'élevage de rennes"],
                answer: 2,
                explanation: "L'externalisation (BPO) et la Tech sont des secteurs en plein boom à Madagascar.",
                category: "Connaissance"
            },
            {
                id: 4,
                question: "Conjugue 'choisir' au futur simple (Je) :",
                options: ["Je choisirai", "Je choisirais", "J'ai choisi", "Je choisis"],
                answer: 0,
                explanation: "Futur simple : radical + ai/as/a/ons/ez/ont.",
                category: "Grammaire"
            },
            {
                id: 5,
                question: "Quelle est la définition de la « reconversion » ?",
                options: ["Changer de religion", "Changer de métier ou de secteur", "Refaire sa toiture", "Partir en retraite"],
                answer: 1,
                explanation: "La reconversion professionnelle consiste à changer de carrière.",
                category: "Vocabulaire"
            }
        ],
    },
    {
        id: 4,
        title: "Un CV qui attire l’attention",
        category: "Techniques de candidature",
        level: "Tout public",
        readingTime: 5,
        summary:
            "CV clair, concis, orienté résultats. Vous avez 6 secondes pour convaincre.",
        body: `
            <p>Saviez-vous qu'un recruteur passe en moyenne <strong>6 à 10 secondes</strong> sur un CV avant de décider de le lire ou de le jeter ? Votre CV doit être une arme de persuasion massive.</p>
            
            <h2>La Règle d'Or : Clarté et Concision</h2>
            <p>Pas de pavés de texte. Utilisez des listes à puces. Voici la structure idéale :</p>
            <ul>
                <li><strong>En-tête</strong> : Nom, contact, lien LinkedIn (et GitHub pour les devs).</li>
                <li><strong>Titre du profil</strong> : Ex: "Comptable Junior - Spécialisé en PME".</li>
                <li><strong>Expériences</strong> : Du plus récent au plus ancien. C'est le cœur du CV.</li>
                <li><strong>Formations</strong> : Diplômes pertinents.</li>
                <li><strong>Compétences</strong> : Logiciels, langues, savoir-être.</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" alt="Exemple de CV moderne" class="rounded-xl my-8 w-full object-cover">

            <h2>Parlez en "Résultats"</h2>
            <p>Au lieu de dire : <em>"J'ai été responsable des ventes."</em></p>
            <p>Dites : <em>"J'ai augmenté les ventes de 20% en 6 mois en réorganisant le rayon frais."</em></p>
            <p>Les chiffres parlent plus fort que les mots. Ils prouvent votre valeur.</p>

            <h2>Les Erreurs Fatales</h2>
            <blockquote>
                "Une faute d'orthographe dans un CV, c'est comme une tache de café sur une chemise blanche lors d'un entretien."
            </blockquote>
            <ul>
                <li>La photo de vacances recadrée (mettez une photo pro !).</li>
                <li>L'adresse email "bg_du_90@gmail.com" (créez prenom.nom@gmail.com).</li>
                <li>Mentir (ça se voit toujours à l'entretien).</li>
            </ul>
        `,
        quiz: [
            {
                id: 1,
                question: "Combien de temps moyen un recruteur passe-t-il sur un CV ?",
                options: ["5 minutes", "1 minute", "6 à 10 secondes", "30 secondes"],
                answer: 2,
                explanation: "C'est très court, d'où l'importance d'être percutant immédiatement.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Quel est l'ordre recommandé pour les expériences ?",
                options: ["Chronologique (du plus vieux au plus récent)", "Antéchronologique (du plus récent au plus vieux)", "Aléatoire", "Par ordre d'importance"],
                answer: 1,
                explanation: "On veut savoir ce que vous avez fait en dernier.",
                category: "Logique"
            },
            {
                id: 3,
                question: "Que signifie « Quantifier ses résultats » ?",
                options: ["Écrire beaucoup", "Utiliser des chiffres pour prouver sa valeur", "Mettre des dates", "Utiliser une police quantitative"],
                answer: 1,
                explanation: "Exemple : 'Augmentation de 20% des ventes'.",
                category: "Vocabulaire"
            },
            {
                id: 4,
                question: "Quelle adresse email est professionnelle ?",
                options: ["jean.dupond@gmail.com", "belgoss123@yahoo.fr", "naruto_uzumaki@hotmail.com", "boss_du_marketing@gmail.com"],
                answer: 0,
                explanation: "Prénom + Nom est le standard professionnel.",
                category: "Savoir-être"
            },
            {
                id: 5,
                question: "Conjugue 'présenter' au passé composé (Nous) :",
                options: ["Nous présentons", "Nous présentions", "Nous avons présenté", "Nous eûmes présenté"],
                answer: 2,
                explanation: "Passé composé = Auxiliaire avoir + participe passé.",
                category: "Grammaire"
            }
        ],
    },
    {
        id: 5,
        title: "Les métiers du digital en Afrique",
        category: "Métiers d’avenir",
        level: "Tout public",
        readingTime: 6,
        summary:
            "Opportunités en dev, marketing, data... Le pétrole du 21ème siècle est numérique.",
        body: `
            <p>Le continent africain est en pleine révolution numérique. Le digital n'est pas "le futur", c'est le présent. Pour la jeunesse malgache, c'est une opportunité historique de travailler à l'international sans quitter le pays.</p>

            <h2>Les 3 Secteurs qui Recrutent</h2>
            
            <h3>1. Le Développement Web et Mobile</h3>
            <p>Tout le monde a besoin d'un site ou d'une appli. Commerçants, banques, ONG. Apprendre le JavaScript, le Python ou le PHP, c'est s'assurer un emploi quasi garanti.</p>

            <h3>2. Le Marketing Digital</h3>
            <p>Savoir gérer une page Facebook ne suffit plus. Le Community Manager moderne sait analyser des données, créer des publicités ciblées (Facebook Ads) et engager une communauté. Les entreprises s'arrachent ces profils pour vendre en ligne.</p>

            <h3>3. La Data et l'IA</h3>
            <p>L'intelligence artificielle a besoin de données propres. De nombreux emplois se créent dans l'annotation de données, l'analyse de base de données et l'automatisation.</p>

            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Équipe travaillant sur ordinateur" class="rounded-xl my-8 w-full object-cover">

            <h2>Comment se former gratuitement ?</h2>
            <p>L'école de la vie est en ligne. Voici où commencer :</p>
            <ul>
                <li><strong>FreeCodeCamp</strong> : Pour apprendre à coder de zéro.</li>
                <li><strong>OpenClassrooms</strong> : De nombreux cours gratuits en français.</li>
                <li><strong>Google Ateliers Numériques</strong> : Certifications gratuites en marketing digital.</li>
            </ul>
            <p>Votre diplôme compte moins que votre "Portfolio". Montrez ce que vous savez faire !</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Quel langage de programmation est cité ?",
                options: ["Latin", "Python", "Klingon", "Morse"],
                answer: 1,
                explanation: "Python, JavaScript et PHP sont des langages très demandés.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Qu'est-ce qu'un Community Manager ?",
                options: ["Le maire de la ville", "Celui qui répare les ordinateurs", "Celui qui gère la présence en ligne d'une marque", "Un vendeur de téléphone"],
                answer: 2,
                explanation: "Il anime la communauté et gère l'image de marque sur les réseaux sociaux.",
                category: "Vocabulaire"
            },
            {
                id: 3,
                question: "Pourquoi le Portfolio est-il important ?",
                options: ["C'est joli", "Il prouve ce que vous savez faire concrètement", "C'est obligatoire par la loi", "Pour décorer le bureau"],
                answer: 1,
                explanation: "Dans le digital, la preuve par l'exemple (ce que j'ai fait) vaut plus que le diplôme (ce que j'ai étudié).",
                category: "Conseil Carrière"
            },
            {
                id: 4,
                question: "Quelle plateforme gratuite est recommandée pour le code ?",
                options: ["Netflix", "FreeCodeCamp", "Amazon", "Facebook"],
                answer: 1,
                explanation: "FreeCodeCamp est une référence mondiale pour apprendre le code gratuitement.",
                category: "Ressource"
            },
            {
                id: 5,
                question: "Conjugue 'Coder' au passé composé (Il) :",
                options: ["Il a codé", "Il coda", "Il codait", "Il codera"],
                answer: 0,
                explanation: "Auxiliaire avoir + participe passé.",
                category: "Grammaire"
            }
        ],
    },

    // 🚀 CIBLE 3 : Autoentrepreneuriat / création d’emploi
    {
        id: 6,
        title: "Pourquoi formaliser son entreprise ?",
        category: "Entrepreneuriat",
        level: "Tout public",
        readingTime: 4,
        summary:
            "Sortir de l'informel pour grandir. Accès au crédit, crédibilité, protection.",
        body: `
            <p>L'informel est le refuge de la débrouille, mais c'est aussi un piège qui empêche de grandir. Pourquoi tant de "petits business" restent petits ? Souvent parce qu'ils n'existent pas légalement.</p>

            <h2>Les Avantages de la Formalisation</h2>
            <ul>
                <li><strong>L'Accès au Crédit Bancaire</strong> : Aucune banque ne prête à une "entreprise fantôme". Avec un NIF et un STAT, vous existez.</li>
                <li><strong>Les Grands Clients</strong> : Vous voulez vendre à de grandes entreprises ou à l'État ? Il vous faut une facture légale.</li>
                <li><strong>La Protection de la Marque</strong> : Déposer votre nom vous évite qu'un concurrent ne le vole.</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80" alt="Signature de contrat officiel" class="rounded-xl my-8 w-full object-cover">

            <h2>Ça coûte cher ?</h2>
            <p>C'est la grande peur. Mais il existe aujourd'hui des statuts simplifiés pour les auto-entrepreneurs avec des impôts très réduits (comme l'impôt synthétique). Voyez l'impôt non comme une perte, mais comme le "ticket d'entrée" dans la cour des grands.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Selon l'article, pourquoi les banques ne prêtent-elles pas aux entreprises informelles ?",
                options: ["Elles n'aiment pas les petits projets", "Car ce sont des 'entreprises fantômes' légalement", "Car les taux sont trop bas", "C'est faux, elles prêtent à tout le monde"],
                answer: 1,
                explanation: "Sans existence légale (NIF/STAT), une entreprise n'existe pas aux yeux de la banque.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Qu'est-ce que l'impôt synthétique ?",
                options: ["Un impôt sur le plastique", "Un impôt simplifié pour les petites entreprises", "Une taxe sur l'air", "Il n'existe pas"],
                answer: 1,
                explanation: "C'est un régime fiscal allégé pour encourager la formalisation des petites structures.",
                category: "Fiscalité"
            },
            {
                id: 3,
                question: "Quel avantage offre le fait d'avoir une facture légale ?",
                options: [
                    "Aucun, ça coûte juste du papier",
                    "Vendre à des grands clients et à l'État",
                    "Faire joli",
                    "Payer moins cher ses fournisseurs"
                ],
                answer: 1,
                explanation: "Les grandes structures exigent des factures conformes pour leur comptabilité.",
                category: "Logique"
            },
            {
                id: 4,
                question: "Que signifie 'Protéger sa marque' ?",
                options: ["Mettre un cadenas sur la porte", "Empêcher légalement un concurrent de voler votre nom", "Ne pas dire son nom à personne", "Prier pour que ça marche"],
                answer: 1,
                explanation: "Le dépôt de marque à l'OMAPI garantit l'exclusivité du nom commercial.",
                category: "Droit"
            },
            {
                id: 5,
                question: "Conjugue 'Payer' au conditionnel présent (Je) :",
                options: ["Je paierai", "Je payais", "Je paierais", "Je paye"],
                answer: 2,
                explanation: "Conditionnel : radical du futur + terminaisons de l'imparfait.",
                category: "Grammaire"
            }
        ],
    },
    // ... (Existing business plan article id 7 kept implicitly if not replaced, but here I am replacing contiguous block so I must ensure I don't delete needed stuff.
    // Wait, the previous view showed I was at line 447 for CIBLE 3.
    // I will append the NEW orientation articles AFTER the existing ones or replace a placeholder section if one existed.
    // Actually, looking at the file content I viewed, I can just append these new articles to the end of the array,
    // OR create a new block for "Orientation & Carrière" specifically if it doesn't exist.
    // The previous view showed articles up to ID 10.
    // I will append my new articles AFTER article 10.

    // NEW CONTENT FOR ORIENTATION & CARRIERE
    {
        id: 11,
        title: "Guide complet du CV Malgache",
        category: "Recherche d'emploi", // Matches URL param
        tags: ["cv", "strategie"], // Matches URL tags
        level: "Tout public",
        readingTime: 8,
        summary: "Comment faire un CV qui passe la barre des 6 secondes. Modèles et conseils adaptés.",
        body: `
            <p>Le CV est votre ambassadeur. S'il est muet, brouillon ou timide, vous n'aurez jamais d'entretien.</p>
            <h2>Les 5 Commandements du CV Efficace</h2>
            <ol>
                <li><strong>Tenir sur une page</strong> (sauf profil très senior).</li>
                <li><strong>Photo professionnelle</strong> : Pas de selfie, fond neutre, sourire.</li>
                <li><strong>Titre clair</strong> : "Comptable", pas "Recherche d'emploi".</li>
                <li><strong>Résultats chiffrés</strong> : "Géré 50M Ar de caisse" vaut mieux que "Responsable caisse".</li>
                <li><strong>Pas de fautes</strong> : Relisez-vous 10 fois.</li>
            </ol>
            <p>N'oubliez pas les "Soft Skills" : ponctualité, travail d'équipe, honnêteté. C'est très recherché à Madagascar.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Quelle est la longueur idéale d'un CV débutant ?",
                options: ["1 page", "3 pages", "5 pages", "Autant que possible"],
                answer: 0,
                explanation: "La concision est une preuve d'esprit de synthèse.",
                category: "Conseil"
            }
        ]
    },
    {
        id: 12,
        title: "Réussir sans le BAC : C'est possible",
        category: "Employabilité",
        tags: ["experience", "formation"],
        level: "Débutant",
        readingTime: 5,
        summary: "Ne pas avoir le bac n'est pas une fatalité. Voici les métiers qui recrutent sur le talent.",
        body: `
            <p>Le diplôme est un papier, la compétence est une réalité. De nombreux secteurs recrutent sans regarder le diplôme :</p>
            <ul>
                <li><strong>Le Numérique</strong> : Si vous savez coder ou designer, on ne vous demandera pas votre bulletin de notes.</li>
                <li><strong>La Vente</strong> : Si vous savez vendre, vous êtes roi. C'est un métier de résultat.</li>
                <li><strong>L'Artisanat & BTP</strong> : La main d'or vaut de l'or.</li>
                <li><strong>L'Agriculture moderne</strong> : La terre ne ment pas.</li>
            </ul>
            <p>Formez-vous via des formations courtes, des tutoriels, et surtout : pratiquez !</p>
        `,
        quiz: []
    },
    {
        id: 13,
        title: "Top 10 des Métiers d'Avenir à Madagascar",
        category: "Métiers & Compétences",
        tags: ["avenir", "digital"],
        level: "Tout public",
        readingTime: 6,
        summary: "Où y aura-t-il du travail dans 5 ans ? Anticipez pour ne pas subir.",
        body: `
            <p>Le monde change. Certains métiers disparaissent (guichetier, saisie simple), d'autres explosent.</p>
            <h2>Les secteurs porteurs</h2>
            <ul>
                <li><strong>Tech & BPO</strong> : Développeurs, Data Analysts, Assistants virtuels.</li>
                <li><strong>Économie Verte</strong> : Installateurs solaires, gestion des déchets, agriculture bio.</li>
                <li><strong>Santé & Soin</strong> : Avec le vieillissement mondial, les métiers du soin (infirmiers, aide à la personne) sont universels.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 14,
        title: "Soft Skills : Ce qui fait la différence",
        category: "Employabilité",
        tags: ["softskills"],
        level: "Tout public",
        readingTime: 4,
        summary: "Pourquoi, à diplôme égal, c'est le 'savoir-être' qui gagne l'entretien.",
        body: `
            <p>Les Hard Skills (compétences techniques) vous obtiennent l'entretien. Les Soft Skills (compétences humaines) vous obtiennent le job.</p>
            <h3>Les 3 Soft Skills les plus recherchées :</h3>
            <ol>
                <li><strong>L'Adaptabilité</strong> : Le monde change vite, savez-vous apprendre ?</li>
                <li><strong>L'Intelligence Émotionnelle</strong> : Savez-vous gérer vos émotions et celles des autres ?</li>
                <li><strong>La Résolution de Problèmes</strong> : Venez-vous avec des solutions ou des problèmes ?</li>
            </ol>
        `,
        quiz: []
    },
    {
        id: 15,
        title: "Bilan de Compétences : L'exercice du Miroir",
        category: "Bilan de compétences",
        tags: ["auto", "projet"],
        level: "Intermédiaire",
        readingTime: 6,
        summary: "Comment faire le point sur sa carrière gratuitement chez soi.",
        body: `
            <p>Pas besoin de payer un consultant cher. Prenez un cahier.</p>
            <h3>Étape 1 : Le Rétroviseur</h3>
            <p>Listez tout ce que vous avez fait. Même le bénévolat. Même l'organisation du mariage de votre cousine (c'est de la gestion de projet !).</p>
            <h3>Étape 2 : Le Tamis</h3>
            <p>Qu'avez-vous AIMÉ faire ? Qu'avez-vous DÉTESTÉ faire ?</p>
            <h3>Étape 3 : La Boussole</h3>
            <p>Où ces compétences "aimées" peuvent-elles être utiles aujourd'hui ? C'est là que se trouve votre prochain job.</p>
        `,
        quiz: []
    },
    {
        id: 7,
        title: "Le business plan simplifié",
        category: "Gestion d’entreprise",
        level: "Tout public",
        readingTime: 5,
        summary:
            "3 questions clés : Idée, Clients, Rentabilité. Pas besoin de 50 pages.",
        body: `
            <p>Oubliez les dossiers de 50 pages que personne ne lit. Un bon business plan tient sur une feuille A4. C'est le <strong>Business Model Canvas</strong>.</p>

            <h2>Les 3 Piliers de votre projet</h2>
            
            <h3>1. La Proposition de Valeur (L'Idée)</h3>
            <p>Quel problème résolvez-vous ? "Je vends du pain" n'est pas une proposition de valeur. "Je vends du pain chaud livré à domicile pour le petit-déjeuner à 6h" en est une.</p>

            <h3>2. Les Segments Clients (La Cible)</h3>
            <p>Qui paie ? "Tout le monde" est une mauvaise réponse. Soyez précis : "Les mères de famille actives du quartier Mahamasina".</p>

            <h3>3. La Structure de Coûts et Revenus (L'Argent)</h3>
            <p>Combien ça coûte à produire ? (Matière, temps, électricité). Combien je le vends ? Quelle est ma marge sur chaque unité ? Si vous perdez 100 Ar par produit, vendre plus vous fera couler plus vite !</p>

            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Graphiques et planification stratégique" class="rounded-xl my-8 w-full object-cover">

            <blockquote>
                "Échouer à planifier, c'est planifier son échec." — Benjamin Franklin
            </blockquote>
        `,
        quiz: [
            {
                id: 1,
                question: "Qu'est-ce qu'une 'Proposition de Valeur' ?",
                options: ["Le prix du produit", "Le problème spécifique que vous résolvez pour le client", "Le nom de l'entreprise", "Le bénéfice net"],
                answer: 1,
                explanation: "C'est la promesse faite au client : pourquoi il devrait acheter chez vous.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Pourquoi 'Tout le monde' est une mauvaise cible ?",
                options: ["Car les gens sont méchants", "Car on ne peut pas parler à tout le monde de la même façon", "Car tout le monde n'a pas d'argent", "C'est une bonne réponse en fait"],
                answer: 1,
                explanation: "En marketing, vouloir plaire à tout le monde, c'est ne plaire à personne. Il faut cibler.",
                category: "Logique"
            },
            {
                id: 3,
                question: "Si je vends à perte, que se passe-t-il si je vends beaucoup ?",
                options: ["Je deviens riche", "Je perds encore plus d'argent vite", "Ça s'équilibre", "Les clients me donnent des pourboires"],
                answer: 1,
                explanation: "Vendre à perte multiplié par le volume accélère la faillite. La marge unitaire est vitale.",
                category: "Gestion"
            },
            {
                id: 4,
                question: "Que signifie SMART pour un objectif ?",
                options: ["Super, Magnifique, Artiste, Riche, Talentueux", "Spécifique, Mesurable, Atteignable, Réaliste, Temporel", "Seul, Malade, Abattu, Raté, Triste", "Sourire, Manger, Aimer, Rire, Travailler"],
                answer: 1,
                explanation: "C'est la méthode standard pour fixer des objectifs clairs.",
                category: "Méthodologie"
            },
            {
                id: 5,
                question: "Conjugue 'Planifier' au futur antérieur (J') :",
                options: ["J'aurai planifié", "J'avais planifié", "Je planifierai", "J'ai planifié"],
                answer: 0,
                explanation: "Futur antérieur = Auxiliaire futur + participe passé.",
                category: "Grammaire"
            }
        ],
    },
    {
        id: 8,
        title: "Créer une activité sans financement",
        category: "Innovation locale",
        level: "Tout public",
        readingTime: 4,
        summary:
            "Le Bootstrapping : démarrer avec ce qu'on a. Petit à petit, l'oiseau fait son nid.",
        body: `
            <p>"Je n'ai pas d'argent pour commencer." C'est l'excuse numéro 1. Pourtant, les plus grandes entreprises ont souvent commencé dans un garage.</p>

            <h2>La Méthode "Effectuale" (Démarrer avec ce qu'on a)</h2>
            <p>Regardez autour de vous. Qu'avez-vous ?</p>
            <ul>
                <li><strong>Vos compétences</strong> : Vous savez cuisiner ? Coudre ? Écrire ?</li>
                <li><strong>Votre réseau</strong> : Qui connaissez-vous qui pourrait être votre premier client ?</li>
                <li><strong>Vos ressources</strong> : Un vieux vélo ? Un ordinateur ? Une cuisine ?</li>
            </ul>

            <h2>La technique du Pré-paiement</h2>
            <p>Vendez avant de produire. Proposez votre service, demandez une avance de 50%, et utilisez cet argent pour acheter la matière première. C'est le meilleur crédit possible : celui de vos clients.</p>

            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Artisan travaillant avec des outils simples" class="rounded-xl my-8 w-full object-cover">

            <h3>Idées "Zéro Budget" :</h3>
            <ul>
                <li>Cours à domicile (Soutien scolaire).</li>
                <li>Intermédiaire commercial (Mise en relation).</li>
                <li>Rédaction web ou services administratifs.</li>
                <li>Transformation de fruits locaux (Confitures maison).</li>
            </ul>
        `,
        quiz: [
            {
                id: 1,
                question: "Qu'est-ce que le 'Bootstrapping' ?",
                options: ["Porter des bottes", "Se lancer sans financement extérieur", "Demander un crédit à la banque", "Voler de l'argent"],
                answer: 1,
                explanation: "C'est l'art de se débrouiller avec ses propres ressources.",
                category: "Vocabulaire"
            },
            {
                id: 2,
                question: "Quelle est la 'technique du pré-paiement' ?",
                options: ["Payer ses fournisseurs en avance", "Demander au client de payer une partie avant la livraison", "Ne jamais payer ses dettes", "Payer après 3 mois"],
                answer: 1,
                explanation: "Cela permet d'avoir la trésorerie pour acheter les matières premières sans s'endetter.",
                category: "Gestion"
            },
            {
                id: 3,
                question: "Par quoi faut-il commencer selon la méthode effectuale ?",
                options: ["Par faire un emprunt", "Par ce qu'on a (moyens disponibles)", "Par rêver", "Par louer un grand bureau"],
                answer: 1,
                explanation: "On part de 'qui je suis, ce que je sais, qui je connais'.",
                category: "Logique"
            },
            {
                id: 4,
                question: "Quelle activité citée demande peu de budget ?",
                options: ["Construire une usine", "Cours à domicile", "Acheter un avion", "Ouvrir une mine d'or"],
                answer: 1,
                explanation: "Le service (intellectuel) ne demande souvent aucun capital de départ.",
                category: "Idée"
            },
            {
                id: 5,
                question: "Conjugue 'Créer' à l'impératif (Tu) :",
                options: ["Crées", "Crée", "Créer", "Créa"],
                answer: 1,
                explanation: "Impératif présent 2e pers sing : Crée (sans s pour les verbes en -er).",
                category: "Grammaire"
            }
        ],
    },

    // 🌱 Formations / santé & sécurité / société
    {
        id: 9,
        title: "La bureautique, clé de l’emploi moderne",
        category: "Formation professionnelle",
        level: "Débutant",
        readingTime: 4,
        summary:
            "Word, Excel, PowerPoint. Le trio gagnant pour tout travail de bureau.",
        body: `
            <p>Savoir taper à l'ordinateur n'est plus une compétence "en plus", c'est la base. C'est l'alphabétisation du monde moderne. Que vous soyez secrétaire, comptable ou logisticien, vous passerez 80% de votre temps sur la suite Office.</p>

            <h2>Excel : Bien plus qu'une calculette</h2>
            <p>Excel fait peur, mais c'est un outil magique. Il permet de :</p>
            <ul>
                <li>Tenir une caisse et vérifier qu'on ne perd pas d'argent.</li>
                <li>Gérer un stock de marchandises.</li>
                <li>Faire des plannings d'équipe.</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Ordinateur portable avec graphiques" class="rounded-xl my-8 w-full object-cover">

            <h2>La Mise en Forme Professionnelle</h2>
            <p>Un document Word bien présenté, avec des titres clairs, du gras aux bons endroits et sans fautes, inspire confiance. C'est souvent la première image que vous donnez de votre travail à un supérieur ou un client.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Quelle compétence est décrite comme 'l'alphabétisation du monde moderne' ?",
                options: ["Savoir cuisiner", "Savoir taper à l'ordinateur", "Savoir conduire", "Savoir chanter"],
                answer: 1,
                explanation: "La bureautique est devenue indispensable pour presque tous les métiers de bureau.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "À quoi sert principalement Excel selon l'article ?",
                options: ["À écrire des romans", "À faire des calculs, gérer des stocks et des plannings", "À regarder des vidéos", "À envoyer des emails"],
                answer: 1,
                explanation: "Excel est un tableur puissant pour la gestion et l'analyse de données.",
                category: "Connaissance"
            },
            {
                id: 3,
                question: "Pourquoi la mise en forme d'un document Word est-elle importante ?",
                options: ["Pour utiliser plus d'encre", "Pour faire joli", "Elle inspire confiance et professionnalisme", "Ça n'a aucune importance"],
                answer: 2,
                explanation: "Un document propre reflète le sérieux de son auteur.",
                category: "Savoir-être"
            },
            {
                id: 4,
                question: "Quel logiciel utiliseriez-vous pour présenter un projet à un client ?",
                options: ["Excel", "PowerPoint", "Paint", "Bloc-notes"],
                answer: 1,
                explanation: "PowerPoint est l'outil standard pour les présentations visuelles.",
                category: "Outil"
            },
            {
                id: 5,
                question: "Conjugue 'Naviguer' au présent (Nous) :",
                options: ["Nous naviguons", "Nous navigeons", "Nous naviguèrent", "Nous naviguerons"],
                answer: 0,
                explanation: "Présent de l'indicatif 1ère pers pluriel : -ons.",
                category: "Grammaire"
            }
        ],
    },
    {
        id: 10,
        title: "Hygiène et sécurité au travail",
        category: "Santé et sécurité",
        level: "Tout public",
        readingTime: 3,
        summary:
            "Se protéger, c'est protéger son gagne-pain. Les EPI et les réflexes qui sauvent.",
        body: `
            <p>Chaque année, des milliers d'accidents du travail évitables se produisent. La sécurité n'est pas une "perte de temps", c'est une <strong>assurance vie</strong>.</p>

            <h2>Les EPI (Équipements de Protection Individuelle)</h2>
            <p>Selon votre métier, votre armure change :</p>
            <ul>
                <li><strong>BTP</strong> : Casque, chaussures de sécurité, gants.</li>
                <li><strong>Soudeur</strong> : Masque obligatoire (attention aux yeux !).</li>
                <li><strong>Agriculteur</strong> : Bottes, et protection lors de l'épandage de produits.</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80" alt="Ouvriers avec casques de sécurité" class="rounded-xl my-8 w-full object-cover">

            <h2>L'Hygiène : La base de la santé</h2>
            <p>Le simple fait de se laver les mains avant de manipuler de la nourriture (restauration) ou après avoir touché des produits sales réduit drastiquement les maladies. Un employé malade est un employé qui ne gagne pas sa vie et coûte à l'entreprise.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Que signifie EPI ?",
                options: ["Équipe Pour Internet", "Équipement de Protection Individuelle", "École Primaire Internationale", "État Pour l'Industrie"],
                answer: 1,
                explanation: "L'EPI regroupe les casques, gants, lunettes, etc.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Pourquoi l'hygiène au travail est-elle rentable ?",
                options: ["Elle coûte cher en savon", "Elle réduit les maladies et l'absentéisme", "Elle fait perdre du temps", "Elle ne sert à rien"],
                answer: 1,
                explanation: "Moins de malades = plus de productivité et de continuité de service.",
                category: "Logique"
            },
            {
                id: 3,
                question: "Quel équipement est essentiel pour un soudeur ?",
                options: ["Une cravate", "Un masque de protection", "Des sandales", "Un stylo"],
                answer: 1,
                explanation: "Pour protéger les yeux des arcs électriques intenses.",
                category: "Sécurité"
            },
            {
                id: 4,
                question: "Quel est le premier réflexe d'hygiène en restauration ?",
                options: ["Fumer", "Se laver les mains", "Goûter les plats avec les doigts", "Parler fort"],
                answer: 1,
                explanation: "Le lavage des mains prévient la majorité des contaminations alimentaires.",
                category: "Hygiène"
            },
            {
                id: 5,
                question: "Conjugue 'Protéger' au futur simple (Tu) :",
                options: ["Tu protègeras", "Tu protègera", "Tu protégeas", "Tu protégeras"],
                answer: 3,
                explanation: "Au futur simple, on garde le 'é' fermé de l'infinitif pour les verbes en -éger. (Note: l'orthographe rectifiée accepte è, mais é est standard).",
                category: "Grammaire"
            }
        ],
    },
    {
        id: 11,
        title: "La confiance en soi dès l’école",
        category: "Développement personnel",
        level: "Prim./Collège",
        readingTime: 4,
        summary:
            "Oser prendre la parole, accepter l'erreur. La confiance se muscle !",
        body: `
            <p>Certains pensent qu'on naît avec la confiance en soi. Faux ! La confiance, c'est comme un muscle : elle se travaille. Et le meilleur terrain d'entraînement, c'est l'école.</p>

            <h2>Le Droit à l'Erreur</h2>
            <p>Avez-vous appris à marcher sans tomber ? Non. Alors pourquoi avoir peur de lever la main en classe et de dire une bêtise ? Se tromper, c'est la preuve qu'on essaie. L'échec est le brouillon de la réussite.</p>

            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Enfant confiant à l'école" class="rounded-xl my-8 w-full object-cover">

            <h2>La Prise de Parole</h2>
            <p>Savoir parler en public est un super-pouvoir. Commencez petit :</p>
            <ul>
                <li>Regardez les gens dans les yeux.</li>
                <li>Parlez assez fort pour être entendu.</li>
                <li>Respirez calmement.</li>
            </ul>
            <p>Une personne qui s'exprime bien sera toujours écoutée et respectée, quel que soit son statut social.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "À quoi est comparée la confiance en soi dans l'article ?",
                options: ["À un muscle", "À un nuage", "À de l'argent", "À une voiture"],
                answer: 0,
                explanation: "Comme un muscle, elle se développe avec l'entraînement.",
                category: "Compréhension"
            },
            {
                id: 2,
                question: "Pourquoi l'erreur est-elle utile ?",
                options: ["Pour être puni", "C'est le brouillon de la réussite", "C'est la preuve qu'on est nul", "Ça ne sert à rien"],
                answer: 1,
                explanation: "L'échec permet d'apprendre et de s'améliorer.",
                category: "Philosophie"
            },
            {
                id: 3,
                question: "Quel conseil est donné pour la prise de parole ?",
                options: ["Regarder ses pieds", "Parler tout bas", "Regarder les gens dans les yeux", "Fermer les yeux"],
                answer: 2,
                explanation: "Le contact visuel établit la connexion et montre l'assurance.",
                category: "Communication"
            },
            {
                id: 4,
                question: "Que signifie 'Avoir de l'assurance' ?",
                options: ["Avoir une assurance auto", "Avoir confiance en ses capacités", "Avoir beaucoup d'amis", "Être riche"],
                answer: 1,
                explanation: "C'est la définition de la confiance en soi.",
                category: "Vocabulaire"
            },
            {
                id: 5,
                question: "Conjugue 'Oser' à l'imparfait (Il) :",
                options: ["Il osait", "Il ose", "Il osa", "Il osera"],
                answer: 0,
                explanation: "Imparfait : -ait.",
                category: "Grammaire"
            }
        ],
    },
    {
        id: 12,
        title: "Le civisme, base d’une société forte",
        category: "Vie Citoyenne",
        level: "Tout public",
        readingTime: 4,
        summary: "Le respect des biens communs et des autres est le ciment de notre nation.",
        body: `
            <p>On entend souvent dire « L'État doit faire ci, l'État doit faire ça ». Mais l'État, c'est nous. Le civisme, c'est la conscience que nos actions individuelles ont un impact sur la collectivité.</p>

            <h2>Les Gestes Simples du Quotidien</h2>
            <ul>
                <li><strong>Respecter la file d'attente</strong> : C'est respecter le temps des autres.</li>
                <li><strong>Ne pas jeter ses déchets par terre</strong> : Une ville propre commence par des habitants propres.</li>
                <li><strong>Protéger les biens publics</strong> : Les bancs, les bus, les écoles appartiennent à tous. Les casser, c'est se voler soi-même.</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80" alt="Action citoyenne de nettoyage" class="rounded-xl my-8 w-full object-cover">
            
            <blockquote>"La discipline est mère du succès." - Proverbe</blockquote>
        `,
        quiz: [
            { id: 1, question: "Qu'est-ce que le civisme ?", options: ["Une marque de voiture", "Le respect des règles de vie en communauté", "Une danse traditionnelle", "Un plat cuisiné"], answer: 1, explanation: "C'est l'attitude du citoyen conscient de ses devoirs envers la société.", category: "Compréhension" },
            { id: 2, question: "À qui appartiennent les biens publics ?", options: ["Au Président seulement", "À personne", "À la communauté (nous tous)", "Aux touristes"], answer: 2, explanation: "Ils sont financés par nos impôts et servent à tous.", category: "Logique" }
        ]
    },
    {
        id: 13,
        title: "La connaissance est une arme",
        category: "Éducation",
        level: "Lycée",
        readingTime: 5,
        summary: "Dans un monde complexe, celui qui sait est celui qui décide.",
        body: `
            <p>Nelson Mandela disait : « L'éducation est l'arme la plus puissante pour changer le monde ». Pourquoi ? Parce que la connaissance donne le choix.</p>
            <h2>Savoir c'est Pouvoir</h2>
            <p>Celui qui ne sait pas lire un contrat peut se faire arnaquer. Celui qui ne connaît pas l'histoire peut être manipulé par des politiciens. Apprendre, ce n'est pas juste avoir des bonnes notes, c'est devenir libre.</p>
            
            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" alt="Bibliothèque remplie de livres" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Selon la citation de Mandela, qu'est-ce qui peut changer le monde ?", options: ["L'argent", "La force militaire", "L'éducation", "La chance"], answer: 2, explanation: "C'est l'arme la plus puissante.", category: "Compréhension" },
            { id: 2, question: "Pourquoi la connaissance rend-elle libre ?", options: ["Elle permet de faire des choix éclairés", "Elle permet de voler", "Elle est gratuite", "Elle est lourde à porter"], answer: 0, explanation: "L'ignorance est une forme de servitude.", category: "Philosophie" }
        ]
    },
    {
        id: 14,
        title: "Planter un arbre, c’est planter un futur",
        category: "Environnement",
        level: "Tout public",
        readingTime: 3,
        summary: "La reforestation est l'urgence absolue pour Madagascar.",
        body: `
            <p>Madagascar est surnommée l'Île Rouge car ses sols partent à la mer. La déforestation est un fléau qui appauvrit nos terres et assèche nos rivières.</p>
            <h2>Un geste vital</h2>
            <p>Un arbre, c'est :</p>
            <ul>
                <li>De l'ombre et de la fraîcheur.</li>
                <li>Des racines qui retiennent la terre et l'eau.</li>
                <li>Un héritage pour vos enfants.</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" alt="Plantation d'arbre" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Pourquoi surnomme-t-on Madagascar l'Île Rouge ?", options: ["À cause des fleurs", "À cause de l'érosion des sols", "À cause du coucher de soleil", "C'est une erreur"], answer: 1, explanation: "La terre latéritique rouge est emportée par les pluies faute d'arbres.", category: "Géographie" },
            { id: 2, question: "Quel est un rôle des racines des arbres ?", options: ["Empêcher de marcher", "Retenir la terre et l'eau", "Faire joli", "Aucun"], answer: 1, explanation: "Elles structurent le sol et préviennent l'érosion.", category: "SVT" }
        ]
    },
    {
        id: 15,
        title: "Déchets plastiques : l’ennemi invisible",
        category: "Environnement",
        level: "Collège",
        readingTime: 4,
        summary: "Le plastique met 400 ans à disparaître. Réduisons notre consommation.",
        body: `
            <p>Regardez nos canaux et nos rues : les sachets plastiques sont partout. Ils bouchent les évacuations (causant des inondations) et tuent les animaux qui les mangent.</p>
            <h2>La règle des 3 R</h2>
            <ul>
                <li><strong>Réduire</strong> : Refuser les sachets inutiles.</li>
                <li><strong>Réutiliser</strong> : Utiliser un panier ou un sac en tissu.</li>
                <li><strong>Recycler</strong> : Transformer les déchets en nouveaux objets.</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1618477461853-5c87a27eb2a6?auto=format&fit=crop&w=800&q=80" alt="Pollution plastique" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Combien de temps met le plastique à se décomposer ?", options: ["1 an", "10 ans", "400 ans", "1 heure"], answer: 2, explanation: "C'est une pollution quasi éternelle à l'échelle humaine.", category: "Science" },
            { id: 2, question: "Que faire pour 'Réduire' ?", options: ["Brûler le plastique", "Refuser les sachets inutiles", "Jeter par terre", "Acheter plus"], answer: 1, explanation: "Le meilleur déchet est celui qu'on ne produit pas.", category: "Logique" }
        ]
    },
    {
        id: 16,
        title: "Prévenir le harcèlement scolaire",
        category: "Société",
        level: "Collège/Lycée",
        readingTime: 5,
        summary: "L'école doit être un lieu sûr. Apprendre à dire STOP.",
        body: `
            <p>Le harcèlement, ce n'est pas « pour rire ». C'est une violence répétée (physique ou verbale) qui détruit la victime.</p>
            <h2>Tu es témoin ? Agis !</h2>
            <p>Souvent, le harceleur continue parce que les autres rigolent ou ne disent rien. Ne soyez pas complice. Signalez-le à un adulte. Soutenez la victime.</p>
            <img src="https://images.unsplash.com/photo-1572202619472-35d28b1fe913?auto=format&fit=crop&w=800&q=80" alt="Élève isolé" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Qu'est-ce qui caractérise le harcèlement ?", options: ["C'est une blague une fois", "C'est une violence répétée", "C'est un jeu", "C'est de l'amitié"], answer: 1, explanation: "La répétition et l'intention de nuire définissent le harcèlement.", category: "Compréhension" },
            { id: 2, question: "Que faire si on est témoin ?", options: ["Rire", "Filmer", "Ne rien dire", "Signaler à un adulte"], answer: 3, explanation: "Rompre le silence est le seul moyen d'arrêter le harceleur.", category: "Civisme" }
        ]
    },
    {
        id: 17,
        title: "Prévenir le viol : éducation et protection",
        category: "Santé et Droits",
        level: "Lycée / Adulte",
        readingTime: 6,
        summary: "Briser le tabou. Le consentement est la base de toute relation.",
        body: `
            <p>C'est un sujet difficile mais nécessaire. Le respect de l'intégrité physique est un droit absolu.</p>
            <h2>La notion de Consentement</h2>
            <p>Un OUI doit être clair, libre et enthousiaste. L'absence de « NON » ne veut pas dire OUI. Si la personne dort, est saoule, ou a peur, ce n'est pas un OUI.</p>
            <p>En cas de danger, appelez le 147 (Ligne verte protection enfant) ou la Police.</p>
            <img src="https://images.unsplash.com/photo-1563249033-d73183594191?auto=format&fit=crop&w=800&q=80" alt="Stop à la violence" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Qu'est-ce que le consentement ?", options: ["Un accord flou", "Un accord clair, libre et révocable", "Une signature", "Un silence"], answer: 1, explanation: "C'est la base légale et morale de toute relation sexuelle.", category: "Droit" },
            { id: 2, question: "Si une personne ne dit pas non, consent-elle ?", options: ["Oui", "Non, pas forcément", "Toujours", "On ne sait pas"], answer: 1, explanation: "Le consentement ne se présume pas, il s'exprime.", category: "Logique" }
        ]
    },
    {
        id: 18,
        title: "La gestion budgétaire familiale",
        category: "Vie Pratique",
        level: "Adulte",
        readingTime: 5,
        summary: "Tenir les comptes pour ne pas finir le mois dans le rouge.",
        body: `
            <p>L'argent part vite quand on ne le surveille pas. Tenir un cahier de comptes est la première étape vers la sérénité financière.</p>
            <h2>Dépenses Fixes vs Variables</h2>
            <ul>
                <li><strong>Fixes</strong> : Loyer, écolage, riz. On ne peut pas y couper.</li>
                <li><strong>Variables</strong> : Fêtes, vêtements, crédits téléphoniques. C'est là qu'on peut économiser.</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=80" alt="Calcul de budget" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Le loyer est une dépense...", options: ["Variable", "Fixe", "Inutile", "Optionnelle"], answer: 1, explanation: "Elle revient tous les mois au même montant (généralement).", category: "Gestion" },
            { id: 2, question: "Quel est l'outil de base pour gérer son budget ?", options: ["La prière", "Un cahier de comptes", "Une carte bancaire", "Un coffre-fort"], answer: 1, explanation: "Noter ses entrées et ses sorties permet de visualiser la réalité.", category: "Méthodologie" }
        ]
    },
    {
        id: 19,
        title: "Transformer localement = créer de la valeur",
        category: "Économie",
        level: "Tout public",
        readingTime: 5,
        summary: "Ne vendons pas nos fruits bruts. Faisons des jus et des confitures !",
        body: `
            <p>Vendre des mangues au bord de la route rapporte peu (et elles pourrissent vite). Vendre de la confiture de mangue en pot rapporte 10 fois plus et se conserve 1 an.</p>
            <h2>La Valeur Ajoutée</h2>
            <p>C'est la richesse créée par le travail de transformation. Madagascar doit passer de pays exportateur de matières premières à pays transformateur. C'est ainsi qu'on crée des emplois qualifiés.</p>
            <img src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80" alt="Pots de confiture artisanale" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Quel est le problème des produits bruts (fruits, etc.) ?", options: ["Ils sont trop lourds", "Ils pourrissent vite et ont une faible marge", "Ils sont interdits", "Personne n'en veut"], answer: 1, explanation: "La transformation permet la conservation et augmente le prix de vente.", category: "Économie" },
            { id: 2, question: "Qu'est-ce que la valeur ajoutée ?", options: ["La TVA", "La richesse créée par la transformation", "Le prix du transport", "Le bénéfice du vendeur"], answer: 1, explanation: "C'est la différence entre le prix du produit fini et le coût des matières premières.", category: "Vocabulaire" }
        ]
    },
    {
        id: 20,
        title: "Code de la route : survie sur deux roues",
        category: "Sécurité Routière",
        level: "Tout public",
        readingTime: 4,
        summary: "Scooter ou vélo : le casque n'est pas une option, c'est ta tête.",
        body: `
            <p>La route est dangereuse, surtout pour les deux-roues. À Madagascar, les accidents de moto sont quotidiens.</p>
            <h2>Les Règles de Survie</h2>
            <ul>
                <li><strong>Le Casque</strong> : Il réduit de 70% le risque de traumatisme crânien grave. Attachez-le !</li>
                <li><strong>L'Angle Mort</strong> : Ne doublez jamais un camion par la droite. Si vous ne voyez pas le rétroviseur du chauffeur, il ne vous voit pas.</li>
                <li><strong>La Vitesse</strong> : Arriver 5 minutes plus tard vaut mieux que d'arriver à la morgue.</li>
            </ul>
             <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80" alt="Motard avec casque" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Quel est le rôle du casque ?", options: ["Éviter les amendes", "Protéger la tête en cas de chute", "Tenir chaud", "Faire joli"], answer: 1, explanation: "Il absorbe le choc. Un casque non attaché ne sert à rien.", category: "Sécurité" },
            { id: 2, question: "Qu'est-ce que l'angle mort ?", options: ["Un coin de rue", "Une zone que le conducteur ne voit pas dans ses rétroviseurs", "Une panne moteur", "Un virage dangereux"], answer: 1, explanation: "C'est la zone invisible pour le chauffeur. Danger de mort !", category: "Code" }
        ]
    },
    {
        id: 21,
        title: "IA : Amie ou ennemie de l'emploi ?",
        category: "Technologie",
        level: "Lycée / Université",
        readingTime: 6,
        summary: "L'Intelligence Artificielle va transformer nos métiers. Comment s'adapter ?",
        body: `
            <p>ChatGPT, Midjourney... L'IA est partout. Certains ont peur qu'elle nous remplace. La vérité, c'est que l'IA ne remplacera pas les humains, mais les humains qui utilisent l'IA remplaceront ceux qui ne l'utilisent pas.</p>
            <h2>Comment l'utiliser ?</h2>
            <p>Voyez l'IA comme un assistant surpuissant. Elle peut:</p>
            <ul>
                <li>Rédiger des brouillons.</li>
                <li>Résumer des textes longs.</li>
                <li>Coder plus vite.</li>
            </ul>
            <p>Mais elle ne remplace pas votre jugement critique ni votre créativité humaine.</p>
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="Cerveau numérique IA" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Selon l'article, qui remplacera les travailleurs actuels ?", options: ["Les robots", "Les humains utilisant l'IA", "Les extraterrestres", "Personne"], answer: 1, explanation: "L'IA est un outil. Ceux qui le maîtrisent auront l'avantage.", category: "Futur" },
            { id: 2, question: "L'IA peut-elle remplacer le jugement humain ?", options: ["Oui, elle est parfaite", "Non, elle fait des erreurs et manque d'empathie", "Bientôt", "Je ne sais pas"], answer: 1, explanation: "L'IA n'a pas de conscience ni de morale. L'humain reste le décideur.", category: "Philosophie" }
        ]
    },
    {
        id: 22,
        title: "Nouvelle économie : les métiers qui émergent",
        category: "Orientation",
        level: "Post-bac",
        readingTime: 5,
        summary: "Pilote de drone, expert en cybersécurité... Le monde change.",
        body: `
            <p>Il y a 10 ans, le métier d'Influenceur n'existait pas. Demain, quels seront les métiers stars ?</p>
            <ul>
                <li><strong>Pilote de drone</strong> : Pour l'agriculture, la surveillance, le cinéma.</li>
                <li><strong>Expert Cybersécurité</strong> : Avec la digitalisation, protéger les données est vital.</li>
                <li><strong>Installateur Solaire</strong> : L'indépendance énergétique est la priorité.</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80" alt="Drone en vol" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Pourquoi la cybersécurité est-elle un métier d'avenir ?", options: ["Parce qu'il y a plus de pirates en mer", "Parce que tout devient numérique et doit être protégé", "C'est une mode", "Pour jouer aux jeux vidéo"], answer: 1, explanation: "La protection des données est cruciale pour les banques et entreprises.", category: "Tech" },
            { id: 2, question: "Quel métier est lié à l'énergie verte ?", options: ["Mineur de charbon", "Installateur solaire", "Pompiste", "Chauffeur"], answer: 1, explanation: "Le solaire est une énergie renouvelable en plein essor.", category: "Écologie" }
        ]
    },
    {
        id: 23,
        title: "Le danger des Deepfakes et de l'image",
        category: "Sécurité Numérique",
        level: "Tout public",
        readingTime: 5,
        summary: "Apprenez à reconnaître les images et les vidéos manipulées par l'IA.",
        body: `
            <p>Les technologies Deepfake permettent de créer des vidéos et audios hyper-réalistes mais <strong>totalement faux</strong>. On peut faire dire n'importe quoi à un dirigeant politique ou mettre le visage de quelqu'un sur un corps nu.</p>
            <h2>Le Danger : La Désinformation</h2>
            <p>Sur Internet, tout n'est pas vrai. Avant de partager une vidéo choc :</p>
            <ul>
                <li>Vérifiez la source (Qui a posté ?).</li>
                <li>Regardez les détails (Les mains ont-elles 6 doigts ? Les lèvres bougent-elles bizarrement ?).</li>
                <li>Cherchez si d'autres médias en parlent.</li>
            </ul>
             <img src="https://images.unsplash.com/photo-1633419461186-7d40a2e50594?auto=format&fit=crop&w=800&q=80" alt="Reconnaissance faciale et analyse" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Qu'est-ce qu'un Deepfake ?", options: ["Une fausse vidéo créée par IA", "Un virus informatique", "Un logiciel de montage classique", "Un filtre Instagram"], answer: 0, explanation: "Les technologies Deepfake permettent de créer des faux hyper-réalistes.", category: "Compréhension" },
            { id: 2, question: "Quel est le bon réflexe avant de partager ?", options: ["Partager immédiatement", "Vérifier la source", "Éteindre son téléphone", "Mettre un like"], answer: 1, explanation: "Le doute est la première défense contre la désinformation.", category: "Pratique" }
        ]
    },
    {
        id: 24,
        title: "Lutte contre le Racisme et l'Exclusion",
        category: "Société",
        level: "Tout public",
        readingTime: 5,
        summary: "Le racisme est une violence. Apprendre à respecter les différences.",
        body: `
            <p>Le racisme est une idéologie basée sur la supériorité d'un groupe, source de violence et d'inégalités. À Madagascar, comme ailleurs, la discrimination basée sur l'origine (régionale, sociale, etc.) ralentit le progrès national.</p>
            <p><strong>La diversité est une richesse.</strong> Une équipe composée de gens différents est plus créative et performante qu'une équipe uniforme.</p>
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Groupe de mains unies" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Sur quoi est basé le racisme ?", options: ["La science", "Une idéologie de supériorité fausse", "La réalité biologique", "L'amitié"], answer: 1, explanation: "Il n'y a pas de races biologiques humaines, seulement une espèce humaine.", category: "Compréhension" },
            { id: 2, question: "Pourquoi la diversité est-elle une force ?", options: ["Elle apporte différents points de vue et compétences", "Elle fait perdre du temps", "Elle crée des problèmes", "C'est joli pour les photos"], answer: 0, explanation: "La mixité favorise l'innovation et la compréhension mutuelle.", category: "Sociologie" }
        ]
    },
    {
        id: 25,
        title: "La Politesse : Clé de la réussite professionnelle",
        category: "Savoir-être",
        level: "Tout public",
        readingTime: 3,
        summary: "Dire bonjour n'est pas optionnel. Les soft skills comptent autant que le diplôme.",
        body: `
            <p>On vous embauche pour vos compétences (Hard Skills), mais on vous licencie pour votre comportement (Soft Skills). La politesse est la base des relations humaines.</p>
            <h2>Les Indispensables</h2>
            <ul>
                <li><strong>La Ponctualité</strong> : Être à l'heure, c'est respecter l'autre.</li>
                <li><strong>Le Sourire</strong> : Il ouvre plus de portes que n'importe quelle clé.</li>
                <li><strong>L'Écoute</strong> : Savoir se taire pour écouter est une preuve d'intelligence.</li>
            </ul>
             <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" alt="Poignée de main professionnelle" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Pourquoi la politesse est-elle importante au travail ?", options: ["Pour faire plaisir au patron", "Pour créer un climat de confiance et de respect", "Pour avoir une augmentation", "C'est démodé"], answer: 1, explanation: "Les relations fluides améliorent l'efficacité et le bien-être.", category: "Savoir-être" },
            { id: 2, question: "Que signifie être ponctuel ?", options: ["Arriver en avance", "Arriver à l'heure convenue", "Arriver en retard mais s'excuser", "Ne pas venir"], answer: 1, explanation: "C'est la première marque de respect.", category: "Savoir-vivre" }
        ]
    },
    {
        id: 26,
        title: "Dangers cachés des Réseaux Sociaux",
        category: "Santé Mentale",
        level: "Ados/Adultes",
        readingTime: 4,
        summary: "Ne comparez pas votre vie aux coulisses des autres.",
        body: `
            <p>Instagram et TikTok sont des vitrines. Les gens n'y montrent que le meilleur. Si vous comparez votre vie quotidienne (avec ses hauts et ses bas) à la vie 'parfaite' des influenceurs, vous serez malheureux.</p>
            <h2>L'Addiction aux écrans</h2>
            <p>Les réseaux sont conçus pour vous rendre accro (dopamine). Fixez-vous des limites : pas d'écran 1h avant de dormir.</p>
             <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" alt="Personne sur son téléphone" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Pourquoi ne faut-il pas se comparer aux réseaux sociaux ?", options: ["Car les gens mentent", "Car on ne voit qu'une sélection des meilleurs moments", "Car ils sont plus riches", "Car c'est interdit"], answer: 1, explanation: "C'est une réalité filtrée et mise en scène.", category: "Psychologie" },
            { id: 2, question: "Quel effet ont les réseaux sur le cerveau ?", options: ["Ils rendent plus intelligent", "Ils créent une addiction via la dopamine", "Ils font dormir", "Aucun effet"], answer: 1, explanation: "Le mécanisme de 'like' active le circuit de la récompense comme une drogue.", category: "Santé" }
        ]
    },
    {
        id: 27,
        title: "L'Importance Vraie des Études (long terme)",
        category: "Orientation",
        level: "Collège/Lycée",
        readingTime: 4,
        summary: "Le diplôme est un passeport, mais c'est le voyage qui compte.",
        body: `
            <p>« À quoi ça sert Pythagore ? ». On s'est tous posé la question. L'école ne sert pas juste à apprendre des formules, elle sert à <strong>apprendre à apprendre</strong>.</p>
            <p>Les études développent :</p>
            <ul>
                <li>La rigueur.</li>
                <li>La capacité d'analyse.</li>
                <li>La persévérance face à la difficulté.</li>
            </ul>
            <p>Ce sont ces qualités qui vous serviront toute votre vie, même si vous oubliez Pythagore. L'éducation est un investissement qui paie les meilleurs intérêts.</p>
             <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" alt="Diplômés jetant leurs chapeaux" class="rounded-xl my-8 w-full object-cover">
        `,
        quiz: [
            { id: 1, question: "Quel est le but profond de l'école ?", options: ["Obéir", "Apprendre à apprendre et structurer sa pensée", "Avoir des vacances", "Remplir des cahiers"], answer: 1, explanation: "C'est acquérir une méthode de travail intellectuel.", category: "Pédagogie" },
            { id: 2, question: "Quelle qualité développe-t-on en résolvant un problème difficile ?", options: ["La colère", "La persévérance", "L'ennui", "La triche"], answer: 1, explanation: "Ne pas abandonner devant l'effort est une clé de réussite.", category: "Soft Skill" }
        ]
    },
    // --- CITOYENNETÉ MODULE (THEME 1: CIVISME AU QUOTIDIEN) ---
    {
        id: 28,
        title: "Qu’est-ce que le civisme ?",
        category: "Vie Citoyenne",
        level: "Tout public",
        readingTime: 3,
        summary: "Être citoyen, ce n'est pas juste voter. C'est un comportement de tous les jours.",
        body: `
            <p>Beaucoup pensent que le civisme est une affaire politique. C'est faux. Le civisme, c'est l'art de vivre ensemble.</p>
            <h2>Civisme ≠ Politique</h2>
            <p>Le civisme ne dépend pas de votre parti politique. C'est le respect de la cité (la ville, le village, le quartier). C'est dire « Bonjour », ne pas jeter ses ordures par terre, et aider une personne âgée à traverser.</p>
            <h2>Le Respect : La Base</h2>
            <p>Sans respect, la société devient une jungle. Le respect des règles, des autres et de l'environnement est ce qui nous permet de vivre en paix et en sécurité.</p>
        `,
        quiz: [
            { id: 1, question: "Le civisme est-il réservé aux politiciens ?", options: ["Oui", "Non, c'est l'affaire de tous", "Seulement aux maires", "Seulement aux policiers"], answer: 1, explanation: "Chaque citoyen est acteur du civisme.", category: "Compréhension" },
            { id: 2, question: "Quelle est la base de la vie en société ?", options: ["L'argent", "La force", "Le respect", "La vitesse"], answer: 2, explanation: "Le respect mutuel permet la cohabitation.", category: "Philosophie" }
        ]
    },
    {
        id: 29,
        title: "Respecter les autres : la base de la vie en société",
        category: "Vie Citoyenne",
        level: "Tout public",
        readingTime: 4,
        summary: "La politesse et le respect des différences sont les clés de l'harmonie.",
        body: `
            <p>« La liberté des uns s'arrête là où commence celle des autres ». Cette phrase résume tout.</p>
            <h2>Politesse et Savoir-Vivre</h2>
            <p>Le respect commence par la reconnaissance de l'autre. Un sourire, un merci, une excuse quand on bouscule quelqu'un. Ces petits gestes huilent les rouages de la société.</p>
            <h2>Vivre ensemble</h2>
            <p>Que l'on soit en ville ou à la campagne, riche ou pauvre, nous partageons le même espace. Accepter que l'autre soit différent (religion, origine, avis) est une preuve d'intelligence et de maturité citoyenne.</p>
        `,
        quiz: [
            { id: 1, question: "Que faire si je bouscule quelqu'un ?", options: ["L'insulter", "L'ignorer", "M'excuser", "Courir"], answer: 2, explanation: "C'est la base de la politesse.", category: "Savoir-vivre" },
            { id: 2, question: "La diversité est-elle un problème ?", options: ["Oui", "Non, c'est une richesse", "Seulement à l'école", "Je ne sais pas"], answer: 1, explanation: "Nos différences nous complètent.", category: "Sociologie" }
        ]
    },
    {
        id: 30,
        title: "Pourquoi les règles existent ?",
        category: "Vie Citoyenne",
        level: "Tout public",
        readingTime: 4,
        summary: "Les règles ne sont pas là pour nous embêter, mais pour nous protéger.",
        body: `
            <p>Imaginez un match de foot sans règles. Ce serait le chaos et la violence. La société, c'est pareil.</p>
            <h2>Protéger le Plus Faible</h2>
            <p>La règle (la loi) est la meilleure amie du faible. Sans loi, c'est la loi du plus fort qui règne. En respectant les règles du quartier ou de l'école, on protège tout le monde.</p>
            <h2>Conséquences du Non-Respect</h2>
            <p>Quand on grille un stop, on risque sa vie et celle des autres. Quand on jette des ordures dans le canal, on provoque des inondations. Chaque incivisme a un prix que la communauté paie.</p>
        `,
        quiz: [
            { id: 1, question: "À quoi servent les règles ?", options: ["À punir", "À organiser et protéger", "À rien", "À embêter les jeunes"], answer: 1, explanation: "Elles garantissent la sécurité et l'ordre.", category: "Logique" },
            { id: 2, question: "Qui souffre le plus de l'absence de règles ?", options: ["Les plus forts", "Les plus faibles", "Les riches", "Personne"], answer: 1, explanation: "La loi protège ceux qui ne peuvent pas se défendre par la force.", category: "Société" }
        ]
    },
    // --- THEME 2: PROPRETÉ & ENVIRONNEMENT ---
    {
        id: 31,
        title: "La propreté : une responsabilité individuelle",
        category: "Vie Citoyenne",
        level: "Tout public",
        readingTime: 5,
        summary: "N'attendons pas tout de l'État. La propreté commence devant notre porte.",
        body: `
            <p>C'est facile de blâmer la commune quand c'est sale. Mais qui a jeté le sachet par terre ?</p>
            <h2>Mon Déchet, Ma Responsabilité</h2>
            <p>Garder son déchet dans sa poche jusqu'à la prochaine poubelle est un acte héroïque du quotidien. Si chacun balaie devant sa porte et ne jette rien, la ville devient propre instantanément.</p>
            <h2>Impact Sanitaire</h2>
            <p>Les déchets bouchés dans les canaux créent de l'eau stagnante. L'eau stagnante attire les moustiques. Les moustiques amènent le Palu. <strong>Jeter un sachet, c'est semer la maladie.</strong></p>
        `,
        quiz: [
            { id: 1, question: "Qui est le premier responsable de la propreté ?", options: ["Le Président", "Le Maire", "Moi-même", "Les éboueurs"], answer: 2, explanation: "Si je ne salis pas, c'est propre.", category: "Responsabilité" },
            { id: 2, question: "Quel est le lien entre déchets et maladies ?", options: ["Aucun", "Les déchets attirent les touristes", "Les déchets favorisent les moustiques et maladies", "Les déchets sentent bon"], answer: 2, explanation: "L'insalubrité est la première cause de maladies évitables.", category: "Santé" }
        ]
    },
    // --- THEME 3: CITOYENNETÉ ET ÉCOLE ---
    {
        id: 32,
        title: "Être citoyen à l’école",
        category: "Vie Citoyenne",
        level: "Collège/Lycée",
        readingTime: 4,
        summary: "L'école est une mini-société. C'est là que tout commence.",
        body: `
            <p>L'école n'est pas juste un lieu pour apprendre les maths. C'est le lieu où l'on apprend à vivre avec des gens qu'on n'a pas choisis.</p>
            <h2>Respect et Discipline</h2>
            <p>Respecter le professeur, c'est respecter le savoir. Respecter ses camarades, c'est se respecter soi-même. La discipline permet à tout le monde d'étudier dans de bonnes conditions.</p>
            <h2>Non au Harcèlement</h2>
            <p>Se moquer, isoler ou frapper un camarade n'est pas un jeu. C'est une violence. Un citoyen protège celui qui est attaqué. Si tu vois du harcèlement, parles-en.</p>
        `,
        quiz: [
            { id: 1, question: "L'école sert à apprendre...", options: ["Uniquement les maths", "À se battre", "À vivre ensemble et s'instruire", "À dormir"], answer: 2, explanation: "C'est le premier lieu de socialisation républicaine.", category: "Éducation" },
            { id: 2, question: "Que faire si je suis témoin de harcèlement ?", options: ["Rire", "Filmer pour Facebook", "Prévenir un adulte", "Participer"], answer: 2, explanation: "Le silence est complice.", category: "Civisme" }
        ]
    },
    // --- THEME 4: LOI ET RESPONSABILITÉ ---
    {
        id: 33,
        title: "Ignorer la loi n’excuse pas",
        category: "Vie Citoyenne",
        level: "Adulte",
        readingTime: 4,
        summary: "« Nul n'est censé ignorer la loi ». Comprendre ses droits et ses devoirs.",
        body: `
            <p>Dire « Je ne savais pas » ne suffit pas devant un juge. Connaître les règles de base est un devoir.</p>
            <h2>Petites Infractions, Grandes Conséquences</h2>
            <p>Brûler des ordures semble anodin, mais c'est interdit car ça empoisonne l'air des voisins. Construire sans permis met en danger les occupants. La loi est là pour éviter ces dangers.</p>
            <h2>Le Fokontany</h2>
            <p>C'est la cellule de base de l'administration. Participer aux réunions de quartier, c'est exercer son pouvoir de citoyen pour améliorer son environnement immédiat.</p>
        `,
        quiz: [
            { id: 1, question: "Peut-on dire 'Je ne savais pas' pour éviter une punition légale ?", options: ["Oui, toujours", "Non, nul n'est censé ignorer la loi", "Seulement si on est jeune", "Ça dépend du juge"], answer: 1, explanation: "C'est un principe juridique fondamental.", category: "Droit" },
            { id: 2, question: "Quel est le rôle du citoyen au Fokontany ?", options: ["Participer et s'impliquer", "Juste payer des impôts", "Ignorer les réunions", "Critiquer sans agir"], answer: 0, explanation: "La démocratie commence au niveau local.", category: "Institutions" }
        ]
    },
    // --- THEME 5: TRAVAIL ---
    {
        id: 34,
        title: "La politesse au travail",
        category: "Vie Citoyenne",
        level: "Tout public",
        readingTime: 3,
        summary: "Les compétences techniques ne suffisent pas. Le savoir-être est roi.",
        body: `
            <p>On peut être un génie de l'informatique, si on est impoli, personne ne voudra travailler avec nous.</p>
            <h2>La Ponctualité</h2>
            <p>Arriver en retard, c'est voler le temps des autres. Être à l'heure est la première marque de respect professionnel.</p>
            <h2>L'Honnêteté</h2>
            <p>Refuser la petite corruption du quotidien, ne pas voler de matériel, être loyal. C'est ce qui construit une réputation solide et une carrière durable.</p>
        `,
        quiz: [
            { id: 1, question: "Qu'est-ce qui est aussi important que les diplômes ?", options: ["La voiture", "Le savoir-être (Soft Skills)", "Les vêtements", "Le piston"], answer: 1, explanation: "Le comportement détermine l'ambiance et l'efficacité.", category: "Travail" },
            { id: 2, question: "Que signifie être ponctuel ?", options: ["Arriver quand on veut", "Arriver à l'heure pile ou avant", "Arriver 10 minutes après", "Envoyer un SMS"], answer: 1, explanation: "C'est le respect de base du temps d'autrui.", category: "Savoir-vivre" }
        ]
    },
    // --- THEME 6: ACTION ---
    {
        id: 35,
        title: "Comment devenir un citoyen actif ?",
        category: "Vie Citoyenne",
        level: "Jeunes",
        readingTime: 4,
        summary: "Pas besoin d'argent pour changer les choses. Juste de la volonté.",
        body: `
            <p>Vous trouvez votre quartier sale ? Organisez un nettoyage avec 3 amis. Vous trouvez que les jeunes s'ennuient ? Créez un club de lecture ou de sport.</p>
            <h2>L'Initiative</h2>
            <p>N'attendez pas que les « grands » fassent les choses. Les grands changements viennent souvent de petites actions répétées.</p>
            <h2>L'Exemple</h2>
            <p>Soyez le changement que vous voulez voir. Si vous ramassez un papier, quelqu'un d'autre le fera peut-être aussi. Le civisme est contagieux.</p>
        `,
        quiz: [
            { id: 1, question: "Faut-il de l'argent pour être un bon citoyen ?", options: ["Oui, beaucoup", "Non, la volonté suffit", "Seulement pour les taxes", "Oui, pour payer les autres"], answer: 1, explanation: "Le bénévolat et l'exemple ne coûtent rien.", category: "Action" },
            { id: 2, question: "Que faire si on veut changer son quartier ?", options: ["Attendre le Maire", "Se plaindre sur Facebook", "Déménager", "Agir localement avec ses voisins"], answer: 3, explanation: "L'action collective locale est le moteur du changement.", category: "Engagement" }
        ]
    },
    // NEW CONTENT FOR ENTREPRENEURIAT
    {
        id: 16,
        title: "Quel statut juridique choisir ?",
        category: "Entrepreneuriat",
        tags: ["statut", "formalisation"],
        level: "Débutant",
        readingTime: 6,
        summary: "Entreprise Individuelle (EI) ou SARL ? Le guide facile pour choisir.",
        body: `
            <p>Choisir son statut, c'est choisir son armure. Trop lourde, elle vous ralentit. Trop légère, elle ne vous protège pas.</p>
            <h2>L'Entreprise Individuelle (EI)</h2>
            <p>Idéal pour se lancer seul. Simple, pas cher. Vous et l'entreprise ne faites qu'un. Attention : vos biens personnels peuvent être saisis en cas de dettes (sauf si déclaration d'insaisissabilité).</p>
            <h2>La SARL (Société à Responsabilité Limitée)</h2>
            <p>Pour s'associer. Vous créez une "personne morale". Si l'entreprise coule, vous ne perdez que l'argent investi (le capital), pas votre maison.</p>
            <h2>L'Impôt Synthétique (IS)</h2>
            <p>Pour les petits CA (Chiffre d'Affaires). C'est un impôt simplifié payé une fois par an ou par acompte. Parfait pour débuter.</p>
        `,
        quiz: []
    },
    {
        id: 17,
        title: "Étude de marché : Écouter avant de parler",
        category: "Création d'entreprise",
        tags: ["marche", "creation"],
        level: "Intermédiaire",
        readingTime: 7,
        summary: "Ne vendez pas ce que vous voulez. Vendez ce que les gens veulent acheter.",
        body: `
            <p>Une étude de marché ne demande pas des millions. Elle demande de la curiosité.</p>
            <h3>Les 3 Questions Magiques</h3>
            <ol>
                <li><strong>Qui a le problème ?</strong> (Cible)</li>
                <li><strong>Comment font-ils aujourd'hui ?</strong> (Concurrence)</li>
                <li><strong>Combien sont-ils prêts à payer pour mieux ?</strong> (Prix)</li>
            </ol>
            <p>Allez sur le terrain. Parlez à 50 personnes. Si 30 vous disent "J'achète", vous tenez quelque chose.</p>
        `,
        quiz: []
    },
    {
        id: 18,
        title: "Le Microcrédit : Mode d'emploi",
        category: "Financement",
        tags: ["microfinance", "banque"],
        level: "Tout public",
        readingTime: 5,
        summary: "Comment obtenir un prêt quand on est petit ? Les secrets des IMF.",
        body: `
            <p>Les banques classiques demandent des garanties (titres fonciers) que vous n'avez pas. La microfinance est là pour vous.</p>
            <h2>Comment dire OUI au banquier ?</h2>
            <ul>
                <li><strong>L'historique</strong> : Montrez que vous épargnez régulièrement, même peu.</li>
                <li><strong>L'activité réelle</strong> : Le banquier visitera votre lieu de travail. Il doit voir du stock, des clients.</li>
                <li><strong>La caution solidaire</strong> : Parfois, un groupe de personnes se porte garant ensemble.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 19,
        title: "Le Fonds de Roulement (BFR) expliqué",
        category: "Gestion",
        tags: ["finance", "bfr", "tresorerie"],
        level: "Avancé",
        readingTime: 8,
        summary: "Pourquoi des entreprises rentables font faillite ? À cause de la trésorerie.",
        body: `
            <p>Imaginez : Vous achetez du riz, vous le vendez. Mais le client vous paie dans 30 jours. Pendant ces 30 jours, comment payez-vous votre fournisseur ? C'est ça, le Besoin en Fonds de Roulement.</p>
            <p><strong>BFR = Stocks + Créances Clients - Dettes Fournisseurs</strong></p>
            <p>Si votre BFR est trop grand, vous mourrez "en bonne santé" (avec plein de commandes, mais 0 cash pour payer les salaires).</p>
        `,
        quiz: []
    },
    {
        id: 20,
        title: "Agro-transformation : La richesse est ici",
        category: "Production",
        tags: ["agro", "local", "industrie"],
        level: "Tout public",
        readingTime: 6,
        summary: "Ne vendez plus vos mangues brutes. Vendez-les séchées, en jus, en confiture.",
        body: `
            <p>Vendre une tomate rapporte 100 Ar. Vendre du ketchup rapporte 1000 Ar. La transformation est la clé de la richesse à Madagascar.</p>
            <h2>Des idées simples</h2>
            <ul>
                <li><strong>Séchage</strong> : Fruits, légumes (longue conservation, transport facile).</li>
                <li><strong>Huiles essentielles</strong> : Ravintsara, Géranium.</li>
                <li><strong>Conserves</strong> : Achards, confitures.</li>
            </ul>
            <p>La valeur ajoutée reste au pays, et les emplois aussi.</p>
        `,
        quiz: []
    },
    // NEW CONTENT FOR FORMATIONS (Training)
    {
        id: 21,
        title: "Excel : Les formules magiques pour gérer son business",
        category: "Formation professionnelle",
        tags: ["bureautique", "excel", "gestion"],
        level: "Débutant",
        readingTime: 10,
        summary: "Plus besoin de cahier raturé. Apprenez à faire vos factures et suivre votre stock sur Excel.",
        body: `
            <p>Excel n'est pas difficile. C'est une calculatrice géante.</p>
            <h2>3 Formules à connaître par cœur</h2>
            <ul>
                <li><strong>SOMME</strong> : <code>=SOMME(A1:A10)</code> pour additionner votre chiffre d'affaires.</li>
                <li><strong>SI</strong> : <code>=SI(B2<10; "Commander"; "Stock OK")</code> pour gérer vos alertes de stock.</li>
                <li><strong>PRODUIT</strong> : <code>=A1*B1</code> pour calculer Prix x Quantité automatiquement.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 22,
        title: "Techniques de Vente : Convaincre en 3 minutes",
        category: "Formation professionnelle",
        tags: ["vente", "commerce", "marketing"],
        level: "Intermédiaire",
        readingTime: 5,
        summary: "La méthode AIDA pour transformer un curieux en client.",
        body: `
            <p>Vendre n'est pas baratiner. C'est aider le client à choisir VOTRE solution.</p>
            <h2>La méthode AIDA</h2>
            <ul>
                <li><strong>A</strong>ttention : Accrochez le regard (sourire, produit bien présenté).</li>
                <li><strong>I</strong>ntérêt : Parlez de LUI, pas de vous ("Vous cherchez quelque chose de solide ?").</li>
                <li><strong>D</strong>ésir : Montrez le bénéfice ("Avec ça, vous n'aurez plus jamais mal au dos").</li>
                <li><strong>A</strong>ction : Concluez ("On part sur le rouge ou le bleu ?").</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 23,
        title: "Le SRI (Système de Riziculture Intensive)",
        category: "Agriculture & Élevage",
        tags: ["riz", "agriculture", "durable"],
        level: "Tout public",
        readingTime: 8,
        summary: "Produire plus de riz avec moins d'eau et moins de semences. La méthode révolutionnaire.",
        body: `
            <p>Le SRI a été inventé à Madagascar par le Père De Laulanié. Il triple les rendements.</p>
            <h2>Les principes clés</h2>
            <ol>
                <li><strong>Repiquage jeune</strong> : Repiquer le plan quand il n'a que 2 feuilles (8-12 jours).</li>
                <li><strong>Un seul plan par trou</strong> : Pour qu'il ne soit pas en concurrence.</li>
                <li><strong>Gestion de l'eau</strong> : Alterner sec et inondé (le riz n'est pas une plante aquatique !).</li>
            </ol>
        `,
        quiz: []
    },
    {
        id: 24,
        title: "Fabriquer du Savon Artisanal",
        category: "Transformation Locale",
        tags: ["artisanat", "cosmetique", "chimie"],
        level: "Débutant",
        readingTime: 12,
        summary: "Une activité rentable avec peu d'investissement. La recette de base.",
        body: `
            <p>Le savon, c'est de l'huile + de la soude + de l'eau. C'est tout.</p>
            <h2>La réaction de Saponification</h2>
            <p>ATTENTION : La soude caustique brûle. Portez gants et lunettes.</p>
            <p>Mélangez la lessive de soude avec vos huiles (coco, palme, tournesol) à bonne température (~30°C). Mixez jusqu'à la "trace" (consistance de mayonnaise). Coulez dans un moule. Attendez 48h avant de démouler, et 4 semaines de "cure" avant d'utiliser.</p>
        `,
        quiz: []
    },
    {
        id: 25,
        title: "Charbon Antrano : L'énergie verte",
        category: "Énergie & Environnement",
        tags: ["charbon", "ecologie", "energie"],
        level: "Tout public",
        readingTime: 6,
        summary: "Arrêtons de couper la forêt. Fabriquons du charbon avec des déchets.",
        body: `
            <p>Le charbon "bio" ou briqueté utilise la poussière de charbon, les feuilles mortes, la balle de riz carbonisée.</p>
            <h2>Le liant</h2>
            <p>Le secret, c'est la colle. Utilisez de l'argile ou de la farine de manioc cuite pour coller les poussières ensemble. Pressez fort dans un moule. Séchez au soleil.</p>
            <p>Ce charbon brûle plus longtemps et est moins cher.</p>
        `,
        quiz: []
    },
    // NEW CONTENT FOR DEV PERSONNEL (Soft Skills)
    {
        id: 26,
        title: "Vaincre le Syndrome de l'Imposteur",
        category: "Développement personnel",
        tags: ["confiance", "imposteur", "psychologie"],
        level: "Intermédiaire",
        readingTime: 7,
        summary: "Vous avez peur qu'on découvre que vous n'êtes pas à la hauteur ? Lisez ceci.",
        body: `
            <p>70% des gens ressentent ce syndrome. Même Albert Einstein !</p>
            <h2>C'est quoi ?</h2>
            <p>C'est l'incapacité à internaliser ses propres succès. On pense qu'on a juste eu de la chance.</p>
            <h2>Comment le vaincre ?</h2>
            <ul>
                <li><strong>Notez vos succès</strong> : Tenez un carnet de vos réussites, même petites.</li>
                <li><strong>Acceptez les compliments</strong> : Dites juste "Merci", ne les rejetez pas.</li>
                <li><strong>Comprenez que nul n'est parfait</strong> : Les autres aussi doutent, ils le cachent juste mieux.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 27,
        title: "Prise de parole : Ne plus jamais trembler",
        category: "Développement personnel",
        tags: ["communication", "public", "oral"],
        level: "Débutant",
        readingTime: 6,
        summary: "Parler en public est la peur n°1, avant la mort. Voici comment survivre.",
        body: `
            <p>Le trac est normal. C'est de l'énergie.</p>
            <h2>3 Techniques de Pro</h2>
            <ol>
                <li><strong>La Respiration</strong> : Inspirez 4 secondes, expirez 6 secondes. Ça calme le cœur.</li>
                <li><strong>Regardez des "Amis"</strong> : Dans la salle, trouvez 3 visages bienveillants et parlez-leur tour à tour.</li>
                <li><strong>Préparez votre intro</strong> : Connaissez votre première phrase par cœur. Une fois lancé, ça coule tout seul.</li>
            </ol>
        `,
        quiz: []
    },
    {
        id: 28,
        title: "La Matrice d'Eisenhower : Gérer son temps",
        category: "Développement personnel",
        tags: ["temps", "priorites", "organisation"],
        level: "Intermédiaire",
        readingTime: 5,
        summary: "Arrêtez de courir après le temps. Faites ce qui compte vraiment.",
        body: `
            <p>Dwight Eisenhower (Président US) classait ses tâches en 4 catégories :</p>
            <ul>
                <li><strong>Urgent & Important</strong> : À faire TOUT DE SUITE (Crises, deadlines).</li>
                <li><strong>Important & Pas Urgent</strong> : À PLANIFIER (Sport, Formation, Stratégie). C'est là que se construit le succès.</li>
                <li><strong>Urgent & Pas Important</strong> : À DÉLÉGUER (Certains mails, interruptions).</li>
                <li><strong>Ni Urgent ni Important</strong> : À SUPPRIMER (Scroll infini sur Facebook).</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 29,
        title: "Le Kaizen : La puissance des petits pas",
        category: "Développement personnel",
        tags: ["discipline", "kaizen", "habitudes"],
        level: "Tout public",
        readingTime: 4,
        summary: "Comment déplacer une montagne ? En commençant par enlever les petites pierres.",
        body: `
            <p>Vouloir changer radicalement du jour au lendemain mène à l'échec (bonnes résolutions...).</p>
            <h2>La stratégie du 1%</h2>
            <p>Si vous vous améliorez de 1% chaque jour, à la fin de l'année, vous serez 37 fois meilleur.</p>
            <p>Ne dites pas "Je vais lire 1 livre par semaine". Dites "Je vais lire 1 page ce soir". C'est si facile que vous ne pouvez pas dire non.</p>
        `,
        quiz: []
    },
    {
        id: 30,
        title: "L'échec n'existe pas",
        category: "Développement personnel",
        tags: ["echecs", "resilience", "mental"],
        level: "Tout public",
        readingTime: 6,
        summary: "« Je ne perds jamais. Soit je gagne, soit j'apprends. » - Nelson Mandela",
        body: `
            <p>Dans la Silicon Valley, on dit "Fail Fast" (Échoue vite). Pourquoi ? Parce que l'échec est une donnée.</p>
            <p>Thomas Edison a raté 1000 fois avant d'inventer l'ampoule. Il a dit : "Je n'ai pas échoué. J'ai juste trouvé 1000 façons qui ne marchent pas."</p>
            <p>Quand vous tombez, ne regardez pas le sol. Regardez où vous avez trébuché pour ne plus le refaire.</p>
        `,
        quiz: []
    },
    // NEW CONTENT FOR CITOYENNETÉ
    {
        id: 31,
        title: "Le Fihavanana : Mythe ou Réalité ?",
        category: "Vie Citoyenne",
        tags: ["civisme", "fihavanana", "societe"],
        level: "Tout public",
        readingTime: 5,
        summary: "Le Fihavanana n'est pas juste être gentil. C'est un contrat social.",
        body: `
            <p>Le Fihavanana, c'est ce qui nous lie. C'est "faire famille" même quand on n'est pas du même sang.</p>
            <h2>Les 3 piliers</h2>
            <ul>
                <li><strong>La solidarité</strong> : Aider son voisin en deuil ou en fête.</li>
                <li><strong>Le consensus</strong> : Discuter jusqu'à trouver une solution qui ne blesse personne.</li>
                <li><strong>Le respect</strong> : Des aînés, mais aussi de la parole donnée.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 32,
        title: "Stop aux Ordures : Le devoir de chacun",
        category: "Environnement & Écologie",
        tags: ["environnement", "dechets", "proprete"],
        level: "Tout public",
        readingTime: 4,
        summary: "Jeter par la fenêtre du bus ? C'est jeter dans votre propre salon.",
        body: `
            <p>Quand on jette un sachet plastique par terre, il finit dans le canal. Le canal se bouche. Quand il pleut, l'eau monte. Et c'est VOTRE maison qui est inondée.</p>
            <p>Être propre, ce n'est pas pour faire plaisir au Maire. C'est pour protèger sa propre santé (Choléra, Peste, Palu).</p>
        `,
        quiz: []
    },
    {
        id: 33,
        title: "Parents & Profs : Une alliance nécessaire",
        category: "Éducation scolaire",
        tags: ["ecole", "parents", "education"],
        level: "Tout public",
        readingTime: 6,
        summary: "L'école ne peut pas tout faire. L'éducation commence à la maison.",
        body: `
            <p>Si un parent critique le maître devant l'enfant, l'enfant n'écoutera plus le maître.</p>
            <h2>Le rôle des parents</h2>
            <ul>
                <li>Vérifier les cahiers le soir.</li>
                <li>Encourager (même si les notes sont basses).</li>
                <li>Respecter l'institution scolaire.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 34,
        title: "Code de la route : Spécial Piétons",
        category: "Sécurité (Globale)",
        tags: ["securite", "route", "pieton"],
        level: "Débutant",
        readingTime: 5,
        summary: "Piétons, vous êtes vulnérables mais vous avez des règles à suivre.",
        body: `
            <p>La route tue. Souvent par imprudence.</p>
            <h2>Règles de survie</h2>
            <ul>
                <li><strong>Marchez FACE aux voitures</strong> (sur routes de campagne) pour les voir arriver.</li>
                <li><strong>Traversez aux clous</strong> ou là où vous avez une vue dégagée.</li>
                <li><strong>Ne courez jamais</strong> pour traverser sans regarder.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 35,
        title: "Non à la Corruption : Ça commence par moi",
        category: "Vie Citoyenne",
        tags: ["derives", "corruption", "droit"],
        level: "Tout public",
        readingTime: 6,
        summary: "Payer un gendarme sur la route, c'est nourrir le monstre qui nous mange.",
        body: `
            <p>La corruption tue le pays. L'argent volé, c'est des routes non faites, des hôpitaux sans médicaments.</p>
            <p><strong>Refuser de payer</strong>, c'est risquer de perdre du temps aujourd'hui, mais c'est gagner un avenir demain.</p>
        `,
        quiz: []
    },
    {
        id: 36,
        title: "À quoi sert un Maire ?",
        category: "Vie Citoyenne",
        tags: ["elus", "maire", "politique"],
        level: "Débutant",
        readingTime: 5,
        summary: "Il n'est pas juste là pour les mariages. C'est le chef de chantier de la ville.",
        body: `
            <p>Le Maire est responsable de :</p>
            <ul>
                <li>L'État Civil (Naissances, Mariages, Décès).</li>
                <li>La propreté de la ville (Ramassage ordures).</li>
                <li>L'éclairage public et les petites routes.</li>
                <li>La sécurité locale (Police municipale).</li>
            </ul>
        `,
        quiz: []
    },
    // NEW CONTENT FOR SANTÉ
    {
        id: 37,
        title: "L'eau potable : Comment la purifier soi-même ?",
        category: "Santé et sécurité",
        tags: ["hygiene", "eau", "sante"],
        level: "Tout public",
        readingTime: 4,
        summary: "Boire de l'eau sale tue plus que la guerre. Voici comment la rendre sûre.",
        body: `
            <p>Si l'eau n'est pas claire, filtrez-la d'abord avec un tissu propre.</p>
            <h2>3 Méthodes de purification</h2>
            <ul>
                <li><strong>Ébullition</strong> : Faire bouillir l'eau à gros bouillons pendant 1 minute. C'est le plus sûr.</li>
                <li><strong>Sur'Eau</strong> : 1 bouchon pour 20 litres d'eau. Bien mélanger et attendre 30 minutes.</li>
                <li><strong>Solaire (SODIS)</strong> : Mettre l'eau dans une bouteille plastique transparente au soleil (sur un toit en tôle) pendant 6 heures.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 38,
        title: "Premiers secours : La PLS",
        category: "Santé et sécurité",
        tags: ["secourisme", "pls", "urgence"],
        level: "Débutant",
        readingTime: 5,
        summary: "Si une personne est inconsciente mais respire, mettez-la en PLS pour qu'elle ne s'étouffe pas.",
        body: `
            <p>PLS = Position Latérale de Sécurité.</p>
            <ol>
                <li>Mettez la personne sur le côté.</li>
                <li>Ouvrez sa bouche vers le bas (pour que la salive ou le vomi coule dehors).</li>
                <li>Pliez sa jambe du dessus pour la stabiliser.</li>
                <li>Appelez les secours ou un médecin.</li>
            </ol>
            <p>Ne donnez JAMAIS à boire à une personne inconsciente !</p>
        `,
        quiz: []
    },
    {
        id: 39,
        title: "L'Ambalavelona : Sorcellerie ou hystérie ?",
        category: "Santé et sécurité",
        tags: ["maladies", "ambalavelona", "croyances"],
        level: "Intermédiaire",
        readingTime: 7,
        summary: "Comprendre ce phénomène qui touche souvent les jeunes filles dans les écoles.",
        body: `
            <p>On pense souvent que c'est un sort ou une possession.</p>
            <h2>L'explication médicale</h2>
            <p>Les médecins appellent cela des "troubles de conversion" ou hystérie collective. C'est un stress extême (pression scolaire, familiale) qui se transforme en crise physique (transe, cris).</p>
            <p>Ce n'est pas "imaginaire", la souffrance est réelle. Mais la cause est souvent psychologique, pas magique. Calmer, écouter et rassurer est souvent plus efficace que la force.</p>
        `,
        quiz: []
    },
    {
        id: 40,
        title: "L'Épilepsie (Domen-tany) : Ce n'est pas un mauvais esprit",
        category: "Santé et sécurité",
        tags: ["maladies", "epilepsie", "croyances"],
        level: "Tout public",
        readingTime: 6,
        summary: "Les crises ne sont pas contagieuses. Il faut protéger la personne, pas la fuir.",
        body: `
            <p>Quand quelqu'un convulse et bave, ce n'est pas un esprit qui le possède. C'est un court-circuit électrique dans le cerveau.</p>
            <h2>Que faire ?</h2>
            <p>Ne mettez rien dans sa bouche ! (Il n'avalera pas sa langue, c'est impossible).</p>
            <p>Protégez sa tête avec un vêtement pour qu'elle ne tape pas par terre. Attendez que la crise passe.</p>
            <p>L'épilepsie se soigne très bien avec des médicaments modernes.</p>
        `,
        quiz: []
    },
    // NEW CONTENT FOR SOCIÉTÉ & CULTURE
    {
        id: 41,
        title: "Taxi-Moto : Métier d'avenir ou précarité ?",
        category: "Sensibilisation Sociale",
        tags: ["jeunesse", "transport", "emploi"],
        level: "Tout public",
        readingTime: 6,
        summary: "Des milliers de jeunes se lancent. Est-ce une solution durable ?",
        body: `
            <p>Le phénomène explose. C'est de l'argent rapide ("Masam-bola").</p>
            <h2>Les risques</h2>
            <p>Accidents, pas de retraite, pas d'assurance. C'est un métier de survie.</p>
            <h2>Comment le professionnaliser ?</h2>
            <p>S'organiser en coopérative, porter le casque, épargner pour l'entretien de la moto. Ne pas vivre au jour le jour.</p>
        `,
        quiz: []
    },
    {
        id: 42,
        title: "Système D : L'art de survivre à Madagascar",
        category: "Sensibilisation Sociale",
        tags: ["jeunesse", "debrouille", "societe"],
        level: "Tout public",
        readingTime: 5,
        summary: "Quand rien ne marche, le Malgache trouve une solution. C'est le génie de la débrouille.",
        body: `
            <p>Réparer une sandale avec un clou. Faire un joint de culasse avec du carton.</p>
            <p>Cette créativité est une force immense. Si on l'utilisait pour innover vraiment, au lieu de juste réparer, on serait des rois.</p>
            <p><strong>Le défi :</strong> Passer de la survie (bricolage) au développement (innovation durable).</p>
        `,
        quiz: []
    },
    {
        id: 43,
        title: "L'école nous prépare-t-elle à la vie ?",
        category: "Vie Citoyenne",
        tags: ["education-critique", "debat", "ecole"],
        level: "Intermédiaire",
        readingTime: 8,
        summary: "On apprend Pythagore, mais pas à faire un budget. Est-ce normal ?",
        body: `
            <p>L'école est importante pour la culture générale et la discipline. Mais elle a des trous.</p>
            <h2>Ce qui manque :</h2>
            <ul>
                <li>L'éducation financière (Gérer son argent).</li>
                <li>L'intelligence émotionnelle (Gérer ses émotions).</li>
                <li>La créativité (L'école apprend souvent à répéter, pas à inventer).</li>
            </ul>
            <p>Ne comptez pas que sur l'école. Formez-vous vous-mêmes à côté !</p>
        `,
        quiz: []
    },
    {
        id: 44,
        title: "Pourquoi la connaissance est une arme",
        category: "Développement personnel",
        tags: ["pensee-critique", "savoir", "pouvoir"],
        level: "Avancé",
        readingTime: 7,
        summary: "Un peuple ignorant est facile à manipuler. Un peuple instruit est libre.",
        body: `
            <p>"Savoir, c'est pouvoir."</p>
            <p>Quand vous savez lire un contrat, on ne peut pas vous arnaquer.</p>
            <p>Quand vous connaissez l'histoire, vous comprenez le présent.</p>
            <p>Quand vous comprenez la science, vous ne croyez pas aux charlatans.</p>
            <p>Apprendre n'est pas une corvée scolaire. C'est votre gilet pare-balles dans la vie.</p>
        `,
        quiz: []
    },
    {
        id: 45,
        title: "Comprendre la Constitution Malgache",
        category: "Vie Citoyenne",
        tags: ["droit", "loi", "constitution"],
        level: "Tout public",
        readingTime: 6,
        summary: "Vos droits, vos devoirs. La loi n'est pas faite que pour les avocats, elle est faite pour vous, pour vous protéger.",
        body: `
            <p>La Constitution est la loi suprême. Elle garantit nos libertés, mais elle impose aussi des devoirs. Connaître la Constitution, c'est ne plus se laisser faire par ignorance.</p>
            
            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" alt="Balance de la justice et livre de loi" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h2>Vos 3 Droits Fondamentaux</h2>
            <ul>
                <li><strong>Liberté d'expression</strong> : Vous avez le droit de dire ce que vous pensez, d'écrire et de publier. La limite ? La diffamation (mentir pour nuire) et l'incitation à la haine.</li>
                <li><strong>Présomption d'innocence</strong> : Tant qu'un juge n'a pas tapé avec son marteau pour dire "Coupable", vous êtes innocent. Personne ne peut vous traiter de criminel sans jugement.</li>
                <li><strong>Inviolabilité du domicile</strong> : La police ne peut pas entrer chez vous comme ça (sauf mandat ou flagrant délit). Votre maison est votre château.</li>
            </ul>

            <h2>Vos Devoirs de Citoyen</h2>
            <p>La citoyenneté, ça marche dans les deux sens :</p>
            <ol>
                <li>Respecter la loi (et ne pas se faire justice soi-même).</li>
                <li>Payer ses impôts (pour financer les routes, les écoles, les hôpitaux).</li>
                <li>Protéger l'environnement (c'est inscrit dans la constitution !).</li>
            </ol>
        `,
        quiz: [
            {
                id: 1,
                question: "Que signifie la présemption d'innocence ?",
                options: ["On est coupable jusqu'à preuve du contraire", "On est innocent tant que le juge n'a pas décidé autrement", "Ça n'existe pas", "C'est pour les riches"],
                answer: 1,
                explanation: "C'est la base de la justice : le doute profite à l'accusé.",
                category: "Droit"
            }
        ]
    },
    {
        id: 46,
        title: "Gérer le stress des examens",
        category: "Santé et sécurité",
        tags: ["sante", "stress", "examen"],
        level: "Tout public",
        readingTime: 5,
        summary: "Le cœur qui bat, les mains moites... Comment transformer le stress en énergie positive pour réussir.",
        body: `
            <p>Le stress est une réaction normale. C'est votre corps qui se prépare au combat (adrénaline). Le problème, c'est quand il vous paralyse ("trou noir").</p>

            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" alt="Étudiant serein en révision" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h2>3 Techniques Immédiates</h2>
            <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-bold text-green-800">1. La Respiration Carrée (4-4-4-4)</h4>
                    <p>Inspirez 4s, bloquez 4s, expirez 4s, bloquez 4s. Répétez 5 fois. Cela force votre cœur à ralentir mécaniquement.</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-bold text-blue-800">2. L'hygiène de vie</h4>
                    <p><strong>Sommeil > Révision</strong>. Une nuit blanche avant l'examen divise vos capacités cognitives par deux. Il vaut mieux dormir 8h que réviser ce dernier chapitre mal compris.</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                    <h4 class="font-bold text-purple-800">3. La Visualisation</h4>
                    <p>Fermez les yeux. Imaginez-vous entrant dans la salle, calme. Vous retournez la feuille, vous connaissez la réponse. Vous écrivez. Cette "répétition mentale" conditionne le cerveau au succès.</p>
                </div>
            </div>
        `,
        quiz: [
            {
                id: 1,
                question: "Quelle technique permet de ralentir le cœur mécaniquement ?",
                options: ["Boire du café", "La respiration carrée", "Courir vite", "Crier"],
                answer: 1,
                explanation: "La respiration contrôlée en 4 temps agit directement sur le système nerveux parasympathique.",
                category: "Santé"
            }
        ]
    },
    {
        id: 47,
        title: "Le Fihavanana : Force ou Faiblesse ?",
        category: "Sensibilisation Sociale",
        tags: ["culture", "societe", "fihavanana"],
        level: "Intermédiaire",
        readingTime: 7,
        summary: "Le pilier de la société malgache décrypté. Solidarité indispensable ou frein à l'émancipation individuelle ?",
        body: `
            <p>Le Fihavanana est unique au monde. C'est ce lien invisible qui unit tous les Malgaches. <em>"Ny fihavanana no taloha ny vola"</em> (La fraternité passe avant l'argent).</p>
            
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" alt="Groupe d'amis unis" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h2>Une Force de Résilience</h2>
            <p>Dans un pays où la sécurité sociale est faible, le Fihavanana est notre assurance-vie. On s'aide pour les mariages, les enterrements, les coups durs. C'est un filet de sécurité communautaire extraordinaire.</p>

            <h2>La Dérive : Le "Coût Social"</h2>
            <p>Cependant, il peut devenir un frein :</p>
            <ul>
                <li><strong>Le Népotisme</strong> : Embaucher son cousin incompétent "au nom du Fihavanana" détruit l'économie.</li>
                <li><strong>La pression sociale</strong> : Difficile de réussir individuellement sans qu'on vienne vous demander de "partager" jusqu'à ce que vous couliez.</li>
                <li><strong>L'étouffement</strong> : Peur de dire non, peur du conflit.</li>
            </ul>
            <p><strong>Conclusion :</strong> Gardons la solidarité, mais apprenons à professionnaliser nos relations de travail.</p>
        `,
        quiz: []
    },
    {
        id: 48,
        title: "La méthode Pomodoro pour étudier",
        category: "Développement personnel",
        tags: ["productivite", "methode", "etudes"],
        level: "Débutant",
        readingTime: 4,
        summary: "Arrêtez de travailler 4h d'affilée sans rien retenir. Travaillez moins, mais mieux, avec une minuterie.",
        body: `
            <p>Votre cerveau n'est pas fait pour se concentrer 3 heures. Au bout de 45 min, il décroche. La méthode Pomodoro ("Tomate" en italien) utilise ce fonctionnement.</p>

            <div class="flex flex-col md:flex-row items-center gap-8 my-8">
                <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=400&q=80" alt="Minuterie de cuisine" class="rounded-xl shadow-md w-full md:w-1/3">
                <div class="flex-1">
                    <h3>Le Cycle Magique :</h3>
                    <ol>
                        <li>Choisissez une tâche (ex: Apprendre le chapitre 2).</li>
                        <li>Réglez un minuteur sur <strong>25 minutes</strong>.</li>
                        <li>Travaillez À FOND (Pas de Facebook, pas de SMS).</li>
                        <li>Quand ça sonne, <strong>STOP !</strong> Même au milieu d'une phrase.</li>
                        <li>Prenez <strong>5 minutes de pause</strong> (Levez-vous, étirez-vous).</li>
                        <li>Répétez 4 fois, puis prenez une <strong>longue pause de 30 min</strong>.</li>
                    </ol>
                </div>
            </div>
            <p>En saucissonnant le travail, il paraît moins insurmontable. "Je dois juste tenir 25 minutes", c'est facile !</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Combien de temps dure une session de travail Pomodoro ?",
                options: ["1 heure", "25 minutes", "10 minutes", "Toute la nuit"],
                answer: 1,
                explanation: "25 minutes est la durée idéale pour une concentration maximale sans fatigue.",
                category: "Méthode"
            }
        ]
    },
    {
        id: 49,
        title: "Réussir son Bac : Le guide ultime",
        category: "Éducation scolaire",
        tags: ["bac", "examens", "revisions"],
        level: "Lycée",
        readingTime: 10,
        summary: "Planning de révision, fiches, gestion du temps le jour J. Tout pour décrocher le diplôme sans panique.",
        body: `
            <p>Le Bac n'est pas un sprint, c'est un marathon. Ceux qui échouent sont souvent ceux qui ont commencé une semaine avant.</p>

            <h2>Phase 1 : Le Planning Inversé (J-2 mois)</h2>
            <p>Ne dites pas "Je vais réviser les Maths". Dites "Lundi matin : Probabilités".</p>
            <ul>
                <li>Faites un emploi du temps de révision.</li>
                <li>Alternez les matières (Maths le matin, Histo-Géo l'après-midi) pour ne pas saturer.</li>
                <li>Gardez le dimanche pour vous reposer (Indispensable !).</li>
            </ul>

            <h2>Phase 2 : Les Fiches (Synthèse)</h2>
            <p>Ne relisez pas votre cours de 50 pages. Faites une fiche avec :</p>
            <ul>
                <li>Les définitions clés.</li>
                <li>Les formules à par cœur.</li>
                <li>Le plan du cours.</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" alt="Bureau de révision organisé" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h2>Phase 3 : Le Jour J</h2>
            <p>La stratégie des points :</p>
            <ol>
                <li>Lisez TOUT le sujet avant d'écrire un seul mot.</li>
                <li>Commencez par l'exercice où vous êtes le plus à l'aise (ça donne confiance).</li>
                <li>Gérez votre temps : Si un exercice est noté sur 4 points, n'y passez pas 2 heures !</li>
            </ol>
        `,
        quiz: [
            {
                id: 1,
                question: "Que faut-il faire en premier quand on reçoit le sujet ?",
                options: ["Commencer à écrire tout de suite", "Lire le sujet en entier", "Dormir", "Demander la réponse au voisin"],
                answer: 1,
                explanation: "Lire le sujet permet de choisir par quel exercice commencer et de gérer son temps.",
                category: "Stratégie"
            }
        ]
    },
    {
        id: 50,
        title: "Réussir sa Reconversion Professionnelle",
        category: "Orientation & Carrière",
        tags: ["reconversion", "carriere", "changement"],
        level: "Tout public",
        readingTime: 8,
        summary: "Changer de métier n'est pas un échec, c'est une évolution. Guide étape par étape pour ne pas se tromper de voie.",
        body: `
            <p className="lead">On ne fait plus le même métier toute sa vie. À Madagascar comme ailleurs, les carrières ne sont plus linéaires. La reconversion est devenue une étape normale, voire nécessaire, pour s'adapter au marché ou trouver un sens à son travail.</p>
            
            <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80" alt="Personne écrivant un nouveau projet" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h2>1. Les Bonnes Questions à se poser</h2>
            <p>Avant de tout plaquer, il faut identifier la racine de l'envie de changement :</p>
            <ul>
                <li><strong>Est-ce l'environnement ?</strong> (Mon patron, mes collègues, le salaire ?) -> Peut-être qu'il suffit de changer d'entreprise, pas de métier.</li>
                <li><strong>Est-ce le métier ?</strong> (Je m'ennuie, je ne vois pas le sens ?) -> Là, une reconversion est pertinente.</li>
                <li><strong>Est-ce le secteur ?</strong> (Je ne crois plus au produit que je vends ?) -> Vous pouvez faire le même métier (ex: comptable) mais dans une ONG ou un hôpital.</li>
            </ul>

            <h2>2. Faire le point : Le Bilan</h2>
            <p>Ne vous lancez pas dans le vide. Faites l'inventaire de vos compétences "transférables".</p>
            <blockquote>
                "Rien ne se perd, tout se transforme."
            </blockquote>
            <p>Si vous étiez <em>Gestionnaire de stock</em>, vous avez des compétences en organisation, en rigueur et en mathématiques qui peuvent servir pour devenir <em>Développeur Web</em> (logique) ou <em>Logisticien humanitaire</em>.</p>

            <h2>3. Comment se former sans se ruiner ?</h2>
            <ul>
                <li><strong>L'autodidacte</strong> : YouTube, Coursera, les tutoriels gratuits. Parfait pour tester si le nouveau métier vous plaît.</li>
                <li><strong>Les cours du soir</strong> : Permet de garder son emploi actuel (et son salaire) le temps de se former.</li>
                <li><strong>L'apprentissage sur le tas</strong> : Proposez vos services gratuitement ou à bas prix au début pour apprendre (bénévolat, stage).</li>
            </ul>

            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                <h3 class="text-blue-900 font-bold mb-2">💡 Conseil d'expert</h3>
                <p class="text-blue-800">Ne démissionnez pas le premier jour. Construisez votre "plan B" soirs et week-ends. Quand votre plan B rapporte 50% de votre salaire actuel, c'est le moment de sauter le pas.</p>
            </div>
        `,
        quiz: [
            {
                id: 1,
                question: "Quelle est la première étape avant de se reconvertir ?",
                options: ["Démissionner immédiatement", "Identifier la cause réelle (métier vs environnement)", "Prendre un crédit", "Déménager"],
                answer: 1,
                explanation: "Il faut distinguer si le problème vient du métier lui-même ou juste de l'entreprise actuelle.",
                category: "Coaching"
            },
            {
                id: 2,
                question: "Qu'est-ce qu'une compétence transférable ?",
                options: ["Une compétence qu'on peut vendre", "Une compétence utile dans plusieurs métiers différents", "Une compétence informatique uniquement", "Un diplôme"],
                answer: 1,
                explanation: "Exemple : L'anglais ou la gestion d'équipe servent partout.",
                category: "Définition"
            }
        ]
    },
    {
        id: 51,
        title: "Entrepreneuriat : Mythes et Réalités",
        category: "Entrepreneuriat",
        tags: ["mythes", "mindset", "verite"],
        level: "Débutant",
        readingTime: 6,
        summary: "Non, vous n'aurez pas plus de temps libre. Non, vous ne serez pas riche tout de suite. La vérité brute.",
        body: `
            <p>On idéalise souvent la vie d'entrepreneur sur Instagram : ordinateur sur la plage, cocktails, liberté totale. La réalité est plus rude, mais souvent plus passionnante pour ceux qui ont la fibre.</p>
            
            <img src="https://images.unsplash.com/photo-1590402494587-44b71d87e3f6?auto=format&fit=crop&w=800&q=80" alt="Réunion de travail intense" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h3>Mythe 1 : "Je suis mon propre patron, je fais ce que je veux."</h3>
            <p><strong>Réalité :</strong> Vous n'avez plus un patron, vous en avez des centaines : vos clients. Si un client vous appelle le dimanche parce qu'il y a un problème, vous décrochez. C'est vous le responsable final de tout.</p>

            <h3>Mythe 2 : "Je vais devenir riche rapidement."</h3>
            <p><strong>Réalité :</strong> La plupart des entrepreneurs gagnent MOINS qu'un salarié les premières années. Tout l'argent gagné est réinvesti dans la machine (achat de stock, pub, matériel). L'enrichissement est une course de fond, pas un sprint.</p>

            <h3>Mythe 3 : "Il faut une idée de génie pour réussir."</h3>
            <p><strong>Réalité :</strong> Facebook n'était pas le premier réseau social. Google n'était pas le premier moteur de recherche. L'idée ne vaut rien (0%). L'exécution vaut tout (100%).</p>
            <p>Il vaut mieux bien vendre des pizzas (idée banale) que mal vendre une invention révolutionnaire que personne ne comprend.</p>

            <h3>Mythe 4 : "Il faut beaucoup d'argent pour se lancer."</h3>
            <p><strong>Réalité :</strong> De nombreuses entreprises géantes ont commencé dans un garage (Apple, Amazon). À Madagascar, on peut lancer un business de services avec juste un téléphone et de la connexion. Commencez petit, rêvez grand.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Selon l'article, qui est le vrai patron de l'entrepreneur ?",
                options: ["L'État", "Le banquier", "Le client", "Sa famille"],
                answer: 2,
                explanation: "C'est le client qui paie, donc c'est lui qui décide si l'entreprise vit ou meurt.",
                category: "Réalité"
            },
            {
                id: 2,
                question: "Quelle est la valeur d'une idée sans exécution ?",
                options: ["50%", "100%", "0%", "10%"],
                answer: 2,
                explanation: "Une idée seule ne vaut rien. Ce qui compte, c'est la capacité à la réaliser.",
                category: "Mindset"
            }
        ]
    },
    {
        id: 52,
        title: "Les formations courtes qui recrutent à Mada",
        category: "Formations",
        tags: ["formation", "court", "emploi"],
        level: "Tout public",
        readingTime: 5,
        summary: "Pas besoin de Bac+5. En 6 mois, on peut apprendre un métier qui paie bien et qui a de l'avenir.",
        body: `
            <p>Il y a une "inflation des diplômes" à Madagascar. Tout le monde veut un Master, mais les entreprises cherchent désespérément des techniciens qualifiés. Voici des filières où le chômage n'existe presque pas.</p>

            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a78e?auto=format&fit=crop&w=800&q=80" alt="Technicien en réparation" class="rounded-xl my-8 w-full object-cover shadow-md">

            <h2>1. Les Métiers Techniques (BTP & Énergie)</h2>
            <ul>
                <li><strong>Installateur de panneaux solaires</strong> : Avec le délestage et le besoin d'autonomie, c'est LE métier d'avenir. Formation de 3 à 6 mois.</li>
                <li><strong>Plomberie & Électricité</strong> : Un bon plombier gagne souvent mieux sa vie qu'un cadre moyen. La demande est constante.</li>
                <li><strong>Frigoriste</strong> : Réparer les frigos et climatisations. Très demandé avec le réchauffement.</li>
            </ul>

            <h2>2. Les Métiers de la Bouche</h2>
            <ul>
                <li><strong>Boulangerie / Pâtisserie</strong> : Les gens mangeront toujours. Avec le retour du tourisme, les hôtels cherchent du personnel qualifié.</li>
                <li><strong>Transformation agro-alimentaire</strong> : Savoir faire des confitures, des fromages, des jus pasteurisés conformes aux normes d'export.</li>
            </ul>

            <h2>3. Le Numérique Opérationnel</h2>
            <ul>
                <li><strong>Réparation de Smartphones</strong> : Pas besoin d'être ingénieur. Savoir changer un écran, une batterie, flasher un téléphone. Il y a des millions de téléphones à Madagascar.</li>
                <li><strong>Community Manager</strong> : Gérer les pages Facebook des PME qui n'ont pas le temps de le faire.</li>
            </ul>

            <p><strong>Conclusion :</strong> Ne méprisez pas les métiers manuels. C'est là que se trouve l'argent réel et l'indépendance aujourd'hui.</p>
        `,
        quiz: [
            {
                id: 1,
                question: "Quel métier est cité comme une opportunité liée au délestage ?",
                options: ["Vendeur de bougies", "Installateur solaire", "Électricien JIRAMA", "Gardien de nuit"],
                answer: 1,
                explanation: "L'énergie solaire est la solution durable aux problèmes d'énergie, créant une forte demande d'installateurs.",
                category: "Marché"
            },
            {
                id: 2,
                question: "Pourquoi les métiers manuels sont-ils une bonne opportunité ?",
                options: ["Car on se salit les mains", "Car il y a beaucoup de demande et peu de gens qualifiés", "Car c'est facile", "Car c'est mal payé"],
                answer: 1,
                explanation: "La loi de l'offre et la demande joue en faveur des bons techniciens.",
                category: "Économie"
            }
        ]
    },
    // 🌍 CIBLE 4 : Sensibilisation & Civisme
    {
        id: 60,
        title: "L’incivisme tue lentement : quand les petits gestes détruisent un pays",
        category: "Vie sociale et citoyenneté",
        level: "Tout public",
        readingTime: 4,
        summary: "L’incivisme n’est pas anodin. Il détruit la santé, l’économie et la cohésion sociale, jour après jour.",
        body: `
            <p>Jeter un déchet dans un canal, brûler sans réfléchir, rouler sans respecter les règles… Ces gestes semblent petits. Pourtant, leurs conséquences sont énormes.</p>

            <img src="C:/Users/Karibo Ressources/.gemini/antigravity/brain/eaafd90f-14bf-433c-b614-f9daaa6810ad/incivisme_dechets_1767783427868.png" alt="Canal pollué à Madagascar" class="rounded-xl my-8 w-full object-cover">

            <h3>À Madagascar :</h3>
            <ul>
                <li>Les canaux bouchés provoquent des <strong>inondations meurtrières</strong>.</li>
                <li>Les déchets attirent moustiques et rats → <strong>paludisme, peste, diarrhées</strong>.</li>
                <li>L’anarchie routière coûte <strong>des milliers de vies chaque année</strong>.</li>
            </ul>

            <p>L’incivisme n’est pas un manque d’éducation scolaire, c’est un <strong>manque de responsabilité</strong>. Quand chacun pense « ce n’est pas grave », le pays entier paie le prix.</p>

            <blockquote>👉 Un pays ne s’effondre pas toujours à cause de grandes crises, mais souvent à cause de <strong>millions de petits gestes irresponsables répétés</strong>.</blockquote>

            <h3>❓ Questions de réflexion</h3>
            <ol>
                <li>Quel geste incivique te choque le plus dans ton quotidien ?</li>
                <li>Qui en subit vraiment les conséquences à long terme ?</li>
            </ol>

            <h3>🚨 Appel à l’action</h3>
            <ul>
                <li>Refuse de banaliser l’incivisme, même chez tes proches.</li>
                <li>Corrige <strong>au moins un comportement incivique</strong> dans ta routine quotidienne.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 61,
        title: "Corruption du quotidien : pourquoi “donner un petit quelque chose” détruit l’avenir",
        category: "Vie sociale et citoyenneté",
        level: "Tout public",
        readingTime: 5,
        summary: "La corruption commence souvent par des gestes banalisés, mais ses conséquences sont graves et durables.",
        body: `
            <p>La corruption n’est pas seulement les grands détournements. Elle commence par :</p>
            <ul>
                <li>Le “petit billet” pour éviter une amende.</li>
                <li>Le “cadeau” pour accélérer un dossier.</li>
                <li>Le favoritisme entre connaissances.</li>
            </ul>

            <img src="C:/Users/Karibo Ressources/.gemini/antigravity/brain/eaafd90f-14bf-433c-b614-f9daaa6810ad/corruption_handshake_1767783443223.png" alt="Échange d'argent discret" class="rounded-xl my-8 w-full object-cover">

            <h3>Chaque acte de corruption :</h3>
            <ul>
                <li>Prive l’État de ressources pour la santé et l’éducation.</li>
                <li>Encourage l’injustice.</li>
                <li>Détruit la confiance entre citoyens.</li>
            </ul>

            <p>À long terme, cela crée des services publics inefficaces, une jeunesse découragée, et une société où le mérite n’a plus de valeur.</p>

            <blockquote>👉 Tolérer la corruption aujourd’hui, c’est <strong>voler l’avenir de ses propres enfants</strong>.</blockquote>

            <h3>❓ Questions de réflexion</h3>
            <ol>
                <li>As-tu déjà été témoin d’une corruption “banale” ?</li>
                <li>Pourquoi est-elle si difficile à refuser ?</li>
            </ol>

            <h3>🚨 Appel à l’action</h3>
            <ul>
                <li>Dire non, même si c’est inconfortable.</li>
                <li>Valoriser l’honnêteté comme une force, pas une faiblesse.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 62,
        title: "Feux de brousse : brûler aujourd’hui, mourir de faim demain",
        category: "Environnement",
        level: "Tout public",
        readingTime: 4,
        summary: "Les feux de brousse détruisent les sols, l’eau et l’agriculture, mettant en danger la sécurité alimentaire.",
        body: `
            <p>Les feux sont souvent justifiés par la rapidité ou la tradition. Pourtant, leurs effets sont catastrophiques :</p>
            <ul>
                <li>Destruction des nutriments du sol.</li>
                <li>Disparition des sources d’eau.</li>
                <li>Baisse des rendements agricoles.</li>
                <li>Aggravation du changement climatique.</li>
            </ul>

            <img src="C:/Users/Karibo Ressources/.gemini/antigravity/brain/eaafd90f-14bf-433c-b614-f9daaa6810ad/bush_fire_madagascar_1767783461038.png" alt="Feu de brousse sur une colline" class="rounded-xl my-8 w-full object-cover">

            <p>À Madagascar, les feux répétés transforment des terres fertiles en sols morts. Ce sont les paysans, puis toute la population, qui en paient le prix.</p>

            <blockquote>👉 Brûler une colline aujourd’hui, c’est <strong>affamer des familles demain</strong>.</blockquote>

            <h3>❓ Questions de réflexion</h3>
            <ol>
                <li>Pourquoi les feux sont-ils encore pratiqués malgré les dégâts ?</li>
                <li>Qui souffre réellement de ces pratiques ?</li>
            </ol>

            <h3>🚨 Appel à l’action</h3>
            <ul>
                <li>Refuser de participer ou de banaliser les feux de brousse.</li>
                <li>Sensibiliser au moins une personne sur leurs conséquences réelles.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 63,
        title: "Violence et loi du plus fort : quand l’absence de civisme détruit la paix sociale",
        category: "Société / Sécurité",
        level: "Tout public",
        readingTime: 5,
        summary: "La violence quotidienne est souvent le résultat d’un manque de respect des règles et des autres.",
        body: `
            <p>Insultes, bagarres, règlements de compte, lynchages… Quand le civisme disparaît, la violence prend sa place.</p>
            
            <img src="C:/Users/Karibo Ressources/.gemini/antigravity/brain/eaafd90f-14bf-433c-b614-f9daaa6810ad/conflict_violence_1767783479122.png" alt="Tensions sociales dans un village" class="rounded-xl my-8 w-full object-cover">

            <h3>Une société qui accepte la violence :</h3>
            <ul>
                <li>Vit dans la peur.</li>
                <li>Perd la confiance.</li>
                <li>Détruit ses propres communautés.</li>
            </ul>

            <p>La justice ne peut fonctionner sans citoyens responsables. La force ne résout rien : elle <strong>aggrave toujours les conflits</strong>.</p>

            <blockquote>👉 Là où la loi recule, la barbarie avance.</blockquote>

            <h3>❓ Questions de réflexion</h3>
            <ol>
                <li>Pourquoi la violence est-elle souvent applaudie ou excusée ?</li>
                <li>Quelles alternatives existent pour résoudre les conflits ?</li>
            </ol>

            <h3>🚨 Appel à l’action</h3>
            <ul>
                <li>Refuser toute forme de violence, même verbale.</li>
                <li>Encourager le dialogue et la médiation dans ton entourage.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 64,
        title: "Famille, solidarité, respect : le civisme commence à la maison",
        category: "Éducation / Sécurité",
        level: "Tout public",
        readingTime: 4,
        summary: "Le civisme ne s’apprend pas seulement à l’école, mais d’abord au sein de la famille.",
        body: `
            <p>Le comportement d’un adulte dans la rue, au travail ou face à la loi est souvent le reflet de ce qu’il a appris à la maison.</p>

            <img src="C:/Users/Karibo Ressources/.gemini/antigravity/brain/eaafd90f-14bf-433c-b614-f9daaa6810ad/family_education_civisme_1767783496205.png" alt="Famille malgache éduquant ses enfants" class="rounded-xl my-8 w-full object-cover">

            <h3>Une famille qui enseigne :</h3>
            <ul>
                <li>Le respect.</li>
                <li>La discipline.</li>
                <li>La solidarité.</li>
            </ul>
            <p>...forme des citoyens responsables.</p>

            <p>À l’inverse, banaliser le mensonge, la violence ou l’irrespect prépare une société instable.</p>

            <blockquote>👉 On ne peut pas demander à un enfant d’être citoyen si l’adulte ne l’est pas.</blockquote>

            <h3>❓ Questions de réflexion</h3>
            <ol>
                <li>Quels comportements transmets-tu sans t’en rendre compte ?</li>
                <li>Que voudrais-tu changer pour les générations futures ?</li>
            </ol>

            <h3>🚨 Appel à l’action</h3>
            <ul>
                <li>Montrer l’exemple avant de donner des leçons.</li>
                <li>Corriger un comportement incivique dans ton cercle familial.</li>
            </ul>
        `,
        quiz: []
    },
    {
        id: 65,
        title: "Ignorer la loi n’excuse pas : comprendre sa responsabilité citoyenne",
        category: "Société / Sécurité",
        level: "Tout public",
        readingTime: 4,
        summary: "Ne pas connaître la loi ne protège pas de ses conséquences.",
        body: `
            <p>Beaucoup pensent : « Je ne savais pas ». Pourtant :</p>
            <ul>
                <li>La loi s’applique à tous.</li>
                <li>L’ignorance n’annule pas les sanctions.</li>
                <li>La responsabilité est individuelle.</li>
            </ul>

            <img src="C:/Users/Karibo Ressources/.gemini/antigravity/brain/eaafd90f-14bf-433c-b614-f9daaa6810ad/justice_law_malagasy_1767783513320.png" alt="Symbole de justice et loi" class="rounded-xl my-8 w-full object-cover">

            <p>Infractions routières, violences, délits économiques… Les conséquences peuvent être : amendes, prison, exclusion sociale, destruction de carrières.</p>

            <blockquote>👉 Être citoyen, c’est <strong>chercher à comprendre les règles qui nous gouvernent</strong>.</blockquote>

            <h3>❓ Questions de réflexion</h3>
            <ol>
                <li>Quelle loi est souvent ignorée autour de toi ?</li>
                <li>Comment mieux informer les citoyens ?</li>
            </ol>

            <h3>🚨 Appel à l’action</h3>
            <ul>
                <li>S’informer sur ses droits et devoirs.</li>
                <li>Respecter la loi même quand elle dérange.</li>
            </ul>
        `,
        quiz: []
    }
];
