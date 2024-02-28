

export const handleEmailChange = (e, setEmail) => {
    setEmail(e.target.value);
  };
  
  export const handleUsernameChange = (e, setUsername) => {
    setUsername(e.target.value);
  };
  
  export const handlePasswordChange = (e, setPassword) => {
    setPassword(e.target.value);
  };




  //Make something happen when the user presses submit for Log In
  export const handleLogin = (username, password) => {
    let data_to_send = {'username': username, 'password': password};
    const JSON_String = JSON.stringify(data_to_send);

    fetch('https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442ae/backend/server/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON_String
    });

  }




  
  //Make something happen when the user presses submit sign up.
  export const handleSubmit = (email, username, password) => {
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    
  
    // Make post request to PHP backend
    let data_to_send = {'username': username, 'password': password, 'email': email};
    const JSON_String = JSON.stringify(data_to_send);
  
    // Make a POST request to the PHP backend
    fetch('https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442ae/backend/server/registration.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Match with backend Content-Type
        // 'Access-Control-Allow-Origin': '*', // Not necessary in the frontend
        // 'Access-Control-Allow-Methods': 'POST', // Not necessary in the frontend
        // 'Access-Control-Allow-Headers': 'Content-Type', // Match with backend Access-Control-Allow-Headers
      },
      body: JSON_String
    })
      // .then(response => {
      //   // Check if the response is successful (status code 2xx)
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }
      //   return response.json(); // Parse the response as JSON
      // })
      // .then(data => {
      //   // Handle the response from the PHP backend
      //   console.log(data);
      // })

  };