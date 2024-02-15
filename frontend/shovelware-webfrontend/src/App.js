// App.js

import React from 'react';
import Header from './parts/header_bar.js';
import './App.css'; // Import global styles if needed

const App = () => {
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

        <div class="input-container">
          <input type="text" id="Email_Input" placeholder="Email Address"></input>
        </div>

        <div class="input-container">
          <input type="text" id="Username_Input" placeholder="Username"></input>
        </div>

        <div class="input-container">
          <input type="text" id="Password_Input" placeholder="Password"></input>
        </div>


        <button className="Signup_Button">Sign Up</button>
        </body>
        </div>
      </div>
  );
};

export default App;