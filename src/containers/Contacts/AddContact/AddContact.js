import React, { Component } from 'react'
import Input from 'components/Input/Input';

// Redux
import { connect } from 'react-redux';
import * as contactActions from 'store/actions/contacts';

// Utils
import { contactControls } from 'utils/formControls/contactControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

export class AddContact extends Component {

  state = {
    controls: contactControls,
    isFormValid: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentDidUpdate(_, prevState) {
    if (prevState.controls !== this.state.controls) {
      this.setState({ isFormValid: this.isValid() });
    }
  }


  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  inputChangedHandler = (event, controlName) => {
    const errorObj = checkValidity(event.target.value, this.state.controls[controlName].validation);
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: errorObj.isValid,
        errorMessages: errorObj.errorMessages,
        touched: true,
      })
    });
    this.setState({ controls: updatedControls });
  }

  onBlurHandler = (controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        dirty: true
      })
    });
    this.setState({ controls: updatedControls });
  }


  isValid = () => {
    return (
      this.state.controls['contact_name'].valid &&
      this.state.controls['contact_nickname'].valid &&
      this.state.controls['contact_number'].valid &&
      this.state.controls['contact_email'].valid &&
      this.state.controls['contact_company'].valid &&
      this.state.controls['contact_position'].valid
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */

  render() {
    // Change controls into array so we can iterate over it
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({ id: key, config: this.state.controls[key] });
    }

    return (
      <form className="form">
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            blur={() => this.onBlurHandler(formElement.id)}
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

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(contactActions.addContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
