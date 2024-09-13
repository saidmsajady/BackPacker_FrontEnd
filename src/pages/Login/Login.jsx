import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login = ({ setIsSignedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token); // Store JWT token
        setIsSignedIn(true); // Update authentication state
        navigate('/'); // Redirect to home or dashboard
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className='left-container'>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='Email'
        className='input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type='password'
        placeholder='Password'
        className='input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className='login-page-btn' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;