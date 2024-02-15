// Header.js

import React from 'react';
import './header_bar.css';

const Header = ({ offset }) => {
  return (
    <div className="header" style={{ paddingTop: `${offset}px` }}>
      <h1 id = "ShovelWareTitle">ShovelWare</h1>
      <button className="header-button">Return Home</button>
    </div> 
  );
};

export default Header;