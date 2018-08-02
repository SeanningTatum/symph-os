import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import FieldGroup from './FieldGroup/FieldGroup';
// const ProfileDetails = props => {
//   return props.profile.map(p => (
//     <div key={p.id} className="profile--info-area__info">
//       <h3 className="info__name">{p.id.replace(/[_]/g, " ")}</h3>
//       <p className="info__value">{p.value.toString()}</p>
//     </div>
//   ))
// }

const ProfileDetails = props => {
  return (
    <div className="profile--info-area">
      <aside className="profile--info-area__navigation">
        <div className="inner">
          <section>
            <div className="section-heading">
              <strong>PROFILE</strong>
            </div>
            <ul>
              <li><NavLink to='/'>General Info</NavLink></li>
              <li>Employment</li>
              <li>Government Membership</li>
              <li>Personal and Family</li>
            </ul>
          </section>
        </div>
      </aside>

      <section className="profile--info-area__info">
        {props.children}
      </section>
    </div>
  );
}

ProfileDetails.propTypes = {
  profile: PropTypes.array.isRequired
}

export default ProfileDetails
