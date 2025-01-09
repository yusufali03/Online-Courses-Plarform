import React from "react";
import "./SectionTitle.scss"

const SectionTitle = () => {
  return (
    <div className="section-title">
      <span class="subtitle">Team Members</span>
      <h2>
        Our Expert
        <div class="gradient_text">
          Lecturer
          <img src="assets/images/shapes/title-shape.svg" alt="shape" />
        </div>
      </h2>
    </div>
  );
};

export default SectionTitle;
