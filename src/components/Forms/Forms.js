import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';

const Forms = props => {
  return props.formElements.map(formElement => (
    <Input
      key={formElement.id}
      shouldValidate={formElement.config.validation}
      invalid={!formElement.config.valid}
      changed={(event) => props.inputChanged(event, formElement.id)}
      blur={() => props.onBlur(formElement.id)}
      {...formElement.config} />
  ))
}

Forms.propTypes = {
  formElements: PropTypes.array.isRequired,
  onBlur: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired
}

export default Forms;
