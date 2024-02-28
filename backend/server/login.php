<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Header: Content-Type');

    $servername = "oceanus.cse.buffalo.edu";
    $username = "dylanfit";
    $password = "50464839";
    $dbname = "cse442_2024_spring_team_ae_db";

    $conn = mysqli_connect($servername, $username, $password, $dbname);


    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $data = json_decode(file_get_contents("php://input"), true);

    $user = $data['username'];
    $pass = $data['password'];

    $reply = "Successful!";

    if ($user != '' && $pass != '') {

        $hashed = password_hash($pass, PASSWORD_BCRYPT);
        
        $query = "SELECT * FROM Registered_Users WHERE username = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $user);
        $stmt->execute();

        $result = $stmt->get_result();

        if (mysqli_num_rows($result) == 0) {
            $reply = "Username not found!";

        $row = $result->fetch_assoc();

        if ($row["passkey"] != $pass){
            $reply = "Incorrect Password!";
        }
    }
    else{

        $reply = "Empty Input!";


    }
}
    $stmt->close();
    mysqli_close($conn);

    $response[] = array("result" => $reply);

    echo json_encode($response);


?>