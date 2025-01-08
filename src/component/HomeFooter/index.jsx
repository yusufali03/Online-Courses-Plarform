import React, {useEffect} from "react";
import logo from "../../assests/images/logos.PNG";
import leftSmall from "../../assests/images/left-small.svg";
import FooterDot from "../../assests/images/footer-shape2.svg";
import {FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaGoogle,
    FaLocationDot
} from "react-icons/fa6";
import "./style.scss"
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeFooter = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animatsiya davomiyligi (ms)
            offset: 100,    // Elementdan yuqori chekkasiga masofa
            easing: "ease-in-out", // Animatsiya effekti
            delay: 50,      // Animatsiya kechikishi (ms)
            once: true,     // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <div className="footer" data-aos="fade-up">
            <div className="container">
                <div className="footer_rows">
                    <div className="footer_rows_col-3" data-aos="fade-up">
                        <div className="footer_rows_col-3_infoFoot">
                            <div className="footer_rows_col-3_infoFoot_logos" data-aos="fade-up">
                                <img width="100%" src={logo} alt=""/>
                            </div>
                            <p className="footer_rows_col-3_infoFoot_descFoot" data-aos="fade-up">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard
                            </p>
                            <h4 className="footer_rows_col-3_infoFoot_follow">Follow Us</h4>
                            <div className="footer_rows_col-3_infoFoot_socialFoot">
                                <div className="footer_rows_col-3_infoFoot_socialFoot_footIcon">
                                    <FaFacebookF/>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_socialFoot_footIcon">
                                    <FaXTwitter/>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_socialFoot_footIcon">
                                    <FaLinkedinIn/>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_socialFoot_footIcon">
                                    <FaGoogle/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_rows_col-3" data-aos="fade-up">
                        <div className="footer_rows_col-3_infoFoot" style={{marginLeft: "40px"}}>
                            <h3 className="footer_rows_col-3_infoFoot_servisFoot" data-aos="fade-up">Services</h3>
                            <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                <img src={FooterDot} alt=""/>
                                <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Air
                                    Conditions</a>
                            </div>
                            <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                <img src={FooterDot} alt=""/>
                                <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Appliance
                                    Repair</a>
                            </div>
                            <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                <img src={FooterDot} alt=""/>
                                <a href="#"
                                   className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Ventilation </a>
                            </div>
                            <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                <img src={FooterDot} alt=""/>
                                <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Electrical
                                    Work</a>
                            </div>
                            <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                <img src={FooterDot} alt=""/>
                                <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Home
                                    Maintenance</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_rows_col-3" data-aos="fade-up">
                        <h3 className="footer_rows_col-3_infoFoot_servisFoot" data-aos="fade-up">Contact</h3>
                        <div className="footer_rows_col-3_contacts">
                            <div className="footer_rows_col-3_contacts_address">
                                <div className="footer_rows_col-3_contacts_address_footIcon"><FaLocationDot /></div>
                                <div className="footer_rows_col-3_contacts_address_footContent">
                                    <p className="footer_rows_col-3_contacts_address_footContent_footP">Address</p>
                                    <span className="footer_rows_col-3_contacts_address_footContent_add">1867 Fire Access, USA</span>
                                </div>
                            </div>
                            <div className="footer_rows_col-3_contacts_address">
                                <div className="footer_rows_col-3_contacts_address_footIcon"><MdEmail /></div>
                                <div className="footer_rows_col-3_contacts_address_footContent">
                                    <p className="footer_rows_col-3_contacts_address_footContent_footP">Email</p>
                                    <a href="#" className="footer_rows_col-3_contacts_address_footContent_add">hvacserv@email.com</a>
                                </div>
                            </div>
                            <div className="footer_rows_col-3_contacts_address">
                                <div className="footer_rows_col-3_contacts_address_footIcon"><BsTelephoneFill /></div>
                                <div className="footer_rows_col-3_contacts_address_footContent">
                                    <p className="footer_rows_col-3_contacts_address_footContent_footP">Call</p>
                                    <a href="#" className="footer_rows_col-3_contacts_address_footContent_add">+1 234 5678 900</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_rows_col-3" data-aos="fade-up">
                        <h3 className="footer_rows_col-3_infoFoot_servisFoot">Subscribe Newsletter:</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Your Email:"/>
                            </div>
                            <button type="submit" className="defaultSubmit">Submit Now <img src={leftSmall} alt=""/></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer_bottom" data-aos="fade-up">
                <div className="footer_bottom_copy" data-aos="fade-up"/>
                <div className="container">
                    <p className="footer_bottom_bText" data-aos="fade-up">Copyright © TechMaster . All rights reserved..</p>
                </div>
            </div>
        </div>
    );
};
export default HomeFooter;
