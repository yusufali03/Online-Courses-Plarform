from rest_framework import serializers
from .models import Course, Section, Lesson, CourseReview
# from django.contrib.auth import get_user_model
from users.serializers import UserProfileSerializer


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'title', 'content', 'video_url', 'order', 'duration']

class SectionSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta:
        model = Section
        fields = ['id', 'title', 'order', 'lessons']

class CourseReviewSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)

    class Meta:
        model = CourseReview
        fields = ['id', 'rating', 'comment', 'created_at', 'user']
        read_only_fields = ['user']

class CourseSerializer(serializers.ModelSerializer):
    instructor = UserProfileSerializer(read_only=True)
    student_count = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = [
            'id', 'title', 'slug', 'description', 'instructor',
            'created_at', 'updated_at', 'price', 'level',
            'thumbnail', 'is_published', 'student_count'
        ]
        read_only_fields = ['instructor']

    def get_student_count(self, obj):
        return obj.students.count()

class CourseDetailSerializer(CourseSerializer):
    sections = SectionSerializer(many=True, read_only=True)
    reviews = CourseReviewSerializer(many=True, read_only=True)
    average_rating = serializers.SerializerMethodField()

    class Meta(CourseSerializer.Meta):
        fields = CourseSerializer.Meta.fields + ['sections', 'reviews', 'average_rating']

    def get_average_rating(self, obj):
        reviews = obj.reviews.all()
        if not reviews:
            return None
        return sum(review.rating for review in reviews) / len(reviews)