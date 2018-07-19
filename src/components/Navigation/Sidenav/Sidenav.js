import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidenav.css';

const navigationItems = [
  'Projects', 'Clients', 'Contacts', 
  'Symphers', 'Teams'
]

const Sidenav = (props) => {

  const width = props.open ? '200px' : 0;

  return (
    <div className="sidenav" style={{height: '100%', width}}>
      <ul className="list-group list-group-flush">
        {navigationItems.map(name => (
          <NavLink 
            key={name} 
            className="list-group-item" 
            to={`/${name.toLowerCase()}`}>{name}</NavLink>
        ))}
      </ul>
    </div>
  )

}

export default Sidenav;
