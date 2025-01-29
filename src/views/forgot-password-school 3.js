import React from 'react';
import { Helmet } from 'react-helmet';
import './forgot-password.css';

const ForgotPasswordSchool = () => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>

      <div className="forgot-password-card">
      <img
            alt="Teachers Logo"
            src="/external/teacherscaballogog13522-pd4-200h.png"
            className="teacherlogin-logo"
          />
        {/* Header Section */}
        <h1 className="forgot-password-title">Forgot your password?</h1>
        <p className="forgot-password-subtitle">We’ve got you covered</p>

        {/* Form Section */}
        <form className="forgot-password-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <button type="submit" className="forgot-password-button">
            Submit
          </button>
        </form>

        {/* Footer Section */}
        <p className="forgot-password-footer">
          Remembered your password? <a href="/schoollogin">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordSchool;
