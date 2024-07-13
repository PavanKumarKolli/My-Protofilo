import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Vistor Management System',
    description: 'Visitor management is any process that helps an organization keep track of the people that visit their location. Improves the safety at your workplace .Ensures you have control over who enters your  premises.',
    technologies: ['React', 'HTML5', 'CSS3','Adobe photoshop','Bootstrap'],
    link: 'https://vms-2.vercel.app/',
  },
  {
    title: 'E-Commerce ',
    description: 'An ecommerce website is your digitals to re front on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections.',
    technologies: ['React', 'HTML5', 'CSS3','Adobe photoshop', 'Bootstrap', 'Git'],
    link: 'https://zinggy-clone.vercel.app/',
  },

];

export const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies used:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

