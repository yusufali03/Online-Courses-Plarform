import React, { useState } from 'react';
import "../style.scss";
import {FaPhone} from "react-icons/fa6";
import {RiLockPasswordFill} from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
    const location = useLocation();
    const navigate  = useNavigate();

    // form state
  const [fullName,  setFullName]  = useState("");
  const [phone,     setPhone]     = useState("");
  const [password,  setPassword]  = useState("");
  const [error,     setError]     = useState("");
  const [loading,   setLoading]   = useState(false);

  const API = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!fullName.trim() || !phone.trim() || !password.trim()) {
              setError("All fields are required");
              setLoading(false);
              return;
            }

    try {
      // call your Django register endpoint
      await axios.post(
        `${API}/users/register/`,
        { full_name: fullName, phone_number: phone, password },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("User registered successfully!", {
        position: "top-center",
        autoClose: 3000,  // 2 seconds
      });

      // on success, redirect to sign-in
      navigate("/sign-in");
    } catch (err) {
        console.error("Register error payload:", err.response?.data);

      // set friendly error
      let msg = "Registration failed. Please try again.";
      if (err.response) {
        if (err.response.status === 400) {
          // server validation errors come in err.response.data
          const data = err.response.data;
          if (data.phone_number) {
            msg = data.phone_number[0];
          } else if (data.password) {
            msg = data.password[0];
          } else if (data.full_name) {
            msg = data.full_name[0];
          } else {
            msg = data.detail || msg;
          }
        }
      } else {
        msg = "Unable to connect. Please check your network.";
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className="sign">
            {/* ► Place the ToastContainer once in your app, here is fine */}
            <ToastContainer  />
            <div className="sign_Rows">
                <div className="sign_Rows_colSignImg">
                    <div className="sign_Rows_colSignImg_intro">
                        <div className="sign_Rows_colSignImg_intro_subTitleSign">Welcome To</div>
                        <h1 className="sign_Rows_colSignImg_intro_signBig">Tech Master</h1>
                        <p className="sign_Rows_colSignImg_intro_desSign">Grursus mal suada faci lisis Lorem ipsum
                            dolarorit ametion consectetur elit. Vesti ulum nec the dumm.</p>
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
                        <form method="post" onSubmit={handleSubmit} >
                            <div className="form-group">
                            <input
                                type="text"
                                name="full_name"
                                className="form-control"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                                <FaRegUser className="phoneIcon"/>
                            </div>
                            <div className="form-group">
                            <input
                               type="tel"
                               name="phone_number"
                               className="form-control"
                               placeholder="Phone number"
                               value={phone}
                               onChange={(e) => setPhone(e.target.value)}
                               required
                            />
                                <FaPhone className="phoneIcon"/>
                            </div>
                            <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                                <RiLockPasswordFill className="phoneIcon"/>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <div className="form-group">
                                <div className="between">
                                <button type="submit" className="btn-fill" disabled={loading}>
                                 {loading ? "Registering..." : "Register"}
                                </button>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox1" required />
                                        <label className="checkboxLabel" htmlFor="checkbox1">I agree the terms of services</label>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;