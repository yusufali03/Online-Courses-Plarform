import React from "react";
import "./CourseCard.scss";

const courses = [
  {
    id: 1,
    image:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses9.jpg", // Замените на путь к изображениям
    category: "Art & Design",
    price: "$24.99",
    title: "Basic Fundamentals of Interior & Graphics Design",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
  },
  {
    id: 2,
    image:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses10.jpg",
    category: "Marketing",
    price: "Free",
    title: "Increasing Engagement with Instagram & Facebook",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
  },
  {
    id: 3,
    image:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses11.jpg",
    category: "Art & Design",
    price: "$39.28",
    title: "Logo Design: From Concept to Presentation",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
  },
  {
    id: 4,
    image:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses12.jpg",
    category: "Art & Design",
    price: "$19.48",
    title: "Professional Ceramic Molding for Beginners",
    lessons: 2,
    duration: "4h 30m",
    rating: 4.8,
  },
];

function CourseCard() {
  return (
    <div className="courses">
      <div className="row">
        {courses.map((course) => (
          <div className="course-card_layout"  data-aos="fade-up" data-aos-delay={course.id * 100}>
            <div className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <span className="category">{course.category}</span>
              <div className="course-content">
                <h3 className="price">{course.price}</h3>
                <h2 className="title">{course.title}</h2>
                <div className="details">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.duration}</span>
                  <span>⭐ {course.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
