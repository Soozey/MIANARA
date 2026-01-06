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
    "Métiers d’avenir": "PRO",
    "Entrepreneuriat": "ENTREPRENEURIAT",
    "Gestion d’entreprise": "ENTREPRENEURIAT",
    "Innovation locale": "ENTREPRENEURIAT",
    "Santé et sécurité": "SANTE",
    "Vie sociale et citoyenneté": "CITOYEN",
    "Environnement": "ECOLOGIE",
    "Éducation / Sécurité": "SCOLAIRE",
    "Société / Sécurité": "SECURITE",
    "Économie / Agro-industrie": "ECONOMIE",
    "Société / Sécurité routière": "SECURITE",
    "Intelligence Artificielle": "PRO",
    "Métiers d'Avenir": "PRO",
    "Médias / Sécurité Numérique": "SECURITE",
    "Sécurité Numérique": "SECURITE",
    "Technologie": "PRO", # Adding manual mappings for ones I saw in code
    "Sécurité Routière": "SECURITE",
    "Orientation": "ORIENTATION",
    "Vie Pratique": "PERSO",
    "Éducation": "SCOLAIRE",
    "Économie": "ECONOMIE",
    "Savoir-être": "PERSO",
    "Santé Mentale": "SANTE",
    "Société": "SOCIAL",
    "Santé et Droits": "SANTE",
}

def run():
    json_path = os.path.join(os.path.dirname(__file__), 'demo_export.json')
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"Loaded {len(data)} items from JSON.")
    
    for item in data:
        cat_raw = item.get('category', 'Autre')
        cat = CATEGORY_MAPPING.get(cat_raw, 'AUTRE')
        
        # Fallback for unmapped
        if cat == 'AUTRE' and cat_raw != 'Autre':
            print(f"Warning: Category '{cat_raw}' mapped to AUTRE.")

        obj, created = Content.objects.update_or_create(
            id=item['id'],
            defaults={
                'title': item['title'],
                'body': item['body'],
                'description': item.get('summary', ''),
                'category': cat,
                'level': item.get('level', ''),
                'quiz': item.get('quiz', []),
                'file_type': 'TEXT'
            }
        )
        action = "Created" if created else "Updated"
        print(f"{action} Content #{item['id']}: {item['title']} (Quiz Qs: {len(item.get('quiz', []))})")

if __name__ == '__main__':
    run()
