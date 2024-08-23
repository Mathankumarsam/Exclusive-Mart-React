import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";

function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus);
  };
  return (
    <Router>
      <Outlet />
      <Routes>
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={<Login onAuthenticate={handleAuthentication} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
