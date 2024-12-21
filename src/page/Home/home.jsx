import React from 'react'
import Lines from "../../assests/images/lines.svg"
import Burchak from "../../assests/images/burchak.webp"
import shape from "../../assests/images/shape.svg"
import banner from "../../assests/images/banner.webp"
import bannerWidget from "../../assests/images/banner-widget.webp"
import "./home.scss"

export default function Home() {

    return (
        <div className='home'>
            <div className="container">
                <div className="flex">
                    {/*left*/}
                    <div className="home_card">
                        <div className="home_card_animation">
                            <img className="home_card_animation_lines" src={Lines} alt="lines"/>
                            <img className="home_card_animation_triangle" src={Burchak} alt=""/>
                        </div>
                        {/*text*/}
                        <div className="home_card_title">
                            <p className="home_card_title_gradient">Online Education Websayt</p>
                            <h2 className="home_card_title_bigGradient">Innovate With Digital <span
                                className="home_card_title_bigGradient_colors">Expertise</span></h2>
                            <p className="home_card_title_des">Embark on a Journey of Digital Discovery: Expert-Led
                                Courses Designed to Equip</p>
                            <div className="home_card_title_dot">
                                <img className="home_card_title_dot_shape" src={shape} alt="shape"/>
                            </div>
                        </div>
                    </div>
                    {/*    right*/}
                    <div className="home_box">
                        <div className="home_box_banner">
                            <div className="home_box_banner_dot">
                                <img className="home_box_banner_dot_shape" src={shape} alt="shape"/>
                            </div>
                            <img className="home_box_banner_mainBanner" width="100%" src={banner} alt="banner"/>
                            {/*<div className="home_box_banner_bag">*/}
                                <img width="100%" className="home_box_banner_bag_widget" src={bannerWidget} alt=""/>
                            {/*</div>*/}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
