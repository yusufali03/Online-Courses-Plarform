from django.shortcuts import render, get_object_or_404
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Course, Section, Lesson, CourseReview
from .serializers import (
    CourseSerializer, 
    CourseDetailSerializer,
    SectionSerializer,
    LessonSerializer,
    CourseReviewSerializer
)

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.filter(is_published=True)
    serializer_class = CourseSerializer
    permission_classes = [permissions.AllowAny]

class CourseDetailView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseDetailSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.AllowAny]

class InstructorCourseListView(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Course.objects.filter(instructor=self.request.user)

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user)

class CourseEnrollView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, slug):
        course = get_object_or_404(Course, slug=slug)
        if request.user in course.students.all():
            return Response({"message": "Already enrolled"}, status=status.HTTP_400_BAD_REQUEST)
        course.students.add(request.user)
        return Response({"message": "Successfully enrolled"}, status=status.HTTP_200_OK)

class SectionListCreateView(generics.ListCreateAPIView):
    serializer_class = SectionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_slug = self.kwargs['course_slug']
        return Section.objects.filter(course__slug=course_slug)

    def perform_create(self, serializer):
        course = get_object_or_404(Course, slug=self.kwargs['course_slug'])
        if course.instructor != self.request.user:
            raise permissions.PermissionDenied()
        serializer.save(course=course)

class LessonListCreateView(generics.ListCreateAPIView):
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        section_id = self.kwargs['section_id']
        return Lesson.objects.filter(section_id=section_id)

    def perform_create(self, serializer):
        section = get_object_or_404(Section, id=self.kwargs['section_id'])
        if section.course.instructor != self.request.user:
            raise permissions.PermissionDenied()
        serializer.save(section=section)

class CourseReviewCreateView(generics.CreateAPIView):
    serializer_class = CourseReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        course = get_object_or_404(Course, slug=self.kwargs['course_slug'])
        serializer.save(user=self.request.user, course=course)

class StudentEnrolledCoursesView(generics.ListAPIView):
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Course.objects.filter(students=self.request.user)