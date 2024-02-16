<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Header: Content-Type');

    $servername = "oceanus.cse.buffalo.edu";
    $username = "username";
    $password = "password";
    $dbname = "cse442_2024_spring_team_ae_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // sql to create table
    $sql = "CREATE TABLE IF NOT EXISTS Registered_Users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    passkey VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    // if ($conn->query($sql) === TRUE) {
    // echo "Table Registered_Users created successfully";
    // } else {
    // echo "Error creating table: " . $conn->error;
    // }

    $data = json_decode(file_get_contents("php://input"), true);

    $user = $data['username'];
    $pass = $data['password'];
    $email = $data['email'];

    $query = "INSERT INTO Registered_Users (username, passkey, email) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $user, $pass, $email);
    $stmt->execute();

    $conn->close();

?>