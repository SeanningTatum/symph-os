import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = props => {
  const icon = props.isOpen ? 'keyboard_arrow_right' : 'keyboard_arrow_left';
  const { left } = props;

  return (
    <div className="btn btn-primary sidenav--btn" style={{left}} onClick={props.openSidenav}>
      <i className="material-icons">{icon}</i>
    </div>
  )
}

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openSidenav: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired
}

export default ToggleButton
