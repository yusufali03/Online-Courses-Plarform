import React from "react";
import "./TeamUserInfo.scss";

const contactItems = [
  {
    id: 1,
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/mail.svg",
    alt: "mail icon",
    link: "mailto:info@designpixls.com",
    text: "info@designpixls.com",
  },
  {
    id: 2,
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/coll.svg",
    alt: "phone icon",
    link: "tel:89392390387929",
    text: "8939 2390 3879 29",
  },
  {
    id: 3,
    icon: "https://demo.themeies.com/edugen-html/assets/images/icon/area.svg",
    alt: "location icon",
    link: "#",
    text: "6/2, Stavello Hall, Sydney",
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

const TeamUserInfo = () => {
  return (
    <div className="team-left-sidebar">
      <img
        src="https://demo.themeies.com/edugen-html/assets/images/team/team16.jpg"
        alt=""
      />
      <div className="content">
        <h3>Julia B. Corbin</h3>
        <p>
          Professor &amp; Chair of Department of Computer Science at University
          the where been since 1994. vulput for the pellentesque commodo.
        </p>

        <ul className="list-unstyled">
          {contactItems.map((item) => (
            <li key={item.id}>
              <div className="icon">
                <img src={item.icon} alt={item.alt} />
              </div>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
        <h4>Follow Me On:</h4>
        <ul className="socials">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamUserInfo;
