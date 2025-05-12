
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./courseGrid.scss";
import lessons from "../../../../assests/images/course/lessons.svg"; // Image for lesson count

const CourseGrid = () => {
  const [courses, setCourses] = useState([]); // Store courses
  const [loading, setLoading] = useState(true); // Loading state for API call

  // Fetch courses data from backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/courses/"); // Replace with your API endpoint
        setCourses(response.data); // Store the courses in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchCourses();
  }, []); // Only run once when the component mounts

  if (loading) {
    return <div>Loading courses...</div>; // Show loading message while data is being fetched
  }

  return (
    <>
      <div className="courseGrid">
        <div className="container">
          <div className="courseGrid_rowList">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div className="courseGrid_rowList_colList-4" key={course.id}>
                  <div className="courseGrid_rowList_colList-4_cardCourse">
                    <div className="courseImag">
                      <img src={course.thumbnail} alt={course.title} />
                      <div className="coursePrice">{course.level}</div>
                    </div>
                    <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                      <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">
                        ${course.price}
                      </h6>
                      <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">
                        {course.title}
                      </h3>
                      <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">
                        <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">
                          <img src={lessons} alt="" />
                          {course.sections?.length} Lessons
                        </div>
                        <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">
                          <img src={lessons} alt="" />
                          {course.duration}
                        </div>
                        <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">
                          <img src={lessons} alt="" />
                          {course.average_rating || 0}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No courses available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseGrid;
