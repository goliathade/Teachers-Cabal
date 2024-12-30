import React from 'react';

const schoolProfile = () => {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{width: '1430px'}}>
        <div className="layout-container flex h-full grow flex-col">

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

          <div className="gap-1 px-6 flex flex-1 justify-center py-5"  style={{marginTop: '5em'}}>

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
                        <a href='/schooldashboard-applicants' className="schooldashboardoverview-depth7-frame4">
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

            <div className="layout-content-container flex flex-col max-w-[960px] flex-1" style={{position: 'relative', left:'100px'}}>
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="fontstyle text-[#1C160C] tracking-light text-[32px] font-bold leading-tight">
                    School Information
                  </p>
                  <p className="fontstyle text-[#A18249] text-sm font-normal leading-normal">
                    Edit and view details about Oakland Unified School District.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal">
                  <span className="truncate fontstyle">Update School</span>
                </button>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal pb-2">
                    School Description
                  </p>
                  <textarea
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] min-h-36 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal pb-2">
                    Address
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal pb-2">
                    Contact Number
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="fontstyle text-[#1C160C] text-base font-medium leading-normal pb-2">
                    Principal Name
                  </p>
                  <input
                    className="fontstyle form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </label>
              </div>
              <h2 className="fontstyle text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                ATS Resume Standard
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="fontstyle text-[#1C160C] text-base font-bold leading-tight">
                        ATS Resume Template
                      </p>
                      <p className="fontstyle text-[#A18249] text-sm font-normal leading-normal">
                        Upload your ATS-compliant resume template.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#F4EFE6] text-[#1C160C] pr-2 gap-1 text-sm font-medium leading-normal w-fit">
                      <div
                        className="text-[#1C160C]"
                        data-icon="FileArrowUp"
                        data-size="18px"
                        data-weight="regular"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z" />
                        </svg>
                      </div>
                      <span className="truncate fontstyle">Upload</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/03a7f8f9-2553-4d72-a89e-2bdb9d303645.png")'
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-stretch">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1c82c4] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate fontstyle">Save Changes</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate fontstyle">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default schoolProfile;
