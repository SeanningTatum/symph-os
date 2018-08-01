import React from 'react'
import PropTypes from 'prop-types'

const ProfileDetails = props => {
  return props.profile.map(p => (
    <div key={p.id} className="profile--info-area__info">
      <h3 className="info__name">{p.id.replace(/[_]/g, " ")}</h3>
      <p className="info__value">{p.value.toString()}</p>
    </div>
  ))
}

ProfileDetails.propTypes = {
  profile: PropTypes.array.isRequired
}

export default ProfileDetails
