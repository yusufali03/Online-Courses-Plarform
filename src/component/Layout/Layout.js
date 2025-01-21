import React, { useState, useEffect } from "react";
import Header from "./Header/header";
import { Outlet } from "react-router";
import Footer from "./Footer/footer";
import { useLocation } from "react-router";
import { FaAngleUp } from "react-icons/fa";

const Layout = (props) => {
  const { children } = props;

  const { pathname } = useLocation();
  const [text, setText] = useState("");
  const [speaker, setSpeaker] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const changeSpeakSwitcher = (value) => {
    setSpeaker(value);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  useEffect(() => {
    document.onmouseup = () => {
      if (speaker && text !== window.getSelection().toString()) {
        window.responsiveVoice.speak(
            window.getSelection().toString(),
            "Russian Female"
        );
        setText(window.getSelection().toString());
      }
    };
  }, [speaker]);

  // Tekshiruv uchun to'g'ri yo'llar
  const isAuthRoute = ["/sign-in", "/sign-up"].includes(pathname);

  return (
      <>
        <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
          {!isAuthRoute && (
              <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
          )}
          <div className="page-content">{children}</div>
          {showTopBtn && (
              <button className="scrollToHome" onClick={goToTop}>
                <FaAngleUp color="white" />
              </button>
          )}
          {!isAuthRoute && pathname !== "/" && <Footer />}
        </div>
      </>
  );
};

export default Layout;
