import React from "react";
import "./BlogCard.scss";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="image">
        <a href="#" className="image">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/blog/blog9.jpg"
            alt=""
          />
        </a>
        <span>Education</span>
      </div>
      <div className="content">
        <ul>
          <li>
            <IoPersonOutline />
            <a href="#">Admin</a>
          </li>
          <li>
            <IoCalendarOutline />
            <a href="#">Jan 29, 2024</a>
          </li>
        </ul>
        <h3>
          <a href="#">Co-Education Makes You Respect The People</a>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </p>
        <a class="read-more" href="#">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
