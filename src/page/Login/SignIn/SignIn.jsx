import React from 'react';
import "../style.scss";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link, useLocation} from "react-router-dom";

const SignIn = () => {
    const location = useLocation();
    return (
        <div className="sign">
            <div className="sign_Rows">
                <div className="sign_Rows_colSignImg">
                    <div className="sign_Rows_colSignImg_intro">
                        <div className="sign_Rows_colSignImg_intro_subTitleSign">Welcome To</div>
                        <h1 className="sign_Rows_colSignImg_intro_signBig">Tech Master</h1>
                        <p className="sign_Rows_colSignImg_intro_desSign">Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti ulum nec the dumm.</p>
                    </div>
                </div>
                <div className="sign_Rows_colSignForm">
                    <h1 className="sign_Rows_colSignForm_headTitleSign">
                        Tech Master
                    </h1>
                    <div className="sign_Rows_colSignForm_switcher">
                        <Link to="/sign-in" className={`sign_Rows_colSignForm_switcher_text1 ${
                            location.pathname === "/sign-in" ? "active" : ""
                        }`}>Log In</Link>
                        <Link to="/sign-up"  className={`sign_Rows_colSignForm_switcher_text1 ${
                            location.pathname === "/sign-up" ? "active" : ""
                        }`}>Register</Link>
                    </div>
                    <div className="sign_Rows_colSignForm_signForms">
                        <form method="post">
                            <div className="form-group">
                                <input type="phone" name="phone" className="form-control" placeholder="Phone number" required="required" />
                                <FaPhone className="phoneIcon" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password" required="required" />
                                <RiLockPasswordFill  className="phoneIcon" />
                            </div>
                            <div className="form-group">
                               <div className="between">
                                   <button type="submit" className="btn-fill">Log In</button>
                                   <a href="#">Forgot Password</a>
                               </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default SignIn;