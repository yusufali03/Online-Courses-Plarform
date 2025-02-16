import React, { useEffect } from "react";
import "./style.scss";
import abouts from "../../assests/images/about7.webp";
import bakground from "../../assests/images/about-shape.webp";
import line from "../../assests/images/bottom_line.svg";
import learning from "../../assests/images/learning.svg";
import leftSmall from "../../assests/images/left-small.svg";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const AboutArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      offset: 100, // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 50, // Animatsiya kechikishi (ms)
      once: true, // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);
  const { t } = useTranslation("home");
  return (
    <div className="aboutArea">
      <div className="container">
        <div className="flexs main-flex__about-area">
          <div className="aboutArea_photo" data-aos="fade-up">
            <div className="aboutArea_photo_image">
              <img src={abouts} alt="" />
            </div>
            <div className="aboutArea_photo_shape">
              <img src={bakground} alt="" />
            </div>
          </div>
          <div className="aboutArea_texts" data-aos="fade-up">
            <div className="aboutArea_texts_section">
              <span className="aboutArea_texts_section_heads">
                {t("aboutArea.section_head")}
              </span>
              <h2 className="aboutArea_texts_section_title">
                {" "}
                {t("aboutArea.title")}{" "}
                <span className="aboutArea_texts_section_title_sec">
                  {t("aboutArea.highlight")}
                  <img
                    className="aboutArea_texts_section_title_sec_lin"
                    src={line}
                    alt=""
                  />
                </span>
              </h2>
              <p className="aboutArea_texts_section_ps">
                {t("aboutArea.description")}
              </p>

              <div className="aboutArea_texts_section_learning">
                <div className="aboutArea_texts_section_learning_ic">
                  <img style={{ zIndex: "1" }} src={learning} alt="" />
                </div>
                <div className="aboutArea_texts_section_learning_infoCard">
                  <h3 className="aboutArea_texts_section_learning_infoCard_big">
                    {t("aboutArea.easy_learning.title")}
                  </h3>
                  <p className="aboutArea_texts_section_learning_infoCard_lit">
                    {t("aboutArea.easy_learning.description")}
                  </p>
                </div>
              </div>

              {/* {t("aboutArea.features", { returnObjects: true }).map(
                (feature, index) => (
                  <div
                    key={index}
                    className="aboutArea_texts_section_List_col-6"
                  >
                    <div className="aboutArea_texts_section_List_col-6_ull">
                      <a className="aboutArea_texts_section_List_col-6_ull_lii">
                        <FaCheck />
                      </a>
                      {feature}
                    </div>
                  </div>
                )
              )} */}
              <div className="aboutArea_texts_section_List">
                <div className="aboutArea_texts_section_List_col-6">
                  <div className="aboutArea_texts_section_List_col-6_ull">
                    <a className="aboutArea_texts_section_List_col-6_ull_lii">
                      <FaCheck />
                    </a>
                    Empowering Education
                  </div>
                </div>
                <div className="aboutArea_texts_section_List_col-6">
                  <div className="aboutArea_texts_section_List_col-6_ull">
                    <a
                      className="aboutArea_texts_section_List_col-6_ull_lii"
                      style={{ background: "#8A47CBFF" }}
                    >
                      <FaCheck />
                    </a>
                    Empowering Education
                  </div>
                </div>
              </div>
              <div className="aboutArea_texts_section_List">
                <div className="aboutArea_texts_section_List_col-6">
                  <div className="aboutArea_texts_section_List_col-6_ull">
                    <a
                      className="aboutArea_texts_section_List_col-6_ull_lii"
                      style={{ background: "#8A47CBFF" }}
                    >
                      <FaCheck />
                    </a>
                    Empowering Education
                  </div>
                </div>
                <div className="aboutArea_texts_section_List_col-6">
                  <div className="aboutArea_texts_section_List_col-6_ull">
                    <a className="aboutArea_texts_section_List_col-6_ull_lii">
                      <FaCheck />
                    </a>
                    Empowering Education
                  </div>
                </div>
              </div>

              <button className="aboutArea_texts_section_send">
                {t("aboutArea.learn_more")} <img src={leftSmall} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
