import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

console.log('Loading');

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">FireSight</div>
        <div className="nav-links">
          <Link to="/login" className="nav-link">Log In</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </nav>
      <main className="main-content">
        <h1>Welcome to FireSight</h1>
        <p>Your safety, our priority. Apply now to ensure fire safety compliance.</p>
        <Link to="/signup" className="apply-button">Apply Now</Link>
      </main>
    </div>
  );
};

export default HomePage;
