from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Posts
from .serializers import PostsSerializer
from indo_german.permissions import IsOwnerOrReadOnly


class PostsList(APIView):
    """
    List all profiles
    No Create view (post method), as profile creation handled by django signals
    """
    def get(self, request):
        posts = Posts.objects.all()
        serializer = PostsSerializer(
            posts, many=True, context={'request': request}
        )
        return Response(serializer.data)


class PostsDetail(APIView):
    serializer_class = PostsSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        try:
            posts = Posts.objects.get(pk=pk)
            self.check_object_permissions(self.request, posts)
            return posts
        except Posts.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        posts = self.get_object(pk)
        serializer = PostsSerializer(
            posts, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        posts = self.get_object(pk)
        serializer = PostsSerializer(
            posts, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)