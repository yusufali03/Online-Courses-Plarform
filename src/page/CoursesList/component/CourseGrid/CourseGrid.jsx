import React, {useEffect, useState} from 'react';
import CoursesList from "../../coursesList";
import "./courseGrid.scss";
import course7 from "../../../../assests/images/course/courses7.webp"
import lessons from "../../../../assests/images/course/lessons.svg"
import data from "../../data";

const CourseGrid = () => {

    const courses = data[0]?.squares || [];

    console.log(courses); // Ma'lumotni konsolda tekshirish
    return (
        <>
            <CoursesList/>
            <div className="courseGrid">
                <div className="container">
                    <div className="courseGrid_rowList">
                        {courses.map((item, index) => (
                            <div className="courseGrid_rowList_colList-4">
                                {console.log(courses.headImages)}
                                <div key="index" className="courseGrid_rowList_colList-4_cardCourse">
                                    <div className="courseImag">
                                        <img src={courses.headImages} alt=""/>
                                        <div className="coursePrice">{courses.headText}</div>
                                    </div>
                                    <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                        <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">{courses.price}</h6>
                                        <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic
                                            Fundamentals of Interior & Graphics Design</h3>
                                        <div
                                            className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">
                                            <div
                                                className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">
                                                <img src={lessons} alt=""/>
                                                2 Lessons
                                            </div>
                                            <div
                                                className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">
                                                <img src={lessons} alt=""/>
                                                4h 30m
                                            </div>
                                            <div
                                                className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">
                                                <img src={lessons} alt=""/>
                                                4.8
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/*<div className="courseGrid_rowList_colList-4">*/}
                        {/*    <div className="courseGrid_rowList_colList-4_cardCourse">*/}
                        {/*        <div className="courseImag">*/}
                        {/*            <img src={course7} alt=""/>*/}
                        {/*            <div className="coursePrice">Art & Design</div>*/}
                        {/*        </div>*/}
                        {/*        <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">*/}
                        {/*            <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>*/}
                        {/*            <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic*/}
                        {/*                Fundamentals of Interior & Graphics Design</h3>*/}
                        {/*            <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">*/}
                        {/*                <div*/}
                        {/*                    className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">*/}
                        {/*                    <img src={lessons} alt=""/>*/}
                        {/*                    2 Lessons*/}
                        {/*                </div>*/}
                        {/*                <div*/}
                        {/*                    className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">*/}
                        {/*                    <img src={lessons} alt=""/>*/}
                        {/*                    4h 30m*/}
                        {/*                </div>*/}
                        {/*                <div*/}
                        {/*                    className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">*/}
                        {/*                    <img src={lessons} alt=""/>*/}
                        {/*                    4.8*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="courseGrid_rowList_colList-4">*/}
                        {/*    <div className="courseGrid_rowList_colList-4_cardCourse">*/}
                        {/*        <div className="courseImag">*/}
                        {/*            <img src={course7} alt=""/>*/}
                        {/*            <div className="coursePrice">Art & Design</div>*/}
                        {/*        </div>*/}
                        {/*        <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">*/}
                        {/*            <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>*/}
                        {/*            <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic*/}
                        {/*                Fundamentals of Interior & Graphics Design</h3>*/}
                        {/*            <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">*/}
                        {/*                <div*/}
                        {/*                    className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">*/}
                        {/*                    <img src={lessons} alt=""/>*/}
                        {/*                    2 Lessons*/}
                        {/*                </div>*/}
                        {/*                <div*/}
                        {/*                    className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">*/}
                        {/*                    <img src={lessons} alt=""/>*/}
                        {/*                    4h 30m*/}
                        {/*                </div>*/}
                        {/*                <div*/}
                        {/*                    className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons_blocks">*/}
                        {/*                    <img src={lessons} alt=""/>*/}
                        {/*                    4.8*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseGrid;