import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import Navbar from '../components/common/Navbar';

const Login = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
