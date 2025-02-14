import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-main">
        {/* Profile Picture on the Left */}
        <div className="about-image">
          <img src="/images/Abinaya Odeti.png" alt="Abinaya Odeti" />
        </div>

        {/* About Me, Contact Info, and Social Links on the Right */}
        <div className="about-content">
          <h2 className="title">About Me</h2>
          <div className="about-text">
            <p>
            I’m Abinaya Odeti, a Master’s student in Computer Science at UNC Charlotte, graduating in May 2025. With two years of experience at HPE as a System Software Engineer, I worked on high-performance storage systems (Block Storage, SAN, C++, Python), optimizing I/O data paths and contributing to user experience improvements through best practices, testing frameworks, and documentation standards.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="contact-info">
            <h3 className="h3">Contact Me</h3>
            <p>Email: odetiabinaya@gmail.com</p>
            <p>Phone: +1(704)-903-7376</p>
          </div>

          {/* Social Media Links with Icons */}
          <div className="social-links">
            <h3>Connect with Me</h3>
            <div className="links">
              <a href="https://www.linkedin.com/in/abinayaodeti/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" /> LinkedIn
              </a>
              <a href="https://github.com/OdetiAbinaya" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
              </a>
              {/* Download Resume Button */}
              <a href="/AbhinayaOdeti.pdf" download="Abinaya Odeti Resume" className="resume-button">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
