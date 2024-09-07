import './Components.css';
import logo from './Logo.jpg'; // Import the image
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='vertical-nav'>
      <div className='left-nav'>
        <Link to={'/'} className="logo-link"><img src={logo} alt='ExploreMate Logo' className='logo-img' /></Link>
        <Link to={'/'}>Home</Link>
        <Link to={'/Trips'}>Trips</Link>
        <Link to={'/Create'}>Create</Link>
        <Link to={'/Countries'}>Countries</Link>
      </div>

      <div className='right-nav'>
        <Link to={'/Account'} className='login-btn'>Login</Link> 
        <Link to={'/Account'} className='signup-btn'>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
