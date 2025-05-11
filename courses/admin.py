from django.contrib import admin
from .models import Course, Section, Lesson, CourseReview

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'price', 'level', 'is_published', 'created_at')
    search_fields = ('title', 'description', 'instructor__full_name')
    list_filter = ('level', 'is_published', 'created_at')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'order')
    search_fields = ('title', 'course__title')
    list_filter = ('course',)

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'section', 'order', 'duration')
    search_fields = ('title', 'section__title')
    list_filter = ('section',)

@admin.register(CourseReview)
class CourseReviewAdmin(admin.ModelAdmin):
    list_display = ('course', 'user', 'rating', 'created_at')
    search_fields = ('course__title', 'user__full_name', 'comment')
    list_filter = ('rating', 'created_at') 