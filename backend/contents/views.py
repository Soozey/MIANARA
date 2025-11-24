from rest_framework import generics, permissions
from .models import Content
from .serializers import ContentSerializer

class ContentList(generics.ListCreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ContentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
