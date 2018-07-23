import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  let inputElement = null;
  let hasError = "";
  let errorMessages = [];
  if (props.invalid && props.shouldValidate && props.touched && props.dirty) {
    hasError = "error";
    errorMessages = props.errorMessages;
  }

  switch (props.elementType) {
    case 'input':
      inputElement = <input
        onChange={props.changed}
        value={props.value}
        {...props.elementConfig}
        className={hasError}
        onBlur={props.blur}
      />;
      break;

    case 'textarea':
      inputElement = <textarea
        onChange={props.changed}
        value={props.value}
        {...props.elementConfig}
        className={hasError}
        onBlur={props.blur}
        rows="3"
      />;
      break;

    case 'select':
      inputElement = <select
        type={props.type}
        value={props.value}
        onChange={props.changed}
        className={hasError}>
        <option value=""></option>
        {props.elementConfig.options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      break;

  }

  return (
    <div className="form-container">
      {props.label && <label>{props.label}</label>}
      {inputElement}
      {errorMessages.map((errMsg, i) => (
        <p key={i} className="error-text">{errMsg}</p>
      ))}
    </div>
  )
}


Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  blur: PropTypes.func.isRequired,
  errorMessages: PropTypes.array,

  elementConfig: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string
  }).isRequired,

  validation: PropTypes.shape({
    required: PropTypes.bool.isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    isEmail: PropTypes.bool
  }).isRequired,
}

export default Input;
