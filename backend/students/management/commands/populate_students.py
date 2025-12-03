from django.core.management.base import BaseCommand
from students.models import Classe, Matiere, Programme, Ressource, Orientation, Bourse, NiveauScolaire, TypeContenu

class Command(BaseCommand):
    help = 'Populate database with initial student data'

    def handle(self, *args, **options):
        self.stdout.write('Creating initial data...')

        # 1. Création des matières
        matieres_data = [
            ('Français', 'FRA', '📘', '#3B82F6'),
            ('Mathématiques', 'MATH', '📗', '#10B981'),
            ('Histoire-Géographie', 'HG', '📙', '#F59E0B'),
            ('SVT', 'SVT', '📕', '#EF4444'),
            ('Physique-Chimie', 'PC', '📒', '#FCD34D'),
            ('Anglais', 'ANG', '📔', '#8B5CF6'),
            ('Malagasy', 'MLG', '📓', '#EC4899'),
            ('Éducation Civique', 'EC', '📘', '#6366F1'),
            ('Sciences Économiques', 'SES', '📙', '#D97706'),
            ('Philosophie', 'PHILO', '📒', '#FBBF24'),
            ('Informatique', 'INFO', '💻', '#6B7280'),
            ('EPS', 'EPS', '🏃', '#14B8A6'),
        ]

        matieres = {}
        for nom, code, icone, couleur in matieres_data:
            matiere, created = Matiere.objects.get_or_create(
                code=code,
                defaults={'nom': nom, 'icone': icone, 'couleur': couleur}
            )
            matieres[code] = matiere
            if created:
                self.stdout.write(f'Matière créée: {nom}')

        # 2. Création des classes
        classes_data = [
            # Collège
            ('11ème', NiveauScolaire.PRIMAIRE, None, 1),
            ('10ème', NiveauScolaire.PRIMAIRE, None, 2),
            ('9ème', NiveauScolaire.PRIMAIRE, None, 3),
            ('8ème', NiveauScolaire.PRIMAIRE, None, 4),
            ('7ème', NiveauScolaire.PRIMAIRE, None, 5),
            ('6ème', NiveauScolaire.COLLEGE, None, 6),
            ('5ème', NiveauScolaire.COLLEGE, None, 7),
            ('4ème', NiveauScolaire.COLLEGE, None, 8),
            ('3ème', NiveauScolaire.COLLEGE, None, 9),
            # Lycée - Seconde
            ('Seconde', NiveauScolaire.LYCEE, None, 10),
            # Lycée - Première
            ('Première A', NiveauScolaire.LYCEE, 'A', 11),
            ('Première C', NiveauScolaire.LYCEE, 'C', 12),
            ('Première D', NiveauScolaire.LYCEE, 'D', 13),
            ('Première L', NiveauScolaire.LYCEE, 'L', 14),
            ('Première OSE', NiveauScolaire.LYCEE, 'OSE', 15),
            ('Première S', NiveauScolaire.LYCEE, 'S', 16),
            # Lycée - Terminale
            ('Terminale A', NiveauScolaire.LYCEE, 'A', 17),
            ('Terminale C', NiveauScolaire.LYCEE, 'C', 18),
            ('Terminale D', NiveauScolaire.LYCEE, 'D', 19),
            ('Terminale L', NiveauScolaire.LYCEE, 'L', 20),
            ('Terminale OSE', NiveauScolaire.LYCEE, 'OSE', 21),
            ('Terminale S', NiveauScolaire.LYCEE, 'S', 22),
        ]

        for nom, niveau, serie, ordre in classes_data:
            classe, created = Classe.objects.get_or_create(
                nom=nom,
                defaults={'niveau': niveau, 'serie': serie, 'ordre': ordre}
            )
            
            # Créer des programmes exemples pour chaque classe
            if created:
                self.stdout.write(f'Classe créée: {nom}')
                
                # Ajouter Maths et Français pour tous
                Programme.objects.create(
                    classe=classe,
                    matiere=matieres['MATH'],
                    titre_chapitre='Chapitre 1: Nombres et calculs',
                    objectifs='Maîtriser les bases du calcul',
                    competences='Savoir compter et calculer',
                    ordre=1,
                    trimestre=1
                )
                Programme.objects.create(
                    classe=classe,
                    matiere=matieres['FRA'],
                    titre_chapitre='Chapitre 1: Grammaire',
                    objectifs='Les bases de la grammaire',
                    competences='Identifier les natures de mots',
                    ordre=1,
                    trimestre=1
                )

        # 3. Création des orientations
        orientations_data = [
            ('Développeur Web', 'Informatique', ['S', 'C', 'D'], 'Bac+3 à Bac+5'),
            ('Médecin Généraliste', 'Santé', ['S', 'D'], 'Doctorat (Bac+8)'),
            ('Avocat', 'Droit', ['A', 'L'], 'Master (Bac+5)'),
            ('Ingénieur Agronome', 'Agriculture', ['S', 'D'], 'Ingénieur (Bac+5)'),
            ('Enseignant', 'Éducation', ['A', 'L', 'S'], 'Licence/Master'),
        ]

        for titre, filiere, series, niveau in orientations_data:
            Orientation.objects.get_or_create(
                titre=titre,
                defaults={
                    'filiere': filiere,
                    'series_recommandees': series,
                    'niveau_etudes': niveau,
                    'description': f'Description du métier de {titre}',
                    'debouches': 'Nombreux débouchés...',
                    'competences_requises': 'Rigueur, patience...'
                }
            )

        # 4. Création des bourses
        bourses_data = [
            ('Bourse d\'Excellence', 'État Malagasy', 'Pour les meilleurs bacheliers'),
            ('Bourse Campus France', 'Ambassade de France', 'Pour études en France'),
            ('Bourse CNTEMAD', 'CNTEMAD', 'Pour formation à distance'),
        ]

        for titre, organisme, desc in bourses_data:
            Bourse.objects.get_or_create(
                titre=titre,
                defaults={
                    'organisme': organisme,
                    'description': desc,
                    'conditions': 'Avoir une mention Bien ou Très Bien',
                    'niveaux_concernes': ['LYCEE'],
                    'est_active': True
                }
            )

        self.stdout.write(self.style.SUCCESS('Données initiales créées avec succès !'))
