import React from 'react'

import { Helmet } from 'react-helmet'

import './schoollogin.css'

const Schoollogin = (props) => {
  return (
    <div className="schoollogin-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="schoollogin-schoollogin">
        <img
          alt="Rectangle14092"
          src="/external/rectangle14092-lhf7-700h.png"
          className="schoollogin-rectangle1"
        />
        <div className="schoollogin-inputlabels">
          <span className="schoollogin-text1">Password</span>
          <span className="schoollogin-text2">Forgot your password?</span>
          <span className="schoollogin-text3">Email</span>
        </div>
        <div className="schoollogin-loginbtn">
          <span className="schoollogin-text4">Log in</span>
        </div>
        <div className="schoollogin-inputboxes">
          <img
            alt="Rectangle44093"
            src="/external/rectangle44093-co7c-600w.png"
            className="schoollogin-rectangle4"
          />
          <img
            alt="Rectangle24093"
            src="/external/rectangle24093-ecvq-600w.png"
            className="schoollogin-rectangle2"
          />
          <img
            alt="Line54093"
            src="/external/line54093-f2sq.svg"
            className="schoollogin-line5"
          />
        </div>
        <div className="schoollogin-teacher-loginmain">
          <span className="schoollogin-text5">Login to your account</span>
          <span className="schoollogin-text6">School Login</span>
        </div>
        <img
          alt="TeachersCabalLogog14093"
          src="/external/teacherscaballogog14093-1yxg-200h.png"
          className="schoollogin-teachers-cabal-logog1"
        />
        <div className="schoollogin-footer">
          <span className="schoollogin-text7">
            <span className="schoollogin-text8">
              School not registered yet?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Sign up</span>
          </span>
          <img
            alt="Line44094"
            src="/external/line44094-bizq.svg"
            className="schoollogin-line4"
          />
        </div>
      </div>
    </div>
  )
}

export default Schoollogin
