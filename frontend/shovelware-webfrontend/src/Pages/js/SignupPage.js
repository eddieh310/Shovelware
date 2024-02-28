
import React, {useState} from 'react';
import Header from '../../parts/header_bar.js';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../../App.js';
//import SuccessPage from './SuccessSignupPage.js'
import { useNavigate } from 'react-router-dom';
import '../css/SignupPage.css';

import {
    handleEmailChange,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } from '../../sign_up_management.js'; 

  const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {

        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        // Handle form submission logic
        // Navigate to '/success_sign_up' after handling form submission

        if (email.trim() === "" || username.trim() === "" || password.trim() === "") {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "Please enter an email, username and password";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;
        }

        else if (!emailFormat.test(email.trim())) {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "Please enter a valid email address.";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;
        }

        else if (username.trim().length < 4) {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "A username must contain at least 4 characters.";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;
        }


        //else if  (email.trim().length > 0 && username.trim().length > 0 && password.trim().length < 8) {
        else if (password.trim().length < 8 ) {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "A password must contain at least 8 characters, 1 uppercase character, and 1 special character.";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;
        }

        //else if (email.trim().length > 0 && username.trim().length > 0 && (password.trim().toLowerCase === password.trim())) {
        else if (password.trim().toLowerCase() === password.trim()) {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "A password must contain at least 8 characters, 1 uppercase character, and 1 special character.";
            errorHeader.style.color = "red"; 
            errorHeader.style.fontSize = "20px"; 
            return 0;

        }

        else if (!format.test(password.trim())) {
            var errorHeader = document.getElementById("errorMessageSignup");
            errorHeader.innerHTML = "A password must contain at least 8 characters, 1 uppercase character, and 1 special character.";
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
            maxlength="50"
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
            minlength="8"
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