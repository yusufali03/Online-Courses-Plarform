import React, {useEffect} from 'react';
import "./style.scss";
import line from "../../assests/images/bottom_line.svg";
import shape from "../../assests/images/shape10.svg";
import blog6 from "../../assests/images/blog6.webp";
import blog25 from "../../assests/images/shape25.svg";
import blog7 from "../../assests/images/blog7.webp";
import blog8 from "../../assests/images/blog8.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const OurBlog = () => {
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
        <div className="ourBlog">
            <div className="container">
                <div className="ourBlog_sectionSub" data-aos="fade-up" data-aos="fade-up">
                    <span className="ourBlog_sectionSub_ourTitle" data-aos="fade-up">Our Blog</span>
                    <h2 className="ourBlog_sectionSub_ourSub" data-aos="fade-up">Read Our Latest <span
                        className="ourBlog_sectionSub_ourSub_ourLine">Blog <img
                        className="ourBlog_sectionSub_ourSub_ourLine_ourLineImg" src={line} alt=""/></span></h2>
                    <div className="ourBlog_sectionSub_shape" data-aos="fade-up">
                        <img src={shape} alt=""/>
                    </div>
                </div>
                <div className="ourBlog_ourCard">
                    <div className="ourBlog_ourCard_ourCol-5" data-aos="fade-up">
                        <div className="ourBlog_ourCard_ourCol-5_ourBox">
                            <div className="ourBlog_ourCard_ourCol-5_ourBox_blogImg" data-aos="fade-up">
                                <img width="100%" src={blog6} alt=""/>
                            </div>
                            <div className="ourBlog_ourCard_ourCol-5_ourBox_blogContent" data-aos="fade-up">
                                <div className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList">
                                    <div className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList_listDate">JUNE
                                        4, 2024
                                    </div>
                                    <button
                                        className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList_listButton">Technical
                                    </button>
                                </div>
                                <h3 className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogTitle" data-aos="fade-up">
                                    Top 5 Programming Languages to Learn for a Thriving Tech Career
                                </h3>
                                <p className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogP" data-aos="fade-up">Lorem Ipsum is simply
                                    dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since</p>
                            </div>

                        </div>
                        <div className="ourBlog_ourCard_ourCol-5_shape25" data-aos="fade-up">
                            <img src={blog25} alt=""/>
                        </div>
                    </div>
                    <div className="ourBlog_ourCard_ourCol-5">
                        <div className="ourBlog_ourCard_ourCol-5_ourBox" data-aos="fade-up">
                            <div className="flexs">
                                <div className="ourBlog_ourCard_ourCol-5_ourBox_blogRimg">
                                    <img data-aos="fade-up" width="100%" src={blog7} alt=""/>
                                </div>
                                <div className="ourBlog_ourCard_ourCol-5_ourBox_blogText">
                                    <div className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList" data-aos="fade-up">
                                        <div
                                            className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList_listDate">JUNE
                                            4, 2024
                                        </div>
                                        <button
                                            className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList_listButton">Technical
                                        </button>
                                    </div>
                                    <h3 className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogTitle" data-aos="fade-up">
                                        The Ultimate Guide to Boosting Your SEO in 2024
                                    </h3>
                                    <p data-aos="fade-up" className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogP">Lorem Ipsum is
                                        simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                        </div>
                        <div className="ourBlog_ourCard_ourCol-5_ourBox" data-aos="fade-up">
                            <div className="flexs">
                                <div className="ourBlog_ourCard_ourCol-5_ourBox_blogRimg">
                                    <img data-aos="fade-up" width="100%" src={blog8} alt=""/>
                                </div>
                                <div className="ourBlog_ourCard_ourCol-5_ourBox_blogText">
                                    <div className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList" data-aos="fade-up">
                                        <div
                                            className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList_listDate">JUNE
                                            4, 2024
                                        </div>
                                        <button
                                            className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogList_listButton">Technical
                                        </button>
                                    </div>
                                    <h3 className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogTitle" data-aos="fade-up">
                                        The Ultimate Guide to Boosting Your SEO in 2024
                                    </h3>
                                    <p data-aos="fade-up" className="ourBlog_ourCard_ourCol-5_ourBox_blogContent_blogP">Lorem Ipsum is
                                        simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;