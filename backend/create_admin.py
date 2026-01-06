import os
import django
from django.contrib.auth import get_user_model

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

User = get_user_model()

username = 'admin_demo'
email = 'admin@mianara.mg'
password = 'password123'

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username, email, password)
    print(f"✅ Superuser '{username}' created successfully.")
else:
    print(f"ℹ️ Superuser '{username}' already exists.")
