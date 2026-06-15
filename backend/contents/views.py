from rest_framework import generics
from config.permissions import IsContentActorOrReadOnly, has_moderation_access
from .models import Content
from .serializers import ContentSerializer


class ContentList(generics.ListCreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsContentActorOrReadOnly]

    def perform_create(self, serializer):
        status = serializer.validated_data.get('status')
        if status != Content.Status.PUBLISHED or not has_moderation_access(self.request.user):
            status = Content.Status.PENDING
        serializer.save(author=self.request.user, status=status)


class ContentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = [IsContentActorOrReadOnly]
