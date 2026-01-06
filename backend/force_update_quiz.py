import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from contents.models import Content

# Quiz data for ID 1 and 2 (from demoContent.js)
quiz_1 = [
    {"id": 1, "question": "Quels sont les 4 piliers de l'apprentissage d'une langue selon l'article ?", "options": ["Grammaire, Orthographe, Conjugaison, Vocabulaire", "Écouter, Parler, Lire, Écrire", "Anglais, Français, Espagnol, Mandarin", "Mémoriser, Réciter, Copier, Traduire"], "answer": 1, "explanation": "La maîtrise d'une langue repose sur la compréhension et l'expression.", "category": "Compréhension"},
    {"id": 2, "question": "Dans la phrase « J'ai parlé avec mon ami », quel est le temps du verbe ?", "options": ["Présent", "Futur simple", "Passé composé", "Imparfait"], "answer": 2, "explanation": "C'est une action terminée.", "category": "Grammaire"}
]

quiz_2 = [
    {"id": 1, "question": "Quelle est la règle 50/30/20 pour gérer son budget ?", "options": ["50% Besoins, 30% Envies, 20% Épargne", "50% Épargne, 30% Loyer, 20% Nourriture", "50% Dettes, 30% Loisirs, 20% Impôts", "50% Famille, 30% Amis, 20% Soi-même"], "answer": 0, "explanation": "50% besoins, 30% envies, 20% épargne.", "category": "Compréhension"}
]

# Quiz data for ID 23 (Deepfakes) - Generated on the fly based on title
quiz_23 = [
    {"id": 1, "question": "Qu'est-ce qu'un Deepfake ?", "options": ["Une fausse vidéo créée par IA", "Un virus informatique", "Un logiciel de montage classique", "Un filtre Instagram"], "answer": 0, "explanation": "Les technologies Deepfake permettent de créer des vidéos et audios hyper-réalistes mais faux.", "category": "Compréhension"},
    {"id": 2, "question": "Quel est le principal danger mentionné ?", "options": ["La perte de données", "La désinformation et le vol d'identité", "L'ennui", "Le coût de l'internet"], "answer": 1, "explanation": "Sur Internet, tout n'est pas vrai. Le danger est la désinformation.", "category": "Logique"},
    {"id": 3, "question": "Quel réflexe faut-il avoir ?", "options": ["Partager immédiatement", "Vérifier les sources", "Éteindre son téléphone", "Croire tout ce qu'on voit"], "answer": 1, "explanation": "Vérifier les sources est un réflexe de survie numérique.", "category": "Pratique"}
]

# Quiz data for ID 24 (Racisme)
quiz_24 = [
    {"id": 1, "question": "Sur quoi est basé le racisme ?", "options": ["La science", "Une idéologie de supériorité d'un groupe", "La réalité biologique", "L'amitié"], "answer": 1, "explanation": "Le racisme est une idéologie basée sur la supériorité d'un groupe, source de violence.", "category": "Compréhension"},
    {"id": 2, "question": "Quelles sont les meilleures armes contre le racisme ?", "options": ["La violence", "L'ignorance", "L'éducation et le respect de la Constitution", "L'isolement"], "answer": 2, "explanation": "L'éducation et le respect de la Constitution sont les meilleures armes.", "category": "Logique"}
]

def update_content(id, quiz_data):
    try:
        c = Content.objects.get(id=id)
        c.quiz = quiz_data
        c.save()
        print(f"✅ Updated Content ID {id} with {len(quiz_data)} quiz questions.")
    except Content.DoesNotExist:
        print(f"❌ Content ID {id} not found.")
    except Exception as e:
        print(f"❌ Error updating ID {id}: {e}")

update_content(1, quiz_1)
update_content(2, quiz_2)
update_content(23, quiz_23)
update_content(24, quiz_24)
