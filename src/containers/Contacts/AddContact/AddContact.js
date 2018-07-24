import React, { Component } from 'react'
import Input from 'components/Input/Input';

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
      this.props.controls['contact_name'].valid &&
      this.props.controls['contact_nickname'].valid &&
      this.props.controls['contact_number'].valid &&
      this.props.controls['contact_email'].valid &&
      this.props.controls['contact_company'].valid &&
      this.props.controls['contact_position'].valid
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.props.controls)
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
  controls: state.formControl.contactControls
});

const mapDispatchToProps = dispatch => ({
  addContact: controls => dispatch(tableActions.add('contacts', controls)),

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
