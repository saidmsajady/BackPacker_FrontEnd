import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to <span></span>Explore Mate</h1>
        <h1>Where your next adventure starts!</h1>
        <h2>Whether you're conquering mountains or finding hidden gems, keep track of your travels and never miss a destination. Sign in or sign up to begin your journey!</h2>
        <Link to={'../Account/SignUp.jsx'} className='signup-btn'>      <button >Join Today</button>
        </Link>
      </div>
    </>
  );
}

export default Home;