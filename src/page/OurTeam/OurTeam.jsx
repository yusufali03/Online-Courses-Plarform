import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import "./OurTeam.scss";

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
        </div>
        {teamItems.map((member, index) => (
          <div key={index} className="member-card">
            <a href={member.link}>
              <img src={member.img} alt={member.name} />
            </a>
            <div class="content text-center">
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
      </section>
    </div>
  );
};

export default OurTeam;
