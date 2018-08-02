import React from 'react'
import PropTypes from 'prop-types'

const ProfileHeader = ({clicked, name, edit, save}) => (
  <div className="profile__header">
    <h2>{name}</h2>
    {edit && <button className="btn" style={{ marginLeft: '5rem', paddingTop: 0 }} onClick={clicked}>Edit</button>}
    {!edit && <button className="btn" style={{ marginLeft: '5rem', paddingTop: 0 }} onClick={save}>Save</button>}
  </div>
)

ProfileHeader.propTypes = {
  clicked: PropTypes.func.isRequired, 
  name: PropTypes.string, 
  edit: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired
}

export default ProfileHeader
