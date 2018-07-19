import React from 'react';
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
          <li className="list-group-item">{name}</li>
        ))}
      </ul>
    </div>
  )

}

export default Sidenav;
