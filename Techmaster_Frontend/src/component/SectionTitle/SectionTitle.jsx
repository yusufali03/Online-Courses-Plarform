import React from "react";
import AOS from "aos";
import "./SectionTitle.scss";

const SectionTitle = ({ subtitle, text, text_primary, shape }) => {

  React.useEffect(() => {
      AOS.init({
        duration: 1000, // Animatsiya davomiyligi (ms)
        offset: 100, // Elementdan yuqori chekkasiga masofa
        easing: "ease-in-out", // Animatsiya effekti
        delay: 50, // Animatsiya kechikishi (ms)
        once: false, // Animatsiya faqat bir marta ishlashi uchun
      });
    }, []);
  return (
    <div className="section-title" data-aos="fade">
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
