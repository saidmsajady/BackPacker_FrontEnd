import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Signup.css';

const Signup = ({ setIsSignedIn }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }), // Send firstName and lastName separately
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token); // Store JWT token
        localStorage.setItem('firstName', data.user.firstName); // Store user's first name
        setIsSignedIn(true); // Update authentication state
        navigate('/'); // Redirect to home or dashboard
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className='left-container'>
      <h1 className='signup-title'>Sign Up</h1>
      <input
        type='text'
        placeholder='First Name'
        className='input'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        type='text'
        placeholder='Last Name'
        className='input'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input
        type='email'
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
      <input
        type='password'
        placeholder='Retry Password'
        className='input'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button className='signup-page-btn' onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
