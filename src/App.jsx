import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Countries from './pages/Countries/Countries'
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Trips from './pages/Trips/Trips'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navbar />     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Trips' element={<Trips />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Countries' element={<Countries />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path={'*'} element={<NotFound />}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App