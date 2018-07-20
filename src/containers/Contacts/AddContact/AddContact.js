import React, { Component } from 'react'
import updateObject from 'utils/updateObject';

export class AddContact extends Component {

  state = {
    contact: {
      name: '',
      legalName: '',
      contactName: '',
      type: ''
    }
  }

  /**
   * Eyes here!
   * Please do not combine this code into one!!!
   * I already know we can clean up code by making it
   * into one function, but at the cost of perfomance issues
   */

  nameChangeHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'name', value)});
  }

  legalNameHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'legalName', value)});
  }

  contactHandler = (event) => {
    const {value} = event.target
    this.setState({contact: updateObject(this.state.contact, 'contactName', value)});
  }

  typeHandler = (event) => {
    const {value} = event.target
    this.setState({contact: updateObject(this.state.contact, 'type', value)});
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
          <button className="btn">Submit</button>
        </div>
      </form>
    )
  }
}

export default AddContact;
