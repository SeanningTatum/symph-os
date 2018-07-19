import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidenav.css';

const navigationItems = [
  'Projects', 'Clients', 'Contacts', 
  'Symphers', 'Teams'
]

const Sidenav = (props) => {

  const width = props.open ? '200px' : 0;
  const padding = props.open ? '60px 20px 20px 20px' : 0;

  return (
    <div className="sidenav" style={{height: '100%', width, padding}}>
      <ul className="list-group list-group-flush">
        {navigationItems.map(name => (
          <NavLink 
            key={name} 
            to={`/${name.toLowerCase()}`}
            className="list-group-item">
            {name}
          </NavLink>
        ))}
      </ul>
    </div>
  )

}

export default Sidenav;
