<?php
// 1. Connect to database
$conn = new mysqli("localhost", "root", "", "booking");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// 2. Get data from form
$time = $_POST['time'];
$activity = $_POST['activity'];
$places = $_POST['places'];

// 3. Insert into table
$sql = "INSERT INTO gym_bookings (time, activity, places) VALUES ('$time', '$activity', '$places')";

if ($conn->query(query: $sql) === TRUE) {
  echo "New record added!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
