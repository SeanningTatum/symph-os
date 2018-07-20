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
      <form style={{maxWidth: '500px'}}>
        <div className="form-group">
          <label className="mb-3">Name</label>
          <input type="text" className="form-control" placeholder="Symph" value={this.state.contact.name} onChange={this.nameChangeHandler} />
        </div>
        <div className="form-group">
          <label className="mb-3">Legal Name</label>
          <input type="text" className="form-control" placeholder="Symph Inc." value={this.state.contact.legalName} onChange={this.legalNameHandler}/>
        </div>
        <div className="form-group">
          <label className="mb-3">Contact name</label>
          <input type="text" className="form-control" placeholder="John Doe" value={this.state.contact.contact} onChange={this.contactHandler}/>
        </div>
        <div className="form-group">
          <label className="mb-3">Type</label>
          <input type="text" className="form-control" placeholder="Type" value={this.state.contact.type} onChange={this.typeHandler}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button className="btn" onClick={this.onSubmit}>Submit</button>
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
