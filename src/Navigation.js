import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productshow" element={<ProductDetails />} />
      </Routes>
      <Outlet />
    </Router>
  );
}

export default Navigation;
