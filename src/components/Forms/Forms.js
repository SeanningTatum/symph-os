import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';

const Forms = props => {            
  return (
    <form className="form__container">
      {props.formElements.map(formElement => (
        <Input
          key={formElement.id}
          shouldValidate={formElement.config.validation}
          invalid={!formElement.config.valid}
          changed={(event) => props.inputChanged(event, formElement.id)}
          blur={() => props.onBlur(formElement.id)}
          {...formElement.config} />
      ))}
      <div className="form--button-area">
        <button
          className="btn btn-primary"
          onClick={props.clicked}
          disabled={!props.isFormValid}>Submit</button>
      </div>
    </form>
  )

}

Forms.propTypes = {
  formElements: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired
}

export default Forms;
