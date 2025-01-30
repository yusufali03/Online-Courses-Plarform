import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import "./BlogStandart.scss";
import BlogCard from "../../component/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import BlogSidebar from "../../component/BlogSidebar/BlogSidebar";

const BlogStandart = () => {
  return (
    <div className="wrapper">
      <PageTitleArea titles="Blog" />
      <div className="container flex">
        <div>
          <div className="blog-cards">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="pagination">
            <Link to="#" className="page-item active">
              1
            </Link>
            <Link to="#" className="page-item">
              2
            </Link>
            <Link to="#" className="page-item">
              3
            </Link>
            <Link to="#" className="page-item">{`>>`}</Link>
          </div>
        </div>
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogStandart;
