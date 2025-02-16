<?php
    session_start();
    include('connection.php');

    $email = $_POST['email'];
    $pass = $_POST['password'];
    // $role = $_POST['role'];

    $check = mysqli_query($connect, "select * from school where email='$email' and password='$pass'");

    if(mysqli_num_rows($check)>0){
        $getGroups = mysqli_query($connect, "select name, email , id from school ");
        if(mysqli_num_rows($getGroups)>0){
            $groups = mysqli_fetch_all($getGroups, MYSQLI_ASSOC);
            $_SESSION['groups'] = $groups;
        }
        $data = mysqli_fetch_array($check);
        $_SESSION['id'] = $data['id'];
        $_SESSION['status'] = $data['status'];
        $_SESSION['data'] = $data;
        echo '<script>
                window.location = "../routes/school/dashboard.php";
            </script>';
    }
    else{
        echo '<script>
                alert("Invalid credentials!");
                window.location = "../";
            </script>';
    }
    
?>