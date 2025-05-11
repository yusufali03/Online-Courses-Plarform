import React from "react";
import "./CoursesSidebar.scss";
import { FaStar } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


const categories = [
  { name: "Development", count: 23 },
  { name: "Art & Design", count: 45 },
  { name: "Data Science", count: 14 },
  { name: "Technology", count: 28 },
  { name: "IT Management", count: 34 },
];

const skillLevels = [
  { name: "All Levels", count: 82 },
  { name: "Beginner Levels", count: 82 },
  { name: "Intermediate Level", count: 82 },
  { name: "Expert Level", count: 82 },
];

const languages = [
  { name: "Spanish Language" },
  { name: "Arabic Language" },
  { name: "United States (US)" },
  { name: "United Kingdom (UK)" },
];

const ratings = [
  { stars: 5 },
  { stars: 4 },
  { stars: 3 },
  { stars: 2 },
  { stars: 1 },
];

const CoursesSidebar = () => {
  return (
    <div class="courses-grid-right-sidebar">

      
      <div class="single-pages-widget form-info">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search keyword..."
            />
            <button>
              <IoSearchOutline />
            </button>
          </div>
        </form>
      </div>

      <div class="single-pages-widget price-filter">
        <h3>Price Filter</h3>
        <div class="wrapper">
          <fieldset class="filter-price">
            <div class="price-field">
              <input type="range" min="100" max="500" value="100" id="lower" />
              <input type="range" min="100" max="500" value="500" id="upper" />
            </div>
            <div class="price-wrap">
              <span class="price-title">Price:</span>
              <div class="price-wrap-1">
                <input id="one" />
                <label for="one">$</label>
              </div>
              <div class="price-wrap-line">-</div>
              <div class="price-wrap-2">
                <input id="two" />
                <label for="two">$</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="single-pages-widget categories-info">
        <h3>Categories</h3>
        <ul className="list-unstyled ps-0 mb-0">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="category.html">
                {category.name} ({category.count})
                <FaAngleRight />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="single-pages-widget skill-info">
        <h3>Skill Level</h3>
        <ul className="list-unstyled ps-0 mb-0">
          {skillLevels.map((level, index) => (
            <li key={index}>
              <a
                href="category.html"
                className={level.name === "Intermediate Level" ? "active" : ""}
              >
                {level.name} ({level.count})
                <ImCheckboxChecked />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="single-pages-widget skill-info">
        <h3>Language</h3>
        <ul className="list-unstyled ps-0 mb-0">
          {languages.map((language, index) => (
            <li key={index}>
              <a href="author.html">
                {language.name}
                <ImCheckboxChecked />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="single-pages-widget rating-info">
        <h3>Rating By</h3>
        {ratings.map((rating, index) => (
          <ul className="list-unstyled" key={index}>
            {[...Array(5)].map((_, starIndex) => (
              <li
                className={`d-inline-block ${
                  starIndex >= rating.stars ? "disabled" : ""
                }`}
                key={starIndex}
              >
                <FaStar />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CoursesSidebar;
