import React from "react";
import "./BlogCard.scss";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const path = window.location.pathname;
  const slug = path.split("/").pop();
  
  return (
    <div className={`blog-card ${slug}`}>
      <div className="image">
        <Link to="/blog-details" className="image">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/blog/blog9.jpg"
            alt=""
          />
        </Link>
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
          <Link to="/blog-details">Co-Education Makes You Respect The People</Link>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </p>
        <Link to="/blog-details" class="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
