<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // prikupljanje podataka sa forme
    $city = htmlspecialchars($_POST['city']);
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $description = htmlspecialchars($_POST['description']);
    $category = htmlspecialchars($_POST['category']);
    $social_links_array = array_map('htmlspecialchars', $_POST['social_links']);
    $social_links = implode(', ', $social_links_array);
    $services = isset($_POST['services']) ? implode(', ', $_POST['services']) : 'None';

    // trmplate
    $business_info = "Grad: $city\n"
                   . "Name: $name\n"
                   . "Contact: $contact\n"
                   . "Description: $description\n"
                   . "Category: $category\n"
                   . "Social Links: $social_links\n"
                   . "Services: $services\n\n";

    // Putanja do datoteke za podatke
    $file_path = 'submitted_businesses.txt';

    // Podaci na kraj datoteke
    file_put_contents($file_path, $business_info, FILE_APPEND | LOCK_EX);

    // coonf page redirection
    header('Location: confirmation.html');
    exit();
}
?>
