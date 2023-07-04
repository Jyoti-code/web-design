import React from 'react';
import { Link } from 'react-router-dom';
import './File.css'

const Header = () => {
  return (
    <div className='container'>
      <nav>
        <div className='new'>
            <Link to="/">Home</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/search">Search</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
