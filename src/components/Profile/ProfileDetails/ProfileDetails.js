import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FieldGroup from 'components/Profile/ProfileDetails/FieldGroup/FieldGroup';
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
            <ul className="profile--sidenav">
              <li className="profile--sidenav__item">
                <NavLink to={`${props.url}/general-info`}>General Info</NavLink>
              </li>
              <li className="profile--sidenav__item">
                <NavLink to={`${props.url}/employment`}>Employment</NavLink>
              </li>
              <li className="profile--sidenav__item">
                <NavLink to={`${props.url}/government-membership`}>Government Membership</NavLink>
              </li>
              <li className="profile--sidenav__item">
                <NavLink to={`${props.url}/personal-and-family`}>Personal and Family</NavLink>
              </li>
            </ul>
          </section>
        </div>
      </aside>

      <section className="profile--info-area__info">
        <form>
          {props.info.map((info, ndx) => (
            <FieldGroup
              {...info}
              edit={props.edit}
              key={ndx}
              onChange={props.onChange}
              arrayName={props.arrayName} />
          ))}
        </form>
      </section>
    </div>
  );
}

ProfileDetails.propTypes = {
  url: PropTypes.string.isRequired,
  arrayName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  info: PropTypes.array.isRequired,
  edit: PropTypes.bool.isRequired
}

export default ProfileDetails
