import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import "./OurTeam.scss";
import leftSmall from "../../assests/images/left-small.svg"


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
  return (
    <div>
      <PageTitleArea />
      <section className="team-area">
        <div className="info">
          <SectionTitle />
          <p>
            Lorem Ipsum&nbsp;is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has
          </p>
          <button href="team-details.html" class="">
            <img
              src="https://demo.themeies.com/edugen-html/assets/images/icon/left-bold.svg"
              alt="icon"
            />
            Join Our Team
          </button>
          <button className="aboutArea_texts_section_send">Learn More <img src={leftSmall} alt=""/></button>
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
                    <i class="ri-facebook-fill">F</i>
                  </a>
                </li>
                <li class="">
                  <a href="https://x.com/home" target="_blank">
                    <i class="ri-twitter-x-fill">X</i>
                  </a>
                </li>
                <li class="">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i class="ri-linkedin-fill">In</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section >
      <section className="learning-area">
        <div className="title">

          <SectionTitle />
        </div>
        <div className="shapes">
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
        <div className="cast">
          <div className="live-info">
            <span className="red_circel"></span>
            <span className="live">LIVE</span>
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
            <button className="mute">mute</button>
            <button className="end">end</button>
            <button className="video">video</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
