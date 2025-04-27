import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
    twoFactorAuth: false,
    language: 'english'
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSelectChange = (e) => {
    setSettings(prev => ({
      ...prev,
      language: e.target.value
    }));
  };

  const saveSettings = () => {
    // In a real app, you would save these settings to a backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="page">
      <Navbar />
      <div className="settings-container">
        <h1>Settings</h1>
        
        <div className="settings-section">
          <h2>Account Preferences</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Notifications</h3>
              <p>Enable push notifications</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Dark Mode</h3>
              <p>Toggle dark theme</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Email Updates</h3>
              <p>Receive emails about account activity</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.emailUpdates}
                  onChange={() => handleToggle('emailUpdates')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Security</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Two-Factor Authentication</h3>
              <p>Add an extra layer of security to your account</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.twoFactorAuth}
                  onChange={() => handleToggle('twoFactorAuth')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Regional</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Language</h3>
              <p>Select your preferred language</p>
            </div>
            <div className="setting-control">
              <select 
                value={settings.language}
                onChange={handleSelectChange}
                className="language-select"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
          </div>
        </div>
        
        <button onClick={saveSettings} className="save-settings-btn">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
