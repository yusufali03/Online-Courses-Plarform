from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Course(models.Model):
    LEVEL_CHOICES = (
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    )

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.TextField()
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default='beginner')
    thumbnail = models.ImageField(upload_to='course_thumbnails/')
    is_published = models.BooleanField(default=False)
    students = models.ManyToManyField(User, related_name='enrolled_courses', blank=True)

    def __str__(self):
        return self.title

class Section(models.Model):
    title = models.CharField(max_length=200)
    course = models.ForeignKey(Course, related_name='sections', on_delete=models.CASCADE)
    order = models.PositiveIntegerField()

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.course.title} - {self.title}"

class Lesson(models.Model):
    title = models.CharField(max_length=200)
    section = models.ForeignKey(Section, related_name='lessons', on_delete=models.CASCADE)
    content = models.TextField()
    video_url = models.URLField(blank=True)
    order = models.PositiveIntegerField()
    duration = models.PositiveIntegerField(help_text="Duration in minutes")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class CourseReview(models.Model):
    course = models.ForeignKey(Course, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='course_reviews', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['course', 'user']

    def __str__(self):
        return f"{self.user.full_name}'s review for {self.course.title}"
