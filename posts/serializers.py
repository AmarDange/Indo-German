from rest_framework import serializers
from posts.models import Posts


class PostsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    posts_id = serializers.ReadOnlyField(source='owner.posts.id')
    posts_image = serializers.ReadOnlyField(source='owner.posts.image.url')

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Posts
        fields = [
            'id', 'owner', 'is_owner', 'posts_id',
            'posts_image', 'created_at', 'updated_at',
            'title', 'content', 'image', 'image_filter'
        ]