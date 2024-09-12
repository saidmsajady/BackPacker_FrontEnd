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
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to={'/Trips'} className={({ isActive }) => (isActive ? 'active' : '')}>Trips</NavLink>
        <NavLink to={'/Create'} className={({ isActive }) => (isActive ? 'active' : '')}>Create</NavLink>
        <NavLink to={'/Countries'} className={({ isActive }) => (isActive ? 'active' : '')}>Countries</NavLink>
        <NavLink to={'/Contact'} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>

      <div className='right-nav'>
        {/* Login and Sign Up buttons */}
        <NavLink to={'/Login'} className='login-btn'>Login</NavLink> 
        <NavLink to={'/Signup'} className='signup-btn'>Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;