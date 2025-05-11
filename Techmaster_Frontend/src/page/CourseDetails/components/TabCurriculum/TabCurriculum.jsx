import React from "react";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import "./TabCurriculum.scss";

import Lock from "../../../../assests/images/lock.svg";
import Document from "../../../../assests/images/document.svg";
import Headphone from "../../../../assests/images/headphone.svg";
import Video from "../../../../assests/images/video.svg";

const TabCurriculum = () => {
  return (
    <div className="curriculum-info">
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>
            Introduction<p>3 Lectures, 34:51 min</p>
          </CAccordionHeader>
          <CAccordionBody>
            <AccordionBody />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>
            Getting Started
            <p>3 Lectures, 34:51 min</p>
          </CAccordionHeader>
          <CAccordionBody>
            <AccordionBody />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>
            Start from Sketch Design
            <p>3 Lectures, 34:51 min</p>
          </CAccordionHeader>
          <CAccordionBody>
            <AccordionBody />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>
            Getting Help & Support in Seller Central
            <p>3 Lectures, 34:51 min</p>
          </CAccordionHeader>
          <CAccordionBody>
            <AccordionBody />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
};

const AccordionBody = () => (
  <>
    <h4>Intermediate Level</h4>
    <p className="mb-20">
      This tutorial will help you learn quickly and thoroughly. Lorem ipsum is
      dummy text used in laying out print, graphic or web designs
    </p>
    <h4>2 Videos, 1 Audio, 1 Notebook</h4>
    <div className="videos-info d-flex align-items-center justify-content-between">
      <div className="item-one position-relative">
        <img src={Video} alt="icon" />
        <p>Video: Getting Started and Introductions</p>
      </div>
      <div className="item-two d-flex align-items-center position-relative">
        <button type="submit">Preview</button>
        <img src={Lock} alt="icon" />
      </div>
    </div>
    <div className="videos-info d-flex align-items-center justify-content-between">
      <div className="item-one position-relative">
        <img src={Video} alt="icon" />
        <p>Video: Connectig Throgh Technology</p>
      </div>
      <div className="item-two d-flex align-items-center position-relative">
        <button type="submit">Preview</button>
        <img src={Lock} alt="icon" />
      </div>
    </div>
    <div className="videos-info d-flex align-items-center justify-content-between">
      <div className="item-one position-relative">
        <img src={Headphone} alt="icon" />
        <p>Audio: Connectig Throgh Technology</p>
      </div>
      <div className="item-two d-flex align-items-center position-relative">
        <img src={Lock} alt="icon" />
      </div>
    </div>
    <div className="videos-info d-flex align-items-center justify-content-between">
      <div className="item-one position-relative">
        <img src={Document} alt="icon" />
        <p>Video: Connectig Throgh Technology</p>
      </div>
      <div className="item-two d-flex align-items-center position-relative">
        <img src={Lock} alt="icon" />
      </div>
    </div>
  </>
);

export default TabCurriculum;
