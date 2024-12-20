<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=business_cards;charset=utf8mb4', 'jedanklik', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Log the exception to a file or display it for debugging purposes
    file_put_contents('/var/www/html/testsajtredirex.github.io/debug_log.txt', "Connection failed: " . $e->getMessage(), FILE_APPEND);
    die("Database connection failed.");
}
?>
