import React from 'react';
import "./NavigationItems.scss";
import { NavLink } from 'react-router-dom';

const navigationItems = [
  {name: 'Projects', icon: 'group_work'}, 
  {name: 'Clients' , icon: 'work_outline'}, 
  {name: 'Contacts', icon: 'contacts'}, 
  {name: 'Employees', icon: 'person_outline'},
  {name: 'Teams'   , icon: 'group'}
]

const NavigationItems = (props) => {

  const display = props.open ? 'inline-block' : 'none';

  return (
    navigationItems.map(nav => (
      <NavLink key={nav.name} to={`/${nav.name.toLowerCase()}`} className="sidenav--list--item">
          <React.Fragment>
            <i className="material-icons">{nav.icon}</i> 
            <span style={{display}}>{nav.name}</span>
          </React.Fragment>
      </NavLink>  
    ))
  )
}

export default NavigationItems;
