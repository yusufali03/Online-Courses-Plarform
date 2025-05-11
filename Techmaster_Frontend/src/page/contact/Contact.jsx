import React from 'react';
import "./contact.scss";
import line from "../../assests/images/bottom_line.svg";
import message from "../../assests/images/contact1.svg";
import phone from "../../assests/images/contact2.svg";
import map from "../../assests/images/contact3.svg";
import PageTitleArea from "../../component/PageTitleArea/PageTitleArea";

const Contact = () => {
    const titles = "Contact Us"
    return (
        <>
            <PageTitleArea titles={titles}/>
            <div className="contact">
                <div className="container">
                    <div className="flexs main-contact__flex">
                        <div className="contact_lg4">
                            <div className="contact_lg4_singleContact">
                                <div className="contact_lg4_singleContact_sectionTitles">
                                    <div className="globalTitle">Contact Us</div>
                                    <h2 className="contact_lg4_singleContact_sectionTitles_get">
                                        Get In <span
                                        className="contact_lg4_singleContact_sectionTitles_get_touch">Touch <img
                                        className="contact_lg4_singleContact_sectionTitles_get_touch_lineTouch"
                                        src={line} alt=""/></span>
                                    </h2>
                                </div>
                                <div className="contact_lg4_singleContact_iconList">
                                    <div className="contact_lg4_singleContact_iconList_contactIcon">
                                        <img width="24px" src={message} alt=""/>
                                    </div>
                                    <div className="contact_lg4_singleContact_iconList_contactContent">
                                        <h3 className="contact_lg4_singleContact_iconList_contactContent_cEmail">Email-Us:</h3>
                                        <a href="mailto:techmaster@email.com"
                                           style={{fontWeight: "500", color: "#555"}}>
                                            techmaster@email.com
                                        </a>
                                    </div>
                                </div>
                                <div className="contact_lg4_singleContact_iconList">
                                    <div className="contact_lg4_singleContact_iconList_contactIcon"
                                         style={{background: "#e3f9f6"}}>
                                        <img width="24px" src={phone} alt=""/>
                                    </div>
                                    <div className="contact_lg4_singleContact_iconList_contactContent">
                                        <h3 className="contact_lg4_singleContact_iconList_contactContent_cEmail">Call-Us:</h3>
                                        <a href="tel:+998901234567"
                                           style={{fontWeight: "500", color: "#555"}}>
                                            +998 90 123 45 67
                                        </a>
                                    </div>
                                </div>
                                <div className="contact_lg4_singleContact_iconList">
                                    <div className="contact_lg4_singleContact_iconList_contactIcon">
                                        <img width="24px" src={map} alt=""/>
                                    </div>
                                    <div className="contact_lg4_singleContact_iconList_contactContent">
                                        <h3 className="contact_lg4_singleContact_iconList_contactContent_cEmail">Office:</h3>
                                        <span
                                            style={{fontWeight: "500", color: "#555"}}>
                                           Toshkent shahar Mirzo Ulug'bek tumani
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_lg8">
                            <div className="contact_lg8_formContact">
                                <form>
                                    <div className="flexs">
                                        <div className="contact_lg8_formContact_colSex">
                                            <div className="contact_lg8_formContact_colSex_form-group">
                                                <input type="text"
                                                       required="required"
                                                       className="contact_lg8_formContact_colSex_form-group_form-control"
                                                       placeholder="Name*"/>
                                            </div>
                                        </div>
                                        <div className="contact_lg8_formContact_colSex">
                                            <div className="contact_lg8_formContact_colSex_form-group">
                                                <input type="email"
                                                       required="required"
                                                       className="contact_lg8_formContact_colSex_form-group_form-control"
                                                       placeholder="Email*"/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="contact_lg8_formContact_colSex_form-group">
                                        <input type="text"
                                               required="required"
                                               className="contact_lg8_formContact_colSex_form-group_form-control"
                                               placeholder="Website Address"/>
                                    </div>
                                    <div className="contact_lg8_formContact_colSex_form-group">
                                        <textarea
                                            required="required"
                                            className="contact_lg8_formContact_colSex_form-group_form-control textarea"
                                            placeholder="Your Message*"/>
                                    </div>
                                    <button type="submit" className="contactSend">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div style={{position: "relative", overflow: "hidden"}}>
                <iframe
                    src="https://yandex.uz/map-widget/v1/?ll=69.305150%2C41.330567&mode=search&oid=42909689800&ol=biz&z=16.54"
                    width="100%" height="600" frameBorder="1" allowFullScreen="true"
                    style={{position: "relative"}}></iframe>
            </div>
        </>
    );
};

export default Contact;