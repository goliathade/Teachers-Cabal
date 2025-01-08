<!-- Job posting --> 

<?php

        // Create a connection to the database      
        $connect = mysqli_connect("localhost", "root", "", "ats_db");
        $servername="localhost";
        $username="root";
        $password="";
        $dbname="ats_db";
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Ensure all required fields are filled
    $required_fields = array("title", "description", "require", "subject", "location", "salary");
    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            die("Error: All fields are required.");
        }
    }

    
        // File uploaded successfully, insert data into the database
        $title = $_POST["title"];
        $description = $_POST["description"];
        $requirement = $_POST["require"];
        $subject = $_POST["subject"];
        $location = $_POST["location"];
        $salary = $_POST["salary"];
        
        // Prepare and bind the SQL statement
        $stmt = $conn->prepare("INSERT into jobpost (`title`, `description`, `require`, `subject`, `location`, `salary`) values (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $title, $description, $requirement, $subject, $location, $salary );

        // Execute the statement
        if ($stmt->execute()) {
            echo'<script>
            alert("Job applied successfully!"); 
            window.location = "..\ATS\routes\school\dashboard.php";
            </script>';
        } else {
            echo "Error " . $conn->error;
        }

        // Close the prepared statement and the database connection
        $stmt->close();
        $conn->close();
    } else {
        echo "Error uploading file.";
    }

?>




