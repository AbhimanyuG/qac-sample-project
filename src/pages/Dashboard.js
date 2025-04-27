import React from 'react';
import Navbar from '../components/common/Navbar';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="page">
      <Navbar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="dashboard-welcome">
          <h2>Welcome back, {currentUser?.name || 'User'}!</h2>
          <p>This is your personal dashboard</p>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Analytics</h3>
            <div className="dashboard-card-content">
              <p>Your activity overview</p>
              <div className="dashboard-stats">
                <div className="stat-item">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">34</span>
                  <span className="stat-label">Tasks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">78%</span>
                  <span className="stat-label">Completion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Recent Activities</h3>
            <div className="dashboard-card-content">
              <ul className="activity-list">
                <li>Logged in at {new Date().toLocaleTimeString()}</li>
                <li>Profile updated 2 days ago</li>
                <li>Completed Task #42</li>
                <li>Started new project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
