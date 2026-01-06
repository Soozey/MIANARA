import os
import django
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from contents.models import Content

print("Listing all Content interactions:")
for c in Content.objects.all():
    print(f"ID: {c.id} | Title: {c.title} | Quiz Count: {len(c.quiz) if c.quiz else 0}")
