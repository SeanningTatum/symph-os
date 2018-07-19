import React from 'react';
import './Navbar.css';

const navbar = (props) => (
  <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1 pl-2">Symph OS</span>
      <span className="pr-2" onClick={props.clicked}>toggle sidenav</span>
  </nav>
)

export default navbar;
