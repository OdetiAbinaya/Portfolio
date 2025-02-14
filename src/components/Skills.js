import React from 'react';
import './Skills.css'; // Assuming you add your CSS here
import { FaPython, FaDatabase,  FaChartBar, FaToolbox, FaProjectDiagram } from 'react-icons/fa'; // Font Awesome Icons

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="section-title">Skills</h2>
    <div className="skills-grid">
      <div className="skill-card">
        <FaPython className="skill-icon" />
        <h3>Programming Languages</h3>
        <p> Python, Java, C, C#, JavaScript, C++, Perl</p>
      </div>

      <div className="skill-card">
        <FaDatabase className="skill-icon" />
        <h3>Database & Cloud</h3>
        <p>MySQL, MongoDB, AWS (Athena, Cloud9, S3 RedShift)</p>
      </div>

      <div className="skill-card">
        <FaChartBar className="skill-icon" />
        <h3>Networking and Storage Technologies</h3>
        <p>EDA,TCP/IP, LAN/WAN, Routing, Switching , SAN , NAS ,Block storage, 3PAR , Nimble storage , storage concepts, Cache Accelerated Sequential Layout (CASL)</p>
      </div>

      <div className="skill-card">
        <FaProjectDiagram className="skill-icon" />
        <h3>Data Visualization</h3>
        <p>Tableau, PowerBI, Plotly, Seaborn, matplotlib, Streamlit</p>
      </div>

      <div className="skill-card">
        <FaToolbox className="skill-icon" />
        <h3>Tools/Technologies</h3>
        <p>Git/GitHub, Jupyter Hub, Google Colab, VS Code, MS Excel, APIs , Linux Containers,Docker, Postman, Jenkins, Jira, APIs, D3</p>
      </div>

      <div className="skill-card">
        <FaProjectDiagram className="skill-icon" />
        <h3>Agile Methodologies</h3>
        <p>SDLC, SCRUM</p>
      </div>
    </div>
  </section>
);

export default Skills;
