<?php
    // Include the database configuration file  
    //require_once 'dbConfig.php'; 

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

    $sql = "CREATE TABLE IF NOT EXISTS profile_pictures (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        file_name VARCHAR(255) NOT NULL,
        img_data LONGBLOB NOT NULL,
        auth_token VARCHAR(255) NOT NULL,
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    // Execute the create table query
    //if ($conn->query($sql) === TRUE) {
      //  echo "Table profile_pictures created successfully";
    //} else {
      //  echo "Error creating table: " . $conn->error;
    //}

    $status = $statusMsg = ''; 
    //var_dump($_POST);
    if(isset($_POST["submit"])){ 
        $status = 'error'; 
        if(!empty($_FILES["image"]["name"])) { 
            // Get file info 
            $fileName = basename($_FILES["image"]["name"]); 
            $fileType = pathinfo($fileName, PATHINFO_EXTENSION); 
            
            // Allow certain file formats 
            $allowTypes = array('jpg','png','jpeg','gif'); 
            if(in_array($fileType, $allowTypes)){ 
                $image = $_FILES['image']['tmp_name']; 
                $imgContent = addslashes(file_get_contents($image)); 
                
                $auth_token = $_COOKIE['auth_token'];

                // Insert image content into database 
                $query = "INSERT INTO profile_pictures (file_name, img_data, auth_token) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($query);
                $stmt->bind_param("sss", $fileName, $imgContent, $auth_token);
                $stmt->execute();
                
                if($stmt->affected_rows > 0){ 
                    $status = 'success'; 
                    $statusMsg = "File uploaded successfully."; 
                }else{ 
                    $statusMsg = "File upload failed, please try again."; 
                }  
            }else{ 
                $statusMsg = 'Sorry, only JPG, JPEG, PNG, & GIF files are allowed to upload.'; 
            } 
        }else{ 
            $statusMsg = 'Please select an image file to upload.'; 
        } 
    } 

    // send status message to frontend
    echo $statusMsg; 
?>
