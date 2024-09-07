import './Components.css';

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='vertical-nav'>
        <Link to={'/'}>Welcome</Link>
        <Link to={'/Trips'}>Trips</Link>
        <Link to={'/Create'}>Create</Link>
        <Link to={'/Countries'}>Countries</Link>
        <Link to={'/About'}>About</Link>   
        <Link to={'/Account'}>Login</Link>   

    </nav>
  )
}

export default Navbar