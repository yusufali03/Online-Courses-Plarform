import React, { useEffect } from "react";
import "./style.scss";
import line from "../../assests/images/bottom_line.svg";
import choose from "../../assests/images/choose3.webp";
import leftBold from "../../assests/images/left-bold-black.svg";
import udemy from "../../assests/images/udemy.svg";
import choose1 from "../../assests/images/choose1.svg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const ChooseArea = () => {
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
    <div className="chooseArea">
      <div className="container">
        <div className="chooseArea_single" data-aos="fade-up">
          <div className="chooseArea_single_col4">
            <div className="chooseArea_single_col4_chooseSub">
              <span
                className="chooseArea_single_col4_chooseSub_titleSub"
                data-aos="fade-up"
              >
                {t("chooseArea.subtitle")}
              </span>
              <h2
                className="chooseArea_single_col4_chooseSub_headChoose"
                data-aos="fade-up"
                data-aos="fade-up"
              >
                {t("chooseArea.title")}
                <span className="chooseArea_single_col4_chooseSub_headChoose_colo">
                  {t("chooseArea.highlight")}
                  <img
                    className="chooseArea_single_col4_chooseSub_headChoose_colo_chooseImg"
                    src={line}
                    alt=""
                  />
                </span>{" "}
                For You
              </h2>
              <p className="mb" data-aos="fade-up">
                {t("chooseArea.description")}
              </p>
              <a href="#" className="hero_card_title_buttonList_btn">
                <img
                  className="hero_card_title_buttonList_btn_imgs"
                  src={leftBold}
                  alt=""
                />
                {t("chooseArea.button")}
              </a>
            </div>
          </div>
          <div className="chooseArea_single_col">
            <img
              className="chooseArea_single_col_userChoose"
              data-aos="fade-up"
              src={choose}
              alt=""
            />
            <div className="chooseArea_single_col_items">
              <div
                className="chooseArea_single_col_items_chooseLi"
                data-aos="fade-up"
              >
                <div>
                  <img src={udemy} alt="" />
                </div>
                <h3 className="hthree">
                  4.9 <FaStar style={{ color: "rgb(255, 178, 0)" }} />
                </h3>
              </div>
            </div>
          </div>
          <div className="chooseArea_single_col3">
            {/* {t("chooseArea.features", { returnObjects: true }).map((feature, index) => (
          <div key={index} className="chooseArea_single_col3_boxItem" data-aos="fade-up">
            <div className="chooseArea_single_col3_boxItem_chooseIcon">
              <img src={choose1} alt=""/>
            </div>
            <div className="chooseArea_single_col3_boxItem_chooseContent">
              <h3>{feature.title}</h3>
              <p className="chooseArea_single_col3_boxItem_chooseContent_chp">{feature.description}</p>
            </div>
          </div>
        ))} */}
            <div className="chooseArea_single_col3_boxItem" data-aos="fade-up">
              <div className="chooseArea_single_col3_boxItem_chooseIcon">
                <img src={choose1} alt="" />
              </div>
              <div className="chooseArea_single_col3_boxItem_chooseContent">
                <h3>Expert-Led Curriculum</h3>
                <p className="chooseArea_single_col3_boxItem_chooseContent_chp">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
            <div className="chooseArea_single_col3_boxItem" data-aos="fade-up">
              <div className="chooseArea_single_col3_boxItem_chooseIcon">
                <img src={choose1} alt="" />
              </div>
              <div className="chooseArea_single_col3_boxItem_chooseContent">
                <h3>Expert-Led Curriculum</h3>
                <p className="chooseArea_single_col3_boxItem_chooseContent_chp">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
            <div className="chooseArea_single_col3_boxItem" data-aos="fade-up">
              <div className="chooseArea_single_col3_boxItem_chooseIcon">
                <img src={choose1} alt="" />
              </div>
              <div className="chooseArea_single_col3_boxItem_chooseContent">
                <h3>Expert-Led Curriculum</h3>
                <p className="chooseArea_single_col3_boxItem_chooseContent_chp">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
