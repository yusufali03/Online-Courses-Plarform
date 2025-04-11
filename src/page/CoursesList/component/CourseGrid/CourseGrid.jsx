import React from 'react';
import "./courseGrid.scss";
import course7 from "../../../../assests/images/course/courses7.webp"
import course8 from "../../../../assests/images/course/courses8.webp"
import lessons from "../../../../assests/images/course/lessons.svg"

const CourseGrid = () => {

    return (
        <>
            {/* <CoursesList/> */}
            <div className="courseGrid">
                <div className="container">
                    <div className="courseGrid_rowList">
                        <div className="courseGrid_rowList_colList-4">
                            <div key="index" className="courseGrid_rowList_colList-4_cardCourse">
                                <div className="courseImag">
                                    <img src={course7} alt=""/>
                                    <div className="coursePrice">Art & Design</div>
                                </div>
                                <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                    <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>
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
                        <div className="courseGrid_rowList_colList-4">
                            <div className="courseGrid_rowList_colList-4_cardCourse">
                                <div className="courseImag">
                                    <img src={course8} alt=""/>
                                    <div className="coursePrice">Art & Design</div>
                                </div>
                                <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                    <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>
                                    <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic
                                        Fundamentals of Interior & Graphics Design</h3>
                                    <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">
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
                        <div className="courseGrid_rowList_colList-4">
                            <div className="courseGrid_rowList_colList-4_cardCourse">
                                <div className="courseImag">
                                    <img src={course7} alt=""/>
                                    <div className="coursePrice">Art & Design</div>
                                </div>
                                <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                    <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>
                                    <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic
                                        Fundamentals of Interior & Graphics Design</h3>
                                    <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">
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
                    </div>
                    <div className="courseGrid_rowList">
                        <div className="courseGrid_rowList_colList-4">
                            <div key="index" className="courseGrid_rowList_colList-4_cardCourse">
                                <div className="courseImag">
                                    <img src={course7} alt=""/>
                                    <div className="coursePrice">Art & Design</div>
                                </div>
                                <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                    <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>
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
                        <div className="courseGrid_rowList_colList-4">
                            <div className="courseGrid_rowList_colList-4_cardCourse">
                                <div className="courseImag">
                                    <img src={course8} alt=""/>
                                    <div className="coursePrice">Art & Design</div>
                                </div>
                                <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                    <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>
                                    <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic
                                        Fundamentals of Interior & Graphics Design</h3>
                                    <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">
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
                        <div className="courseGrid_rowList_colList-4">
                            <div className="courseGrid_rowList_colList-4_cardCourse">
                                <div className="courseImag">
                                    <img src={course7} alt=""/>
                                    <div className="coursePrice">Art & Design</div>
                                </div>
                                <div className="courseGrid_rowList_colList-4_cardCourse_courseContent">
                                    <h6 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch6">$24.99</h6>
                                    <h3 className="courseGrid_rowList_colList-4_cardCourse_courseContent_ch3">Basic
                                        Fundamentals of Interior & Graphics Design</h3>
                                    <div className="courseGrid_rowList_colList-4_cardCourse_courseContent_courseIncons">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseGrid;