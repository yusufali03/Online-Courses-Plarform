import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({subtitle, text, text_primary}) => {
  return (
    <div className="section-title">
      <span class="subtitle">{subtitle}</span>
      <h2>
        {text}
        <div class="gradient_text">{text_primary}</div>
        {/* <img
          src="https://demo.themeies.com/edugen-html/assets/images/shapes/title-shape.svg"
          alt="shape"
        /> */}
      </h2>
    </div>
  );
};

export default SectionTitle;
