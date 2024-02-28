// App.js

import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import SignupSuccessPage from './Pages/js/SuccessSignupPage.js';
import SignupPage from './Pages/js/SignupPage.js';
import LoginPage from './Pages/js/LoginPage.js';
import LoginSuccessPage from './Pages/js/SuccessLoginPage.js';

// Routing/Directories Handler
function App() {
  return (
    <Routes>
      {/* Default route, render the component for '/' */}
      <Route
        path="/"
        element={
          <>
            <Navigate to="/home_page" />
            {/* Other components can go here if needed */}
          </>
        }
      />

      {/* Other routes */}
      <Route exact path="/" component={<SignupPage />} />
      <Route path="/home_page" element={<SignupPage  />} />
      <Route path="/success_sign_up" element={<SignupSuccessPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/success_login" element={<LoginSuccessPage /> } />
    </Routes>
  );
}

export default App;