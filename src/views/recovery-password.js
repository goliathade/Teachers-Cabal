import React from 'react';
import { Helmet } from 'react-helmet';
import './recovery-password.css';

const RecoveryPassword = () => {
  return (
    <div className="recovery-container">
      <Helmet>
        <title>Recover Password</title>
      </Helmet>
      <div className="recovery-card">
      <img
            alt="Teachers Logo"
            src="/external/teacherscaballogog13522-pd4-200h.png"
            className="teacherlogin-logo"
          />
        <h1 className="recovery-title">Recover your Account</h1>
        <p className="recovery-subtitle">Set up a new Password</p>

        {/* Form Section */}
        <form className="recovery-form">
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="New Password" required />
          </div>
          <button type="submit" className="recovery-button">Submit</button>
        </form>

        {/* Footer */}
        <p className="login-redirect">
          Remember your password? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
