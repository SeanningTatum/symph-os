import React from 'react';
import "./Navbar.scss";

const navbar = ({onLogout}) => (
  <nav className="navbar">
    <span>Symph OS v2</span>
    <button className="btn" onClick={onLogout}>Logout</button>
  </nav>
)

export default navbar;
