import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';
import * as formControlActions from 'store/actions/formControls';

export class AddContact extends Component {

  state = {
    isFormValid: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  componentDidMount() {
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
      this.props.controls['name'].valid &&
      this.props.controls['nickname'].valid &&
      this.props.controls['number'].valid &&
      this.props.controls['email'].valid &&
      this.props.controls['company'].valid &&
      this.props.controls['position'].valid
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.props.controls, 'contacts-api');
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
  controls: state.formControl.contactControls
});

const mapDispatchToProps = dispatch => ({
  addContact: (controls, api) => dispatch(
    tableActions.add('contacts', controls, api)
  ),

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'contactControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'contactControls'))
  ),

  resetForm: () => (
    dispatch(formControlActions.resetForm('contactControls'))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
