import React from 'react';
import Logo from './assets/fcritlogo.png';
import './header.css'

export default function Header() {
  return (
    <div className="header">
      
      <div className="image">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="nav">
        <button>Home</button>
        <button>Facilities</button>
        <button>Gallery</button>
        <button>Rules & Regulation</button>
        <button className="login-btn">Login</button>
      </div>

    </div>
  );
}

