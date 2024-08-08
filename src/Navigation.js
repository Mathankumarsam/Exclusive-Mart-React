import React from 'react'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import ProductShow from './Pages/ProductShow';




function Navigation() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/productshow" element={<ProductShow/>} />
        </Routes>
    </Router>
  );
}

export default Navigation;