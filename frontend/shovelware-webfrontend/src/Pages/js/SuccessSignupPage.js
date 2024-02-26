
import React from 'react';
import '../css/SuccessSignupPage.css';
import Header from '../../parts/header_bar';

const SuccessPage = () => {
  return (
    <div className = "SuccessfulSignUp">
      <Header offset={15}/>
        <h1 id = "SuccessHeader" >Sign Up Successful</h1>
        <p id = "SuccessMessage" >Congratulations! Your sign-up was successful.</p>
    </div>
  );
};

export default SuccessPage;