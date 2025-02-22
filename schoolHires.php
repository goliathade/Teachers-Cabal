<?php 
session_start();

$connect = mysqli_connect("localhost", "root", "","ats_db");
//session_start();
if(!isset($_SESSION['id'])){
    header("location: ../schoolHires.php");
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

    <title>Teachers Cabal</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div
      class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
      style='--checkbox-tick-svg: url(&apos;data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e&apos;); font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'
    >
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
              <a href="schooldashboard.php" class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style='background-image: url("https://cdn.usegalileo.ai/sdxl10/002997df-a562-40c5-aec4-f0394b79f427.png");'></a href="teachersdashboard.php">
          
            </div>
          </div>
        </header>

        <div class="gap-1 px-5 mt-20 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-50 mr-20">
            <div class="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] py-4">
             
              <div class="flex flex-col gap-4">
                <div class="flex gap-3">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/0cfc41ee-3903-4348-b7c3-04e49369bbc8.png");'
                  ></div>
                  <div>
                    <h1 class="text-[#1C160C] text-base font-medium leading-normal max-w-40">Welcome, <?php echo $data['name'];?></h1>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal">Manage your school</p>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <a href="schooldashboard.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="Gauge" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Dashboard</p>
                  </a>
                  <a href="schoolListings.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="Chalkboard" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-list"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Listings</p>
                  </a>
                  <a href="schoolApplicants.php" class="flex items-center gap-3 px-3 py-2 hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="AppWindow" data-size="24px" data-weight="fill">
                      <i class="fa-solid fa-people-group"></i>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Applicants</p>
                  </a>
                  <a href="schoolHires.php" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F4EFE6] hover:rounded-lg hover:bg-[#F4EFE6] transition delay-150 duration-300">
                    <div class="text-[#1C160C]" data-icon="ApplePodcastsLogo" data-size="24px" data-weight="regular">
                      <i class="fa-solid fa-handshake"></i>
                      </svg>
                    </div>
                    <p class="text-[#1C160C] text-sm font-medium leading-normal">Hires</p>
                  </a>
                </div>

              </div>
              <div class="flex flex-col gap-4">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#00008B] hover:bg-[#000043] transition delay-150 text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">New School</span>
                </button>
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
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Hires</p></div>
            <div class="px-4 py-3">
              <label class="flex flex-col min-w-40 h-12 w-full">
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
                    placeholder="Search for a hire..."
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F0F2F5] focus:border-none h-full placeholder:text-[#3E4D5B] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            
            <div class="mai-con h-[32rem] overflow-scroll">
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/67aec3cc-1373-4d4e-8d06-fba087b02d53.png");'
                  ></div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#141414] text-base font-medium leading-normal line-clamp-1">Alice Johnson</p>
                    <p class="text-[#3E4D5B] text-sm font-normal leading-normal line-clamp-2">English, alicejohnson@school.com</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <div class="flex size-7 items-center justify-center">
                    <input
                      type="checkbox"
                      class="h-5 w-5 rounded border-[#DBE1E6] border-2 bg-transparent text-[#359EFF] checked:bg-[#359EFF] checked:border-[#359EFF] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#DBE1E6] focus:outline-none"
                    />
                  </div>
                </div>
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
