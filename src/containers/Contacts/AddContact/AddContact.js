import React, { Component } from 'react'
import updateObject from 'utils/updateObject';
import { connect } from 'react-redux';
import * as contactActions from 'store/actions/contacts';

export class AddContact extends Component {

  state = {
    contact: {
      client_name: '',
      legal_name: '',
      contact_name: '',
      type: ''
    }
  }

  /**
   * !!! EYES HERE !!!
   * Please do not combine this code into one!!!
   * I already know we can clean up code by making it
   * into one function, but at the cost of perfomance issues
   */

  nameChangeHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'client_name', value)});
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
    const {value} = event.target
    this.setState({contact: updateObject(this.state.contact, 'type', value)});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state.contact);
    this.props.history.push('/contacts');
  }

  render() {
    return (
      <form className="main-content__form">
        <div className="main-content__form-container">
          <label>Name</label>
          <input type="text" value={this.state.contact.name} onChange={this.nameChangeHandler} />
        </div>
        <div className="main-content__form-container">
          <label>Legal Name</label>
          <input type="text" value={this.state.contact.legalName} onChange={this.legalNameHandler}/>
        </div>
        <div className="main-content__form-container">
          <label>Contact name</label>
          <input type="text" value={this.state.contact.contact} onChange={this.contactHandler}/>
        </div>
        <div className="main-content__form-container">
          <label>Type</label>
          <input type="text" value={this.state.contact.type} onChange={this.typeHandler}/>
        </div>
        
        <div className="main-content__form--button-area">
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
