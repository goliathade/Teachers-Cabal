<?php
require_once 'api/connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $database = new Database();
    $db = $database->getConnection();

    $query = "UPDATE applicants SET status = :status WHERE id = :id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(':status', $_POST['status']);
    $stmt->bindParam(':id', $_POST['id'], PDO::PARAM_INT);

    if ($stmt->execute()) {
        header("Location: applicant_details.php?id=" . $_POST['id']);
        exit();
    } else {
        echo "Error updating status";
    }
}
