<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Header: Content-Type');

    $servername = "oceanus.cse.buffalo.edu";
    $username = "ejherrer";
    $password = "50394558";
    $dbname = "cse442_2024_spring_team_ae_db";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "CREATE TABLE IF NOT EXISTS profile_pic (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        file_name VARCHAR(255) NOT NULL,
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";

    $data = json_decode(file_get_contents("php://input"), true);

    $file_name = $data["file_name"];

    $query = "INSERT INTO profile_pic (file_name) VALUES (?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $file_name);
    $stmt->execute();

    $stmt->close();

    if ($stmt->affected_rows > 0) {
        echo "Data inserted successfully.";
    } else {
        echo "Error inserting data: " . $conn->error;
    }

    mysqli_close($conn);

?>
