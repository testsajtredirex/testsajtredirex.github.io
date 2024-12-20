<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$host = 'localhost';
$db   = 'business_cards';
$user = 'jedanklik';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Check if ID is provided
if (!isset($_POST['id'])) {
    die("No ID provided.");
}

$id = $_POST['id'];

// Fetch the submission from the database
$stmt = $pdo->prepare("SELECT * FROM submissions WHERE id = ?");
$stmt->execute([$id]);
$submission = $stmt->fetch();

if (!$submission) {
    die("Submission not found.");
}

// Prepare card HTML
$cardHTML = "
<div class='item {$submission['city']} {$submission['occupation']}'>
    <p><strong>{$submission['city']}</strong></p>
    <div class='image-container'>
        <img loading='lazy' style='cursor: pointer;' src='{$submission['imgSrc']}' alt='' class='image-click'>
    </div>
    <h4>{$submission['title']}</h4>
    <ul>
        " . ($submission['contact'] ? "<li>Kontakt: <span>{$submission['contact']}</span></li>" : '') . "
        " . ($submission['email'] ? "<li>Email: <span>{$submission['email']}</span></li>" : '') . "
    </ul>
    <p>{$submission['description']}</p>
</div>
";

// Path to your properties file
$propertiesFile = '/var/www/html/testsajtredirex.github.io/properties.php';

// Attempt to write the HTML
if (file_put_contents($propertiesFile, $cardHTML, FILE_APPEND) === false) {
    echo "Error writing to properties file.";
} else {
    echo "Push Successful: Data written.";
}
?>
