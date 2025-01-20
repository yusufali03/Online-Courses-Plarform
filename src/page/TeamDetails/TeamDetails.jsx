import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import "./TeamDetails.scss";
import TeamUserInfo from "../../component/TeamUserInfo/TeamUserInfo";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import CourseCard from "../../component/CourseCard/CourseCard";


const rateCards = [
  {
    id: 1,
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/rate1.svg",
    count: "45",
    description: "Enrolled Students",
  },
  {
    id: 2,
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/rate2.svg",
    count: "24",
    description: "Academic Programs",
  },
  {
    id: 3,
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/rate3.svg",
    count: "8",
    description: "Award Winning",
  },
];

const TeamDetails = () => {
  return (
    <div className="wrapper">
      <PageTitleArea />
      <section className="container">
        <TeamUserInfo />
        <div className="team-right-sidebar">
          <div className="team-right-info">
            <div className="description">
              <div class="title">
                <h3>Julia B. Corbin</h3>
                <p>Instructor</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vulputate pellentesque commodo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <p>
                Donec faucibus imperdiet libero, at lacinia metus. Quisque
                finibus ante non arcu aliquet, nec vestibulum dolor condimentum.
                Nulla facilisi. Vestibulum porttitor vestibulum est eu
                dignissim. Quisque blandit elementum convallis. Ut et mi
                hendrerit, posuere purus ac, facilisis nibh.
              </p>
            </div>
            <div className="rate-cards">
              {rateCards.map((card) => (
                <div key={card.id} className="rate-card">
                  <div className="icon">
                    <img src={card.icon} alt="icon" />
                  </div>
                  <h3>
                    <span className="counter">{card.count}</span>+
                  </h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle />
            <CourseCard />
          </div>
        </div>
        <div className="shapes">
          <img src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape26.svg" alt="" className="shape26" />
          <img src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape27.svg" alt="" className="shape27" />
          <img src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape28.svg" alt="" className="shape28" />
          <img src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape29.svg" alt="" className="shape29" />
          <img src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape30.svg" alt="" className="shape30" />
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
