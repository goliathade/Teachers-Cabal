import React from 'react'

import { Helmet } from 'react-helmet'

import './recovery-password.css'

const RecoveryPassword = (props) => {
  return (
    <div className="recovery-password-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="recovery-password-recovery-password">
        <img
          alt="Rectangle11071"
          src="/external/rectangle11071-h0l-700h.png"
          className="recovery-password-rectangle1"
        />
        <div className="recovery-password-inputlabels">
          <span className="recovery-password-text1">Email</span>
          <span className="recovery-password-text2">New Password</span>
        </div>
        <div className="recovery-password-loginbtn">
          <span className="recovery-password-text3">Submit</span>
        </div>
        <div className="recovery-password-inputboxes1"></div>
        <div className="recovery-password-inputboxes2"></div>
        <div className="recovery-password-teacher-loginmain">
          <span className="recovery-password-text4">Set up a new Password</span>
          <span className="recovery-password-text5">Recover your Account</span>
        </div>
        <img
          alt="TeachersCabalLogog11071"
          src="/external/teacherscaballogog11071-hwz-200h.png"
          className="recovery-password-teachers-cabal-logog1"
        />
        <div className="recovery-password-footer">
          <span className="recovery-password-text6">Login</span>
          <img
            alt="Line41071"
            src="/external/line41071-r0z.svg"
            className="recovery-password-line4"
          />
        </div>
      </div>
    </div>
  )
}

export default RecoveryPassword
