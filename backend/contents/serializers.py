from rest_framework import serializers
from .models import Content
from users.serializers import UserSerializer

class ContentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Content
        fields = ['id', 'title', 'description', 'file_type', 'file_url', 'thumbnail', 'author', 'created_at', 'is_premium']
