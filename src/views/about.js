import React from 'react';

const about = () => {
  return (
    <>
    {/* Hello world */}
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col" style={{width:'1430px'}}>

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

        <div className="px-20 flex flex-1 justify-center py-5 my-20">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("external/about-img.png")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="fontstyle text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      About Teachers Cabal
                    </h1>
                    <h2 className="fontstyle text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Connecting teachers with top schools and districts near you.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#007bff] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="fontstyle truncate">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="fontstyle text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Teachers Cabal is an online recruitment platform that leverages the
              latest technology to connect teachers with top schools and school
              districts. Our Applicant Tracking System (ATS) makes the job search
              and application process seamless and efficient.
            </p>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="fontstyle text-[#1C160C] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Mission and Values
                </h1>
                <p className="fontstyle text-[#1C160C] text-base font-normal leading-normal max-w-[720px]">
                  We aim to empower educators and schools by fostering meaningful
                  connections.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
                  <div
                    className="text-[#1C160C]"
                    data-icon="Trademark"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <i class="fa-regular fa-lightbulb"></i>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                      Innovative Technology
                    </h2>
                    <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                      Leverage cutting-edge tools to simplify hiring.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
                  <div
                    className="text-[#1C160C]"
                    data-icon="Kanban"
                    data-size="24px"
                    data-weight="regular"
                  >
                   <i class="fa-solid fa-list-check"></i>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                      Seamless Processes
                    </h2>
                    <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                      Streamline every step of the recruitment process.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
                  <div
                    className="text-[#1C160C]"
                    data-icon="GoogleLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                      Global Reach
                    </h2>
                    <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                      Connect teachers and schools worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
                <div
                  className="text-[#1C160C]"
                  data-icon="Users"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                    Our Team
                  </h2>
                  <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                    Meet the dedicated individuals behind Teachers Cabal.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
              <div
                  className="text-[#1C160C]"
                  data-icon="Users"
                  data-size="24px"
                  data-weight="regular"
                >
               <i class="fa-solid fa-handshake"></i>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                    Partnerships
                  </h2>
                  <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                    Discover our trusted partners and how we collaborate.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#E9DFCE] bg-[#FFFFFF] p-4 flex-col">
                <div
                  className="text-[#1C160C]"
                  data-icon="NotionLogo"
                  data-size="24px"
                  data-weight="regular"
                >
                 <i class="fa-solid fa-people-group"></i>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                    Community Engagement
                  </h2>
                  <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                    Learn about our initiatives to support the education
                    community.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Team
            </h2>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/014920d7-e0b4-4ffa-823a-811dd0d3cdbc.png")'
                    }}
                  />
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Dr. Jane Smith
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal text-center">
                      Founder &amp; CEO
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal text-center">
                      Passionate about education and technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/bc4a93d8-373c-4089-88de-401ec335d5d3.png")'
                    }}
                  />
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      John Davis
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal text-center">
                      Head of Technology
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal text-center">
                      Bringing innovation to the education sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/8ceee4b1-c0ed-4663-a167-455e5dfcce9e.png")'
                    }}
                  />
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Emily Johnson
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal text-center">
                      Community Manager
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal text-center">
                      Dedicated to building a strong education community.
                    </p>
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
    </div>
  </>
  
  );
};

export default about;
