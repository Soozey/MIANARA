from rest_framework import generics
from config.permissions import IsCreatorOrAdminForCreateAuthorOrAdminForObject
from .models import Content
from .serializers import ContentSerializer

class ContentList(generics.ListCreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsCreatorOrAdminForCreateAuthorOrAdminForObject]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ContentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsCreatorOrAdminForCreateAuthorOrAdminForObject]
