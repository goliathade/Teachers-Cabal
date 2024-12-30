import React from 'react'

import { Helmet } from 'react-helmet'

import './job-posting-school.css'

const JobPostingSchool = (props) => {
  return (
    <div className="job-posting-school-container">
      <Helmet>
        <title>Teachers Cabal</title>
      </Helmet>
      <div className="job-posting-school-job-posting-school">
        <div className="job-posting-school-depth0-frame0">
          <div className="job-posting-school-depth1-frame0">

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
                    <a href='/about' className="landing-page-depth5-frame3">
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

            <div className="job-posting-school-depth2-frame1">
              <div className="job-posting-school-depth3-frame0">
                <div className="job-posting-school-depth4-frame02">
                  <div className="job-posting-school-depth5-frame012">
                    <div className="job-posting-school-depth6-frame010">
                      <span className="job-posting-school-text14">
                        Create a job listing
                      </span>
                    </div>
                    <div className="job-posting-school-depth6-frame11">
                      <span className="job-posting-school-text15">
                        Post your job to our exclusive network of top teachers
                        and school leaders
                      </span>
                    </div>
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame12">
                  <div className="job-posting-school-depth5-frame013">
                    <div className="job-posting-school-depth6-frame011">
                      <span className="job-posting-school-text16">
                        Job title*
                      </span>
                    </div>
                    <input type='text' placeholder='e.g. High School Chemistry Teacher' className="job-posting-school-depth6-frame12" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame2">
                  <div className="job-posting-school-depth5-frame014">
                    <div className="job-posting-school-depth6-frame012">
                      <span className="job-posting-school-text18">
                        Job description*
                      </span>
                    </div>
                    <input type='text' placeholder='Include job duties, qualifications, and experience needed...' className="job-posting-school-depth6-frame12" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame3">
                  <div className="job-posting-school-depth5-frame015">
                    <div className="job-posting-school-depth6-frame013">
                      <span className="job-posting-school-text19">
                        Qualifications*
                      </span>
                    </div>
                    <input type='text' placeholder='e.g Bsc in Computer Science...' className="job-posting-school-depth6-frame14" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame4">
                  <div className="job-posting-school-depth5-frame016">
                    <div className="job-posting-school-depth6-frame014">
                      <span className="job-posting-school-text21">
                        Salary range*
                      </span>
                    </div>
                    <select className="job-posting-school-depth6-frame15">
                      <option value="50,000-100,000">₦50,000 - ₦100,000</option>
                      <option value="100,001-150,000">₦100,001 - ₦150,000</option>
                      <option value="150,001-200,000">₦150,001 - ₦200,000</option>
                      <option value="200,001-250,000">₦200,001 - ₦250,000</option>
                      <option value="250,001-above">₦250,001 and above</option>
                    </select>
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame5">
                  <div className="job-posting-school-depth5-frame017">
                    <div className="job-posting-school-depth6-frame015">
                      <span className="job-posting-school-text23">
                        Subject area*
                      </span>
                    </div>
                    <input type='text' placeholder='e.g. Science, Math, English, History' className="job-posting-school-depth6-frame16" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame6">
                  <div className="job-posting-school-depth5-frame018">
                    <div className="job-posting-school-depth6-frame016">
                      <span className="job-posting-school-text25">
                        Location*
                      </span>
                    </div>
                    <input type='text' placeholder='City, State' className="job-posting-school-depth6-frame17" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame7">
                  <div className="job-posting-school-depth5-frame019">
                    <div className="job-posting-school-depth6-frame017">
                      <span className="job-posting-school-text27">
                        Contract type*
                      </span>
                    </div>
                    <input type='text' placeholder='Full time, Part time, Contract' className="job-posting-school-depth6-frame18" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame8">
                  <div className="job-posting-school-depth5-frame020">
                    <div className="job-posting-school-depth6-frame018">
                      <span className="job-posting-school-text29">
                        Benefits*
                      </span>
                    </div>
                    <input type='text' placeholder='Health insurance, Paid time off, Professional development...' className="job-posting-school-depth6-frame19" />
                  </div>
                </div>
                <div className="job-posting-school-depth4-frame9">
                  <div className="job-posting-school-depth5-frame021">
                    <div className="job-posting-school-depth6-frame019">
                      <span className="job-posting-school-text31">
                        Preview your job listing
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

export default JobPostingSchool
