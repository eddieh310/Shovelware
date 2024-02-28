
import React, {useState} from 'react';
import Header from '../../parts/header_bar.js';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../../App.js';
//import LoginSuccessPage from './SuccessLoginPage.js'
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

import {
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
  } from '../../sign_up_management.js'; 

  const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handle_login= () => {
        // Handle form submission logic (login not implemented in the backend yet)
        //handleSubmit(username, password);
        // Navigate to '/success_login' after handling form submission

        if (username.trim() === "" || password.trim() === "") {
            var errorHeader = document.getElementById("errorMessage");
            errorHeader.innerHTML = "Please enter a username and password";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;
        }

        else {
            handleLogin(username, password);
            console.log("redirecting to success page");
            navigate('/success_login');
        }
      };


    return (
        <div className = "topcontainer">
        <Header offset={15} />
        <div className="content-container">
            {/* Sign up title header  */}
            <h2 id = "SignUpTitle">Log Into Your ShovelWare Account</h2>
            <h2 id = "errorMessage"></h2>
            <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Inputable Textbox</title>          
            </head>
            <body>

        {/* Username Container  */}
        <div className="input-container">
            <input
            type="text"
            id="Username_Input"
            placeholder="Username"
            value={username}
            onChange={(e) => handleUsernameChange(e, setUsername)}
            />
        </div>
        

        {/* Password Container  */}
        <div className="input-container">
            <input
            type="password"
            id="Password_Input"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e, setPassword)}
            />
        </div>
        <h3>Don't have an account?
        <br></br>
        <Link to="/home_page" className="login_button">Sign Up</Link>
        </h3>
            <button onClick={handle_login} className="Login_Button">Log In</button>
            </body>
            </div>

        </div>


    )
}

export default LoginPage