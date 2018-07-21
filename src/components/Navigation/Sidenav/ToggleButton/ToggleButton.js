import React from 'react';
import PropTypes from 'prop-types';
import "./ToggleButton.scss";

const ToggleButton = props => {
  const icon = !props.isOpen ? 'keyboard_arrow_right' : 'keyboard_arrow_left';
  const { left } = props;

  return (
    <div className="sidenav--btn" style={{left}} onClick={props.openSidenav}>
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
