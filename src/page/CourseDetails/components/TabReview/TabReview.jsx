import React from "react";
import "./TabReview.scss";
import { FaStar } from "react-icons/fa";

const TabReview = () => {
  return (
    <div className="review-info">
      <div class="row">
        <div class="rating-image">
          <img
            src="https://demo.themeies.com/edugen-html/assets/images/courses/courses36.png"
            alt="courses-image"
          />
        </div>
        <div class="rating-card text-center">
          <h3>4.9</h3>
          <ul class="list-unstyled ps-0 mb-0">
            <li class="d-inline-block">
              <FaStar />
            </li>
            <li class="d-inline-block">
              <FaStar />
            </li>
            <li class="d-inline-block">
              <FaStar />
            </li>
            <li class="d-inline-block">
              <FaStar />
            </li>
            <li class="d-inline-block">
              <FaStar />
            </li>
          </ul>
          <span>(2 Review)</span>
        </div>
      </div>
      <div class="reviews-item">
        <h3>Reviews</h3>
        <div class="reviews d-flex align-items-top">
          <div class="image">
            <img src="https://demo.themeies.com/edugen-html/assets/images/courses/courses38.jpg" alt="image" />
          </div>
          <div class="content">
            <ul class="list-unstyled ps-0">
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
            </ul>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <h4>Daniel Smith</h4>
            <p>Jan 24, 2024</p>
          </div>
        </div>
        <div class="reviews d-flex align-items-top">
          <div class="image">
            <img src="https://demo.themeies.com/edugen-html/assets/images/courses/courses38.jpg" alt="image" />
          </div>
          <div class="content">
            <ul class="list-unstyled ps-0">
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
              <li class="d-inline-block">
                <FaStar />
              </li>
            </ul>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <h4>Loara Lissa</h4>
            <p>Jan 24, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabReview;
