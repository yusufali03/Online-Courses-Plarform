import React, { useState } from "react";
import "./CoursesList.scss";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import { PiSquaresFour } from "react-icons/pi";
import { IoIosList } from "react-icons/io";
import CoursesListCard from "../../component/CoursesListCard/CoursesListCard";
import CourseCard from "../../component/CourseCard/CourseCard";

const courses = [
  {
    id: "1",
    imageUrl:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses13.jpg",
    price: "Free",
    category: "Art & Design",
    rating: 4.8,
    duration: '4h 30m',
    title: "Basic Fundamentals of Interior Graphics Design",
    lessons: "2",
    students: "4k",
    link: "#",
  },
  {
    id: "2",
    imageUrl:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses13.jpg",
    price: "Free",
    category: "Art & Design",
    rating: 4.8,
duration: '4h 30m',
    title: "Basic Fundamentals of Interior Graphics Design",
    lessons: "2",
    students: "4k",
    link: "#",
  },
  {
    id: "3",
    imageUrl:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses13.jpg",
    price: "Free",
    category: "Art & Design",
    rating: 4.8,
duration: '4h 30m',
    title: "Basic Fundamentals of Interior Graphics Design",
    lessons: "2",
    students: "4k",
    link: "#",
  },
  {
    id: "4",
    imageUrl:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses13.jpg",
    price: "Free",
    category: "Art & Design",
    rating: 4.8,
duration: '4h 30m',
    title: "Basic Fundamentals of Interior Graphics Design",
    lessons: "2",
    students: "4k",
    link: "#",
  },
  {
    id: "5",
    imageUrl:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses13.jpg",
    price: "Free",
    category: "Art & Design",
    rating: 4.8,
duration: '4h 30m',
    title: "Basic Fundamentals of Interior Graphics Design",
    lessons: "2",
    students: "4k",
    link: "#",
  },
  {
    id: "6",
    imageUrl:
      "https://demo.themeies.com/edugen-html/assets/images/courses/courses13.jpg",
    price: "Free",
    category: "Art & Design",
    rating: 4.8,
duration: '4h 30m',
    title: "Basic Fundamentals of Interior Graphics Design",
    lessons: "2",
    students: "4k",
    link: "#",
  },
];

const CoursesList = () => {
  const [mapping, setMapping] = useState("grid");
  return (
    <div className="wrapper">
      <PageTitleArea titles="Courses List" />
      <section className="container">
        <div className="trigers">
          <div>
            <button
              className={`squares ${mapping === "grid" && "active"}`}
              onClick={() => setMapping("grid")}
            >
              <PiSquaresFour size={25} />
            </button>
            <button
              className={`list ${mapping === "list" && "active"}`}
              onClick={() => setMapping("list")}
            >
              <IoIosList size={25} />
            </button>
            <span className="curses">Showing {courses.length} courses of {courses.length}</span>
          </div>
          <select name="sort" id="">
            <option value="1">Popularity 1</option>
            <option value="2">Popularity 2</option>
            <option value="3">Popularity 3</option>
          </select>
        </div>
        <div className={`courses-list ${mapping}`}>
          {courses.map((course) => (
            <div key={course.id}>
              {mapping === "grid" ? (
                <CourseCard data={course} />
              ) : (
                <CoursesListCard course={course} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesList;
