import React, { createContext, useState, useContext, useEffect } from 'react';

// Create auth context
const AuthContext = createContext(null);

// Create a custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth provider component to wrap around our app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first render, check if user is already logged in via localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function - in a real app, this would call an API
  const login = (email, password) => {
    // Mock authentication - in a real app, you'd validate credentials against a backend
    if (email && password) {
      const user = { id: '1', name: 'User', email };
      setCurrentUser(user);
      localStorage.setItem('authUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authUser');
  };

  // Context value to provide to children
  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
