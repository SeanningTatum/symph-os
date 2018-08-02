import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = props => {

  let inputElement;

  switch(props.elementType) {
    case 'input': 
    inputElement = <input 
      value={props.value} 
      type="text"
      onChange={(event) => props.onChange(props.arrayName, props.label, event)}/>; 
      break;

    case 'textarea': 
    inputElement = <textarea 
      value={props.value} 
      type="text" 
      rows="5"
      onChange={(event) => props.onChange(props.arrayName, props.label, event)}/>; 
      break;

    default: inputElement = <input value={props.value} type="input"/>; break;
  }


  return (
    <div className="field-group">
      <div className="label">
        <label>{props.label}</label>
      </div>
      {!props.edit ? (
        <p>{props.value || 'none'}</p>
      ) : (
        <div className="form--input__container no-bot-margin ml-20">
          {inputElement}
        </div>
      )}
    </div>
  )
}

FieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  elementType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  arrayName: PropTypes.string.isRequired
}

export default FieldGroup
