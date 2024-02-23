
import React, {useState} from 'react';
import Header from '../parts/header_bar.js';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../App.js';
//import SuccessPage from './SuccessSignupPage.js'
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

import {
    handleEmailChange,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } from '../sign_up_management.js'; 

  const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle form submission logic
        // Navigate to '/success_sign_up' after handling form submission

        if (email.trim() === "" || username.trim() === "" || password.trim() === "") {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "Please enter an email, username and password";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;
        }

        else {
            handleSubmit(email, username, password);
            console.log("redirecting to success page");
            navigate('/success_sign_up');
        }
      };


    return (
        <div className = "topcontainer">
        <Header offset={15} />
        <div className="content-container">
            {/* Sign up title header  */}
            <h2 id = "SignUpTitle">Create Your ShovelWare Account</h2>
            <h2 id = "errorMessageSignup"></h2>
            <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Inputable Textbox</title>          
            </head>
            <body>

            {/* Email Container  */}
            <div className="input-container">
            <input
            type="text"
            id="Email_Input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => handleEmailChange(e, setEmail)}
            />
        </div>

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
        <h3>Already have an account?
            <br></br>
            <Link to="/login" className="login_button">Log In</Link>
        </h3>
            <button onClick={handleSignUp} className="Signup_Button">Sign Up</button>
            </body>
            </div>

            {/* Password Container  */}
            {/*Changes Were Made*/}
        </div>

    )
}

export default SignupPage