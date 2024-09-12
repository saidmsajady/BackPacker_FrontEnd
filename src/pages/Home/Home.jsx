import React from 'react';
import { Link } from 'react-router-dom'; 
import icon from './Home-Icon.jpg'; 
import './Home.css';

// Function to wrap each letter of a string in a span, including spaces
const wrapLetters = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="letter">{char === " " ? "\u00A0" : char}</span>
  ));
};

const Home = () => {
  return (
    <>
      <div className="home-flex-container">
        <div className="container">
          <h1 className='title'>{wrapLetters('Welcome to Explore Mate -')}</h1>
          <h1 className='title-2'>{wrapLetters('Where your next adventure starts!')}</h1>
          <h2 className='site-bio'>
            Whether you're conquering mountains or finding hidden gems, <br />
            keep track of your travels and never miss a destination. <br />
            Sign in or sign up to begin your journey!
          </h2>
          <Link to={'../Signup'} className='signup-home-btn'>
            <button>Join Today</button>
          </Link>
        </div>
        <div>
          <img src={icon} alt="Home Icon" className='home-icon' />
        </div>
      </div>
    </>
  );
};

export default Home;
