import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/register">Register</Link> */}
      {/* <Link to="/login">Login</Link> */}
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar2;
