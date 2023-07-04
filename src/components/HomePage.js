import React from 'react';
import './File.css'
import SearchPage from './SearchPage'
import {useNavigate} from "react-router-dom"
import Footer from './Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <header>
        <h1>Online Recruitment Solution</h1>
        <p className="subtitle">Efficient Hiring for Managers and HR Professionals</p>
      </header>
      <section className="features">
        <div className="feature">
          <i className="fas fa-check-circle"></i>
          <h2>Streamlined Candidate Management</h2>
          <p>Effortlessly manage and track candidates throughout the hiring process. Say goodbye to scattered resumes and messy spreadsheets.</p>
        </div>
        <div className="feature">
          <i className="fas fa-check-circle"></i>
          <h2>Automated Job Posting</h2>
          <p>Save time and effort by automating the process of posting job listings to multiple job boards and social media platforms.</p>
        </div>
        <div className="feature">
          <i className="fas fa-check-circle"></i>
          <h2>Collaborative Hiring Workflow</h2>
          <p>Enable seamless collaboration between hiring managers and HR professionals, ensuring a smooth and efficient recruitment process.</p>
        </div>
      </section>
      <SearchPage/>
      <section className="benefits">
        <h2>Benefits of Our Online Recruitment Solution</h2>
        <ul>
          <li>Increased Efficiency: Simplify and speed up your hiring process, allowing you to focus on finding the best candidates.</li>
          <li>Centralized Candidate Database: Access candidate profiles, resumes, and interview feedback in one secure location.</li>
          <li>Enhanced Collaboration: Facilitate communication and collaboration among team members involved in the hiring process.</li>
          <li>Improved Candidate Experience: Provide a seamless and user-friendly application experience for candidates.</li>
          <li>Advanced Analytics: Gain valuable insights with data-driven analytics to optimize your recruitment strategies.</li>
        </ul>
      </section>
      <section className="cta">
        <h2>Ready to Transform Your Hiring Process?</h2>
        <p>Sign up now and experience the efficiency of our online recruitment solution.</p>
        <button className="cta-button" onClick={()=>navigate("/signup")}>Sign Up</button>
      </section>
      <Footer/>
    </div>
  );
}

export default LandingPage;
