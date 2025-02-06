import React from 'react';
import CoursesList from "../../CoursesList";
import CoursesArea from "../../../../component/CoursesArea";
import coursImg from "../../../../assests/images/courses13.webp";
import {FaStar} from "react-icons/fa";
import lessonBlack from "../../../../assests/images/lessons-dark.svg";
import lessonUser from "../../../../assests/images/user-dark.svg";
import coursImg2 from "../../../../assests/images/courses14.webp";
import coursImg3 from "../../../../assests/images/courses15.webp";
import coursImg4 from "../../../../assests/images/courses16.webp";
import coursImg5 from "../../../../assests/images/courses17.webp";
import coursImg6 from "../../../../assests/images/courses18.webp";

const ListCourse = () => {
    return (
        <>
            <CoursesList/>
            <div className="container">
                <div className="coursesArea_headings_boxs">
                    <div className="coursesArea_headings_boxs_col5" data-aos="fade-up">
                        <div className="coursesArea_headings_boxs_col5_coursInfo">
                            <div className="coursesArea_headings_boxs_col5_coursInfo_CoursImg">
                                <img className="coursesArea_headings_boxs_col5_coursInfo_CoursImg_pho"
                                     src={coursImg} alt=""/>
                            </div>
                            <div className="coursesArea_headings_boxs_col5_coursInfo_cont">
                                <div className="coursesArea_headings_boxs_col5_coursInfo_cont_free">
                                    <span>Free</span>
                                    <div style={{display: "flex", gap: "5px"}}>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                    </div>
                                </div>
                                <h3 className="coursesArea_headings_boxs_col5_coursInfo_cont_basic">Basic
                                    Fundamentals of Interior & Graphics Design</h3>

                                <div className="flexs">
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonBlack} alt=""/>
                                            2 Lessons
                                        </div>
                                    </div>
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonUser} alt=""/>
                                            4k Students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coursesArea_headings_boxs_col5" data-aos="fade-up">
                        <div className="coursesArea_headings_boxs_col5_coursInfo">
                            <div className="coursesArea_headings_boxs_col5_coursInfo_CoursImg">
                                <img className="coursesArea_headings_boxs_col5_coursInfo_CoursImg_pho"
                                     src={coursImg2} alt=""/>
                            </div>
                            <div className="coursesArea_headings_boxs_col5_coursInfo_cont">
                                <div className="coursesArea_headings_boxs_col5_coursInfo_cont_free">
                                    <span>$24.33</span>
                                    <div style={{display: "flex", gap: "5px"}}>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                    </div>
                                </div>
                                <h3 className="coursesArea_headings_boxs_col5_coursInfo_cont_basic">Increasing
                                    Engagement with Instagram & Facebook</h3>

                                <div className="flexs">
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonBlack} alt=""/>
                                            2 Lessons
                                        </div>
                                    </div>
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonUser} alt=""/>
                                            4k Students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coursesArea_headings_boxs">
                    <div className="coursesArea_headings_boxs_col5" data-aos="fade-up">
                        <div className="coursesArea_headings_boxs_col5_coursInfo">
                            <div className="coursesArea_headings_boxs_col5_coursInfo_CoursImg">
                                <img className="coursesArea_headings_boxs_col5_coursInfo_CoursImg_pho"
                                     src={coursImg3} alt=""/>
                            </div>
                            <div className="coursesArea_headings_boxs_col5_coursInfo_cont">
                                <div className="coursesArea_headings_boxs_col5_coursInfo_cont_free">
                                    <span>$37.88</span>
                                    <div style={{display: "flex", gap: "5px"}}>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                    </div>
                                </div>
                                <h3 className="coursesArea_headings_boxs_col5_coursInfo_cont_basic">Introduction to
                                    Color Theory & Basic UI/UX</h3>

                                <div className="flexs">
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonBlack} alt=""/>
                                            2 Lessons
                                        </div>
                                    </div>
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonUser} alt=""/>
                                            4k Students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coursesArea_headings_boxs_col5" data-aos="fade-up">
                        <div className="coursesArea_headings_boxs_col5_coursInfo">
                            <div className="coursesArea_headings_boxs_col5_coursInfo_CoursImg">
                                <img className="coursesArea_headings_boxs_col5_coursInfo_CoursImg_pho"
                                     src={coursImg4} alt=""/>
                            </div>
                            <div className="coursesArea_headings_boxs_col5_coursInfo_cont">
                                <div className="coursesArea_headings_boxs_col5_coursInfo_cont_free">
                                    <span>$32.15</span>
                                    <div style={{display: "flex", gap: "5px"}}>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                    </div>
                                </div>
                                <h3 className="coursesArea_headings_boxs_col5_coursInfo_cont_basic">Financial Security
                                    Thinking and Principles Theory</h3>

                                <div className="flexs">
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonBlack} alt=""/>
                                            2 Lessons
                                        </div>
                                    </div>
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonUser} alt=""/>
                                            4k Students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coursesArea_headings_boxs">
                    <div className="coursesArea_headings_boxs_col5" data-aos="fade-up">
                        <div className="coursesArea_headings_boxs_col5_coursInfo">
                            <div className="coursesArea_headings_boxs_col5_coursInfo_CoursImg">
                                <img className="coursesArea_headings_boxs_col5_coursInfo_CoursImg_pho"
                                     src={coursImg5} alt=""/>
                            </div>
                            <div className="coursesArea_headings_boxs_col5_coursInfo_cont">
                                <div className="coursesArea_headings_boxs_col5_coursInfo_cont_free">
                                    <span>$37.88</span>
                                    <div style={{display: "flex", gap: "5px"}}>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                    </div>
                                </div>
                                <h3 className="coursesArea_headings_boxs_col5_coursInfo_cont_basic">Logo Design: From
                                    Concept to Presentation</h3>

                                <div className="flexs">
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonBlack} alt=""/>
                                            2 Lessons
                                        </div>
                                    </div>
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonUser} alt=""/>
                                            4k Students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coursesArea_headings_boxs_col5" data-aos="fade-up">
                        <div className="coursesArea_headings_boxs_col5_coursInfo">
                            <div className="coursesArea_headings_boxs_col5_coursInfo_CoursImg">
                                <img className="coursesArea_headings_boxs_col5_coursInfo_CoursImg_pho"
                                     src={coursImg6} alt=""/>
                            </div>
                            <div className="coursesArea_headings_boxs_col5_coursInfo_cont">
                                <div className="coursesArea_headings_boxs_col5_coursInfo_cont_free">
                                    <span>$41.80</span>
                                    <div style={{display: "flex", gap: "5px"}}>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                        <FaStar className="star"/>
                                    </div>
                                </div>
                                <h3 className="coursesArea_headings_boxs_col5_coursInfo_cont_basic">Professional Ceramic
                                    Molding for Beginners</h3>

                                <div className="flexs">
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonBlack} alt=""/>
                                            2 Lessons
                                        </div>
                                    </div>
                                    <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson">
                                        <div className="coursesArea_headings_boxs_col5_coursInfo_cont_lesson_dark">
                                            <img src={lessonUser} alt=""/>
                                            4k Students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCourse;