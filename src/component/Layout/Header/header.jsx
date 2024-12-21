import React, {useEffect, useState} from "react";
import Logo from "../../../assests/images/Logo.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isInitial, setIsInitial] = useState(true);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
                setIsInitial(false);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header  className={`header ${menuOpen ? "menu-opened" : ""} ${isScrolled ? "scrolled" : ""} ${isInitial ? "" : "hidden"}`}>
            <div className="container">
                <a href="#" className="logo">
                    <img className="logo_picture"  src={Logo} alt="logo"/>
                </a>
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a href="#home">Home </a>

                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown(1)}
                            onMouseLeave={() => toggleDropdown(null)}
                        >
                            <a href="#about">Pages  <IoIosArrowDown className="arrowIcon" /></a>
                            {dropdownOpen === 1 && (
                                <ul className="dropdown">
                                    <li><a href="#about-us">About Us</a></li>
                                    <li><a href="#about-our">Our Team</a></li>
                                    <li><a href="#about-our-team">Our Team Details</a></li>
                                    <li><a href="#privacy-police">Privacy Police</a></li>
                                    <li><a href="#terms-conditions">Terms & Conditions</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown(2)}
                            onMouseLeave={() => toggleDropdown(null)}
                        >
                            <a href="#services">Courses  <IoIosArrowDown className="arrowIcon" /></a>
                            {dropdownOpen === 2 && (
                                <ul className="dropdown">
                                    <li><a href="#courses-list">Courses List</a></li>
                                    <li><a href="#courses-grid">Courses Grid</a></li>
                                    <li><a href="#courses-details">Courses Details</a></li>
                                    <li><a href="#courses-sidebar">Courses Sidebar</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => toggleDropdown(3)}
                            onMouseLeave={() => toggleDropdown(null)}
                        >
                            <a href="#services">Blog  <IoIosArrowDown className="arrowIcon" /></a>
                            {dropdownOpen === 3 && (
                                <ul className="dropdown">
                                    <li><a href="#blog-standart">Blog Standart</a></li>
                                    <li><a href="#blog-details">Blog Details</a></li>
                                    <li><a href="#blog-sidebar">Blog With Sidebar</a></li>
                                    <li><a href="#blog--without-sidebar">Blog Without Sidebar</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
                <div className="burger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
