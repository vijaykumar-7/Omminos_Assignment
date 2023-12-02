import React from 'react'
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Navbar from './compoenents/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </div>
  )
}

export default App
