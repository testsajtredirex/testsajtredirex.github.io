<?php
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
} catch (\PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
}

// Check if form data exists and validate before processing
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // List of required fields
    $requiredFields = ['city', 'title', 'occupation', 'contact', 'description', 'imgSrc'];

    // Validate input
    $data = [];
    foreach ($requiredFields as $field) {
        if (isset($_POST[$field]) && trim($_POST[$field]) !== '') {
            $data[$field] = trim($_POST[$field]);
        } else {
            echo json_encode(['status' => 'error', 'message' => "Missing or invalid input for: $field"]);
            exit();
        }
    }

    // Optional fields
    $optionalFields = ['email', 'modalImgSrc', 'fbLink', 'instaLink', 'websiteLink', 'personalPageLink'];
    foreach ($optionalFields as $field) {
        $data[$field] = isset($_POST[$field]) ? trim($_POST[$field]) : '';
    }

    try {
        // Prepare and execute the insert query
        $sql = "INSERT INTO submissions 
                (city, title, occupation, contact, email, description, imgSrc, modalImgSrc, fbLink, instaLink, websiteLink, personalPageLink) 
                VALUES 
                (:city, :title, :occupation, :contact, :email, :description, :imgSrc, :modalImgSrc, :fbLink, :instaLink, :websiteLink, :personalPageLink)";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':city' => $data['city'],
            ':title' => $data['title'],
            ':occupation' => $data['occupation'],
            ':contact' => $data['contact'],
            ':email' => $data['email'],
            ':description' => $data['description'],
            ':imgSrc' => $data['imgSrc'],
            ':modalImgSrc' => $data['modalImgSrc'],
            ':fbLink' => $data['fbLink'],
            ':instaLink' => $data['instaLink'],
            ':websiteLink' => $data['websiteLink'],
            ':personalPageLink' => $data['personalPageLink'],
        ]);

        // Send back a response with the city and occupation to populate the filters
        echo json_encode([
            'status' => 'success',
            'message' => 'Submission successful!',
            'city' => $data['city'],
            'occupation' => $data['occupation']
        ]);
    } catch (\PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Database query error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
?>
