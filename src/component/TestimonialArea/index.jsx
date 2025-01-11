import React, {useEffect} from 'react';
import "./style.scss";
import line from "../../assests/images/bottom_line.svg"
import testimonialImg1 from "../../assests/images/testimonial6.webp"
import testimonialImg2 from "../../assests/images/testimonial13.webp"
import testimonialImg3 from "../../assests/images/testimonial-image3.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
const testimonials = [
    {
        text: "Enrolling in courses at Edugen was the best decision I made for my career. The instructors were incredibly knowledgeable and supportive, every step of the learning process. I was able to land a job in my desired field even before completing the course. I highly recommend [Institute Name] to anyone looking to upskill and advance their career in the digital world.",
        name: "Krystal France",
        role: "Ex-Student",
        avatar: testimonialImg1, // Example avatar
    },{
        text: "Enrolling in courses at Edugen was the best decision I made for my career. The instructors were incredibly knowledgeable and supportive, every step of the learning process. I was able to land a job in my desired field even before completing the course. I highly recommend [Institute Name] to anyone looking to upskill and advance their career in the digital world.",
        name: "Krystal France",
        role: "Ex-Student",
        avatar: testimonialImg2, // Example avatar
    },
    // Add more testimonials here
];
const Testimonial = () => {
    useEffect(() => {
        const prevButton = document.querySelector(".testimonial_row_col-5_carousel_owl_custom-prev");
        const nextButton = document.querySelector(".testimonial_row_col-5_carousel_owl_custom-next");

        console.log(prevButton, nextButton);

        if (!prevButton || !nextButton) {
            console.error("Navigation buttons are not found!");
        }
    }, []);
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

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".testimonial_row_col-5_carousel_owl_custom-next",
                                prevEl: ".testimonial_row_col-5_carousel_owl_custom-prev",
                            }}
                            spaceBetween={50}
                            slidesPerView={1}
                            className="testimonial_row_col-5_carousel"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{textAlign: "center",}}>
                                        <p className="testimonial_row_col-5_carousel_tesText" data-aos="fade-up">{testimonial.text}</p>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            textAlign: "left",
                                            marginTop: "50px"
                                        }}>
                                            <img
                                                src={testimonial.avatar} data-aos="fade-up"
                                                alt={testimonial.name}
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    borderRadius: "100%",
                                                    marginRight: "10px",
                                                }}
                                            />
                                            <div>
                                                <h3 className="testimonial_row_col-5_carousel_tesName">{testimonial.name}</h3>
                                                <span className="testimonial_row_col-5_carousel_tesRole" >{testimonial.role}</span>
                                            </div>
                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="testimonial_row_col-5_carousel_owl" data-aos="fade-up">
                            <div className="testimonial_row_col-5_carousel_owl_custom-prev">←</div>
                            <div className="testimonial_row_col-5_carousel_owl_custom-next">→</div>
                        </div>
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