import React from 'react'

import { Helmet } from 'react-helmet'

import './forgot-password.css'

const ForgotPassword = (props) => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="forgot-password-forgot-password">
        <img
          alt="Rectangle11071"
          src="/external/rectangle11071-sprb-700h.png"
          className="forgot-password-rectangle1"
        />
        <div className="forgot-password-inputlabels">
          <span className="forgot-password-text1">Email</span>
        </div>
        <div className="forgot-password-loginbtn">
          <span className="forgot-password-text2">Submit</span>
        </div>
        <div className="forgot-password-inputboxes"></div>
        <div className="forgot-password-teacher-loginmain">
          <span className="forgot-password-text3">We’ve got you covered</span>
          <span className="forgot-password-text4">Forgot your password?</span>
        </div>
        <img
          alt="TeachersCabalLogog11071"
          src="/external/teacherscaballogog11071-cdh-200h.png"
          className="forgot-password-teachers-cabal-logog1"
        />
        <div className="forgot-password-footer">
          <span className="forgot-password-text5">Login</span>
          <img
            alt="Line41071"
            src="/external/line41071-1ptp.svg"
            className="forgot-password-line4"
          />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
