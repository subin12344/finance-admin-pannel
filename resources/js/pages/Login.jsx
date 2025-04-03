import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login } from '../services/authService';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await login(credentials);
      localStorage.setItem('token', token);
      setUser(user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <LoginForm
      credentials={credentials}
      setCredentials={setCredentials}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
