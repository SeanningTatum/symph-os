import React from 'react';

const navbar = (props) => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Symph OS</span>
    <span onClick={props.clicked}>toggle sidenav</span>
  </nav>
)

export default navbar;
