import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = props => {

  let inputElement = null;
  let hasError = "";
  if (props.invalid && props.shouldValidate && props.touched) {
    hasError = "invalid";
    console.log("Invalid!");
  }

  switch (props.elementType) {
    case 'input':
      inputElement = <input 
          type={props.elementConfig.type} 
          value={props.value} 
          onChange={props.changed}
          {...props.elementConfig} 
          className={hasError} />;
      break;
    case 'switch':
      inputElement = (
        <select type={props.type} value={props.value} onChange={props.changed}>

        </select>
      )
      
  }
  
  return (
    <div className="form-container">
      {props.label && <label>{props.label}</label>}
      {inputElement}
    </div>
  )
}

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  elementConfig: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  }).isRequired,
  validation: PropTypes.shape({
    required: PropTypes.bool.isRequired
  }).isRequired,
  valid: PropTypes.bool,
  touched: PropTypes.bool
}

export default Input;
