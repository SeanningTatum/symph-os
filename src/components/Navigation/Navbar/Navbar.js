import React from 'react';
import "./Navbar.scss";
import { GoogleLogout } from 'react-google-login';
    
const navbar = ({onLogout}) => (
  <nav className="navbar">
    <span>Symph OS v2</span>
    <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={onLogout} />
  </nav>
)

export default navbar;
