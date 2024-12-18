import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./teacherlogin.css"; // Assuming you have CSS for styling

const TeacherLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="teacherlogin-container">
      <Helmet>
        <title>Teacher Login</title>
      </Helmet>
      <div className="teacherlogin-teacherlogin">
        {/* Header Section */}
        <div className="teacherlogin-header">
          <img
            alt="Teachers Logo"
            src="/external/teacherscaballogog13522-pd4-200h.png"
            className="teacherlogin-logo"
          />
          <h2 className="teacherlogin-title">Teachers Login</h2>
          <p className="teacherlogin-subtitle">Login to your account</p>
        </div>

        {/* Form Section */}
        <form className="teacherlogin-form" onSubmit={handleSubmit}>
          <div className="teacherlogin-input">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="teacherlogin-input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="/forgot-password-teacher" className="teacherlogin-forgot">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="teacherlogin-button">
            Log in
          </button>
        </form>

        {/* Footer Section */}
        <div className="teacherlogin-footer">
          <span>
            I'm not a teacher yet? <a href="/teacher-signup">Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
