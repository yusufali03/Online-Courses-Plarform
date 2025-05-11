import React from "react";
import "./TabInstructor.scss"

import Document from "../../../../assests/images/text.svg";
import User from "../../../../assests/images/profile.svg";
import Like from "../../../../assests/images/like.svg";
import Star from "../../../../assests/images/star2.svg";


const TabInstructor = () => {
  return (
    <div class="instructor-info">
      <div class="instructor-user d-flex align-items-center">
        <div class="image">
          <img src="https://demo.themeies.com/edugen-html/assets/images/courses/courses35.jpg" alt="courses-image" />
        </div>
        <div class="content">
          <h2>Daniel Smith</h2>
          <span>User Experience Designer</span>
          <ul class="list-unstyled ps-0 mb-0 list">
            <li class="position-relative">
              <img src={Document} alt="icon" />
              65+ Courses
            </li>
            <li class="position-relative">
              <img src={User} alt="icon" />
              2k+ Student Learned
            </li>
            <li class="position-relative">
              <img src={Star} alt="icon" style={{color: "#16a267"}}/>
              547+ Reviews
            </li>
            <li class="position-relative">
              <img src={Like} alt="icon" style={{color: "#16a267"}}/>
              4.9 Average Rating
            </li>
          </ul>
          <ul class="list-unstyled ps-0 mb-0 social-link">
            <li class="d-inline-block">
              <a href="https://www.facebook.com/" target="_blank">
                <img src="https://demo.themeies.com/edugen-html/assets/images/icon/facebook.svg" alt="icon" />
              </a>
            </li>
            <li class="d-inline-block">
              <a
                href="https://www.linkedin.com/login?fromSignIn=true&amp;trk=guest_homepage-basic_nav-header-signin"
                target="_blank"
              >
                <img src="https://demo.themeies.com/edugen-html/assets/images/icon/linkedin2.svg" alt="icon" />
              </a>
            </li>
            <li class="d-inline-block">
              <a href="https://www.youtube.com/" target="_blank">
                <img src="https://demo.themeies.com/edugen-html/assets/images/icon/youtube.svg" alt="icon" />
              </a>
            </li>
            <li class="d-inline-block">
              <a href="https://www.instagram.com/" target="_blank">
                <img src="https://demo.themeies.com/edugen-html/assets/images/icon/instagram.svg" alt="icon" />
              </a>
            </li>
            <li class="d-inline-block">
              <a href="https://x.com/home" target="_blank">
                <img src="https://demo.themeies.com/edugen-html/assets/images/icon/twitter1.svg" alt="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend.
      </p>
    </div>
  );
};

export default TabInstructor;
