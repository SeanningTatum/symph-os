import React from 'react';
import './Snackbar.scss';
import PropTypes from 'prop-types';

const Snackbar = props => {

  const classes = [];

  if (props.type === 'success') {
    classes.push('success');
  }

  if (props.showSnackbar) {
    classes.push('show');
  } 

  console.log(classes.join(' '));

  return (
    <div id="snackbar" className={classes.join(' ')}>{props.message}</div>
  )
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired, // Successfully added! - Failed
  type: PropTypes.string.isRequired, // error, success, warning
  showSnackbar: PropTypes.bool.isRequired
}

export default Snackbar
