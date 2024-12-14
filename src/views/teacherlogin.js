import React from 'react'

import { Helmet } from 'react-helmet'

import './teacherlogin.css'

const Teacherlogin = (props) => {
  return (
    <div className="teacherlogin-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="teacherlogin-teacherlogin">
        <img
          alt="Rectangle13520"
          src="/external/rectangle13520-u5ba-700h.png"
          className="teacherlogin-rectangle1"
        />
        <div className="teacherlogin-inputlabels">
          <span className="teacherlogin-text1">Password</span>
          <span className="teacherlogin-text2">Forgot your password?</span>
          <span className="teacherlogin-text3">Email</span>
        </div>
        <div className="teacherlogin-loginbtn">
          <span className="teacherlogin-text4">Log in</span>
        </div>
        <div className="teacherlogin-inputboxes">
          <img
            alt="Rectangle43521"
            src="/external/rectangle43521-g5bn-600w.png"
            className="teacherlogin-rectangle4"
          />
          <img
            alt="Rectangle23521"
            src="/external/rectangle23521-lp25-600w.png"
            className="teacherlogin-rectangle2"
          />
          <img
            alt="Line53523"
            src="/external/line53523-55b.svg"
            className="teacherlogin-line5"
          />
        </div>
        <div className="teacherlogin-teacher-loginmain">
          <span className="teacherlogin-text5">Login to your account</span>
          <span className="teacherlogin-text6">Teachers Login</span>
        </div>
        <img
          alt="TeachersCabalLogog13522"
          src="/external/teacherscaballogog13522-pd4-200h.png"
          className="teacherlogin-teachers-cabal-logog1"
        />
        <div className="teacherlogin-footer">
          <span className="teacherlogin-text7">
            <span className="teacherlogin-text8">
              I’m not a teacher yet?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Sign up</span>
          </span>
          <img
            alt="Line43522"
            src="/external/line43522-u22i.svg"
            className="teacherlogin-line4"
          />
        </div>
      </div>
    </div>
  )
}

export default Teacherlogin
