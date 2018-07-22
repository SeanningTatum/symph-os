import React, { Component } from 'react';
import Input from 'components/Input/Input';
import './AddContact.scss';

// Utilities
import updateObject from 'utils/updateObject';
import { contactControls, options, updateObject, checkValidity } from 'utils/formControls';

// Redux
import * as contactActions from 'store/actions/contacts';
import { connect } from 'react-redux';

export class AddContact extends Component {

  state = {
    controls: contactControls
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject( this.state.controls, {
      [controlName]: updateObject( this.state.controls[controlName], {
          value: event.target.value,
          valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
          touched: true
      })
    });
    this.setState( { controls: updatedControls } );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state.contact);
    this.props.history.push('/contacts');
  }

  render() {

    const formElementsArray = [];
    for ( let key in this.state.controls ) {
        formElementsArray.push({
            id: key,
            config: this.state.controls[key]
        });
    }

    return (
      <form className="form">
        {formElementsArray.map(formElement => (
          <Input key={formElement.id} {...formElement.config}/>
        ))}
        <div className="form--button-area">
          <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
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
