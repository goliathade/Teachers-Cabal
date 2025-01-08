
<html>
    <head>
        <title>you</title>
        <link rel="stylesheet" href="../css/stylesheet.css">
        <style>
            input,select,button{
                padding: 15px;
            }
            a{
                text-decoration: none;
                color:white
            }
            form{
                box-shadow: 10px 12px 15px lavender;
                width: 50%;
                background-color: teal;
                padding: 20px;
            }
            #loginbtn{
                background-color:lavender;
                padding:10px;
                color: black;
            }
            body{
               color: white ;
            }
            span{
                color:black;
            }
            @media screen and (max-width: 798px) and (min-width:300px){
                form{
                    width:90%;
                }
                
            }
            
        </style>
    </head>

    <body style=" font-family: fantasy";>
        <center>
            <div id="headerSection">
            <h1 style="color:black;">SCHOOL Registration Form</h1>
            </div>
            <hr>

            
                <form action="../ATS/api/schoolreg.php" method="POST" enctype="multipart/form-data">
                    <input type="text" name="name" placeholder="Name" required><br> <br> 
                    <input type="email" name="email" placeholder="email"required><br> <br>
                    <input type="number" name="phone" placeholder="PHONE NO." required><br><br>
                    <input type="password" name="password" placeholder="Password" required><br>  <br>  
                    <textarea name="description" rows="4" columns="25" placeholder="Description" required></textarea><br>  <br>  
                    <input type="password" name="cpass" placeholder="Confirm Password" required><br><br>
                    <input type="text" name="address" placeholder="Address" required><br><br>
                 
                   
                    <div id="upload" style="width: 50%">
                        Upload image: <input type="file" id="profile" name="image" required>
                    </div><br><br>

                    <!-- <div id="upload" style="width: 50%">
                        Select your role:
                        <select name="role">
                            <option value="1">Teacher</option>
                            
                            <option value="2">School</option>
                        </select>                 
                    </div><br><br>   -->

                    <button id="loginbtn" type="submit" name="registerbtn">Register</button><br><br>
                    <span>Already user?</span> <a href="../ATS/index.php">Login here</a> <br><br>
                    <span>Teacher? Not school</span> <a href="../ATS/register.php">signup</a>
                </form>
            </center>
    </body>
</html>
