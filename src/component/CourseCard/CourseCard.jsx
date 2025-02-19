import React from "react";
import "./CourseCard.scss";
import { FaRegFileAlt } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import AOS from "aos";

function CourseCard(data) {
  const course = data.data;
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      offset: 10, // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 50, // Animatsiya kechikishi (ms)
      once: false, // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);
  return (
    <div className="courses" data-aos="fade">
      <div className="course-card_layout">
        <div className="course-card">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="course-image"
          />
          <span className="category">{course.category}</span>
          <div className="course-content">
            <h6 className="price">{course.price}</h6>
            <h3 className="title">{course.title}</h3>
            <div className="details">
              <span>
                <FaRegFileAlt style={{ "margin-right": "10px" }} size={16} />
                {course.lessons} Lessons
              </span>
              <span>
                <LuClock style={{ "margin-right": "10px" }} size={16} />
                {course.duration}
              </span>
              <span>
                <FaRegStar style={{ "margin-right": "10px" }} size={16} />
                {course.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
