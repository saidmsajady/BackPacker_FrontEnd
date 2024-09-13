import './Components.css';
import logo from './Logo.jpg'; 
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ isSignedIn, setIsSignedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    setIsSignedIn(false); // Set signed-in status to false
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className='vertical-nav'>
      <div className='left-nav'>
        <NavLink to='/' className="logo-link">
          <img src={logo} alt='ExploreMate Logo' className='logo-img' />
        </NavLink>

        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/Trips' className={({ isActive }) => (isActive ? 'active' : '')}>Trips</NavLink>
        <NavLink to='/Create' className={({ isActive }) => (isActive ? 'active' : '')}>Create</NavLink>
        <NavLink to='/Countries' className={({ isActive }) => (isActive ? 'active' : '')}>Countries</NavLink>
        <NavLink to='/Contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>

      <div className='right-nav'>
        {isSignedIn ? (
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <NavLink to='/Login' className='login-btn'>Login</NavLink>
            <NavLink to='/Signup' className='signup-btn'>Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
