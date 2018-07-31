import React from 'react';
import './Snackbar.scss';
import PropTypes from 'prop-types';

const Snackbar = ({type, showSnackbar, message}) => {
  
  const classes = [];

  if (type === 'success') {
    classes.push('snack-success');
  }

  if (type === 'error') {
    classes.push('snack-error');
  }

  if (showSnackbar) {
    classes.push('show');
  } 

  return (
    <div id="snackbar" className={classes.join(' ')}>{message}</div>
  )
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired, // Successfully added! - Failed
  type: PropTypes.string.isRequired, // error, success, warning
  showSnackbar: PropTypes.bool.isRequired
}

export default Snackbar
