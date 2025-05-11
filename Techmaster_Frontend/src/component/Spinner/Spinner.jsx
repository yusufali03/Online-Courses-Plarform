import React from "react";
import "./style.scss";
import logo from "../../assests/images/Logo.jpg"
const Spinner = () => {

    return (
        <div className="loading-page">
            <div className="preloader">
                <div className="waviy" style={{alignItems: "center", display:"flex", justifyContent:"center"}}>
                     <span className="hrefs">T</span>
                     <span className="hrefs">E</span>
                     <span className="hrefs">C</span>
                     <span className="hrefs">H</span>
                </div>
                <div className="waviy">
                <span className="hrefs">M</span>
                    <span className="hrefs">A</span>
                    <span className="hrefs">S</span>
                    <span className="hrefs">T</span>
                    <span className="hrefs">E</span>
                    <span className="hrefs">R</span>
                </div>
            </div>
        </div>
    );
};


export default Spinner;
