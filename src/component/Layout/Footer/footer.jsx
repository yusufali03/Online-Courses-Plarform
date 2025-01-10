import React, {useEffect} from "react";
import logo from "../../../assests/images/logos.PNG";
import leftSmall from "../../../assests/images/left-small.svg";
import FooterShape12 from "../../../assests/images/shape12.svg";
import FooterShape13 from "../../../assests/images/shape13.svg";
import FooterShape14 from "../../../assests/images/shape14.svg";
import UpIcon from "../../../assests/images/up-icon.svg";
import {FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaGoogle,
    FaLocationDot
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
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
        <>
            <div className="footer" data-aos="fade-up">
                <div className="footer_shape13">
                    <img width="60px" height="61px" src={FooterShape13} alt=""/>
                </div>
                <div className="container">
                    <div className="footer_rows">
                        <div className="footer_rows_col-3" data-aos="fade-up">
                            <div className="footer_rows_col-3_infoFoot">
                                <div className="footer_rows_col-3_infoFoot_logos" data-aos="fade-up">
                                    <img width="100%" src={logo} alt=""/>
                                </div>
                                <p className="footer_rows_col-3_infoFoot_descFoot" data-aos="fade-up">Lorem Ipsum is
                                    simply
                                    dummy text of the
                                    printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard
                                </p>
                                <a href="#email" className="footer_rows_col-3_infoFoot_follow">techmaster@gmail.com</a>
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
                                <h3 className="footer_rows_col-3_infoFoot_servisFoot" data-aos="fade-up">Links</h3>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">

                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Home</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">About
                                        Us</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#"
                                       className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Courses</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Courses
                                        Details</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Contact
                                        Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_rows_col-3" data-aos="fade-up">
                            <div className="footer_rows_col-3_infoFoot">
                                <h3 className="footer_rows_col-3_infoFoot_servisFoot" data-aos="fade-up">Legal</h3>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">

                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Terms of
                                        Use</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Tearm &
                                        Condition</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#"
                                       className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Payment
                                        Method</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#" className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Privacy
                                        Policy</a>
                                </div>
                                <div className="footer_rows_col-3_infoFoot_servisFoot_alls">
                                    <a href="#"
                                       className="footer_rows_col-3_infoFoot_servisFoot_alls_textFoot">Licensencing</a>
                                </div>
                            </div>

                        </div>
                        <div className="footer_rows_col-3" data-aos="fade-up">
                            <h3 className="footer_rows_col-3_infoFoot_servisFoot">Subscribe Newsletter:</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Email:"/>
                                </div>
                                <button type="submit" className="defaultSubmit">Submit Now <img src={leftSmall} alt=""/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer_shape12">
                    <img width="60px" height="61px" src={FooterShape12} alt=""/>
                </div>
                <div className="footer_shape14">
                    <img width="147px" height="64px" src={FooterShape14} alt=""/>
                </div>

            </div>
            <div className="copy" data-aos="fade-up">
                <div className="container">
                    <div className="copy_areac">
                        <p className="copy_areac_bText" data-aos="fade-up">© Copyright 2024 | Tech Master | All Rights Reserved</p>
                        <div className="copy_areac_listCopy">
                            <div className="copy_areac_listCopy_unList">
                                <a className="copy_areac_listCopy_unList_alines" href="#">Company</a>
                                <a className="copy_areac_listCopy_unList_alines" href="#">Support</a>
                                <a className="copy_areac_listCopy_unList_alines" href="#">Privacy</a>
                                <a className="copy_areac_listCopy_unList_alines" href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="copy_bannerCopy">
                        <img src={UpIcon} alt=""/>
                    </a>
                </div>
            </div>
        </>
    );
};
export default Footer;
