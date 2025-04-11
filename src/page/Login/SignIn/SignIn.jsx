import React, { useRef, useState } from 'react';
import "../style.scss";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { realLogin } from "../../../helpers/login"; // Adjust the import path as needed

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Get the current values from the refs
    const phoneNumber = phoneRef.current.value;
    const password = passwordRef.current.value;
    try {
      const response = await realLogin(phoneNumber, password);
      console.log('Login successful!', response);
      // Redirect user to dashboard
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign">
      <div className="sign_Rows">
        <div className="sign_Rows_colSignImg">
          <div className="sign_Rows_colSignImg_intro">
            <div className="sign_Rows_colSignImg_intro_subTitleSign">Welcome To</div>
            <h1 className="sign_Rows_colSignImg_intro_signBig">Tech Master</h1>
            <p className="sign_Rows_colSignImg_intro_desSign">
              Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti ulum nec the dumm.
            </p>
          </div>
        </div>
        <div className="sign_Rows_colSignForm">
          <h1 className="sign_Rows_colSignForm_headTitleSign">Tech Master</h1>
          <div className="sign_Rows_colSignForm_switcher">
            <Link
              to="/sign-in"
              className={`sign_Rows_colSignForm_switcher_text1 ${location.pathname === "/sign-in" ? "active" : ""}`}
            >
              Log In
            </Link>
            <Link
              to="/sign-up"
              className={`sign_Rows_colSignForm_switcher_text1 ${location.pathname === "/sign-up" ? "active" : ""}`}
            >
              Register
            </Link>
          </div>
          <div className="sign_Rows_colSignForm_signForms">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Phone number"
                  required
                  ref={phoneRef}
                />
                <FaPhone className="phoneIcon" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
                <RiLockPasswordFill className="phoneIcon" />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <div className="between">
                  <button type="submit" className="btn-fill" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                  </button>
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
