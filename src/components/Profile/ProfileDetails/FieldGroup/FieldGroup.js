import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = props => {

  let input;

  switch(props.elementType) {
    case 'input': input = <input value={props.value} type="input"/>; break;
    case 'textarea': input = <textarea value={props.value} type="input" rows="3" />; break;

    default: input = <input value={props.value} type="input"/>; break;
  }


  return (
    <div className="field-group">
      <div className="label">
        <label>{props.label}</label>
      </div>
      {props.edit ? (
        <p>{props.value || 'none'}</p>
      ) : (
        input
      )}
    </div>
  )
}

FieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  elementType: PropTypes.string.isRequired
}

export default FieldGroup
