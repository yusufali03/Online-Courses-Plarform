import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CourseDetails.scss";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import CourseDetailsSidebar from "../../component/CourseDetailsSidebar/CourseDetailsSidebar";
import { Tabs } from "rsuite";
import TabCurriculum from "./components/TabCurriculum/TabCurriculum";
import TabOverview from "./components/TabOverview/TabOverview";
import TabInstructor from "./components/TabInstructor/TabInstructor";
import TabReview from "./components/TabReview/TabReview";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { slug } = useParams(); // Get course slug from the URL
  const [course, setCourse] = useState(null); // Store course data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/courses/${slug}/`);
        setCourse(response.data); // Set the course data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching course details:", error);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [slug]); // Re-fetch if slug changes

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  if (!course) {
    return <div>Course not found</div>; // Show error if no course found
  }

  return (
    <>
      <PageTitleArea titles="Course Details" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details-left-sidebar">
              <div className="course-details-card">
                <div className="image">
                  <img
                    src={course.thumbnail} // Use the thumbnail URL from the course data
                    alt="courses-image"
                  />
                </div>
                <span className="science">{course.level}</span>
                <h3>{course.title}</h3>
                <ul className="list-unstyled">
                  <li className="d-inline-block">
                    <span>Instructor:</span> {course.instructor.full_name}
                    <img
                      src={course.instructor.profile_picture} // Use the instructor's profile picture
                      alt="courses-image"
                    />
                  </li>
                  <li className="d-inline-block">
                    <span>Last Update:</span> {new Date(course.updated_at).toLocaleDateString()}
                  </li>
                </ul>
              </div>
              <Tabs defaultActiveKey="reviews">
                <Tabs.Tab eventKey="overview" title="Overview">
                  <TabOverview description={course.description} />
                </Tabs.Tab>

                <Tabs.Tab eventKey="curriculum" title="Curriculum">
                  <TabCurriculum sections={course.sections} />
                </Tabs.Tab>

                <Tabs.Tab eventKey="instructor" title="Instructor">
                  <TabInstructor instructor={course.instructor} />
                </Tabs.Tab>

                <Tabs.Tab eventKey="reviews" title="Reviews">
                  <TabReview reviews={course.reviews} />
                </Tabs.Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-4">
            <CourseDetailsSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
