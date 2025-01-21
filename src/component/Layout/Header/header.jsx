import React, {useEffect, useState} from "react";
import Logo from "../../../assests/images/Logo.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import {Link} from "react-router-dom";
import { RxEnter } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

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
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>

                        </li>
                        <CDropdown className="nav-item">
                            <CDropdownToggle className="nav-link" >Pages <FaCaretDown /></CDropdownToggle>
                            <CDropdownMenu className="dropdown-menu">
                                <CDropdownItem href="/about">About Us</CDropdownItem>
                                <CDropdownItem href="/our-team">Our Team</CDropdownItem>
                                <CDropdownItem href="/team-details">Our Team Details</CDropdownItem>
                                <CDropdownItem href="#">Privacy Police</CDropdownItem>
                                <CDropdownItem href="#">Terms & Conditions</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <CDropdown className="nav-item">
                            <CDropdownToggle className="nav-link" >Courses <FaCaretDown /></CDropdownToggle>
                            <CDropdownMenu className="dropdown-menu">
                                <CDropdownItem href="#">Courses List</CDropdownItem>
                                <CDropdownItem href="#">Courses Grid</CDropdownItem>
                                <CDropdownItem href="#">Courses Details</CDropdownItem>
                                <CDropdownItem href="#">Courses Sidebar</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <CDropdown className="nav-item">
                            <CDropdownToggle className="nav-link" >Blog <FaCaretDown /></CDropdownToggle>
                            <CDropdownMenu className="dropdown-menu">
                                <CDropdownItem href="#">Blog Standart</CDropdownItem>
                                <CDropdownItem href="#">Blog Details</CDropdownItem>
                                <CDropdownItem href="#">Blog With Sidebar</CDropdownItem>
                                <CDropdownItem href="#">Blog Without Sidebar</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sign-in"> <RxEnter />
                                Sign In</a>
                        </li>

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
