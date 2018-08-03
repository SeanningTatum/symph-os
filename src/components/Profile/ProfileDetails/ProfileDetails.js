import React from 'react';
import PropTypes from 'prop-types';
import FieldGroup from 'components/Profile/ProfileDetails/FieldGroup/FieldGroup';
import Sidenav from './ProfileDetailsSidenav/ProfileDetailsSidenav';

const ProfileDetails = props => {
  return (
    <div className="profile--info-area">
      
      <Sidenav sidenavLinks={props.sidenavLinks} />
      <section className="profile--info-area__info">
        <h3>{props.current}</h3>
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
  edit: PropTypes.bool.isRequired,
  current: PropTypes.string.isRequired,
  sidenavLinks: PropTypes.array.isRequired
}

export default ProfileDetails
