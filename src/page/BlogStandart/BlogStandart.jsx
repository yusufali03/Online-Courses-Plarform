import React, { useEffect } from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import "./BlogStandart.scss";
import AOS from "aos";
import BlogCard from "../../component/BlogCard/BlogCard";
import { Link } from "react-router-dom";
import BlogSidebar from "../../component/BlogSidebar/BlogSidebar";

const BlogStandart = () => {
  const path = window.location.pathname;
  const slug = path.split("/").pop();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      offset: 100, // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 50, // Animatsiya kechikishi (ms)
      once: true, // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);

  return (
    <div className="wrapper">
      <PageTitleArea titles="Blog" />
      <div className={`container flex ${slug}`}>
        <div>
          <div className="blog-cards">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 180}>
                <BlogCard />
              </div>
            ))}
          </div>
          <div className="pagination" data-aos="fade-up">
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
