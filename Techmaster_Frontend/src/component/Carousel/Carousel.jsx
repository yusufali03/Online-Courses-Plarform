import React, {useEffect} from 'react';
import testimonialImg1 from "../../assests/images/testimonial6.webp";
import testimonialImg2 from "../../assests/images/testimonial13.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "./carousel.scss";
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";

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
const Carousel = () => {
    useEffect(() => {
        const prevButton = document.querySelector(".carousel_owl_custom-prev");
        const nextButton = document.querySelector(".carousel_owl_custom-next");


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
        <>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".carousel_owl_custom-next",
                    prevEl: ".carousel_owl_custom-prev",
                }}
                spaceBetween={50}
                slidesPerView={1}
                className="carousel"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div style={{textAlign: "center",}}>
                            <p className="carousel_tesText" data-aos="fade-up">{testimonial.text}</p>
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
                                    <h3 className="carousel_tesName">{testimonial.name}</h3>
                                    <span className="carousel_tesRole" >{testimonial.role}</span>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="carousel_owl" data-aos="fade-up">
                <div className="carousel_owl_custom-prev"><FaArrowLeft /></div>
                <div className="carousel_owl_custom-next"><FaArrowRight /></div>
            </div>
        </>
    );
};

export default Carousel;