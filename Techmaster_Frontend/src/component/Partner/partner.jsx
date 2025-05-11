import React, {useEffect} from 'react';
import "./partner.scss";
import partner1 from "../../assests/images/partner1.svg";
import partner2 from "../../assests/images/partner2.svg";
import partner3 from "../../assests/images/partner3.svg";
import partner4 from "../../assests/images/partner4.svg";
import partner5 from "../../assests/images/partner5.svg";
import video_shape from "../../assests/images/video-shape.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";
const Partner = () => {
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
        <div className="partner">
            <div className="partner_wrap">
                <div className="container">
                    <Swiper
                        slidesPerView={5} // Default number of slides to show
                        spaceBetween={50} // Default space between slides
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            // When window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // When window width is >= 480px
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            // When window width is >= 640px
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40
                            },
                            // When window width is >= 1440px
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 50
                            }
                        }}
                    >
                        <SwiperSlide><img src={partner1} data-aos="fade-up" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={partner2} data-aos="fade-up" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={partner3} data-aos="fade-up" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={partner4} data-aos="fade-up" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={partner5} data-aos="fade-up" alt=""/></SwiperSlide>
                    </Swiper>

                    <div className="partner_wrap_video" data-aos="fade-up">
                        <div className="partner_wrap_video_col-4"><h1 className="partner_wrap_video_col-4_into" data-aos="fade-up">INTRO</h1></div>
                        <div className="partner_wrap_video_col-4">
                            <div className="partner_wrap_video_col-4_videoShape" data-aos="fade-up">
                                <img className="partner_wrap_video_col-4_videoShape_vimg" src={video_shape} alt=""/>
                                <a href="#" className="partner_wrap_video_col-4_videoShape_playBut">
                                    <FaPlay />

                                </a>
                            </div>
                        </div>
                        <div className="partner_wrap_video_col-4">
                            <h1 className="partner_wrap_video_col-4_into" data-aos="fade-up">VIDEO</h1></div></div>
                </div>
            </div>
        </div>
    );
};

export default Partner;