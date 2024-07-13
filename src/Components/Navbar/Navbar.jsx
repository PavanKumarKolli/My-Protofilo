import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <img src="the lovely creator logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="search-button" onClick={toggleModal}>Search</button>
      </nav>
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
