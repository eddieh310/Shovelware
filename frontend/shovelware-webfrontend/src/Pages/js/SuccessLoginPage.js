
// Rename your file from success_page.js to SuccessPage.js

// SuccessPage.js
import React from 'react';
import '../css/SuccessLoginPage.css'
import Header from '../../parts/header_bar.js';

const LoginSuccessPage = () => {
  return (
    <div className = "SuccessfulLogin">
      <Header offset={15} />
      <h1 id = "SuccessHeader">Login Successful</h1>
      <p id = "SuccessMessage">You are now logged in.</p>
    </div>
  );
};

export default LoginSuccessPage;