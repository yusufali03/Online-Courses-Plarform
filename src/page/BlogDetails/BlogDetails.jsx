import React from "react";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { AiOutlineComment } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import BlogSidebar from "../../component/BlogSidebar/BlogSidebar";
import "./BlogDetails.scss";
import CommentsCard from "../../component/CommentsCard/CommentsCard";

const BlogDetails = () => {
  return (
    <div className="wrapper">
      <PageTitleArea titles="Blog" />
      <div className="container flex">
        <div>
          <div className="blog-details-info">
            <div className="image">
              <img
                src="https://demo.themeies.com/edugen-html/assets/images/blog/blog9.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <ul>
                <li>
                  <IoPersonOutline size="20px" />
                  <span>Edugen</span>
                </li>
                <li>
                  <IoCalendarOutline size="20px" />
                  <span>27 Feb, 24</span>
                </li>
                <li>
                  <LuClock size="20px" />
                  <span>3 Min Read</span>
                </li>
                <li>
                  <AiOutlineComment size="20px" />
                  <span>02 Comments</span>
                </li>
              </ul>
              <h2>
                Learn At Your Own Pace, with Lifetime Access On Mobile & Desktop
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>

              <blockquote>
                <div class="icon">
                  <FaQuoteRight size="25px" />
                </div>
                <h6>
                  “ Education is one of the most powerful aspects of life.
                  Education and learning allow us to make sense of the world
                  around us, the world inside of us, and where we fit within the
                  world.”
                </h6>
                <h3>--- Rosalina D. Jackson</h3>
                <div class="shape">
                  <img
                    src="https://demo.themeies.com/edugen-html/assets/images/shapes/quote-shape.svg"
                    alt="shape"
                  />
                </div>
              </blockquote>

              <p>
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>

              <div className="row">
                <img
                  src="https://demo.themeies.com/edugen-html/assets/images/blog/blog27.jpg"
                  alt="blog-image"
                />
                <img
                  src="https://demo.themeies.com/edugen-html/assets/images/blog/blog28.jpg"
                  alt="blog-image"
                />
              </div>

              <h5>
                Education Is About Academic Excellence And Cultural Diversity
                Learning Community
              </h5>

              <p>
                Lorem Ipsumis simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>

              <ul className="styled-list">
                <li>
                  <FaCircle size="7px" />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li>
                  <FaCircle size="7px" />
                  <span>
                    Vestibulum et orci bibendum, fringilla risus in, euismod
                    orci.
                  </span>
                </li>
                <li>
                  <FaCircle size="7px" />
                  <span>Donec mattis lorem sed dapibus vestibulum.</span>
                </li>
                <li>
                  <FaCircle size="7px" />
                  <span>Donec mattis lorem sed dapibus vestibulum.</span>
                </li>
              </ul>

              <div className="additionalInfos tags-socials">
                <div className="additionalInfo tags">
                  <div className="title">Tags:</div>
                  <div className="tag">Business</div>
                  <div className="tag">Design</div>
                  <div className="tag">Business</div>
                </div>
                <div className="additionalInfo">
                  <div className="title">Share On:</div>
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social"
                    >
                      <img src={link.icon} alt={link.alt} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="additionalInfos">
                {moreBlogsArray.map((blog) => (
                  <div className="recent-posts" key={blog.id}>
                    <a href={blog.link} className="image">
                      <img src={blog.imgUrl} alt={blog.title} />
                    </a>
                    <div className="post-content">
                      <a href={blog.link} className="read-more">
                        Prev Post
                      </a>
                      <h4>
                        <a href={blog.link}>{blog.title}</a>
                      </h4>
                    </div>
                  </div>
                ))}
                {moreBlogsArray.map((blog) => (
                  <div className="recent-posts" key={blog.id}>
                    <div className="post-content">
                      <a href={blog.link} className="read-more">
                        Next Post
                      </a>
                      <h4>
                        <a href={blog.link}>{blog.title}</a>
                      </h4>
                    </div>
                    <a href={blog.link} className="image">
                      <img src={blog.imgUrl} alt={blog.title} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="comment-info">
            <h3>3 Comments</h3>
            <div className="comments">
              <CommentsCard />
              <CommentsCard />
              <CommentsCard />
            </div>
          </div>
          <div className="contact-form">
            <h3>Leave A Reply</h3>
            <p>Your email address will not be published. Requires fields are marked*</p>
            <form action="#">
              <div className="row">
                <input type="text" placeholder="Name*"/>
                <input type="email"placeholder="Email*" />
              </div>
                <input type="email"placeholder="Website Address" />
                <textarea name="" id="" placeholder="Your Message*"></textarea>
                <button className="enroll">Post Comment</button>
            </form>
          </div>
        </div>
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogDetails;

export const moreBlogsArray = [
  {
    id: 1,
    imgUrl:
      "https://demo.themeies.com/edugen-html/assets/images/blog/blog17.jpg",
    title: "How to Manage Ads For Clients The Right Way",
    link: "#",
  },
];

const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/fb.svg",
    alt: "Facebook icon",
  },
  {
    id: 2,
    href: "https://x.com/home",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/twitter.svg",
    alt: "Twitter icon",
  },
  {
    id: 3,
    href: "https://www.pinterest.com/",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/linkedin.svg",
    alt: "LinkedIn icon",
  },
  {
    id: 4,
    href: "https://www.instagram.com/",
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/instragram.svg",
    alt: "Instagram icon",
  },
];
