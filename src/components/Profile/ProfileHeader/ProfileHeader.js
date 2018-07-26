import React from 'react'
import PropTypes from 'prop-types'

const ProfileHeader = ({clicked, name, edit}) => (
  <div className="profile__header">
    <h2>{name}</h2>
    <button
      className="btn"
      style={{ marginLeft: '5rem', paddingTop: 0 }}
      onClick={clicked}>{!edit ? 'Edit' : 'Save'}</button>
  </div>
)

ProfileHeader.propTypes = {
  clicked: PropTypes.func.isRequired, 
  name: PropTypes.string, 
  edit: PropTypes.bool.isRequired
}

export default ProfileHeader
