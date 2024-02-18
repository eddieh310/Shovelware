// App.js

import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import SuccessPage from './Pages/SuccessPage.js';
import Home_Page from './Pages/Home_Page.js';

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
      <Route exact path="/" component={<Home_Page />} />
      <Route path="/home_page" element={<Home_Page />} />
      <Route path="/success_sign_up" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;