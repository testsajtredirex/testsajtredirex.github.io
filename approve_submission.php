<?php
include 'db_connect.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $stmt = $db->prepare("UPDATE submissions SET approved = 1 WHERE id = ?");
    $stmt->bind_param('i', $id);

    if ($stmt->execute()) {
        echo "Submission approved!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "No ID provided.";
}
?>
