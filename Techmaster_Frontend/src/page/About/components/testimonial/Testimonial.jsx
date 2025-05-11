import React from "react";
import "./testimonial.scss";
import bgShape from "../../../../assests/images/bg-shape.svg";
import testimonial1 from "../../../../assests/images/testimonial1.webp";
import testimonial2 from "../../../../assests/images/testimonial2.webp";
import testimonial3 from "../../../../assests/images/testimonial3.webp";
import testimonial4 from "../../../../assests/images/testimonial4.webp";
import testimonial5 from "../../../../assests/images/testimonial5.webp";
import line from "../../../../assests/images/bottom_line.svg";
import Carousel from "../../../../component/Carousel/Carousel";
import { useTranslation } from "react-i18next";

const Testimonial = ({ dataAos }) => {
  const { t } = useTranslation("about");

  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial_testRow">
          <div className="testimonial_testRow_testCol-6" data-aos={dataAos}>
            <div className="testimonial_testRow_testCol-6_testImage">
              <div
                className="testimonial_testRow_testCol-6_testImage_testPho"
                data-aos={dataAos}
              >
                <img src={bgShape} alt="bg-shape" />
                <img
                  src={testimonial1}
                  className="testimonial_testRow_testCol-6_testImage_testPho_mainImage"
                  alt="main-image"
                />
              </div>
              <div className="testimonial_testRow_testCol-6_testImage_testUserImg">
                <div className="images1">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                    }}
                    src={testimonial2}
                    alt="testimonial2"
                  />
                </div>
                <div className="images2">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                    }}
                    src={testimonial3}
                    alt="testimonial2"
                  />
                </div>
                <div className="images3">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                    }}
                    src={testimonial4}
                    alt="testimonial2"
                  />
                </div>
                <div className="images4">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                    }}
                    src={testimonial5}
                    alt="testimonial2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial_testRow_testCol-6" data-aos={dataAos}>
            <div className="testimonial_testRow_testCol-6_subTest">
              <div className="globalTitle" data-aos={dataAos}>
                {t("testimonial.title")}
              </div>
              <h2
                className="testimonial_testRow_testCol-6_subTest_testH2"
                data-aos={dataAos}
              >
                {t("testimonial.subtitle")}
                <span className="testimonial_testRow_testCol-6_subTest_testH2_testColor">
                {t("testimonial.subtitleHighlight")}
                  <img
                    className="testimonial_testRow_testCol-6_subTest_testH2_testColor_testLine"
                    src={line}
                    alt=""
                  />
                </span>
              </h2>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
