import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from contents.models import Content

CATEGORY_MAPPING = {
    "Formation linguistique": "LANGUE",
    "Éducation scolaire": "SCOLAIRE",
    "Orientation professionnelle": "ORIENTATION",
    "Techniques de candidature": "CANDIDATURE",
    "Entrepreneuriat & Gestion": "ENTREPRENEURIAT",
    "Formation professionnelle": "PRO",
    "Santé & Hygiène": "SANTE",
    "Développement personnel": "PERSO",
    "Vie Citoyenne": "CITOYEN",
    "Sensibilisation Sociale": "SOCIAL",
    "Environnement & Écologie": "ECOLOGIE",
    "Sécurité (Globale)": "SECURITE",
    "Finances personnelles": "FINANCE",
    "Économie & Industrie": "ECONOMIE",
    "Autre": "AUTRE",
    "Métiers du digital": "PRO", 
    "Savoir-être": "PERSO",
    "Santé Mentale": "SANTE",
    "Société": "SOCIAL",
    # Specific mappings for the new content if I used loose terms
    "Civisme": "CITOYEN",
}

from django.contrib.auth import get_user_model

def run():
    User = get_user_model()
    # logical default author
    author = User.objects.first() 
    if not author:
        print("No user found! Creating one...")
        author = User.objects.create_superuser('admin_auto', 'admin@example.com', 'password123')

    json_path = os.path.join(os.path.dirname(__file__), 'demo_export.json')
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"Loaded {len(data)} items from JSON.")
    
    current_ids = []
    
    for item in data:
        current_ids.append(item['id'])
        cat_raw = item.get('category', 'Autre')
        # Normalize category lookup
        cat = CATEGORY_MAPPING.get(cat_raw, 'AUTRE')
        
        # If explicitly Vie Citoyenne, force CITOYEN
        if cat_raw == "Vie Citoyenne":
            cat = "CITOYEN"

        obj, created = Content.objects.update_or_create(
            id=item['id'],
            defaults={
                'title': item['title'],
                'body': item['body'],
                'description': item.get('summary', ''),
                'category': cat,
                'level': item.get('level', ''),
                'quiz': item.get('quiz', []),
                'file_type': 'TEXT',
                'status': 'PUBLISHED',
                'author': author # Assign the author
            }
        )
        action = "Created" if created else "Updated"
        print(f"{action} Content #{item['id']}: {item['title']} - Cat: {cat} (Quiz: {len(item.get('quiz', []))})")

if __name__ == '__main__':
    run()
