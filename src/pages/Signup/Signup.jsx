import React from 'react'
import { Link } from 'react-router-dom'; 
import './Signup.css'

function Signup() {
  return (
    <>
        <div className='left-container'>
        <h1 className='signup-title'>Sign Up</h1>
        <input type='text' placeholder='First Name' className='input'></input>
        <br />
        <input type='text' placeholder='Last Name' className='input'></input>
        <br />
        <input type='text' placeholder='Email' className='input'></input>
        <br />
        <input type='text' placeholder='Password' className='input'></input>
        <br />
        <input type='text' placeholder='Retry Password' className='input'></input>
        <br />
        <button className='signup-page-btn'>Sign Up</button>
        
        <div className='account-login-container'>
            <p className='account-text'>Already have an Account?</p>
            <Link to={'../Login'} className='signup-home-btn'>
                <button className='signup-page-login-btn'>Log In</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Signup