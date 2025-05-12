import React, { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./BlogSidebar.scss";
import AOS from "aos";

import {
  categoriesArray,
  feedsArray,
  recentBlogsArray,
  tagsArray,
} from "./BlogSidebar.data";
import { useTranslation } from "react-i18next";

const BlogSidebar = () => {
  const path = window.location.pathname; // "/blog-standart"
  const slug = path.split("/").pop();

  const { t } = useTranslation("translation");

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
    <div className={`items ${slug}`} data-aos="fade-up">
      <div className="item">
        <form action="">
          <input type="text" placeholder="Search keyword..." />
          <button type="submit">
            <IoSearchOutline />
          </button>
        </form>
      </div>

      <div className="item">
        <h3>{t("blog-sidebar.categories")}</h3>
        <div className="categories">
          {categoriesArray.map((cat) => (
            <button className={cat.id === 1 && `active`} key={cat.id}>
              <span>{cat.title}</span>
              <FaAngleRight />
            </button>
          ))}
        </div>
      </div>

      <div className="item">
        <h3>{t("blog-sidebar.recent")}</h3>
        <div className="recent-blogs">
          {recentBlogsArray.map((blog) => (
            <div className="recent-blog" key={blog.id}>
              <a href={blog.link} className="image">
                <img src={blog.imgUrl} alt={blog.title} />
              </a>
              <div className="blog-content">
                <h4>
                  <a href={blog.link}>{blog.title}</a>
                </h4>
                <a href={blog.link} className="read-more">
                  {t("blog-sidebar.read_more")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="item">
        <h3>{t("blog-sidebar.tags")}</h3>
        <div className="tags">
          {tagsArray.map((tag) => (
            <button className={`tag ${tag.id === 1 && "active"}`}>
              {tag.title}
            </button>
          ))}
        </div>
      </div>

      <div className="item">
        <h3>{t("blog-sidebar.feed")}</h3>
        <div className="feeds">
          {feedsArray.map((feed) => (
            <a href={feed.link} className="feed" key={feed.id}>
              <img src={feed.imageUrl} alt={feed.link} />
              <FaInstagram />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
