import React from 'react'

import { Helmet } from 'react-helmet'

import './teacher-signup.css'

const TeacherSignup = (props) => {
  return (
    <div className="teacher-signup-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="teacher-signup-teacher-signup">
        <img
          alt="Rectangle1212"
          src="/external/rectangle1212-8dr-800w.png"
          className="teacher-signup-rectangle1"
        />
        <div className="teacher-signup-inputlabels">
          <span className="teacher-signup-text10">Confirm Password</span>
          <span className="teacher-signup-text11">Password</span>
          <span className="teacher-signup-text12">Email</span>
          <span className="teacher-signup-text13">Full name</span>
        </div>
        <div className="teacher-signup-signupbtn">
          <span className="teacher-signup-text14">Sign Up</span>
        </div>
        <div className="teacher-signup-inputboxes">
          <img
            alt="Rectangle4239"
            src="/external/rectangle4239-huk-600w.png"
            className="teacher-signup-rectangle4"
          />
          <img
            alt="Rectangle3237"
            src="/external/rectangle3237-6fi8-600w.png"
            className="teacher-signup-rectangle3"
          />
          <img
            alt="Rectangle63516"
            src="/external/rectangle63516-h7u-600w.png"
            className="teacher-signup-rectangle6"
          />
          <img
            alt="Rectangle2236"
            src="/external/rectangle2236-ctd-600w.png"
            className="teacher-signup-rectangle2"
          />
        </div>
        <div className="teacher-signup-sign-upmain">
          <span className="teacher-signup-text15">Sign up as a Teacher</span>
          <span className="teacher-signup-text16">Sign Up</span>
        </div>
        <img
          alt="TeachersCabalLogog13414"
          src="/external/teacherscaballogog13414-vdvl-200h.png"
          className="teacher-signup-teachers-cabal-logog1"
        />
        <div className="teacher-signup-footer">
          <span className="teacher-signup-text17">
            <span className="teacher-signup-text18">
              Already have an account?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Log in</span>
          </span>
          <span className="teacher-signup-text20">
            By signing up you agree to our Terms of Use and Privacy Policy
          </span>
          <img
            alt="Line13415"
            src="/external/line13415-8fwl.svg"
            className="teacher-signup-line1"
          />
          <img
            alt="Line43416"
            src="/external/line43416-vh9a.svg"
            className="teacher-signup-line4"
          />
          <img
            alt="Line23416"
            src="/external/line23416-rrmt.svg"
            className="teacher-signup-line2"
          />
          <img
            alt="Line33416"
            src="/external/line33416-hxc.svg"
            className="teacher-signup-line3"
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherSignup
