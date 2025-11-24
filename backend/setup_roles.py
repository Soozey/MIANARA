import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from users.models import User
from contents.models import Content

def setup_roles():
    # Create Groups
    creator_group, _ = Group.objects.get_or_create(name='Creator')
    moderator_group, _ = Group.objects.get_or_create(name='Moderator')

    # Get Content permissions
    content_ct = ContentType.objects.get_for_model(Content)
    add_content = Permission.objects.get(content_type=content_ct, codename='add_content')
    change_content = Permission.objects.get(content_type=content_ct, codename='change_content')
    delete_content = Permission.objects.get(content_type=content_ct, codename='delete_content')
    view_content = Permission.objects.get(content_type=content_ct, codename='view_content')

    # Assign permissions to Creator
    # Creators can add, change, delete, view (but filtered by admin logic)
    creator_group.permissions.add(add_content, change_content, delete_content, view_content)

    # Assign permissions to Moderator
    # Moderators can add, change, delete, view
    moderator_group.permissions.add(add_content, change_content, delete_content, view_content)

    print("Groups and permissions set up.")

    # Create Test Users
    if not User.objects.filter(username='creator1').exists():
        u1 = User.objects.create_user('creator1', 'creator1@example.com', 'password123', role='CREATOR')
        u1.groups.add(creator_group)
        u1.is_staff = True # Needed to access admin
        u1.save()
        print("User 'creator1' created (password: password123)")

    if not User.objects.filter(username='moderator1').exists():
        u2 = User.objects.create_user('moderator1', 'moderator1@example.com', 'password123', role='ADMIN') # Role ADMIN for internal logic if needed, or just group
        u2.groups.add(moderator_group)
        u2.is_staff = True
        u2.save()
        print("User 'moderator1' created (password: password123)")

if __name__ == '__main__':
    setup_roles()
