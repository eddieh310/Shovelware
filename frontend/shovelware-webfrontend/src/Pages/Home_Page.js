
import React, {useState} from 'react';
import Header from '../parts/header_bar.js';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../App.js';
import SuccessPage from './SuccessPage.js'
import { useNavigate } from 'react-router-dom';
import './Home_Page.css';

import {
    handleEmailChange,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } from '../sign_up_management.js'; 

  const Home_Page = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle form submission logic
        handleSubmit(email, username, password);
        // Navigate to '/success_sign_up' after handling form submission
        console.log("redirecting to success page");
        navigate('/success_sign_up');
      };
    return (
        <div className = "topcontainer">
        <Header offset={50} />
        <div className="content-container">
            {/* Sign up title header  */}
            <h2 id = "SignUpTitle">Create Your ShovelWare Account</h2>
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
            type="text"
            id="Password_Input"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e, setPassword)}
            />
        </div>
            <button onClick={handleSignUp} className="Signup_Button">Sign Up</button>
            </body>
            </div>

            {/* Password Container  */}
            {/*Changes Were Made*/}
        </div>

    )
}

export default Home_Page