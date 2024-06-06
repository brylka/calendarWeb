<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "calendar";

// Połączenie z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pobranie języka z żądania
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'pl';

// Przygotowanie  i wysłanie zapytania do bazy
$stmt = $conn->prepare("SELECT key_name, value FROM translations WHERE lang = ?");
$stmt->bind_param("s", $lang);
$stmt->execute();
$result = $stmt->get_result();

// Wypełnienie tablicy tłumaczeniami
$translations = array();
while($row = $result->fetch_assoc()) {
    $translations[$row['key_name']] = $row['value'];
}

// Zwrot tłumaczeń JSONem z opcją JSON_UNESCAPED_UNICODE
echo json_encode($translations, JSON_UNESCAPED_UNICODE);

$stmt->close();
$conn->close();
?>