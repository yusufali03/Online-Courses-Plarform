import React from "react";
import "./CourseDetails.scss";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import CourseDetailsSidebar from "../../component/CourseDetailsSidebar/CourseDetailsSidebar";
import { Tabs } from "rsuite";
import TabCurriculum from "./components/TabCurriculum/TabCurriculum";
import TabOverview from "./components/TabOverview/TabOverview";
import TabInstructor from "./components/TabInstructor/TabInstructor";
import TabReview from "./components/TabReview/TabReview";

const CourseDetails = () => {
  return (
    <>
      <PageTitleArea titles="Course Details" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details-left-sidebar">
              <div class="course-details-card">
                <div class="image">
                  <img
                    src="assets/images/courses/courses29.jpg"
                    alt="courses-image"
                  />
                </div>
                <span class="science">Data Science</span>
                <h3>UI/UX Design and Graphics Learning Bootcamp 2024</h3>
                <ul class="list-unstyled">
                  <li class="d-inline-block">
                    <span>Trainer:</span> Natasha Nahid
                    <img
                      src="https://demo.themeies.com/edugen-html/assets/images/courses/courses30.jpg"
                      alt="courses-image"
                    />
                  </li>
                  <li class="d-inline-block">
                    <span>Last Update:</span> 25 February, 2024
                  </li>
                </ul>
              </div>
              <Tabs defaultActiveKey="reviews">
                <Tabs.Tab eventKey="overview" title="Overview">
                  <TabOverview />
                </Tabs.Tab>

                <Tabs.Tab eventKey="curriculum" title="Curriculum">
                  <TabCurriculum />
                </Tabs.Tab>

                <Tabs.Tab eventKey="instructor" title="Instructor">
                  <TabInstructor/>
                </Tabs.Tab>

                <Tabs.Tab eventKey="reviews" title="Reviews">
                  <TabReview/>
                </Tabs.Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-4">
            <CourseDetailsSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
