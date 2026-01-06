import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from contents.models import Content

# FULL DEMO CONTENT DATA (Copied from demoContent.js to ensure Python has it)
DEMO_CONTENTS = [
    {
        "id": 1,
        "title": "Apprendre une langue étrangère efficacement",
        "quiz": [
            {"id": 1, "question": "Quels sont les 4 piliers de l'apprentissage d'une langue selon l'article ?", "options": ["Grammaire, Orthographe, Conjugaison, Vocabulaire", "Écouter, Parler, Lire, Écrire", "Anglais, Français, Espagnol, Mandarin", "Mémoriser, Réciter, Copier, Traduire"], "answer": 1, "explanation": "La maîtrise d'une langue repose sur la compréhension et l'expression.", "category": "Compréhension"},
            {"id": 2, "question": "Dans la phrase « J'ai parlé avec mon ami », quel est le temps du verbe ?", "options": ["Présent", "Futur simple", "Passé composé", "Imparfait"], "answer": 2, "explanation": "C'est une action terminée.", "category": "Grammaire"}
        ]
    },
    {
        "id": 2, 
        "title": "Programme scolaire et vie pratique",
        "quiz": [
            {"id": 1, "question": "Quelle est la règle 50/30/20 pour gérer son budget ?", "options": ["50% Besoins, 30% Envies, 20% Épargne", "50% Épargne, 30% Loyer, 20% Nourriture", "50% Dettes, 30% Loisirs, 20% Impôts", "50% Famille, 30% Amis, 20% Soi-même"], "answer": 0, "explanation": "50% besoins, 30% envies, 20% épargne.", "category": "Compréhension"},
            {"id": 2, "question": "En finance, quelle est la différence entre un Actif et un Passif ?", "options": ["L'Actif rapporte de l'argent, le Passif en coûte", "L'Actif c'est le sport, le Passif c'est dormir", "L'Actif c'est la banque, le Passif c'est l'état", "Il n'y a aucune différence"], "answer": 0, "explanation": "Un actif met de l'argent dans votre poche.", "category": "Vocabulaire"},
            {"id": 3, "question": "Pourquoi le civisme est-il important ?", "options": ["Pour éviter la prison", "Parce que ma liberté s'arrête là où commence celle des autres", "Pour faire plaisir", "Ce n'est pas important"], "answer": 1, "explanation": "Le respect mutuel permet la vie en société.", "category": "Logique"},
            {"id": 4, "question": "Conjugue 'Apprendre' au futur simple (Nous) :", "options": ["Nous apprenons", "Nous apprendrons", "Nous avons appris", "Nous apprendrions"], "answer": 1, "explanation": "-ons au futur.", "category": "Grammaire"},
            {"id": 5, "question": "Que signifie avoir 'l'esprit d'entreprise' ?", "options": ["Être riche", "Avoir des employés", "Voir un problème et chercher une solution", "Ne jamais prendre de vacances"], "answer": 2, "explanation": "C'est une attitude de résolution de problèmes.", "category": "Compréhension"}
        ]
    },
    # I will rely on the fact that I can fetch the REST of the content from the file if I iterate, 
    # but for simplicity and robustness I will just focus on ensuring the sync works.
    # Actually, copying 27 items here is huge. 
    # Instead, let's make this script READ `demoContent.js` if possible, or just update the ones user complained about (5, 12, 27) plus others.
    # For user satisfaction, I must update ALL.
]

# Since I cannot easily import JS into Python, I will use a clever trick:
# I will use the `quiz` data I just generated in the previous turn. 
# I will manually update the ones the user showed: 5, 27, 12.
# And I will tell the user that I am forcing the update.

# Or better: I will use the `node` environment to run a script that imports `demoContent.js` and uses the API to push it?
# No, browser API calls won't work in node easily without axios/fetch setup.
# But I can write a Node script that imports `demoContent.js`, converts it to JSON, and prints it.
# Then I can pipe that to a Python script that updates the DB.
# This preserves the Single Source of Truth.

pass
