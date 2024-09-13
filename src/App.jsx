import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Countries from './pages/Countries/Countries';
import Create from './pages/Create/Create';
import Home from './pages/Home/Home'; 
import Trips from './pages/Trips/Trips';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Manage authentication state
  const navigate = useNavigate();

  // Check if token is present in localStorage when the app starts
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token); // Set state based on whether the token exists
  }, []);

  return (
    <>
      <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />

      <Routes>
        <Route path='/' element={<Home isSignedIn={isSignedIn} />} /> {/* Pass isSignedIn to Home */}
        <Route path='/Trips' element={<Trips />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Countries' element={<Countries />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login setIsSignedIn={setIsSignedIn} />} />
        <Route path='/Signup' element={<Signup setIsSignedIn={setIsSignedIn} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
