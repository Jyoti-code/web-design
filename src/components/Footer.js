import React from 'react';

const Section = ({ title, content }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};

const Footer = () => {
  const jobsByLocation = ['Location 1', 'Location 2', 'Location 3'];
  const technologyJobs = ['Job 1', 'Job 2', 'Job 3'];
  const topCompaniesHiring = ['Company 1', 'Company 2', 'Company 3'];
  const topCompaniesIndia = ['Company A', 'Company B', 'Company C'];

  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="footer-content">
        <div className="column">
          <div className="section-column">
            <Section title="Jobs by Location" content={jobsByLocation} />
            <Section title="Technology Jobs" content={technologyJobs} />
          </div>
        </div>
        <div className="column">
          <div className="section-column">
            <Section title="Top Companies Hiring" content={topCompaniesHiring} />
            <Section title="Top Companies in India" content={topCompaniesIndia} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
