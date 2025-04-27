import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser?.name || 'User',
    email: currentUser?.email || '',
    bio: 'Software developer passionate about React and web technologies.',
    location: 'San Francisco, CA',
    jobTitle: 'Frontend Developer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would update the user profile in the backend
    setIsEditing(false);
  };

  return (
    <div className="page">
      <Navbar />
      <div className="profile-container">
        <h1>User Profile</h1>

        <div className="profile-content">
          <div className="profile-header">
            <div className="profile-avatar">
              {/* Placeholder for user avatar */}
              <div className="avatar-placeholder">
                {formData.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="profile-info">
              {!isEditing ? (
                <>
                  <h2>{formData.name}</h2>
                  <p className="profile-email">{formData.email}</p>
                  <p className="profile-job">{formData.jobTitle}</p>
                  <p className="profile-location">{formData.location}</p>
                  <button 
                    className="edit-profile-btn" 
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                </>
              ) : (
                <form onSubmit={handleSubmit} className="profile-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="profile-form-actions">
                    <button type="submit" className="save-btn">Save</button>
                    <button 
                      type="button" 
                      className="cancel-btn" 
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="profile-bio">
            <h3>About</h3>
            {!isEditing ? (
              <p>{formData.bio}</p>
            ) : (
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
