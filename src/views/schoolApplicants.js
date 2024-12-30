import React from 'react';

const schoolApplicants = () => {
  return (
    <>
  <div
    className=" relative flex size-full min-h-screen flex-col bg-[#f7f9fc] group/design-root overflow-x-hidden"
  >
    <div className="layout-container flex h-full grow flex-col" style={{width:'1430px', marginTop:'4.5em'}}>
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

      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-90">
          <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#f7f9fc]">

          <div className="schooldashboardoverview-depth3-frame02 mx-20" style={{position: 'fixed', left:'10px' }}>
                  <div className="schooldashboardoverview-depth5-frame01">
                    <div className="schooldashboardoverview-depth6-frame010"></div>
                    <div className="schooldashboardoverview-depth6-frame11">
                      <div className="schooldashboardoverview-depth7-frame01">
                        <span className="fontstyle schooldashboardoverview-text10">
                          <br></br>
                          <span>Oakland Unified School District</span>
                        </span>
                      </div>
                      <div className="schooldashboardoverview-depth7-frame11"></div>
                    </div>
                  </div>
                  <div className="schooldashboardoverview-depth4-frame01" style={{backgroundColor: 'transparent'}}>
                    <div className="schooldashboardoverview-depth5-frame02">
                      <div className="schooldashboardoverview-depth6-frame011">
                        <a href='/schooldashboardoverview' className="schooldashboardoverview-depth7-frame12">
                          <div className="schooldashboardoverview-depth8-frame01">
                            <span className="fontstyle schooldashboardoverview-text13">
                              Overview
                            </span>
                          </div>
                        </a>
                        <a href='/school-dashboard-job-listing' className="schooldashboardoverview-depth7-frame2">
                          <div className="schooldashboardoverview-depth8-frame02">
                            <span className="fontstyle schooldashboardoverview-text14">
                              Listings
                            </span>
                          </div>
                        </a>
                        <a href='/schooldashboard-applicants' className="schooldashboardoverview-depth7-frame4 active">
                          <div className="schooldashboardoverview-depth8-frame03">
                            <span className="fontstyle schooldashboardoverview-text15">
                              Applicants
                            </span>
                          </div>
                        </a>
                        <a href='/schooldashboardhires' className="schooldashboardoverview-depth7-frame5">
                          <div className="schooldashboardoverview-depth8-frame04">
                            <span className="fontstyle schooldashboardoverview-text16">
                              Hires
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="schooldashboardoverview-depth5-frame11">
                        <div className="schooldashboardoverview-depth6-frame012">
                          <span className="fontstyle schooldashboardoverview-text18">
                            New School
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="schooldashboardoverview-depth6-frame013">
                      <div className="schooldashboardoverview-depth7-frame02">
                        <img
                          alt="Depth8Frame01037"
                          src="/external/depth8frame01037-wujq.svg"
                          className="schooldashboardoverview-depth8-frame06"
                        />
                      </div>
                      <div className="schooldashboardoverview-depth7-frame13">
                        <span className="fontstyle schooldashboardoverview-text19">
                          Logout
                        </span>
                      </div>
                    </div>
                  </div>
            </div>

          </div>
        </div>

        <div className='Container-element' style={{height: '100px'}}>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1" style={{position: 'relative', left: '100px'}}>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="fontstyle text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]">
                  Applicant Profile
                </p>
                <p className="fontstyle text-[grey] text-base font-normal leading-normal">
                  Detailed information about the applicant
                </p>
              </div>
            </div>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/19e7114f-623e-4e01-9243-a6e34a75260f.png")'
                    }}
                  />
                  <div className="flex flex-col">
                    <p className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                      Alice Wang
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal">
                      Elementary Teacher Applicant
                    </p>
                    <p className="fontstyle text-[grey] text-base font-normal leading-normal">
                      alice.wang@westsideacademy.org
                    </p>
                  </div>
                </div>
                <div className="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto">
                    <span className="truncate fontstyle">Approve</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1c82c4] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto">
                    <span className="truncate fontstyle">Reject</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                  Role
                </p>
                <p className="fontstyle text-[#1C160C] text-sm font-normal leading-normal">
                  Elementary Teacher
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                  Application Stage
                </p>
                <p className="fontstyle text-[#1C160C] text-sm font-normal leading-normal">
                  New
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                  Location
                </p>
                <p className="fontstyle text-[#1C160C] text-sm font-normal leading-normal">
                  San Francisco, CA
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#E9DFCE] py-5">
                <p className="fontstyle text-[grey] text-sm font-normal leading-normal">
                  Date Applied
                </p>
                <p className="fontstyle text-[#1C160C] text-sm font-normal leading-normal">
                  2 days ago
                </p>
              </div>
            </div>
            <h2 className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Application Details
            </h2>
            <p className="fontstyle text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Alice has 5 years of teaching experience in elementary education.
              She specializes in early childhood development and has a strong
              background in integrating technology into the classroom. Her
              references highlight her ability to connect with students and foster
              a positive learning environment.
            </p>
            <h2 className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Documents
            </h2>
            <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12"
                  data-icon="FileDoc"
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
                    <path d="M52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H52a36,36,0,0,0,0-72Zm0,56H44V160h8a20,20,0,0,1,0,40Zm169.53-4.91a8,8,0,0,1,.25,11.31A30.06,30.06,0,0,1,200,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,221.53,195.09ZM128,144c-17.65,0-32,16.15-32,36s14.35,36,32,36,32-16.15,32-36S145.65,144,128,144Zm0,56c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.82,200,128,200ZM48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal line-clamp-1">
                    Resume
                  </p>
                  <p className="fontstyle text-[grey] text-sm font-normal leading-normal line-clamp-2">
                    Your professional summary
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit">
                  <span className="truncate fontstyle">Download</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12"
                  data-icon="FileDoc"
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
                    <path d="M52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H52a36,36,0,0,0,0-72Zm0,56H44V160h8a20,20,0,0,1,0,40Zm169.53-4.91a8,8,0,0,1,.25,11.31A30.06,30.06,0,0,1,200,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,221.53,195.09ZM128,144c-17.65,0-32,16.15-32,36s14.35,36,32,36,32-16.15,32-36S145.65,144,128,144Zm0,56c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.82,200,128,200ZM48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Z" />
                  </svg>
                </div>
                <div className="fontstyle flex flex-col justify-center">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal line-clamp-1">
                    Cover Letter
                  </p>
                  <p className="fontstyle text-[grey] text-sm font-normal leading-normal line-clamp-2">
                    Please refer to the attached document.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit">
                  <span className="truncate fontstyle">Download</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12"
                  data-icon="Certificate"
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
                    <path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal line-clamp-1">
                    Teaching Certificate
                  </p>
                  <p className="fontstyle text-[grey] text-sm font-normal leading-normal line-clamp-2">
                    This certificate qualifies you to teach.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit">
                  <span className="truncate fontstyle">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</>
  );
};

export default schoolApplicants;
