import React, {useEffect} from "react";
import "./PageTitleArea.scss"
import page1 from "../../assests/images/pages1.webp";
import page2 from "../../assests/images/pages2.webp";
import page3 from "../../assests/images/pages3.webp";
import page4 from "../../assests/images/pages4.svg";
import page5 from "../../assests/images/pages5.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const PageTitleArea = ({titles}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      offset: 100,    // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 50,      // Animatsiya kechikishi (ms)
      once: true,     // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);
  return (
      <>
        <div className="pageTitleArea">
          <div className="pageTitleArea_titleHead">
            <div className="container">
              <div className="pageTitleArea_titleHead_aboutContent">
                <h2 className="pageTitleArea_titleHead_aboutContent_aboutus" data-aos="fade-up">{titles}</h2>
                <div className="pageTitleArea_titleHead_aboutContent_aboutList" data-aos="fade-up">
                  <div className="pageTitleArea_titleHead_aboutContent_aboutList_textAbout">Home</div>
                </div>
                <div className="pageTitleArea_titleHead_aboutContent_colChange" data-aos="fade-up">{titles}</div>
              </div>
            </div>
            <div className="pageTitleArea_titleHead_pages1" data-aos="fade-up">
              <img src={page1} alt=""/>
            </div>
            <div className="pageTitleArea_titleHead_pages2">
              <img src={page2} alt=""/>
            </div>
            <div className="pageTitleArea_titleHead_pages3">
              <img src={page3} alt=""/>
            </div>
            <div className="pageTitleArea_titleHead_pages4" data-aos="fade-up">
              <img src={page4} alt=""/>
            </div>
            <div className="pageTitleArea_titleHead_pages5" data-aos="fade-up">
              <img src={page5} alt=""/>
            </div>
          </div>

        </div>
      </>
  );
};

export default PageTitleArea;
