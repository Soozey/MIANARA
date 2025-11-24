from django.core.management.base import BaseCommand
from contents.models import Content
from django.contrib.auth import get_user_model

User = get_user_model()

SEED_ARTICLES = [
    {
        "title": "Apprendre une langue étrangère efficacement",
        "category": "LANGUE",
        "description": "Maîtriser une langue = grammaire, vocabulaire, compréhension et expression. Focus sur la pratique réelle.",
        "body": """
            <p>La maîtrise d’une langue étrangère repose sur quatre piliers : grammaire, vocabulaire, compréhension orale et expression orale. Dans le contexte malgache, privilégier des méthodes pratiques : radios étrangères, échanges avec des natifs en ligne, écriture quotidienne. L’école doit pousser à utiliser la langue dans des situations réelles, plutôt que de se limiter aux exercices théoriques.</p>
            <h3>Questions de réflexion :</h3>
            <ul>
                <li><strong>Grammaire :</strong> Quelle est la différence entre « je parle » et « j’ai parlé » ? (Réponse : Présent vs Passé composé)</li>
                <li><strong>Vocabulaire :</strong> Donne trois mots français qui viennent du malgache. (Ex: pirogue, ravinala, lémurien)</li>
                <li><strong>Règle de vie :</strong> Pourquoi la patience est essentielle ? (Car les progrès sont lents et cumulatifs)</li>
            </ul>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Programme scolaire et vie pratique",
        "category": "SCOLAIRE",
        "description": "Un programme utile inclut finance, civisme, entrepreneuriat et savoir-vivre.",
        "body": """
            <p>Un programme scolaire adapté à Madagascar devrait inclure des matières utiles à la vie quotidienne : éducation financière, civisme, entrepreneuriat et savoir-vivre. Ces cours préparent les jeunes à l’autonomie en évitant la dépendance exclusive à la fonction publique.</p>
            <h3>Questions de réflexion :</h3>
            <ul>
                <li><strong>Principe :</strong> Pourquoi intégrer l’éducation financière à l’école ? (Pour apprendre à budgétiser et éviter les dettes)</li>
                <li><strong>Grammaire :</strong> Mets « nous apprenons » au futur simple. (Nous apprendrons)</li>
            </ul>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Comment choisir son métier ?",
        "category": "ORIENTATION",
        "description": "Identifier compétences + passions et les croiser avec les besoins du marché.",
        "body": """
            <p>Choisir un métier, c’est d’abord identifier ses compétences et passions. En Guinée comme à Madagascar, beaucoup se tournent vers des emplois accessibles comme le taxi-moto. Pourtant, des métiers d’avenir existent : digital, agriculture modernisée, artisanat. Un bilan de compétences aligne talents et besoins du marché.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Un CV qui attire l’attention",
        "category": "CANDIDATURE",
        "description": "CV clair, concis, orienté résultats ; expériences concrètes et profil en ligne.",
        "body": """
            <p>Un CV doit être clair, concis et adapté au poste visé. Mettre en avant les expériences pratiques (stages, projets communautaires, bénévolat). Une mise en page sobre aide à la lecture. Un profil LinkedIn structuré accroît la visibilité.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Les métiers du digital en Afrique",
        "category": "PRO",
        "description": "Opportunités en dev, marketing digital, data… accessibles via des formations locales et en ligne.",
        "body": """
            <p>Le digital ouvre des opportunités : développement web, marketing digital, maintenance, gestion de données. Des compétences accessibles existent via des formations locales et en ligne. Pour les jeunes malgaches, investir dans ces compétences peut ouvrir l’emploi international.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Pourquoi formaliser son entreprise ?",
        "category": "ENTREPRENEURIAT",
        "description": "Accès au financement, crédibilité, protection et possibilité de grandir.",
        "body": """
            <p>La formalisation permet d’accéder aux financements, de protéger son activité et de gagner la confiance des clients. À Madagascar, beaucoup d’entreprises informelles limitent leur croissance. L’enregistrement fiscal est une étape clé pour évoluer.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Le business plan simplifié",
        "category": "ENTREPRENEURIAT",
        "description": "3 questions clés : idée, clients, financement/gestion. Court mais utile.",
        "body": """
            <p>Un business plan n’a pas besoin d’être complexe. Il répond à trois questions : mon idée, mes clients, mon financement/gestion. Pour un artisan ou un agriculteur, un plan court et clair aide à structurer et à convaincre.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Créer une activité sans financement",
        "category": "ENTREPRENEURIAT",
        "description": "Démarrer petit, utiliser les ressources locales, réinvestir les premiers bénéfices.",
        "body": """
            <p>Beaucoup d’activités démarrent avec peu de fonds : produits agricoles transformés, artisanat, services numériques. Commencer petit, utiliser les ressources locales et réinvestir les premiers bénéfices : une voie réaliste.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "La bureautique, clé de l’emploi moderne",
        "category": "PRO",
        "description": "Word/Excel/PowerPoint ouvrent des portes dans l’administration et le commerce.",
        "body": """
            <p>La maîtrise de Word, Excel et PowerPoint est devenue indispensable. Rédiger, calculer, présenter : ces outils servent partout (administration, commerce, éducation).</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Hygiène et sécurité au travail",
        "category": "SANTE",
        "description": "Gestes simples = moins d’accidents, plus de productivité.",
        "body": """
            <p>Dans les ateliers, champs ou bureaux, l’hygiène et la sécurité sont essentielles : EPI, consignes, propreté. Moins de risques = plus de santé et de productivité.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "La confiance en soi dès l’école",
        "category": "PERSO",
        "description": "Parler en public, gérer son temps, croire en soi : armes pour la vie.",
        "body": """
            <p>Apprendre à s’exprimer, gérer son temps et croire en ses capacités devrait commencer tôt. Ces compétences servent à l’école puis au travail.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Le civisme, base d’une société forte",
        "category": "CITOYEN",
        "description": "Respect des règles, propreté, anti-corruption : progrès collectif.",
        "body": """
            <p>Le civisme, c’est respecter les autres, garder les rues propres, lutter contre la corruption. Sans civisme, les lois restent des papiers sans valeur.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "La connaissance est une arme",
        "category": "SOCIAL",
        "description": "Informer sur corruption, prostitution, arnaques : se protéger et agir.",
        "body": """
            <p>L’ignorance nourrit la pauvreté et les abus. Former à reconnaître les dangers (prostitution, corruption, arnaques) protège et responsabilise.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Planter un arbre, c’est planter un futur",
        "category": "ECOLOGIE",
        "description": "Un arbre protège l’eau, le sol et l’air : acte citoyen simple.",
        "body": """
            <p>Un arbre n’est pas que de l’ombre : il retient l’eau, protège les sols, capte du CO₂. Dans un contexte de déforestation, replanter est vital.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Déchets plastiques : l’ennemi invisible",
        "category": "ECOLOGIE",
        "description": "Réduire, réutiliser, recycler ; bannir les sachets à usage unique.",
        "body": """
            <p>Les plastiques s’accumulent dans les marchés, rivières, champs. Réduire les sachets, privilégier les paniers et le tri sélectif : gestes clés.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Prévenir le harcèlement scolaire",
        "category": "SCOLAIRE",
        "description": "Sensibiliser, former, règles claires : l’école doit être sûre.",
        "body": """
            <p>Moqueries, humiliations, agressions : le harcèlement détruit. Prévenir = éduquer, écouter, sanctionner. Parents/équipe éducative impliqués.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Prévenir le viol : éducation et protection",
        "category": "SECURITE",
        "description": "Respect du consentement, vigilance communautaire, soutien aux victimes.",
        "body": """
            <p>La prévention passe par l’éducation au consentement, la vigilance (trajets, lieux à risque), des lois appliquées et un soutien réel aux victimes.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "La gestion budgétaire familiale",
        "category": "FINANCE",
        "description": "Noter dépenses, prévoir revenus, éviter dettes = sérénité.",
        "body": """
            <p>Un budget simple (revenus – dépenses) évite les dettes surprises. Noter, catégoriser, prioriser : trois habitudes qui changent la vie.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Transformer localement = créer de la valeur",
        "category": "ECONOMIE",
        "description": "Du riz brut au biscuit : la valeur ajoutée reste au pays.",
        "body": """
            <p>Transformer le manioc en farine, le lait en fromage, le riz en galette multiplie la valeur, crée des emplois et stabilise les revenus.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Code de la route : survie sur deux roues",
        "category": "SECURITE",
        "description": "Casque, feux, priorités : règles simples qui sauvent des vies.",
        "body": """
            <p>À Tana et ailleurs, le trafic est dense. Le respect du code (casque, feux, priorités, pas de surcharge) réduit drastiquement les accidents.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "IA : Amie ou ennemie de l'emploi ?",
        "category": "PRO",
        "description": "Comprendre l'IA : elle ne remplace pas l'humain, elle change le travail.",
        "body": """
            <p>L’Intelligence Artificielle (IA) est un outil qui automatise les tâches répétitives (comptabilité, traduction basique). Elle crée de nouveaux métiers ('prompt engineer', maintenance IA) et augmente la productivité des autres (médecins, agriculteurs). Il faut apprendre à travailler avec l'IA, pas contre elle.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Nouvelle économie : les métiers qui émergent",
        "category": "PRO",
        "description": "Découvrez les métiers en forte croissance à Madagascar et dans le monde.",
        "body": """
            <p>L’économie évolue rapidement. Les métiers de la 'data science', des énergies renouvelables, du marketing digital et de l'artisanat de luxe (avec exportation) sont en forte demande. L'informatique n'est pas qu'un métier ; c'est une compétence transversale essentielle.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Le danger des Deepfakes et de l'image",
        "category": "SECURITE",
        "description": "Apprenez à reconnaître les images et les vidéos manipulées par l'IA.",
        "body": """
            <p>Les technologies Deepfake permettent de créer des vidéos et audios hyper-réalistes, mais totalement faux. Sur Internet, tout n'est pas vrai. Le danger est la désinformation et l'usurpation d'identité. Vérifier les sources est un réflexe de survie numérique.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Lutte contre le Racisme et l'Exclusion",
        "category": "CITOYEN",
        "description": "Le racisme est une violence. Apprendre à respecter les différences.",
        "body": """
            <p>Le racisme est une idéologie basée sur la supériorité d'un groupe, source de violence et d'inégalités. À Madagascar, comme ailleurs, la discrimination basée sur l'origine (régionale, sociale, etc.) ralentit le progrès national. L'éducation et le respect de la Constitution sont les meilleures armes.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "La Politesse : Clé de la réussite professionnelle",
        "category": "PERSO",
        "description": "L'usage correct des langues et le respect des normes sociales ouvrent les portes.",
        "body": """
            <p>L'excellence académique est incomplète sans la politesse et le savoir-vivre. Un mail bien rédigé, un ton respectueux, la courtoisie : ces qualités font la différence dans l'emploi, les affaires et la vie sociale. La maîtrise des langues (malgache, français, anglais) doit s'accompagner du respect.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "Dangers cachés des Réseaux Sociaux",
        "category": "SECURITE",
        "description": "Addiction, cyberharcèlement, perte de temps : utiliser les réseaux sociaux avec intelligence.",
        "body": """
            <p>Les réseaux sociaux sont utiles pour communiquer, mais ils présentent des risques majeurs : addiction, cyberharcèlement, diffusion de fausses nouvelles (fake news), et un impact négatif sur l'estime de soi. Le temps passé devant l'écran doit être géré pour ne pas voler le temps des études et des projets réels.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    },
    {
        "title": "L'Importance Vraie des Études (long terme)",
        "category": "SCOLAIRE",
        "description": "Les études sont un investissement à long terme, pas juste un diplôme.",
        "body": """
            <p>Dans un marché du travail changeant (comme les métiers à disparaître vs. ceux à créer), l'importance des études n'est pas le diplôme lui-même, mais la capacité qu'elles développent : la rigueur, la méthode, la pensée analytique et la capacité d'adaptation. Ces compétences sont l'unique garantie de rester employable face aux évolutions technologiques.</p>
        """,
        "file_type": "TEXT",
        "status": "PUBLISHED"
    }
]

class Command(BaseCommand):
    help = 'Seed database with initial articles'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')
        
        # Ensure a default author exists
        author, created = User.objects.get_or_create(username='admin', defaults={'email': 'admin@example.com', 'role': 'ADMIN'})
        if created:
            author.set_password('admin')
            author.save()

        for article_data in SEED_ARTICLES:
            Content.objects.get_or_create(
                title=article_data['title'],
                defaults={
                    'category': article_data['category'],
                    'description': article_data['description'],
                    'body': article_data['body'],
                    'file_type': article_data['file_type'],
                    'status': article_data['status'],
                    'author': author
                }
            )
        
        self.stdout.write(self.style.SUCCESS(f'Successfully seeded {len(SEED_ARTICLES)} articles'))
