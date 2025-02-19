import React, { useState, useEffect } from "react";
import "./coursesList.scss";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiListBullets } from "react-icons/pi";
import CoursesSidebar from "./component/CoursesSidebar/CoursesSidebar";


const CoursesList = () => {
    const titles = "Courses List";
    const [activeTab, setActiveTab] = useState("grid"); // Default "grid" view

    // URL ni tekshirish va activeTab ni sozlash
    useEffect(() => {
        const currentPath = window.location.pathname; // URL dan yo'nalishni olish
        if (currentPath.includes("grid")) {
            setActiveTab("grid");
        } else if (currentPath.includes("item")) {
            setActiveTab("list");
        }
    }, []);

    const handleClick = (view) => {
        setActiveTab(view); // Tanlangan ko'rinishni o'rnatish
    };

    return (
        <>
            <PageTitleArea titles={titles} />
            <div className="courses-list">
                <div className="container">
                    <div className="courses-list_grids">
                        <div className="courses-list_grids_colCours6">
                            <div className="courses-list_grids_colCours6_listCour">
                                <div className="courses-list_grids_colCours6_listCour_blocks">
                                    {/* Grid View Button */}
                                    <a
                                        href="/courses-list/grid"
                                        className={
                                            activeTab === "grid"
                                                ? "courses-list_grids_colCours6_listCour_blocks_listAss active"
                                                : "courses-list_grids_colCours6_listCour_blocks_listAss"
                                        }
                                        onClick={() => handleClick("grid")}
                                    >
                                        <HiOutlineSquares2X2 />
                                    </a>

                                    {/* List View Button */}
                                    <a
                                        href="/courses-list/item"
                                        className={
                                            activeTab === "list"
                                                ? "courses-list_grids_colCours6_listCour_blocks_listAss active"
                                                : "courses-list_grids_colCours6_listCour_blocks_listAss"
                                        }
                                        onClick={() => handleClick("list")}
                                    >
                                        <PiListBullets />
                                    </a>
                                    <a
                                        href="#"
                                        className="courses-list_grids_colCours6_listCour_blocks_listTes"
                                    >
                                        Showing 12 courses of 52
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="courses-list_grids_colCours6">
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <select className="courses-list_grids_colCours6_selec">
                                    <option
                                        className="courses-list_grids_colCours6_selec_opt"
                                        selected="selected"
                                    >
                                        Sort By: Popularity
                                    </option>
                                    <option
                                        className="courses-list_grids_colCours6_selec_opt"
                                        value="1"
                                    >
                                        Popularity One..
                                    </option>
                                    <option
                                        className="courses-list_grids_colCours6_selec_opt"
                                        value="2"
                                    >
                                        Popularity Two..
                                    </option>
                                    <option
                                        className="courses-list_grids_colCours6_selec_opt"
                                        value="3"
                                    >
                                        Popularity Three..
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Dinamik tarkib */}
                        {activeTab === "grid" && (
                            <div className="courses-grid">
                                {/* Grid View Tarkibi */}
                                <p>Grid View: Courses are displayed in a grid layout.</p>
                            </div>
                        )}
                        {activeTab === "list" && (
                            <div className="courses-item">
                                {/* List View Tarkibi */}
                                <p>List View: Courses are displayed in a list layout.</p>
                            </div>
                        )}
                    </div>
                {/* <CoursesSidebar/> */}
                </div>
            </div>
        </>
    );
};

export default CoursesList;
