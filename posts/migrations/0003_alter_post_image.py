# Generated by Django 3.2.19 on 2023-06-15 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_post_image_filter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, default='../358566174777814:AjYOwfCwd-Wbdr75KyvNTBKF5Qo@dobov5ccd', upload_to='images/'),
        ),
    ]
