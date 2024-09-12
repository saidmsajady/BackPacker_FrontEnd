import React from 'react'
import { Link } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  return (
    <>
      <div className='left-container'>
        <h1>Login</h1>
        <input type='text' placeholder='Email' className='input'></input>
        <br />
        <input type='text' placeholder='Password' className='input'></input>
        <br />
        <button className='login-page-btn'>Login</button>

        <div className='account-login-container'>
        <p>Don't have an Account?</p>
        <Link to={'../Signup'} className='signup-home-btn'>
            <button className='login-page-signup-btn'>Join Today</button>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Login