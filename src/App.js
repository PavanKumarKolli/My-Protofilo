
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Skills } from './Components/Skills/Skills';
import { useEffect, useState } from 'react';

import { MdLightMode } from "react-icons/md";



function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <div>
       <button onClick={toggleTheme} className="theme-toggle">
        <MdLightMode/>
      </button>
      <Navbar/>
      <Home/>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
