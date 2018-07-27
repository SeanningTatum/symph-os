import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as tableActions from 'store/actions/tables';

export class AddContact extends Component {

  componentDidMount() {
    this.props.checkIsValid('employeeControls');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.controls !== this.props.controls) {
      this.props.checkIsValid('employeeControls');      
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls);
    this.props.history.push('/employees');
    this.props.resetForm();
  }


  render() {
    // Change controls into array so we can iterate over it
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <Forms
        formElements={formElementsArray}
        onBlur={this.props.onBlur}
        inputChanged={this.props.inputChanged} 
        isFormValid={this.props.isFormValid}
        clicked={this.onSubmit}/>
    )
  }
}


const mapStateToProps = state => ({
  controls: state.formControl.employeeControls,
  isFormValid: state.formControl.isFormValid
});

const mapDispatchToProps = dispatch => ({
  add: (controls) => dispatch(tableActions.add('employees', controls, 'employees-api')),

  checkIsValid: (controlName) => dispatch(formControlActions.checkIsFormValid(controlName)),

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'employeeControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'employeeControls'))
  ),

  resetForm: () => (
    dispatch(formControlActions.resetForm('employeeControls'))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
