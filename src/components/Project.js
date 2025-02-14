import React from 'react';
import './Project.css'; // Ensure you create this CSS file for styling

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/budget.png" alt="F1 Race Analysis" className="project-image"/>
            <h3>Personal Budget Allocation Website </h3>
          </div>
          <div className="flip-card-back">
            <p>Developed a React and JavaScript web-based budget application with a MySQL backend, implementing Node.js and Express.js for server-side logic, D3.js for data visualizations, and secure user authentication.</p>
            <a href="https://github.com/OdetiAbinaya/personal-budget-final.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/Helmet.jpg
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Detection of Non-Helmet Rider using YOLO and CNN </h3>
          </div>
          <div className="flip-card-back">
            <p>Developed helmet detection system for motorcyclists using improved YOLOv2/YOLOv3 models. Utilized a three-level deep learning approach to detect persons, motorcycles, helmets, and license plates from video</p>
            <a href="https://drive.google.com/file/d/1htD-oRaEeFlIhPI1uQ2e34B9shxRv-Rv/view" target="_blank" rel="noopener noreferrer" className="github-link">
              View on Reserach paper
            </a>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/Sales.png
            " alt="Sales Dashboard" className="project-image"/>
            <h3>Skyline-Scumbles</h3>
          </div>
          <div className="flip-card-back">
            <p>Analyzed 5 years of flight delay data from 20+ airlines, identifying patterns that aided in optimizing airline scheduling and operations.</p>
            <a href="https://github.com/OdetiAbinaya/Skyline-Scumbles.git" target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
