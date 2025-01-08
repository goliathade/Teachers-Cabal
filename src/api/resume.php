<?php
include("connection.php");

require('C:\xampp\htdocs\ATS\fpdf\fpdf.php');
// $profilepic = '';
// $upload_dir = "../uploads/";
// $profilepic = $_FILES['profilepic']['name'];
// $tmp_name = $_FILES['profilepic']['tmp_name'];


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$age = $_POST['age'];
$address = $_POST['address'];
$summary = $_POST['summary'];
$qual = $_POST['qual'];
$skills = $_POST['skills'];
$certificate = $_POST['certificate'];
$exp = $_POST['exp'];
$leader = $_POST['leader'];
$subject = $_POST['subject'];
$coursedev = $_POST['coursedev'];

// mb  // window.location = "..\ATS\routes\school\dashboard.php";

$stmt = $connect->prepare("INSERT into teachers (`name`, `email`, `phone`, `age`, `address`, `summary`, `qual`, `skills`, `certificate`, `exp`, `leader`, `subject`, `coursedev`, `profilepic`) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssssssss", $name, $email, $phone, $age, $address, $summary, $qual, $skills, $certificate, $exp, $leader, $subject, $coursedev, $profilepic);

   // if ($stmt->execute()) {
   //    echo'<script>
   //    alert("Job applied successfully!"); 
   //    </script>';
   // } else {
   //    echo "Error " . $conn->error;
   // }


// if (isset($_FILES['profilepic']) && $_FILES['profilepic']['error' == 0]){
   // $file = basename($_FILES['profilepic']['name']);
   // $target_file = $upload_dir. $file;
   // $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

   // $check = getimagesize( $_FILES['profilepic']['tmp_name']);
   // if ($check !== false && ($file_type == "png"  || $file_type == "jpg"  || $file_type == "jpeg")){
   //    if(move_uploaded_file($_FILES['profilepic']['tmp_name'], "../uploads/$profilepic")){
   //       $profilepic =  $target_file;
   //    }
      
   // }
   // move_uploaded_file($tmp_name,"../uploads/$profilepic");
// }
// Download FPDF

class PDF extends FPDF{
   function Header(){
      global $profilepic;
      if(!empty($profilepic)){
         $this->Image($profilepic, 10, 10, 25);
         $this->SetXY(10,10);
      }
   }
   function addTitle($title){
      $this->SetFont('Arial','8', 12);
      $this->Cell(0,6, $title, 0,1,'L');
      $this->Ln(2);

   }
   function addContent($content){ 
      $this->SetFont('Arial','', 10);
      $this->Cell(0, 6, $content);
      $this->Ln(2);
   }
}

$pdf = new PDF();
$pdf->AddPage();

$pdf->SetFont('Arial','B', 16);
$pdf->Cell(0, 10, $name, 0, 1);
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 10, "Email: $email", 0, 1);
$pdf->Cell(0, 10, "Phone: $phone", 0, 1);
$pdf->Cell(0, 10, "Age: $age", 0, 1);
$pdf->Cell(0, 10, "Address: $address", 0, 1);
$pdf->Ln(5);


$pdf->addTitle("Profile Summary:");
$pdf->Ln(0.5);
$pdf->Cell(0, 10, "$summary", 0, 1);
// $pdf->addContent($summary);

$pdf->Cell(0, 10, "Education/Qualification: $qual", 0, 1);
// $pdf->addContent($qual);

$pdf->Cell(0, 10, "Teaching Certifications: $certificate", 0, 1);
// $pdf->addContent($certificate);

$pdf->Cell(0, 10, "Years of Teaching Experience: $exp", 0, 1);
// $pdf->addContent($exp);

$pdf->Cell(0, 10, "Relevant Coursework: $coursedev", 0, 1);
// $pdf->addContent($coursedev);


$pdf->Cell(0, 10, "Leadership/Mentorship: $leader", 0, 1);
// $pdf->addContent($leader);


$pdf->Cell(0, 10, "Subjects: $subject", 0, 1);
// $pdf->addContent($subject);


$pdf->Cell(0, 10, "Relevant skills: $skills", 0, 1);
// $pdf->addContent($skills);

$pdf->Output();