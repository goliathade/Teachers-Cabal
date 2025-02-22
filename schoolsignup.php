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

    <title> Teachers cabal</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>

  <body>
       <header class="drop-shadow-sm  flex fixed w-full top-0 bg-white z-10 items-center justify-between whitespace-nowrap border-b border-solid border-b-[#EEEFF2] px-10 py-3">
        <div class="flex items-center gap-4 text-[#1C1D22]">
          <a href="index.html"><img src="image/teacherscaballogo.png" width="100px" alt="" srcset=""></a>
        </div>
        <div class="flex flex-1 justify-end gap-8">
          <div class="flex items-center gap-9">
            <a class="transition delay-150 duration-300 hover:text-black hover:font-black text-sm font-medium leading-normal" href="teacherlogin.php">Find a Job</a>
            <a class="transition delay-150 duration-300 hover:text-black hover:font-black text-sm font-medium leading-normal" href="schoollogin.php">Post a Job</a>
            <a class="transition delay-150 duration-300 hover:text-black hover:font-black text-sm font-medium leading-normal" href="resources.html">Resources</a>
            <a class="transition delay-150 duration-300 hover:text-black hover:font-black text-sm font-medium leading-normal" href="about.html">About</a>
          </div>
          <div class="flex gap-2">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#558ca1] text-[#F9FAFA] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Log In</span>
            </button>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#EEEFF2] text-[#1C1D22] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Sign Up</span>
            </button>
          </div>
        </div>
      </header>
      
      <form action="api/schoolreg.php" method="post" enctype="multipart/form-data">
        <div class="mt-20 py-5 relative flex items-center justify-center min-h-screen bg-[#F9FAFA] overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
          <div class="flex flex-col w-full max-w-[512px] p-5 bg-white rounded-xl shadow-lg">
            <div class="flex justify-center">
              <img src="image/teacherscaballogo.png" alt="Teachers Cabal Logo" class="w-20" />
            </div>
            <div class="text-center mt-4">
              <p class="text-[#1C1D22] text-[32px] font-bold ">Sign up</p>
              <p class="text-[#1C1D22] text-[15px] ">Register your school</p>
            </div>
        
            <div class="flex flex-col gap-4 mt-6">
              <label class="flex flex-col">
                <span class="text-[#1C1D22] text-base font-medium py-2">School Name</span>
                <input type="text" name="name" id="name" placeholder="Enter the name of your school"
                  class="form-input w-full h-14 rounded-xl border border-[#D5D6DD] p-3 text-base focus:outline-none focus:border-[#607AFB]" />
              </label>
        
              <label class="flex flex-col">
                <span class="text-[#1C1D22] text-base font-medium py-2">School Type</span>
                <select class="form-input w-full h-14 rounded-xl border border-[#D5D6DD] p-3 text-base focus:outline-none focus:border-[#607AFB]">
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="university">University</option>
                </select>
              </label>            
        
              <label class="flex flex-col">
                <span class="text-[#1C1D22] text-base font-medium py-2">School Address</span>
                <input type="text" name="address" id="address" placeholder="Enter the address of your school in full..."
                  class="form-input w-full h-14 rounded-xl border border-[#D5D6DD] p-3 text-base focus:outline-none focus:border-[#607AFB]" />
              </label>

              <label class="flex flex-col">
                <span class="text-[#1C1D22] text-base font-medium py-2">Contact email address</span>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                  class="form-input w-full h-14 rounded-xl border border-[#D5D6DD] p-3 text-base focus:outline-none focus:border-[#607AFB]" />
              </label>
        
              <label class="flex flex-col">
                <span class="text-[#1C1D22] text-base font-medium py-2">Password</span>
                <input type="text" name="password" id="password" placeholder="Enter your password"
                  class="form-input w-full h-14 rounded-xl border border-[#D5D6DD] p-3 text-base focus:outline-none focus:border-[#607AFB]" />
              </label>

              <label class="flex flex-col">
                <span class="text-[#1C1D22] text-base font-medium py-2">Confirm Password</span>
                <input type="text" name="cpass" id="cpass" placeholder="Confirm your password"
                  class="form-input w-full h-14 rounded-xl border border-[#D5D6DD] p-3 text-base focus:outline-none focus:border-[#607AFB]" />
              </label>
            </div>
        
            <button type="submit" class="w-full h-12 mt-4 bg-[#607AFB] text-white rounded-lg font-bold tracking-wide">
              Sign Up
            </button>
        
            <p class="text-center text-sm text-[#3C3F4A] mt-4">
              Already have an account? <a href="schoollogin.php" class="underline text-[#607AFB] cursor-pointer">Log in</a>
            </p>
        
            <p class="text-center text-xs text-[#3C3F4A] mt-3">
              By signing up you agree to our <span class="underline text-[#607AFB] cursor-pointer">Terms of Use</span> and 
              <span class="underline text-[#607AFB] cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </form>
      
    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/5197b4b13e.js" crossorigin="anonymous"></script>
    <!-- fontawesome -->

  </body>
</html>
