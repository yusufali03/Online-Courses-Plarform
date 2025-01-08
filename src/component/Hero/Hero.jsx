import React, {useEffect} from 'react';
import Lines from "../../assests/images/lines.svg"
import Burchak from "../../assests/images/burchak.webp"
import shape from "../../assests/images/shape.svg"
import banner from "../../assests/images/banner.webp"
import line from "../../assests/images/bottom_line.svg"
import leftBold from "../../assests/images/left-bold-black.svg"
import MessageIcon from "../../assests/images/message-icon.svg"
import "./style.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import {FaPlayCircle} from "react-icons/fa";
const Hero = () => {
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
        <div className='hero'>
            <div className="container">
                <div className="flex">
                    {/*left*/}
                    <div className="hero_card">
                        <div className="hero_card_animation">
                            <img className="hero_card_animation_lines" src={Lines} alt="lines"/>
                            <img className="hero_card_animation_triangle" src={Burchak} alt=""/>
                        </div>
                        {/*text*/}
                        <div className="hero_card_title" data-aos="fade-up">
                            <p className="hero_card_title_gradient">Online Education Websayt</p>
                            <h2 className="hero_card_title_bigGradient">Innovate With <br/> Digital <span
                                className="hero_card_title_bigGradient_colors">Expertise <img
                                className="hero_card_title_bigGradient_colors_lines" src={line} alt=""/>
                            </span></h2>
                            <p className="hero_card_title_des">Embark on a Journey of Digital Discovery: Expert-Led
                                Courses Designed to Equip</p>
                            <div className="hero_card_title_dot">
                                <img className="hero_card_title_dot_shape" src={shape} alt="shape"/>
                            </div>
                            <div className="hero_card_title_buttonList">
                                <a href="#" className="hero_card_title_buttonList_btn">
                                    <img className="hero_card_title_buttonList_btn_imgs" src={leftBold} alt=""/>
                                    Enroll Now
                                </a>
                                <a href="#" className="hero_card_title_buttonList_play">
                                    <FaPlayCircle className="hero_card_title_buttonList_play_buttonPlay"/>

                                </a>
                            </div>

                        </div>

                    </div>
                    {/*    right*/}
                    <div className="hero_box">
                        <div className="hero_box_banner">
                            <div className="hero_box_banner_dot">
                                <img className="hero_box_banner_dot_shape" src={shape} alt="shape"/>
                            </div>
                            <img className="hero_box_banner_mainBanner" data-aos="fade-up" width="100%" height="100%"
                                 src={banner} alt="banner"/>
                            {/*<div className="home_box_banner_chat">Chat with mentor</div>*/}
                        </div>
                        <div className="hero_box_info">
                            <div className="hero_box_info_content">
                                <h3 className="hero_box_info_content_h33">Chat with a mentor</h3>
                                <span className="hero_box_info_content_dess">Find your mentor here</span>
                            </div>
                            <div className="hero_box_info_messageIcon">
                                <img src={MessageIcon} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;