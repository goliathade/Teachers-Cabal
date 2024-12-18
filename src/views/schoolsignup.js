import React from 'react';
import { Helmet } from 'react-helmet';
import './schoolsignup.css';

const Schoolsignup = () => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>School Sign Up</title>
      </Helmet>
      <div className="signup-card">
      <img
            alt="Teachers Logo"
            src="/external/teacherscaballogog13522-pd4-200h.png"
            className="teacherlogin-logo"
          />
        <h1 className="signup-title">Sign Up</h1>
        <p className="signup-subtitle">Register your school</p>
        
        {/* Input Fields */}
        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="School name" required />
          </div>
          <div className="input-group">
            <select required>
              <option value="">School type</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="tertiary">Tertiary</option>
            </select>
          </div>
          <div className="input-group">
            <input type="text" placeholder="School address" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Contact email address" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        {/* Footer */}
        <p className="signup-footer">
          By signing up you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </p>
        <p className="login-redirect">
          Already have an account? <a href="/schoollogin">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Schoolsignup;
