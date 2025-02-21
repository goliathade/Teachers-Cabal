<?php
    include("connection.php");

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $pass = $_POST['password'];
    $cpass = $_POST['cpass'];
    $add = $_POST['address'];
    $age = $_POST['age'];
    $image = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    // $folder = '../uploads/profilepic'.$image;
    $role = $_POST['role'];
    

    if($pass!=$cpass){
        echo '<script>
                alert("Passwords do not match!");
                window.location = "register.php";
            </script>';
    }
    else{
        move_uploaded_file($tmp_name,"../uploads/$image");
        $insert = mysqli_query($connect, "insert into applicants (name, email, phone, password, address, age, image, status, role) values('$name','$email', '$phone', '$pass', '$add', '$age', '$image', 0, '$role') ");
        if($insert){
            echo '<script>
                    alert("Registration successfull!");
                    window.location = "./routes/teachers/dashboard.php";
                </script>';
        }
    }

    