import React, { useEffect } from "react";
import "./style.scss";
import line from "../../assests/images/bottom_line.svg";
import team1 from "../../assests/images/team8.webp";
import team2 from "../../assests/images/team9.webp";
import team3 from "../../assests/images/team10.webp";
import team4 from "../../assests/images/team11.webp";
import { FaPlus } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const TeamMember = () => {
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
    <div className="teamMember">
      <div className="container">
        <div className="teamMember_boxT" data-aos="fade-up">
          <span className="teamMember_boxT_subTeam" data-aos="fade-up">
            {t("teamMember.subtitle")}
          </span>
          <h2 className="teamMember_boxT_subTitleTe" data-aos="fade-up">
            {t("teamMember.title")}
            <span className="teamMember_boxT_subTitleTe_meet">
              {t("teamMember.highlight")}
              <img
                className="teamMember_boxT_subTitleTe_meet_Timg"
                src={line}
                alt=""
              />
            </span>
          </h2>
        </div>
        <div className="teamMember_col">
          <div className="teamMember_col_col3" data-aos="fade-up">
            <div className="teamMember_col_col3_Images">
              <a href="#">
                <img
                  className="teamMember_col_col3_Images_one"
                  src={team1}
                  alt=""
                />
              </a>
              <div className="teamMember_col_col3_Images_social">
                <div className="teamMember_col_col3_Images_social_share">
                  <FaPlus />
                </div>
                <div className="teamMember_col_col3_Images_social_media">
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaFacebookF />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaXTwitter />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt">
              <h3 className="mt_mentorName">Troy A. Miller</h3>
              <p className="mt_position">Instructor</p>
            </div>
          </div>
          <div className="teamMember_col_col3" data-aos="fade-up">
            <div className="teamMember_col_col3_Images">
              <a href="#">
                <img
                  className="teamMember_col_col3_Images_one"
                  src={team2}
                  alt=""
                />
              </a>
              <div className="teamMember_col_col3_Images_social">
                <div className="teamMember_col_col3_Images_social_share">
                  <FaPlus />
                </div>
                <div className="teamMember_col_col3_Images_social_media">
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaFacebookF />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaXTwitter />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt">
              <h3 className="mt_mentorName">Michel D. Cornelius</h3>
              <p className="mt_position">Instructor</p>
            </div>
          </div>
          <div className="teamMember_col_col3" data-aos="fade-up">
            <div className="teamMember_col_col3_Images">
              <a href="#">
                <img
                  className="teamMember_col_col3_Images_one"
                  src={team3}
                  alt=""
                />
              </a>
              <div className="teamMember_col_col3_Images_social">
                <div className="teamMember_col_col3_Images_social_share">
                  <FaPlus />
                </div>
                <div className="teamMember_col_col3_Images_social_media">
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaFacebookF />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaXTwitter />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt">
              <h3 className="mt_mentorName">George A. Cambell</h3>
              <p className="mt_position">Instructor</p>
            </div>
          </div>
          <div className="teamMember_col_col3" data-aos="fade-up">
            <div className="teamMember_col_col3_Images">
              <a href="#">
                <img
                  className="teamMember_col_col3_Images_one"
                  src={team4}
                  alt=""
                />
              </a>
              <div className="teamMember_col_col3_Images_social">
                <div className="teamMember_col_col3_Images_social_share">
                  <FaPlus />
                </div>
                <div className="teamMember_col_col3_Images_social_media">
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaFacebookF />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaXTwitter />
                  </div>
                  <div className="teamMember_col_col3_Images_social_media_network">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt">
              <h3 className="mt_mentorName">Grace R. Sandoval</h3>
              <p className="mt_position">Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
