import React from "react";
import { FaReplyAll } from "react-icons/fa";
import "./CommentsCard.scss";

const CommentsCard = () => {
  return (
    <div className="comment-card">
      <div className="image">
        <img
          src="https://demo.themeies.com/edugen-html/assets/images/blog/blog31.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <h5>Ronald Smalls</h5>
        <p>Feb 21, 2024 at 11:00am</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
      </div>
      <a class="reply" href="#">
        <FaReplyAll size="20px"/>
        <span>Reply</span>
      </a>
    </div>
  );
};

export default CommentsCard;
