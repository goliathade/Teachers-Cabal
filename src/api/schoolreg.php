<?php
    include("connection.php");

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $pass = $_POST['password'];
    $cpass = $_POST['cpass'];
    $des = $_POST['description'];
    $add = $_POST['address'];
    // $age = $_POST['age'];
    $image = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    // $role = $_POST['role'];
    

    if($pass!=$cpass){
        echo '<script>
                alert("Passwords do not match!");
                window.location = "\ATS\register.php";
            </script>';
    }
    // if($role= '2')
    else{
        move_uploaded_file($tmp_name,"../uploads/profilepic/$image");
        $insert = mysqli_query($connect, "insert into school (name, email, phone, password, address, image, status ) values('$name','$email', '$phone', '$pass', '$add', '$image', 0) ");
        if($insert){
            echo '<script>
                    alert("Registration successful!");
                    window.location = "\routes\school\dashboard.php";
                </script>';
        }
    }
   