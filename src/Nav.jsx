// Navbar.js
import React, { useState } from 'react';
import './nav.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
 

  return (
    <nav className="navbar">
      <div className="logo">Arul.dev</div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><a href="/#home" onClick={toggleMobileMenu}>Home</a></li>
        <li><a href="/#about" onClick={toggleMobileMenu}>About</a></li>
        <li><a href="/#projects" onClick={toggleMobileMenu}>Projects</a></li>
        <li><a href="/#contect" onClick={toggleMobileMenu}>Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
