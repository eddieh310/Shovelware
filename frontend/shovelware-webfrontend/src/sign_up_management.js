

export const handleEmailChange = (e, setEmail) => {
    setEmail(e.target.value);
  };
  
  export const handleUsernameChange = (e, setUsername) => {
    setUsername(e.target.value);
  };
  
  export const handlePasswordChange = (e, setPassword) => {
    setPassword(e.target.value);
  };
  
  export const handleSubmit = (email, username, password) => {
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  
    // You can also make API requests or other actions here
  };
  