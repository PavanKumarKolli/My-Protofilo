import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const [designation, setDesignation] = useState('Web Developer');
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const titles = ['Web Developer', 'Frontend Developer','Graphic Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const updateTitle = (currentTitle, newTitle) => {
      let i = 0;
      const interval = setInterval(() => {
        setDesignation(newTitle.slice(0, i + 1));
        i++;
        if (i === newTitle.length) {
          clearInterval(interval);
        }
      }, 100);
    };
    updateTitle(designation, titles[index]);
  }, [index]);

  useEffect(() => {
    setLoaded(true); 
  }, []);

  return (
    <div id="home" className="home-section">
      <div className={`text-container ${loaded ? 'loaded' : ''}`}>
        <h1>Hello, It's Me</h1>
        <h1>PAVAN KOLLI</h1>
        <p>And I'm a <span className="designation">{designation}</span> <br/>specializing in React.js.</p>
        <div className="social-media">
          <a href="https://www.facebook.com/pavankumar.kolli.14/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/pavan-kumar-kolli/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PavanKumarKolli" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://wa.me/+919505048122" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <button className="cv-button" onClick={() => window.open('Pavan_Kumar_kolli_CV.pdf', '_blank')}>
          Download CV
        </button>
      </div>
      <div className={`image-container ${loaded ? 'loaded' : ''}`}>
        <img src="My ps.png" alt="Your Name" />
      </div>
    </div>
  );
};

export default Home;
