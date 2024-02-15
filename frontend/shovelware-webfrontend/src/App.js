// App.js

import React, {useState} from 'react';
import Header from './parts/header_bar.js';
import './App.css'; // Import global styles if needed

import {
  handleEmailChange,
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
} from './sign_up_management.js'; // Adjust the path based on your project structure

const App = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Header offset={50} />
      <div className="content-container">
        <h2 id = "SignUpTitle">Create Your ShovelWare Account</h2>
        <head>
          <meta charset="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Inputable Textbox</title>          
        </head>
        <body>

        <div className="input-container">
        <input
          type="text"
          id="Email_Input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => handleEmailChange(e, setEmail)}
        />
      </div>

      <div className="input-container">
        <input
          type="text"
          id="Username_Input"
          placeholder="Username"
          value={username}
          onChange={(e) => handleUsernameChange(e, setUsername)}
        />
      </div>

      <div className="input-container">
        <input
          type="text"
          id="Password_Input"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordChange(e, setPassword)}
        />
      </div>
        <button onClick={() => handleSubmit(email, username, password)} className="Signup_Button">Sign Up</button>
        </body>
        </div>
      </div>
  );
};

export default App;