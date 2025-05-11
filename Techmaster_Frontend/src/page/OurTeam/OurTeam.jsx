import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import "./OurTeam.scss";
import AOS from "aos";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoVolumeMuteOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const teamItems = [
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
  {
    link: "#",
    img: "https://demo.themeies.com/edugen-html/assets/images/team/team1.jpg",
    name: "Tim R. Moyer",
    type: "Lecturer",
  },
];

const OurTeam = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      offset: 100, // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 50, // Animatsiya kechikishi (ms)
      once: true, // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);
  const { t } = useTranslation("our_team");

  return (
    <div className="wrapper">
      <PageTitleArea titles={t("pageTitle")} />
      <section className="team-area container">
        <div className="info">
          <SectionTitle
            subtitle={t("subtitle")}
            text={t("title")} 
            text_primary="Lecturer"
            shape={true}
          />
          
          <p>
          {t("description")}
          </p>
          <button
            className="enroll"
            onClick={() =>
              window.open(
                "https://preview.themeforest.net/item/edugen-education-online-course-html-template/full_screen_preview/54006205?_ga=2.264810255.1003209203.1735092300-1127771820.1734647781&_gac=1.16959435.1734647781.CjwKCAiApY-7BhBjEiwAQMrrEV5mUvW1v04fUjFU5vOU-VdUGIUVuBEuhGOO-D5TZyw3qhswsIiAJxoC9T8QAvD_BwE",
                "_blank"
              )
            }
          >
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/icon/left-small.svg"
              alt=""
            />
            <span>{t("buttonText")}</span>
          </button>
        </div>
        {teamItems.map((member, index) => (
          <div key={index} className="member-card">
            <a href={member.link}>
              <img src={member.img} alt={member.name} />
            </a>
            <div class="">
              <h3>
                <a href="team-details.html">{member.name}</a>
              </h3>
              <span>{member.type}</span>
              <ul class="">
                <li class="">
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li class="">
                  <a href="https://x.com/home" target="_blank">
                    <FaXTwitter />
                  </a>
                </li>
                <li class="">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className="learning-area container">
        <div className="title">
          <SectionTitle
            subtitle={t("learningArea.subtitle")}
            text={t("learningArea.title")}
            text_primary={t("learningArea.titlePrimary")}
            shape={true}

          />
          
        </div>
        <div className="shapes" data-aos="fade-up">
          <img
            className="shape1"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape11.svg"
            alt=""
          />
          <img
            className="shape2"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape10.svg"
            alt=""
          />
        </div>
        <div className="cast" data-aos="fade-up">
          <div className="live-info">
            <span className="red_circel"></span>
            <span className="live">{t("learningArea.liveStatus")}</span>
            <span className="timer">01:30:08</span>
          </div>
          <img
            className="other"
            src="https://demo.themeies.com/edugen-html/assets/images/learning/learning1.jpg"
            alt=""
          />
          <img
            className="yourself"
            src="https://demo.themeies.com/edugen-html/assets/images/learning/learning2.jpg"
            alt=""
          />
          <div className="trigers">
            <button className="mute">
              <IoVolumeMuteOutline size={25} />
            </button>
            <button className="end">
              <MdOutlinePhone size={25} />
            </button>
            <button className="video">
              <IoVideocamOutline size={25} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
