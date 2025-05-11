import "./CoursesListCard.scss";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

const CoursesListCard = (course) => {
  const data = course.course
  console.log(data);
  
  
  return (
    <div className="card-wrapper">
      <div className="courses-list-card">
        <div className="image">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="image"
          />
        </div>
        <div class="content">
          <div class="star-icon">
            <span className="price">{data.price}</span>
            <ul>
              <li>
                <FaStar fill="rgb(255, 193, 47)" />
              </li>
              <li>
                <FaStar fill="rgb(255, 193, 47)" />
              </li>
              <li>
                <FaStar fill="rgb(255, 193, 47)" />
              </li>
              <li>
                <FaStar fill="rgb(255, 193, 47)" />
              </li>
              <li>
                <FaStar fill="rgb(255, 193, 47)" />
              </li>
            </ul>
          </div>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <ul class="list-unstyled">
            <li>
              <FaRegFileAlt size={18} />{data.lessons} Lessons
            </li>
            <li>
              <IoPeopleOutline size={20} />
              {data.students} Student
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursesListCard;
