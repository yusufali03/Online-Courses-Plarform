import React, { useContext, useRef, useState } from 'react';
import "../style.scss";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import AuthContext from '../../../contexts/AuthContext';
import Spinner from '../../../component/Spinner/Spinner';


const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Get the current values from the refs
    const phone_number = phoneRef.current.value;
    const password = passwordRef.current.value;
    try {
      // Call your Django login endpoint
      const { data } = await axios.post(
        `${API}/users/login/`,
        { phone_number, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Save tokens
      localStorage.setItem('access',  data.access);
      localStorage.setItem('refresh', data.refresh);
      await login(phone_number, password);

      // Redirect after successful login
      navigate('/dashboard');  
    } catch (err) {
      console.error('Login error:', err.response || err);
    
      let msg;
      if (err.response) {
        if (err.response.status === 401) {
          // custom message for bad credentials
          msg = 'Phone number or password is incorrect';
        } else {
          // show whatever the server returned, or fallback to generic
          msg = err.response.data?.detail
              || err.response.data?.non_field_errors?.[0]
              || 'An unexpected error occurred';
        }
      } else {
        // network error or something else
        msg = 'Unable to connect. Please try again later.';
      }
    
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign">
      
      {/* Overlay Spinner on loading */}
      {loading && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999
        }}>
          <Spinner position="full" />
        </div>
      )}

      <div className="sign_Rows">
        <div className="sign_Rows_colSignImg">
          <div className="sign_Rows_colSignImg_intro">
            <div className="sign_Rows_colSignImg_intro_subTitleSign">Welcome To</div>
            <h1 className="sign_Rows_colSignImg_intro_signBig">Tech Master</h1>
            <p className="sign_Rows_colSignImg_intro_desSign">
              Learn World's Best Courses with us and be one of Leaders in the world
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
                  type="tel"
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

              {error && <p style={{color:"red", marginBottom:"30px"}}  className="error-message">{error}</p>}

              <div className="form-group">
                <div className="between">
                  <button type="submit" className="btn-fill" disabled={loading}>
                     Log In
                  </button>
                  <Link to="/forgot-password">Forgot Password</Link>
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
