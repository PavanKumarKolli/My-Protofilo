import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar">
        <img src="the lovely creator logo.png" alt="Logo" className="logo" />
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <button className="search-button" onClick={toggleModal}>Search</button>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <span className="close">&times;</span> : <span>&#9776;</span>}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Search</h2>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      )}
    </div>
  );
};
