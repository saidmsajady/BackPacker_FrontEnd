import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About/About'
import Countries from './pages/Countries/Countries'
import Create from './pages/Create/Create'
import Welcome from './pages/Welcome/Welcome'
import Trips from './pages/Trips/Trips'
// import Login from './pages/Login/Login'

import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navbar />     

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Trips' element={<Trips />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Countries' element={<Countries />} />
        <Route path='/About' element={<About />} />
        {/* <Route path='/Login' element={<Login />} /> */}
        <Route path={'*'} element={<NotFound />}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App