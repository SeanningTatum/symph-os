import React, { Component } from 'react'
import './AddContact.scss';

// Utilities
import updateObject from 'utils/updateObject';
import { contactControls } from 'utils/formControls';

// Redux
import * as contactActions from 'store/actions/contacts';
import { connect } from 'react-redux';

// These are the options for the select form
const options = [
  "Non Profit Organization",
  "Individual",
  "Government",
  "Startup",
  "School",
  "Company"
]

export class AddContact extends Component {

  state = {
    contact: { contactControls }
  }

  /**
   * !!! EYES HERE !!!
   * Please do not combine this code into one!!!
   * I already know we can clean up code by making it
   * into one function, but at the cost of perfomance
   */

  nameHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'name', value)});
  }

  legalNameHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'legal_name', value)});
  }

  contactHandler = (event) => {
    const {value} = event.target
    this.setState({contact: updateObject(this.state.contact, 'contact_name', value)});
  }

  typeHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'type', value)});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state.contact);
    this.props.history.push('/contacts');
  }

  render() {
    return (
      <form className="form">
        <div className="form-container">
          <label>Name</label>
          <input type="text" value={this.state.contact.name} onChange={this.nameHandler} />
        </div>
        <div className="form-container">
          <label>Legal Name</label>
          <input type="text" value={this.state.contact.legalName} onChange={this.legalNameHandler}/>
        </div>
        <div className="form-container">
          <label>Contact name</label>
          <input type="text" value={this.state.contact.contact} onChange={this.contactHandler}/>
        </div>
        <div className="form-container">
          <label>Type</label>
          <select type="text" value={this.state.contact.type} onChange={this.typeHandler}>
            {options.map(option => (
             <option key={option} value={option}>{option}</option>  
            ))}
          </select>
        </div>
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