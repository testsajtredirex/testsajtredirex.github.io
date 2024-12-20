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
    echo 'Database connection failed: ' . $e->getMessage();
    exit();
}

// Fetch all submissions
$stmt = $pdo->query("SELECT * FROM submissions ORDER BY submitted_at DESC");
$submissions = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard - Submitted Entries</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        h1 {
            text-align: center;
            margin: 10px 0;
        }
        table {
            width: 90%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .container {
            text-align: center;
            padding: 10px;
        }
        form button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }
        form button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Admin Dashboard - Submitted Entries</h1>
    <div class="container">
        <p>Total Submissions: <?php echo count($submissions); ?></p>
    </div>
    <table>
        <tr>
            <th>ID</th>
            <th>City</th>
            <th>Title</th>
            <th>Occupation</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Description</th>
            <th>Submission Time</th>
            <th>Actions</th>
        </tr>
        <?php foreach ($submissions as $submission): ?>
            <tr>
                <td><?php echo htmlspecialchars($submission['id']); ?></td>
                <td><?php echo htmlspecialchars($submission['city']); ?></td>
                <td><?php echo htmlspecialchars($submission['title']); ?></td>
                <td><?php echo htmlspecialchars($submission['occupation']); ?></td>
                <td><?php echo htmlspecialchars($submission['contact']); ?></td>
                <td><?php echo htmlspecialchars($submission['email']); ?></td>
                <td><?php echo nl2br(htmlspecialchars($submission['description'])); ?></td>
                <td><?php echo htmlspecialchars($submission['submitted_at']); ?></td>
                <td>
                    <form action="push_to_properties.php" method="POST">
                        <input type="hidden" name="id" value="<?php echo htmlspecialchars($submission['id']); ?>">
                        <button type="submit">Push to Properties</button>
                    </form>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
