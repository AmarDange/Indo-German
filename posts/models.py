# from django.db import models
# from django.contrib.auth.models import User


# class Post(models.Model):
#     """
#     Post model, related to 'owner', i.e. a User instance.
#     Default image set so that we can always reference image.url.
#     """
#     owner = models.ForeignKey(User, on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     title = models.CharField(max_length=255)
#     content = models.TextField(blank=True)
#     image = models.ImageField(
#         upload_to='images/', default='../cloudinary://358566174777814:AjYOwfCwd-Wbdr75KyvNTBKF5Qo@dobov5ccd', blank=True
#     )

#     class Meta:
#         ordering = ['-created_at']

#     def __str__(self):
#         return f'{self.id} {self.title}'


from django.db import models
from django.contrib.auth.models import User


class Posts(models.Model):
    """
    Post model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../https://res.cloudinary.com/dobov5ccd/image/upload/v1686837368/media/images/river-rafting_ug2zbp.jpg', blank=True
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'    
