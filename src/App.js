import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Cart from '../src/pages/Cart'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App