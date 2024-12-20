<?php
include 'db_connect.php';

// Fetch approved submissions
$result = $db->query("SELECT * FROM submissions WHERE approved = 1");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "
        <div class='card'>
            <h4>{$row['title']}</h4>
            <p>{$row['description']}</p>
            <a href='{$row['personalPageLink']}'>Details</a>
        </div>";
    }
} else {
    echo "No approved submissions.";
}
?>
