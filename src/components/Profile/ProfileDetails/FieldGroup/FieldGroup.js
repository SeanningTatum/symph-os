import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = props => (
  <div className="field-group">
    <div className="label">
      <label>{props.label}</label>
    </div>
    <p>{props.value || 'none'}</p>
  </div>
)

FieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default FieldGroup
