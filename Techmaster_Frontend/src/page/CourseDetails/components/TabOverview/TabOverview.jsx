import React from "react";
import Paper from "../../../../assests/images/paper.svg"
import Computer from "../../../../assests/images/computer.svg"
import Internet from "../../../../assests/images/internet.svg"
import Learn from "../../../../assests/images/learn.svg"
import "./TabOverview.scss";

const TabOverview = () => {
  return (
    <div class="overview-item">
      <h3>Course Description</h3>
      <p>
        Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
      <p>
        but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical{" "}
      </p>
      <div class="learn-card">
        <h6>What You will Learn?</h6>
        <div class="row">
          <div class="items position-relative">
            <img src={Learn} alt="icon" />
            <p>
              Lorem Ipsum&nbsp;is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum{" "}
            </p>
          </div>
          <div class="items position-relative">
            <img src={Learn} alt="icon" />
            <p>
              Lorem Ipsum&nbsp;is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum{" "}
            </p>
          </div>
          <div class="items position-relative">
            <img src={Learn} alt="icon" />
            <p>
              Lorem Ipsum&nbsp;is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum{" "}
            </p>
          </div>
          <div class="items position-relative">
            <img src={Learn} alt="icon" />
            <p>
              Lorem Ipsum&nbsp;is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum{" "}
            </p>
          </div>
        </div>
      </div>
      <div class="requirements">
        <h6>Requirements</h6>
        <ul class="list-unstyled ps-0 mb-0">
          <li class="d-inline-block">
            <button type="submit">
              <img src={Computer} alt="icon" />
              Computer/Mobile
            </button>
          </li>
          <li class="d-inline-block">
            <button type="submit">
              <img src={Paper} alt="icon" />
              Paper &amp; Pencil
            </button>
          </li>
          <li class="d-inline-block">
            <button type="submit">
              <img src={Internet} alt="icon" />
              Internet Connect
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabOverview;
