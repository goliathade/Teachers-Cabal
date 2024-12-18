import React from 'react';
import { Helmet } from 'react-helmet';
import './teacher-signup.css';

const TeacherSignup = () => {
  return (
    <div className="teacher-signup-container">
      <Helmet>
        <title>Teacher Signup</title>
      </Helmet>

      <div className="teacher-signup-card">
        {/* Header Section */}
        <img
            alt="Teachers Logo"
            src="/external/teacherscaballogog13522-pd4-200h.png"
            className="teacherlogin-logo"
          />
        <h1 className="teacher-signup-title">Sign up as a Teacher</h1>

        {/* Form Section */}
        <form className="teacher-signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="teacher-signup-button">
            Sign Up
          </button>
        </form>

        {/* Footer Section */}
        <p className="teacher-signup-footer">
          Already have an account? <a href="/teacherlogin">Log in</a>
        </p>
        <p className="teacher-signup-terms">
          By signing up you agree to our{' '}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default TeacherSignup;
