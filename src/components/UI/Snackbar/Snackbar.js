import React from 'react';
import './Snackbar.scss';
import PropTypes from 'prop-types';

const Snackbar = props => (
  <div id="snackbar">Some text some message..</div>
)

Snackbar.propTypes = {
  message: PropTypes.string, // Successfully added! - Failed
  type: PropTypes.string // error, success, warning
}

export default Snackbar
