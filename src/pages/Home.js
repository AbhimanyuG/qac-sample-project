import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div className="page">
      <Navbar />
      
      <div className="home-container">
        <h1>Welcome to React Auth App</h1>
        <p>A sample application with authentication and protected routes</p>
        
        <div className="home-actions">
          <Link to="/login" className="home-button">
            Login to Dashboard
          </Link>
        </div>
        
        <div className="home-features">
          <div className="feature-card">
            <h3>Authentication</h3>
            <p>Secure login and session management</p>
          </div>
          
          <div className="feature-card">
            <h3>Protected Routes</h3>
            <p>Private sections accessible only to authenticated users</p>
          </div>
          
          <div className="feature-card">
            <h3>User Dashboard</h3>
            <p>Personal dashboard with user-specific data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
