import './Components.css';
import logo from './Logo.jpg'; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='vertical-nav'>
      <div className='left-nav'>
        {/* Logo */}
        <NavLink to={'/'} className="logo-link"><img src={logo} alt='ExploreMate Logo' className='logo-img' /></NavLink>

        {/* Navigation Links */}
        <NavLink exact to={'/'} activeClassName="active">Home</NavLink>
        <NavLink to={'/Trips'} activeClassName="active">Trips</NavLink>
        <NavLink to={'/Create'} activeClassName="active">Create</NavLink>
        <NavLink to={'/Countries'} activeClassName="active">Countries</NavLink>
        <NavLink to={'/Contact'} activeClassName="active">Contact</NavLink>
      </div>

      <div className='right-nav'>
        {/* Login and Sign Up buttons */}
        <NavLink to={'/Account'} className='login-btn'>Login</NavLink> 
        <NavLink to={'/Account'} className='signup-btn'>Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
