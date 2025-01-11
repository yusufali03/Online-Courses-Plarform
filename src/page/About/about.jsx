import React from 'react';
import "./about.scss";
import page1 from "../../assests/images/pages1.webp"
import page2 from "../../assests/images/pages2.webp"
import page3 from "../../assests/images/pages3.webp"
import page4 from "../../assests/images/pages4.svg"
import page5 from "../../assests/images/pages5.svg"
const About = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs_titleHead">
                <div className="container">
                    <div className="aboutUs_titleHead_aboutContent">
                        <h2 className="aboutUs_titleHead_aboutContent_aboutus">About Us</h2>
                        <div className="aboutUs_titleHead_aboutContent_aboutList">
                            <div className="aboutUs_titleHead_aboutContent_aboutList_textAbout">Home</div>
                        </div>
                        <div className="aboutUs_titleHead_aboutContent_colChange"> About Us</div>
                    </div>
                </div>
                <div className="aboutUs_titleHead_pages1">
                    <img src={page1} alt=""/>
                </div>
                <div className="aboutUs_titleHead_pages2">
                    <img src={page2} alt=""/>
                </div>
                <div className="aboutUs_titleHead_pages3">
                    <img src={page3} alt=""/>
                </div>
                <div className="aboutUs_titleHead_pages4">
                    <img src={page4} alt=""/>
                </div>
                <div className="aboutUs_titleHead_pages5">
                    <img src={page5} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default About;