
import React, {useState} from 'react';
import Header from '../parts/header_bar.js';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../App.js';
import SuccessPage from './SuccessPage.js'
import { useNavigate } from 'react-router-dom';
import './Login_Page.css';

import {
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } from '../sign_up_management.js'; 

  const Login_Page = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin= () => {
        // Handle form submission logic
        handleSubmit(username, password);
        // Navigate to '/success_sign_up' after handling form submission
        console.log("redirecting to success page");
        navigate('/success_sign_up');
      };


    return (
        <div className = "topcontainer">
        <Header offset={50} />
        <div className="content-container">
            {/* Sign up title header  */}
            <h2 id = "SignUpTitle">Log Into Your ShovelWare Account</h2>
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
            <button onClick={handleLogin} className="Signup_Button">Log In</button>
            </body>
            </div>

        </div>

    )
}

export default Login_Page