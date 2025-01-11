import React, {useEffect} from 'react';
import "./style.scss"
import leftBold from "../../../assests/images/left-bold-black.svg";
import testimonial14 from "../../../assests/images/testimonial14.webp";
import testimonial15 from "../../../assests/images/testimonial15.webp";
import testimonial16 from "../../../assests/images/testimonial16.webp";
import testimonial17 from "../../../assests/images/testimonial17.webp";
import shape24 from "../../../assests/images/burchak.webp";
import shapeFooter from "../../../assests/images/footer-shape3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const TestimonialsTwo = () => {
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
            <div className="testimonialsTwo" data-aos="fade-up">
                <div className="container">
                    <div className="testimonialsTwo_nextInfo" data-aos="fade-up">
                        <div className="testimonialsTwo_nextInfo_testSub">
                            <h2 className="testimonialsTwo_nextInfo_testSub_nextTitle" data-aos="fade-up">
                                Ready to Elevate Your Skills? <br/> Join Our Courses Today
                            </h2>
                            <p style={{marginBottom: "20px"}} data-aos="fade-up">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. <br/> Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since</p>
                            <a href="#" className="hero_card_title_buttonList_btn" data-aos="fade-up" style={{marginTop: "25px"}}>
                                <img className="hero_card_title_buttonList_btn_imgs" src={leftBold} alt=""/>
                                Enroll Now
                            </a>
                        </div>
                        <div className="testimonialsTwo_nextInfo_one" data-aos="fade-up">
                            <img width="150px" height="150px" src={testimonial14} alt=""/>
                        </div>
                        <div className="testimonialsTwo_nextInfo_two" data-aos="fade-up">
                            <img width="193px" height="100px" src={testimonial15} alt=""/>
                        </div>
                        <div className="testimonialsTwo_nextInfo_three" data-aos="fade-up">
                            <img width="193px" height="100px" src={testimonial16} alt=""/>
                        </div>
                        <div className="testimonialsTwo_nextInfo_four" data-aos="fade-up">
                            <img width="150px" height="150px" src={testimonial17} alt=""/>
                        </div>
                    </div>
                    <div className="testimonialsTwo_shape24">
                        <img src={shape24} alt=""/>
                    </div>
                </div>
                <div className="shapeFooter">
                    <img width="100%" height="100%" src={shapeFooter} alt=""/>
                </div>
            </div>

        </>
    );
};

export default TestimonialsTwo;