import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileDetailsSidenav = props => (
  <aside className="profile--info-area__navigation">
    <div className="inner">
      <section>
        <div className="section-heading">
          <strong>PROFILE</strong>
        </div>
        <ul className="profile--sidenav">
          {props.sidenavLinks.map(sidenav => (
            <li className="profile--sidenav__item">
              <NavLink to={sidenav.link}>{sidenav.name}</NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </aside>
)

export default ProfileDetailsSidenav
