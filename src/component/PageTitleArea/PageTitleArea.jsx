import React from "react";
import "./PageTitleArea.scss"

const PageTitleArea = () => {
  return (
    <div className="page-title-area">
      <div className="title">
        <h2>Our Team</h2>
        <ul class="">
          <li class="">
            <a href="/">Home - {" "}</a>
          </li>
          <li class="">Team</li>
        </ul>
      </div>
      <div className="shapes">
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages1.png"
          alt="shape"
          className="shape shape1"
        />
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages2.png"
          alt="shape"
          className="shape shape2"
        />
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages3.png"
          alt="shape"
          className="shape shape3"
        />
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages4.svg"
          alt="shape"
          className="shape shape4"
        />
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/shapes/pages5.svg"
          alt="shape"
          className="shape shape5"
        />
      </div>
    </div>
  );
};

export default PageTitleArea;
