from django.urls import path
from . import views

app_name = 'courses'

urlpatterns = [
    # Course list and detail views
    path('', views.CourseListView.as_view(), name='course-list'),
    path('<slug:slug>/', views.CourseDetailView.as_view(), name='course-detail'),
    
    # Instructor routes
    path('instructor/courses/', views.InstructorCourseListView.as_view(), name='instructor-courses'),
    
    # Student routes
    path('student/enrolled/', views.StudentEnrolledCoursesView.as_view(), name='enrolled-courses'),
    path('<slug:slug>/enroll/', views.CourseEnrollView.as_view(), name='course-enroll'),
    
    # Section and lesson routes
    path('<slug:course_slug>/sections/', views.SectionListCreateView.as_view(), name='section-list'),
    path('sections/<int:section_id>/lessons/', views.LessonListCreateView.as_view(), name='lesson-list'),
    
    # Review routes
    path('<slug:course_slug>/reviews/', views.CourseReviewCreateView.as_view(), name='course-review'),
]