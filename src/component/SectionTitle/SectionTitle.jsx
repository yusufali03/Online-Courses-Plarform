import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ subtitle, text, text_primary, shape }) => {
  return (
    <div className="section-title">
      <span class="subtitle">{subtitle}</span>
      <h2>
        {text}

        <div class="gradient_text">
          {text_primary}
          {shape && (
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/shapes/title-shape.svg"
              alt="shape"
            />
          )}
        </div>
      </h2>
    </div>
  );
};

export default SectionTitle;
