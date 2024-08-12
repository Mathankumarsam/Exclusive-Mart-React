import React from 'react'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import ProductList from './Pages/ProductList';




function Navigation() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/productlist" element={<ProductList/>} />
        </Routes>
    </Router>
  );
}

export default Navigation;