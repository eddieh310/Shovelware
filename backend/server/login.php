<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Header: Content-Type');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "testdb";

    $conn = mysqli_connect($servername, $username, $password, $dbname);


    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $user = $data['email'];
    $pass = $data['password'];

    $reply = "Successful!";
    

    if ($user != '' && $pass != '') {
        
        $query = "SELECT id, passkey FROM Registered_Users WHERE email = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $user);
        $stmt->execute();

        $result = $stmt->get_result();

        if (mysqli_num_rows($result) > 0) {
            $row = $result->fetch_assoc();
    
            if (password_verify($pass, $row["passkey"])) {
                $cookieValue = $row["id"]; // Use a secure identifier, like user_id
                setcookie("user_cookie", $cookieValue, time() + 3600 * 24 * 30, "/"); // Cookie lasts for 30 days
                $reply = "Successful!";
            } else {
                $reply = "Incorrect Password!";
            }
        } else {
            $reply = "Email not found!";
        }
    
        $stmt->close();
    }
    else{

        $reply = "Empty Input!";


    }
    mysqli_close($conn);

    $response[] = array("result" => $reply);

    echo json_encode($response);


?>