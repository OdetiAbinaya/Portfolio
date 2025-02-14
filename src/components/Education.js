import React from 'react';
import './Education.css'; // Create this CSS file for styling
import { FaGraduationCap } from 'react-icons/fa'; // Using Font Awesome icons for visual appeal

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {/* Education Item 1 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-year">January2024 - May2025</div> 
          <div className="timeline-content">
            <h3>Master of Science in Computer science</h3>
            <p>University of North Carolina at Charlotte, Charlotte, NC</p>
            <p><strong>GPA:</strong> 3.9/4.0</p>
            <h4>Relevant Coursework</h4>
            {/* <ul>
              <li>Data Science and Machine Learning</li>
              <li>Data Visualization and Analytics</li>
              <li>Advanced Database Systems</li>
              <li>Cloud Computing</li>
              <li>Natural Language Processing</li>
            </ul> */}
            {
              <p>Data Mining, Network-Based Application Development, Software System Design and Implementation, Database Systems, Visual Analytics, Big Data Analytics, Principles of Information Security and Privacy , Data structures and Algorithms , Computer networks ,Artifical Intellegencec </p>
            }
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-year">July2018 - June2022</div> 
          <div className="timeline-content">
            <h3>Bachelor of Engineering in Computer science</h3>
            <p>Jawaharlal Nehru Technological University Hyderabad</p>
            <p><strong>CGPA:</strong> 7.7/10</p>
            <h4>Relevant Coursework</h4>
            {/* <ul>
              <li>Software Engineering</li>
              <li>Database Management Systems</li>
              <li>Computer Networks</li>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
            </ul> */}
            {
              <p>Software Engineering, Database Management Systems, Computer Networks, Data Structures and Algorithms, Operating Systems, Data Science</p>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
