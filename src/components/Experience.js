import React from 'react';
import './Experience.css'; // Ensure to link the above CSS file

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-container">

        {/* Experience 1 */}
        <div className="experience-card">
          <div className="experience-icon">SE</div> {/* Example icon, you can change it */}
          <h3 className="job-title">Systems/Software Engineer I, Nimble Storage</h3>
          <p className="company"> Hewlett Packard Enterprise , India</p>
          <p className="job-duration">Aug 2022– Dec 2023</p>
          <ul className="experience-details">
            <li>1.Developed scalable solutions within the Nimble product that improved data retrieval times by 30%, resulting in increased system responsiveness while ensuring integrity of both block and object storage operations..</li>
            <li>2.Implemented web server optimizations, including reducing CPU/RAM usage and improving system responsiveness for enterprise-level applications.</li>
            <li>3.Contributed to storage system consolidation by merging storage units, optimizing resource allocation, and tuning configurations to improve data access speed and overall system performance.%.</li>
            <li>4.Engineered and implemented robust attribute caching systems utilizing C++ and Perl, achieving a increase in data retrieval speeds while enhancing overall system responsiveness across the Nimble storage platform.</li>
            <li>5.Enhanced Volscan to display detailed block data and established communication protocols between arrays, ensuring secure volume synchronization post-recovery.</li>
            <li>6.Exhibited exceptional problem-solving abilities by managing and resolving critical customer escalations, debugging, and fixing issues promptly, while maintaining 24/7 availability to ensure swift and effective solutions</li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-icon">RE</div> {/* Example icon, you can change it */}
          <h3 className="job-title">Research and Development intern</h3>
          <p className="company"> Hewlett Packard Enterprise </p>
          <p className="job-duration"> Jan 2022- Jul 2022</p>
          <ul className="experience-details">
            <li>1.Research and Developer Intern at AOE in Bangalore.Gained a comprehensive understanding of SAN,NAS ,Block storage,File storage , LAN/WAN, Routing , Switching,distributed storage architectures focused on System Test for HPE 3PAR storage and various storage protocols.</li>
            <li>2.Developed parallel features for the "Smart Template Library Enhancement" using Python and gained hands-on experience with Test Automation Frameworks.</li>      
          </ul>
        </div>

        {/* Add more experience cards as needed */}
      </div>
    </div>
  );
};

export default Experience;
