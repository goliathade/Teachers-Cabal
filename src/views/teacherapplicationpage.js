import React from 'react'

import { Helmet } from 'react-helmet'

import './teacherapplicationpage.css'

const Teacherapplicationpage = (props) => {
  return (
    <div className="teacherapplicationpage-container">
      <Helmet>
        <title>Teachers Cabal</title>
      </Helmet>
      <div className="teacherapplicationpage-teacherapplicationpage">
        <div className="teacherapplicationpage-depth0-frame0">
          <div className="teacherapplicationpage-depth1-frame0">

          <div className="landing-page-depth2-frame0">
              <a href='/'>
                <img
                  alt="TeachersCabalLogog19019"
                  style={{ width: '100px', height: 'auto' }}
                  src="external/teacherscaballogog13414-vdvl-200h.png"
                  className="landing-page-teachers-cabal-logog1"
                />
              </a>
              <div className="landing-page-depth3-frame1">
                <div className="landing-page-depth4-frame01">
                  <a href='/teacherlogin' className="landing-page-depth5-frame01">
                    <span className="landing-page-text10">Find a Job</span>
                  </a>
                  <a href='/schoollogin' className="landing-page-depth5-frame11">
                    <span className="landing-page-text11">Post a Job</span>
                  </a>
                  <a href='/resuorcespage' className="landing-page-depth5-frame2">
                    <span className="landing-page-text12">Resources</span>
                  </a>
                    <a href='' className="landing-page-depth5-frame3">
                    <span className="landing-page-text13">About</span>
                  </a>
                </div>
                <div className="landing-page-depth4-frame11">
                  <div className="landing-page-depth5-frame02">
                    <a href='#' className="landing-page-depth6-frame01">
                      <span className="landing-page-text14">Log in</span>
                    </a>
                  </div>
                  <div className="landing-page-depth5-frame12">
                    <a href='#' className="landing-page-depth6-frame02">
                      <span className="landing-page-text15">Sign up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="teacherapplicationpage-depth2-frame0">
              <div className="teacherapplicationpage-depth3-frame0">
                <div className="teacherapplicationpage-depth4-frame0">
                  <div className="teacherapplicationpage-depth5-frame010">
                    <div className="teacherapplicationpage-depth6-frame010">
                      <span className="teacherapplicationpage-text10">
                        Apply to Teach at Acme High School
                      </span>
                    </div>
                    <div className="teacherapplicationpage-depth6-frame1">
                      <span className="teacherapplicationpage-text11">
                        Please complete the application form below. You&apos;ll
                        have the opportunity to upload your resume and cover
                        letter at the end.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame1">
                  <div className="teacherapplicationpage-depth5-frame011">
                    <input type='text' placeholder='First Name' className="teacherapplicationpage-depth6-frame011" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame2">
                  <div className="teacherapplicationpage-depth5-frame012">
                    <input type='text' placeholder='Last Name' className="teacherapplicationpage-depth6-frame012" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame3">
                  <div className="teacherapplicationpage-depth5-frame013">
                    <input type='text' placeholder='Email' className="teacherapplicationpage-depth6-frame013" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame4">
                  <div className="teacherapplicationpage-depth5-frame014">
                    <input type='text' placeholder='Phone Number' className="teacherapplicationpage-depth6-frame014" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame5">
                  <div className="teacherapplicationpage-depth5-frame015">
                    <input type='text' placeholder='Street Address' className="teacherapplicationpage-depth6-frame015" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame6">
                  <div className="teacherapplicationpage-depth5-frame016">
                    <input type='text' placeholder='City' className="teacherapplicationpage-depth6-frame016" />
                  </div>
                  <div className="teacherapplicationpage-depth5-frame11">
                    <input type='text' placeholder='State' className="teacherapplicationpage-depth6-frame017" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame7">
                  <div className="teacherapplicationpage-depth5-frame017">
                    <div className="teacherapplicationpage-depth5-frame017">
                      <input type='text' placeholder='Zip code' className="teacherapplicationpage-depth6-frame018" />
                    </div>
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame8">
                  <div className="teacherapplicationpage-depth5-frame018">
                    <input typeof='text' placeholder='Country' className="teacherapplicationpage-depth6-frame019" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame9">
                  <div className="teacherapplicationpage-depth5-frame019">
                    <input type='text' placeholder='School' className="teacherapplicationpage-depth6-frame020" />
                  </div>
                  <div className="teacherapplicationpage-depth5-frame12">
                    <input type='text' placeholder='Degree' className="teacherapplicationpage-depth6-frame021" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame10">
                  <div className="teacherapplicationpage-depth5-frame020">
                    <input type='text' placeholder='Major' className="teacherapplicationpage-depth6-frame022" />
                  </div>
                  <div className="teacherapplicationpage-depth5-frame13">
                    <input placeholder='GPA' type='text' className="teacherapplicationpage-depth6-frame023"/>
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame11">
                  <div className="teacherapplicationpage-depth5-frame021">
                    <span className="teacherapplicationpage-text25">Start Date</span>
                    <input type='date' className="teacherapplicationpage-depth6-frame024"/>
                  </div>
                  <div className="teacherapplicationpage-depth5-frame14">
                    <span className="teacherapplicationpage-text26">End Date</span>
                    <input type='date' className="teacherapplicationpage-depth6-frame025"/>
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame12">
                  <div className="teacherapplicationpage-depth5-frame022">
                    <input type='text' placeholder='Company' className="teacherapplicationpage-depth6-frame026" />
                  </div>
                  <div className="teacherapplicationpage-depth5-frame15">
                    <input type='text' placeholder='Job title' className="teacherapplicationpage-depth6-frame027" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame14">
                  <div className="teacherapplicationpage-depth5-frame024">
                    <div className="teacherapplicationpage-depth6-frame030">
                      <img
                        alt="Vector01051"
                        src="/external/vector01051-airm.svg"
                        className="teacherapplicationpage-vector02"
                      />
                      <span className="teacherapplicationpage-text31">
                        Certification
                      </span>
                    </div>
                  </div>
                </div>
          
                <div className="teacherapplicationpage-depth4-frame16">
                  <span className="teacherapplicationpage-text34">
                    Upload your resume and cover letter
                  </span>
                </div>
                <div className="teacherapplicationpage-depth4-frame17">
                  <div className="teacherapplicationpage-depth5-frame026">
                    <span className="teacherapplicationpage-text35">
                      Upload resume
                    </span>
                  </div>
                  <div className="teacherapplicationpage-depth5-frame18">
                      <input type='file' placeholder='Choose File' className="teacherapplicationpage-text36" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame18">
                  <div className="teacherapplicationpage-depth5-frame027">
                    <span className="teacherapplicationpage-text37">
                      Upload cover letter
                    </span>
                  </div>
                  <div className="teacherapplicationpage-depth5-frame19">
                      <input type='file' placeholder='Choose File' className="teacherapplicationpage-text37" />
                  </div>
                </div>
                <div className="teacherapplicationpage-depth4-frame19">
                  <div className="teacherapplicationpage-depth5-frame028">
                    <div className="teacherapplicationpage-depth6-frame035">
                      <span className="teacherapplicationpage-text39">
                        Submit Application
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teacherapplicationpage
