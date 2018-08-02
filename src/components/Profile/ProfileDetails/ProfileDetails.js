import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
    <React.Fragment>
      <aside className="profile--info-area__navigation">
        <div className="inner">
          <section>
            <div className="section-heading">
              <strong>PROFILE</strong>
            </div>
            <ul>
              <li><NavLink to='/'>Basic</NavLink></li>
              <li>Employment</li>
              <li>Government Membership</li>
              <li>Personal and Family</li>
            </ul>
          </section>
        </div>
      </aside>

      <section className="profile--info-area__info">
        <h3>Basic Info</h3>
        <div className="field-group">
          <div className="label">
            <label>First Name</label>
          </div>
          <p>Sean Stuart</p>
        </div>
        <div className="field-group">
          <div className="label">
            <label>Last Name</label>
          </div>
          <p>Urgel</p>
        </div>
        <div className="field-group">
          <div className="label">
            <label>Nickname</label>
          </div>
          <p>Sean</p>
        </div>
        <div className="field-group">
          <div className="label">
            <label>Email</label>
          </div>
          <p>seantheurgel@gmail.com</p>
        </div>
        <div className="field-group">
          <div className="label">
            <label>Contact Number</label>
          </div>
          <p>09985377197</p>
        </div>
      </section>
    </React.Fragment>
  );
}

ProfileDetails.propTypes = {
  profile: PropTypes.array.isRequired
}

export default ProfileDetails
