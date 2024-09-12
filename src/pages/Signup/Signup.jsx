import React from 'react'
import { Link } from 'react-router-dom'; 
import './Signup.css'

function Signup() {
  return (
    <>
        <div className='left-container'>
        <h1>Sign Up</h1>
        <input type='text' placeholder='First Name' className='input'></input>
        <br />
        <input type='text' placeholder='Last Name' className='input'></input>
        <br />
        <input type='text' placeholder='Email' className='input'></input>
        <br />
        <input type='text' placeholder='Password' className='input'></input>
        <br />
        <input type='text' placeholder='Retry Password' className='input'></input>
        <button>Sign Up</button>
        <p>Already have an Account?</p>
        <Link to={'../Signup'} className='signup-home-btn'>
            <button>Log In</button>
        </Link>
      </div>
    </>
  )
}

export default Signup