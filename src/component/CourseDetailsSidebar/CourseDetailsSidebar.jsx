import React from "react";
import leftSmall from "../../assests/images/left-small.svg";
import "./CourseDetailsSidebar.scss";
import { FaStar } from "react-icons/fa";


const CourseDetailsSidebar = () => {
  return (
    <div className="course-details-right-sidebar">
      <div class="single-pages-widget free-info">
        <div class="image position-relative">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/courses/courses31.jpg"
            alt="courses-image"
          />
          <a
            class="play-button"
            data-fslightbox="gallery"
            href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
            target="_blank"
          >
            <i class="ph-fill ph-play"></i>
          </a>
        </div>
        <h2>Free</h2>
        <button className="primary-btn">
          Enroll Now <img src={leftSmall} alt="" />
        </button>
        {courseDetails.map((detail, index) => (
        <ul
          key={index}
          className="list-unstyled ps-0 list d-flex align-items-center justify-content-between"
        >
          <li className="d-inline-block">
            {detail.label}
            <img src={detail.icon} alt={`${detail.label} icon`} />
          </li>
          <li className="d-inline-block">
            <span>{detail.value}</span>
          </li>
        </ul>
      ))}

      <ul className="list-unstyled ps-0 mb-0 social-link d-flex align-items-center">
        <li className="d-inline-block">
          <span>Share On:</span>
        </li>
        {socialLinks.map((link, index) => (
          <li className="d-inline-block" key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={`${link.name} icon`} />
            </a>
          </li>
        ))}
      </ul>
      </div>
      <div class="single-pages-widget courses-info">
        <h3>Related Courses</h3>
        <div class="items d-flex align-items-center">
          <div class="image">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/courses/courses32.jpg"
              alt="courses-image"
            />
          </div>
          <div class="content">
            <ul class="list-unstyled ps-0">
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
            </ul>
            <h6>Basics of Designing...</h6>
            <span>$38.00</span>
          </div>
        </div>
        <div class="items d-flex align-items-center">
          <div class="image">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/courses/courses33.jpg"
              alt="courses-image"
            />
          </div>
          <div class="content">
            <ul class="list-unstyled ps-0">
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
            </ul>
            <h6>Basics of Designing...</h6>
            <span>$38.00</span>
          </div>
        </div>
        <div class="items d-flex align-items-center">
          <div class="image">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/courses/courses34.jpg"
              alt="courses-image"
            />
          </div>
          <div class="content">
            <ul class="list-unstyled ps-0">
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
              <li class="d-inline-block">
                <FaStar/>
              </li>
            </ul>
            <h6>Basics of Designing...</h6>
            <span>$38.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsSidebar;

const courseDetails = [
  {
    label: "Instructor",
    value: "Daniel Smith",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/instructor.svg"
  },
  {
    label: "Lectures",
    value: "23",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/lectures.svg"
  },
  {
    label: "Duration",
    value: "2Hr 36Minutes",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/duration.svg"
  },
  {
    label: "Enrolled",
    value: "2k Students",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/enrolled.svg"
  },
  {
    label: "Course level",
    value: "Intermediate",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/level.svg"
  },
  {
    label: "Language",
    value: "English",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/language.svg"
  }
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/fb.svg"
  },
  {
    name: "Twitter",
    url: "https://x.com/home",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/twitter.svg"
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com/",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/linkedin.svg"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/instragram.svg"
  }
];