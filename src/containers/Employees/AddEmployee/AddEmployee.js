import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as tableActions from 'store/actions/tables';

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
      this.props.controls['fname'].valid &&
      this.props.controls['lname'].valid &&
      this.props.controls['mi'].valid &&
      this.props.controls['nickname'].valid &&
      this.props.controls['email'].valid &&
      this.props.controls['position'].valid &&
      this.props.controls['working_arrangement'].valid
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls);
    this.props.history.push('/employees');
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
      <Forms
        formElements={formElementsArray}
        onBlur={this.props.onBlur}
        inputChanged={this.props.inputChanged} 
        isFormValid={this.isValid}/>
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
  add: (controls) => dispatch(tableActions.add('employees', controls, 'employees-api')),

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
