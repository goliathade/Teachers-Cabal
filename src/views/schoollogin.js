import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './schoollogin.css'

const SchoolLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('School Email:', email);
    console.log('Password:', password);

    // Clear the fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="schoollogin-container">
      <Helmet>
        <title>School Login</title>
      </Helmet>
      <div className="schoollogin-schoollogin">
        {/* School Login Title */}
        <div className="schoollogin-header">
        <img
            alt="Teachers Logo"
            src="/external/teacherscaballogog13522-pd4-200h.png"
            className="teacherlogin-logo"
          />
          <h2 className="schoollogin-title">School Login</h2>
          <p className="schoollogin-subtitle">Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="schoollogin-form" onSubmit={handleSubmit}>
          <div className="schoollogin-input">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your school email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="schoollogin-input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="schoollogin-forgot">
            <a href="/forgot-password-school">Forgot your password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="schoollogin-button">
            Log in
          </button>
        </form>

        {/* Footer */}
        <div className="schoollogin-footer">
          <span>School not registered yet? <a href="/schoolsignup">Sign up</a></span>
        </div>
      </div>
    </div>
  );
};

export default SchoolLogin;
