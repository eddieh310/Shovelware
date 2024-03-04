<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Header: Content-Type');

if (isset($_COOKIE["user_email"])){
    $userEmail = $_COOKIE["user_email"];

    $userEmail = filter_var($userEmail, FILTER_SANITIZE_EMAIL);

    $servername = "oceanus.cse.buffalo.edu";
    $username = "ejherrer";
    $password = "50394558";
    $dbname = "cse442_2024_spring_team_ae_db";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT file_name FROM profile_pictures WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $userEmail);

    $stmt->execute();

    // Get entry in sql table  
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $filename = $row["file_name"];

        // Send filename to frontend if it exists
        echo json_encode(array("file_name" => $filename));
    } else {
        echo "No profile picture found for this user.";
    }
    $conn->close();
    $stmt->close();
} 
else {
    // User email cookie not set
    echo "User email cookie not set.";
}


