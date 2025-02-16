import React, { useEffect } from "react";
import logo from "../../assests/images/logos.PNG";
import leftSmall from "../../assests/images/left-small.svg";
import FooterDot from "../../assests/images/footer-shape2.svg";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGoogle,
  FaLocationDot,
} from "react-icons/fa6";
import "./homeFooter.scss";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const HomeFooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      offset: 100, // Elementdan yuqori chekkasiga masofa
      easing: "ease-in-out", // Animatsiya effekti
      delay: 50, // Animatsiya kechikishi (ms)
      once: true, // Animatsiya faqat bir marta ishlashi uchun
    });
  }, []);
    const { t } = useTranslation("home");
  
  return (
    <div className="homeFooter" data-aos="fade-up">
      <div className="container">
        <div className="homeFooter_rows">
          <div className="homeFooter_rows_col-3" data-aos="fade-up">
            <div className="homeFooter_rows_col-3_infoFoot">
              <div
                className="homeFooter_rows_col-3_infoFoot_logos"
                data-aos="fade-up"
              >
                <img width="100%" src={logo} alt="" />
              </div>
              <p
                className="homeFooter_rows_col-3_infoFoot_descFoot"
                data-aos="fade-up"
              >
                {t("homeFooter.description")}
              </p>
              <h4 className="homeFooter_rows_col-3_infoFoot_follow">
                {t("homeFooter.followUs")}
              </h4>
              <div className="homeFooter_rows_col-3_infoFoot_socialFoot">
                <div className="homeFooter_rows_col-3_infoFoot_socialFoot_footIcon">
                  <FaFacebookF />
                </div>
                <div className="homeFooter_rows_col-3_infoFoot_socialFoot_footIcon">
                  <FaXTwitter />
                </div>
                <div className="homeFooter_rows_col-3_infoFoot_socialFoot_footIcon">
                  <FaLinkedinIn />
                </div>
                <div className="homeFooter_rows_col-3_infoFoot_socialFoot_footIcon">
                  <FaGoogle />
                </div>
              </div>
            </div>
          </div>

          <div className="homeFooter_rows_col-3" data-aos="fade-up">
            <div
              className="homeFooter_rows_col-3_infoFoot"
              style={{ marginLeft: "40px" }}
            >
              <h3
                className="homeFooter_rows_col-3_infoFoot_servisFoot"
                data-aos="fade-up"
              >
                {t("homeFooter.servicesTitle")}
              </h3>
              {t("homeFooter.services", { returnObjects: true }).map(
                (service, index) => (
                  <div
                    key={index}
                    className="homeFooter_rows_col-3_infoFoot_servisFoot_alls"
                  >
                    <img src={FooterDot} alt="" />
                    <a
                      href="#"
                      className="homeFooter_rows_col-3_infoFoot_servisFoot_alls_textFoot"
                    >
                      {service}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="homeFooter_rows_col-3" data-aos="fade-up">
            <h3
              className="homeFooter_rows_col-3_infoFoot_servisFoot"
              data-aos="fade-up"
            >
              {t("homeFooter.contactTitle")}
            </h3>
            <div className="homeFooter_rows_col-3_contacts">
              {Object.entries(
                t("homeFooter.contact", { returnObjects: true })
              ).map(([key, value]) => (
                <div
                  key={key}
                  className="homeFooter_rows_col-3_contacts_address"
                >
                  <div className="homeFooter_rows_col-3_contacts_address_footIcon">
                    {key === "address" && <FaLocationDot />}
                    {key === "email" && <MdEmail />}
                    {key === "call" && <BsTelephoneFill />}
                  </div>
                  <div className="homeFooter_rows_col-3_contacts_address_footContent">
                    <p className="homeFooter_rows_col-3_contacts_address_footContent_footP">
                      {value.label}
                    </p>
                    <a
                      href="#"
                      className="homeFooter_rows_col-3_contacts_address_footContent_add"
                    >
                      {value.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="homeFooter_rows_col-3" data-aos="fade-up">
            <h3 className="homeFooter_rows_col-3_infoFoot_servisFoot">
              {t("homeFooter.subscribeTitle")}
            </h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("homeFooter.subscribePlaceholder")}
                />
              </div>
              <button type="submit" className="defaultSubmit">
                {t("homeFooter.subscribeButton")} <img src={leftSmall} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="homeFooter_bottom" data-aos="fade-up">
        <div className="homeFooter_bottom_copy" data-aos="fade-up" />
        <div className="container">
          <p className="homeFooter_bottom_bText" data-aos="fade-up">
            {t("homeFooter.copyright")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeFooter;
