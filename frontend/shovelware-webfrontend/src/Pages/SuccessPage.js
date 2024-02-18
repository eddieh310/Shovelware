
// Rename your file from success_page.js to SuccessPage.js

// SuccessPage.js
import React from 'react';

const SuccessPage = () => {
  return (
    <div className = "SuccessfulSignUp" style={{ textAlign: 'center', padding: '20px' }}>
      <h1 id = "SuccessHeader">Sign Up Successful</h1>
      <p id = "SuccessMessage">Congratulations! Your sign-up was successful.</p>
    </div>
  );
};

export default SuccessPage;