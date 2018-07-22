import React, { Component } from 'react';
import Input from 'components/Input/Input';
import './AddContact.scss';

// Utilities
import { contactControls } from 'utils/formControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

// Redux
import * as contactActions from 'store/actions/contacts';
import { connect } from 'react-redux';

export class AddContact extends Component {

  state = {
    controls: contactControls,
    isFormValid: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.controls !== this.state.controls) {
      this.setState({isFormValid: this.isValid()});
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject( this.state.controls, {
      [controlName]: updateObject( this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      })
    });
    this.setState({controls: updatedControls});
  }

  onBlurHandler = (controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        dirty: true
      })
    });
    this.setState({controls: updatedControls});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact({
      client_name: this.state.controls['client_name'].value,
      contact_name: this.state.controls['contact_name'].value,
      legal_name: this.state.controls['legal_name'].value,
      type: this.state.controls['type'].value
    });
    this.props.history.push('/contacts');
  }

  isValid = () => {
    return (
      this.state.controls['client_name'].valid &&
      this.state.controls['contact_name'].valid &&
      this.state.controls['legal_name'].valid &&
      this.state.controls['type'].valid
    );
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({id: key,config: this.state.controls[key]});
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
