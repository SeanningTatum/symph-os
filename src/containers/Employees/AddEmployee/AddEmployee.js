import React, { Component } from 'react'
import Input from 'components/Input/Input';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as employeesActions from 'store/actions/employees';

export class AddContact extends Component {

  state = {
    isFormValid: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  componentDidMount() {
    console.log(this.props.controls)
    this.setState({ isFormValid: this.isValid() });
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.controls !== this.props.controls) {
      this.setState({ isFormValid: this.isValid() });
    }
  }

  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  isValid = () => {
    return (
      this.props.controls['employee_fname'].valid &&
      this.props.controls['employee_lname'].valid &&
      this.props.controls['employee_mi'].valid &&
      this.props.controls['employee_nickname'].valid &&
      this.props.controls['employee_email'].valid &&
      this.props.controls['employee_position'].valid &&
      this.props.controls['employee_working_arrangement'].valid
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addEmployee()
    this.props.history.push('/contacts');
    this.props.resetForm();
  }

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */

  render() {
    // Change controls into array so we can iterate over it
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <form className="form__container">
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            changed={(event) => this.props.inputChanged(event, formElement.id)}
            blur={() => this.props.onBlur(formElement.id)}
            {...formElement.config} />
        ))}
        <div className="form--button-area">
          <button
            className="btn btn-primary"
            onClick={this.onSubmit}
            disabled={!this.state.isFormValid}>Submit</button>
        </div>
      </form>
    )
  }
}

  /*- - - - - - - - - - - - - - - -
  *             Redux             *
  * - - - - - - - - - - - - - - - */

const mapStateToProps = state => ({
  controls: state.formControl.employeeControls
});

const mapDispatchToProps = dispatch => ({
  addEmployee: () => dispatch(employeesActions.addEmployee()),

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
