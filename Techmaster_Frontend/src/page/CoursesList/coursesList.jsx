// import React, { useState, useEffect } from "react";
// import "./CoursesList.scss";
// import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
// import { HiOutlineSquares2X2 } from "react-icons/hi2";
// import { PiListBullets } from "react-icons/pi";
// import CoursesSidebar from "./component/CoursesSidebar/CoursesSidebar";


// const CoursesList = () => {
//     const titles = "Courses List";
//     const [activeTab, setActiveTab] = useState("grid"); // Default "grid" view

//     // URL ni tekshirish va activeTab ni sozlash
//     useEffect(() => {
//         const currentPath = window.location.pathname; // URL dan yo'nalishni olish
//         if (currentPath.includes("grid")) {
//             setActiveTab("grid");
//         } else if (currentPath.includes("item")) {
//             setActiveTab("list");
//         }
//     }, []);

//     const handleClick = (view) => {
//         setActiveTab(view); // Tanlangan ko'rinishni o'rnatish
//     };

//     return (
//         <>
//             <PageTitleArea titles={titles} />
//             <div className="courses-list" >
//                 <div className="container">
//                     <div className="courses-list_grids">
//                         <div className="courses-list_grids_colCours6">
//                             <div className="courses-list_grids_colCours6_listCour">
//                                 <div className="courses-list_grids_colCours6_listCour_blocks">
//                                     {/* Grid View Button */}
//                                     <a
//                                         href="/courses-list/grid"
//                                         className={
//                                             activeTab === "grid"
//                                                 ? "courses-list_grids_colCours6_listCour_blocks_listAss active"
//                                                 : "courses-list_grids_colCours6_listCour_blocks_listAss"
//                                         }
//                                         onClick={() => handleClick("grid")}
//                                     >
//                                         <HiOutlineSquares2X2 />
//                                     </a>

//                                     {/* List View Button */}
//                                     <a
//                                         href="/courses-list/item"
//                                         className={
//                                             activeTab === "list"
//                                                 ? "courses-list_grids_colCours6_listCour_blocks_listAss active"
//                                                 : "courses-list_grids_colCours6_listCour_blocks_listAss"
//                                         }
//                                         onClick={() => handleClick("list")}
//                                     >
//                                         <PiListBullets />
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="courses-list_grids_colCours6_listCour_blocks_listTes"
//                                     >
//                                         Showing 12 courses of 52
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="courses-list_grids_colCours6">
//                             <div style={{ display: "flex", justifyContent: "end" }}>
//                                 <select className="courses-list_grids_colCours6_selec">
//                                     <option
//                                         className="courses-list_grids_colCours6_selec_opt"
//                                         selected="selected"
//                                     >
//                                         Sort By: Popularity
//                                     </option>
//                                     <option
//                                         className="courses-list_grids_colCours6_selec_opt"
//                                         value="1"
//                                     >
//                                         Popularity One..
//                                     </option>
//                                     <option
//                                         className="courses-list_grids_colCours6_selec_opt"
//                                         value="2"
//                                     >
//                                         Popularity Two..
//                                     </option>
//                                     <option
//                                         className="courses-list_grids_colCours6_selec_opt"
//                                         value="3"
//                                     >
//                                         Popularity Three..
//                                     </option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         {/* Dinamik tarkib */}
//                         {activeTab === "grid" && (
//                             <div className="courses-grid">
//                                 {/* Grid View Tarkibi */}
//                                 <p>Grid View: Courses are displayed in a grid layout.</p>
//                             </div>
//                         )}
//                         {activeTab === "list" && (
//                             <div className="courses-item">
//                                 {/* List View Tarkibi */}
//                                 <p>List View: Courses are displayed in a list layout.</p>
//                             </div>
//                         )}
//                     </div>
//                 {/* <CoursesSidebar/> */}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CoursesList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CoursesList.scss";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiListBullets } from "react-icons/pi";
import CoursesSidebar from "./component/CoursesSidebar/CoursesSidebar";

const CoursesList = () => {
  const titles = "Courses List";
  const [activeTab, setActiveTab] = useState("grid"); // Default "grid" view
  const [courses, setCourses] = useState([]); // Store fetched courses
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/courses/");
        setCourses(response.data); // Set fetched courses to state
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchCourses();
  }, []);

  // Handle tab switching for Grid/List view
  const handleClick = (view) => {
    setActiveTab(view); // Set active view to grid or list
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner while fetching data
  }

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
                    href="/courses-list/"
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
                    Showing {courses.length} courses
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
                  <option className="courses-list_grids_colCours6_selec_opt" value="1">
                    Popularity One..
                  </option>
                  <option className="courses-list_grids_colCours6_selec_opt" value="2">
                    Popularity Two..
                  </option>
                  <option className="courses-list_grids_colCours6_selec_opt" value="3">
                    Popularity Three..
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          {activeTab === "grid" && (
            <div className="courses-grid">
              {/* Grid View: Display courses in a grid layout */}
              <div className="grid-container">
                {courses.map((course) => (
                  <div className="grid-item" key={course.id}>
                    <img src={course.thumbnail} alt={course.title} />
                    <h4>{course.title}</h4>
                    <p>{course.instructor.full_name}</p>
                    <p>${course.price}</p>
                    <button>View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "list" && (
            <div className="courses-item">
              {/* List View: Display courses in a list layout */}
              <div className="list-container">
                {courses.map((course) => (
                  <div className="list-item" key={course.id}>
                    <img src={course.thumbnail} alt={course.title} />
                    <div className="course-details">
                      <h4>{course.title}</h4>
                      <p>{course.instructor.full_name}</p>
                      <p>${course.price}</p>
                    </div>
                    <button>View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
