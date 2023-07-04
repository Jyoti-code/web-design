import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './File.css';

const CandidateSearchPage = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here and update candidates state
    // Example: Fetch candidates from an API based on location and jobRole
    const fetchedCandidates = fetchCandidates(location, jobRole);
    setCandidates(fetchedCandidates);
  };

  const fetchCandidates = (location, jobRole) => {
    // Simulated data, replace with actual API call
    return [
      { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'San Francisco', jobRole: 'Product Manager' },
      // ...
    ];
  };

  return (
    <div className="candidate-search-page">
      <h2 className="p-animate-enter">Candidate Search</h2>
      <form onSubmit={handleSearch} className="p-animate-enter">
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="p-inputtext p-animate-enter" />
        <input type="text" placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} className="p-inputtext p-animate-enter" />
        <button type="submit" className="p-button p-button-rounded p-button-secondary p-animate-enter">Search</button>
      </form>
      <ul className="p-animate-enter">
        {candidates.map((candidate) => (
          <li key={candidate.name} className="p-animate-enter">
            <h3>{candidate.name} {candidate.jobRole} {candidate.location}</h3>
            {/* <p></p>
            <p></p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearchPage;
