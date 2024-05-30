import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  return (
    <nav>

      <Link to="/" className="nav-link" >Home</Link>
      <Link to="/register" className="nav-link">Register</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/logout" className="nav-link">Logout</Link>

    </nav>
  );
};

export default Navbar;
