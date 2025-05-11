// src/components/Layout/Layout.jsx

import React, { useState, useEffect } from "react";
import { useLocation }        from "react-router-dom";        
import Header from "../Header/Header";                  
import Footer from "../Footers/Footer";     
import { FaAngleUp }  from "react-icons/fa";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const [showTopBtn, setShowTopBtn] = useState(false);

  // 1) Show “back to top” button
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 2) Hide header/footer on auth pages or 404
  const isNotFound = pathname === "/404";
  const isAuthPage  = ["/sign-in", "/sign-up"].includes(pathname);
  const hideLayout  = isAuthPage || isNotFound;

  return (
    <div className={pathname === "/dashboard" ? "page-wrapper1" : "page-wrapper2"}>
      {/* Header */}
      {!hideLayout && <Header />}

      {/* Main content */}
      <div className="page-content">
        {children}
      </div>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button className="scrollToHome" onClick={goToTop}>
          <FaAngleUp color="white" />
        </button>
      )}

      {/* Footer */}
      {!hideLayout && pathname !== "/dashboard" && <Footer />}
    </div>
  );
};

export default Layout;
