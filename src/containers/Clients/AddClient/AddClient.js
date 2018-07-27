import React, { Component } from 'react';
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as tableActions from 'store/actions/tables';

export class AddClient extends Component {
  componentDidMount() {
    this.props.checkIsValid('clientControls');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.controls !== this.props.controls) {
      this.props.checkIsValid('clientControls');
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls);
    this.props.resetForm();
    this.props.history.push('/clients')
  }

  render() {
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <Forms
        formElements={formElementsArray}
        onBlur={this.props.onBlur}
        inputChanged={this.props.inputChanged} 
        clicked={this.onSubmit}
        isFormValid={this.props.isFormValid} />
    )
  }
}

const mapStateToProps = state => ({
  controls: state.formControl.clientControls,
  isFormValid: state.formControl.isFormValid
});

const mapDispatchToProps = dispatch => ({
  add: (controls) => dispatch(tableActions.add('clients', controls, 'clients-api')),

  checkIsValid: (controlName) => dispatch(formControlActions.checkIsFormValid(controlName)),  

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'clientControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'clientControls'))
  ),

  resetForm: () => {
    dispatch(formControlActions.resetForm('clientControls'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
