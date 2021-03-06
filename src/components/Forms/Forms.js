import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';

import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';

class Forms extends Component {     

  static propTypes = {
    formElements: PropTypes.array.isRequired,
    clicked: PropTypes.func.isRequired,
    controls: PropTypes.object.isRequired,
    controlName: PropTypes.string.isRequired, // ex: contactControls
    selectsValid: PropTypes.bool
  }

  static defaultProps = {
    selectsValid: true
  }

  componentDidMount() {
    this.props.checkIsValid(this.props.controlName);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.controls !== this.props.controls) {
      this.props.checkIsValid(this.props.controlName);
    }
  }

  componentWillUnmount() {
    // this.props.resetForm(this.props.controlName);
  }

  render() {   
    return (
      <form className="form__container">
        {this.props.formElements.map(formElement => (
          <Input
            key={formElement.id}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            changed={(event) => this.props.inputChanged(event, formElement.id, this.props.controlName)}
            blur={() => this.props.onBlur(formElement.id, this.props.controlName)}
            {...formElement.config} />
        ))}
        {this.props.children}
        <div className="form--button-area">
          <button
            className="btn btn-primary"
            onClick={this.props.clicked}
            disabled={!this.props.isFormValid || !this.props.selectsValid}>Submit</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isFormValid: state.formControl.isFormValid
})

const mapDispatchToProps = dispatch => ({
  checkIsValid: (controlName) => dispatch(formControlActions.checkIsFormValid(controlName)),

  inputChanged: (event, controlProp, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlProp, controlName))
  ),

  onBlur: (controlProp, controlName) => (
    dispatch(formControlActions.blur(controlProp, controlName))
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
