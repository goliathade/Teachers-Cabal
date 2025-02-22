<?php 
session_start();

$connect = mysqli_connect("localhost", "root", "","ats_db");
//session_start();
if(!isset($_SESSION['id'])){
    header("location: ../teachersdashboard.php");
}
$data = $_SESSION['data'];
?>

<html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
   <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
    />

     <!-- fontawesome -->
     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs"/>
     <!-- fontawesome -->

    <title>Teachers cabal</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">

        <header class="drop-shadow-sm  flex fixed w-full top-0 bg-white z-10 items-center justify-between whitespace-nowrap border-b border-solid border-b-[#EEEFF2] px-10 py-3">
          <div class="flex items-center gap-4 text-[#1C1D22]">
            <a href="index.html"><img src="image/teacherscaballogo.png" width="100px" alt="" srcset=""></a>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex flex-1 justify-end gap-8">
              <label class="flex flex-col min-w-40 !h-10 max-w-64">
                <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    class="text-[#3E4D5B] flex border-none bg-[#F0F2F5] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F0F2F5] focus:border-none h-full placeholder:text-[#3E4D5B] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
              <div class="flex gap-2">
                <button
                  class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F0F2F5] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                  <div class="text-[#141414]" data-icon="Bell" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              
              </div>
            </div>
            <div class="flex gap-2">
              
              <a href="teachersdashboard.php" class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style='background-image: url("https://cdn.usegalileo.ai/sdxl10/751b53c7-4176-4f58-a0fc-39dd1e0e0293.png");'></a href="teachersdashboard.php">
          
            </div>
          </div>
        </header>

        <div class="gap-1 px-6 mt-20 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-80">
            <div class="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] py-4">

              <div class="flex flex-col gap-4">
                <div class="flex gap-3">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/d465b2a6-add4-4b60-967f-6e05049ba81a.png");'
                  ></div>
                  <div class="flex flex-col">
                    <h1 class="text-[#1C160C] text-base font-medium leading-normal">Hi, <?php echo $data['name'];?></h1>
                    <p class="text-[#798189] text-sm font-normal leading-normal">San Francisco, CA</p>
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <a href="teachersdashboard.php" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F4EFE6] hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="Gauge" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Dashboard</p>
                  </a>
                  <a href="teachersSchools.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-school"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Schools</p>
                  </a>
                  <a href="teacherApplications.php" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="AppWindow" data-size="24px" data-weight="fill">
                      <i class="fa-solid fa-file-pen"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Applications</p>
                  </a>
                  <a href="teacherInterviews.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="ApplePodcastsLogo" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-video"></i>
                      </svg>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Interviews</p>
                  </a>
                  <a href="TeacherOffers.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="Power" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Offers</p>
                  </a>
                  <a href="TeacherHelp.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="Info" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Help</p>
                  </a>
                </div>

              </div>

              <div class="flex flex-col gap-1">
                <a href="logout.php" class="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <div class="text-[#1C160C]" data-icon="SignOut" data-size="24px" data-weight="regular">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </div>
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">Logout</p>
                </a>
              </div>

            </div>
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Your Dashboard</p></div>
            <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Profile</h2>
            <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="UserCircle" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Your profile</p>
                  <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Help schools get to know you better by filling out your profile.</p>
                </div>
              </div>
              <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300">
                <p class="text-[#1C160C] text-base font-normal leading-normal">Complete</p>
              </div>
            </div>
            <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Applications</h2>
            <div class="test-container h-[25rem] overflow-scroll">
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Director of Education</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 01/09/2024</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Math Teacher</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 10/15/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Global History Teacher</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 09/30/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">College Counselor</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 09/15/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">English Teacher</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 09/01/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">English Teacher</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 09/01/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">English Teacher</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 09/01/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="NotionLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">English Teacher</p>
                    <p class="text-[#798189] text-sm font-normal leading-normal line-clamp-2">Application deadline: 09/01/2022</p>
                  </div>
                </div>
                <div class="shrink-0 cursor-pointer hover:rounded-lg hover:bg-[#F4EFE6] p-2 transition delay-150 duration-300"><p class="text-[#1C160C] text-base font-normal leading-normal">Submitted</p></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/5197b4b13e.js" crossorigin="anonymous"></script>
    <!-- fontawesome -->

  </body>
</html>
