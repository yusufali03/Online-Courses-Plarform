import React, {useEffect} from 'react';
import "./style.scss";
import line from "../../assests/images/bottom_line.svg"
import testimonialImg3 from "../../assests/images/testimonial-image3.webp"

import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../Carousel/Carousel";

const Testimonial = () => {

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
        <div className="testimonial">
            <div className="container">
                <div className="testimonial_row" data-aos="fade-up" data-aos="fade-up">
                    <div className="testimonial_row_col-5">
                        <span className="testimonial_row_col-5_tesSub" data-aos="fade-up">Testimonials</span>
                        <h2 className="testimonial_row_col-5_tesTitle" data-aos="fade-up">Voices of Success: Hear <br/> from Our <span
                            className="testimonial_row_col-5_tesTitle_tesColor">Students <img
                            className="testimonial_row_col-5_tesTitle_tesColor_tesLine" src={line} alt=""/>
                        </span>
                        </h2>
                        <Carousel/>
                    </div>
                    <div className="testimonial_row_col-5" data-aos="fade-up">
                        <div className="testimonial_row_col-5_tesImg"><img width="100%" src={testimonialImg3} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;