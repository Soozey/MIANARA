from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'role')
        read_only_fields = ('role',)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password'],
            role=User.Role.STUDENT
        )
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    is_admin = serializers.SerializerMethodField()
    is_moderator = serializers.SerializerMethodField()
    is_creator = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'role', 'phone_number', 'bio',
            'is_staff', 'is_superuser', 'is_admin', 'is_moderator', 'is_creator'
        )
        read_only_fields = ('id', 'username', 'email', 'role', 'is_staff', 'is_superuser')

    def get_is_admin(self, obj):
        return bool(obj.is_staff or obj.is_superuser or obj.role == User.Role.ADMIN)

    def get_is_moderator(self, obj):
        return bool(obj.role in {User.Role.MODERATOR, User.Role.ADMIN} or obj.is_staff or obj.is_superuser)

    def get_is_creator(self, obj):
        return bool(obj.role in {User.Role.CREATOR, User.Role.MODERATOR, User.Role.ADMIN} or obj.is_staff or obj.is_superuser)


class MianaraTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['email'] = user.email
        token['role'] = user.role
        token['is_staff'] = user.is_staff
        token['is_superuser'] = user.is_superuser
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['user'] = UserProfileSerializer(self.user).data
        return data
