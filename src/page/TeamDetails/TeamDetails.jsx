import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import "./TeamDetails.scss";
import TeamUserInfo from "../../component/TeamUserInfo/TeamUserInfo";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import CourseCard from "../../component/CourseCard/CourseCard";
import AOS from "aos";
import CountUp from "react-countup";

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
  const titles = "Team Details";

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
    <div className="wrapper">
      <PageTitleArea titles={titles} />
      <section className="container">
        <TeamUserInfo />
        <div className="team-right-sidebar">
          <div className="team-right-info">
            <div className="description" data-aos="fade-up">
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
                <div
                  key={card.id}
                  className="rate-card"
                  data-aos="fade-up"
                  data-aos-delay={card.id * 100}
                >
                  <div className="icon">
                    <img src={card.icon} alt="icon" />
                  </div>
                  <h3>
                    <span className="counter">
                      <CountUp start={0} end={card.count} duration={8} />
                    </span>
                    +
                  </h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle
              subtitle=" Courses by Julia B. Corbin "
              text="Choose Our Top"
              text_primary=" Courses shape"
            />
            <CourseCard />
          </div>
        </div>
        <div className="shapes">
          <img
            data-aos="fade-up"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape26.svg"
            alt=""
            className="shape26"
          />
          <img
            data-aos="fade-up"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape27.svg"
            alt=""
            className="shape27"
          />
          <img
            data-aos="fade-up"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape28.svg"
            alt=""
            className="shape28"
          />
          <img
            data-aos="fade-up"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape29.svg"
            alt=""
            className="shape29"
          />
          <img
            data-aos="fade-up"
            src="https://demo.themeies.com/edugen-html/assets/images/shapes/shape30.svg"
            alt=""
            className="shape30"
          />
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
