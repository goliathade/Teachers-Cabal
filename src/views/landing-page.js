import React, { useState } from 'react';

import { Helmet } from 'react-helmet'

import './landing-page.css';

const LandingPage = (props) => {
   const [searchTerm, setSearchTerm] = useState(''); // State to hold search input

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Add search logic here, e.g., navigate to results page or filter content
  };
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Teachers Cabal</title>
      </Helmet>
      <div className="landing-page-landing-page">
        <div className="landing-page-depth0-frame0">
          <div className="landing-page-depth1-frame0">
            
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
            
            <div className="landing-page-depth2-frame1">
              <div className="landing-page-depth3-frame0">
                <div className="landing-page-depth4-frame02">
                  <div className="landing-page-landing">
                    <div className='landing-page-img'>
                      <img
                        alt="school39018"
                        src="/external/school.jpg"
                        className="landing-page-school3"
                        style={{ }}
                      />
                    </div>
                    <span className="landing-page-text16">
                      Find your next teaching Job
                    </span>
                    <span className="landing-page-text17">
                      Get matched with top schools and districts near your area
                    </span>
                    <i class="fa-solid fa-magnifying-glass search-button"></i>
                    <input 
                      type='text' 
                      placeholder='Enter your location'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{color: 'black'}}
                      className="landing-page-text18"
                    />
                    <button  onClick={handleSearch} type='submit' className="landing-page-text19">Search</button>
                  </div>
                </div>
                <div className="landing-page-depth4-frame12">
                  <div className="landing-page-depth5-frame03">
                    <div className="landing-page-depth6-frame03">
                      <span className="landing-page-text20">
                        How we can help you
                      </span>
                    </div>
                    <div className="landing-page-depth6-frame11">
                      <span className="landing-page-text21">
                        Teachers Cabal is an online recruitment platform that
                        leverages the latest technology to connect teachers with
                        top schools and school districts. Our Applicant Tracking
                        System (ATS) makes the job search and application
                        process seamless and efficient.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="landing-page-depth4-frame2">
                  <div className="landing-page-depth5-frame04">
                    <div className="landing-page-depth6-frame04">
                      <span className="landing-page-text22">
                        Why Teachers Cabal?
                      </span>
                    </div>
                    <div className="landing-page-depth6-frame12">
                      <span className="landing-page-text23">
                        Teachers Cabal is more than just a job board; it&apos;s
                        an online recruitment platform designed specifically for
                        educators. Our mission is to make the job search and
                        application process as seamless and efficient as
                        possible for both teachers and schools.
                      </span>
                    </div>
                  </div>
                  <div className="landing-page-depth5-frame13">
                    <div className="landing-page-depth6-frame05">
                      <div className="landing-page-depth7-frame01">
                        <div className="landing-page-depth8-frame01">
                        <i class="fa-solid fa-magnifying-glass" style={{color: 'blue'}}></i>
                        </div>
                        <div className="landing-page-depth8-frame11">
                          <div className="landing-page-depth9-frame011">
                            <span className="landing-page-text24">
                              Effortless job matching
                            </span>
                          </div>
                          <div className="landing-page-depth9-frame11">
                            <span className="landing-page-text25">
                              Let our ATS do the heavy lifting
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="landing-page-depth7-frame11">
                        <div className="landing-page-depth8-frame02">
                        <i class="fa-solid fa-heart" style={{color: 'blue'}}></i>
                        </div>
                        <div className="landing-page-depth8-frame12">
                          <div className="landing-page-depth9-frame013">
                            <span className="landing-page-text26">
                              Benefits for teachers
                            </span>
                          </div>
                          <div className="landing-page-depth9-frame12">
                            <span className="landing-page-text27">
                              Find your ideal role with ease
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="landing-page-depth7-frame2">
                        <div className="landing-page-depth8-frame03">
                        <i class="fa-solid fa-heart" style={{color: 'blue'}}></i>
                        </div>
                        <div className="landing-page-depth8-frame13">
                          <div className="landing-page-depth9-frame015">
                            <span className="landing-page-text28">
                              Benefits for schools
                            </span>
                          </div>
                          <div className="landing-page-depth9-frame13">
                            <span className="landing-page-text29">
                              Access to top talent
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="landing-page-depth7-frame3">
                        <div className="landing-page-depth8-frame04">
                        <i class="fa-solid fa-user-group" style={{color: 'blue'}}></i>
                        </div>
                        <div className="landing-page-depth8-frame14">
                          <div className="landing-page-depth9-frame017">
                            <span className="landing-page-text30">
                              Community
                            </span>
                          </div>
                          <div className="landing-page-depth9-frame14">
                            <span className="landing-page-text31">
                              Join a community of educators
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="landing-page-depth7-frame4">
                        <div className="landing-page-depth8-frame05">
                        <i class="fa-solid fa-user-group" style={{color: 'blue'}}></i>
                        </div>
                        <div className="landing-page-depth8-frame15">
                          <div className="landing-page-depth9-frame019">
                            <span className="landing-page-text32">
                              Professional development
                            </span>
                          </div>
                          <div className="landing-page-depth9-frame15">
                            <span className="landing-page-text33">
                              Grow your skills and knowledge
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="landing-page-depth6-frame13">
                      <div className="landing-page-depth7-frame02">
                        <div className="landing-page-depth8-frame06">
                        <i class="fa-solid fa-book" style={{color: 'blue'}}></i>
                        </div>
                        <div className="landing-page-depth8-frame16">
                          <div className="landing-page-depth9-frame021">
                            <span className="landing-page-text34">
                              Resource library
                            </span>
                          </div>
                          <div className="landing-page-depth9-frame16">
                            <span className="landing-page-text35">
                              Access to helpful resources and tools
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-page-depth4-frame3">
                  <div className="landing-page-depth5-frame05">
                    <div className="landing-page-depth6-frame06">
                      <div className="landing-page-depth7-frame12">
                        <span className="landing-page-text36">
                          <span className="landing-page-text37">
                            Find your next role
                          </span>
                          <br></br>
                          <br></br>
                          <span className='landing-page-text23'>
                            Join Teachers Cabal today and get matched with top
                            schools and school districts in your area.
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="landing-page-depth6-frame14">
                      <div className="landing-page-depth7-frame03">
                        <a href='/teacherlogin' className="landing-page-depth8-frame07">
                          <div className="landing-page-depth9-frame022">
                            <span className="landing-page-text41">
                              Find a job
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    
      <footer className="text-center py-6 w-full">
      {/* Links */}
      <div className="flex justify-center space-x-8 text-sm text-gray-600 mb-4">
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:underline">
          Terms of Service
        </a>
        <a href="/contact-us" className="hover:underline">
          Contact Us
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-gray-600 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-500">
        © 2024 Teachers Cabal. All rights reserved.
      </div>
    </footer>

    </div>
  )
}

export default LandingPage
