import React, { Component } from 'react';
import Input from 'components/Input/Input';
import './AddContact.scss';

// Utilities
import updateObject from 'utils/updateObject';
import { contactControls, options } from 'utils/formControls';

// Redux
import * as contactActions from 'store/actions/contacts';
import { connect } from 'react-redux';

export class AddContact extends Component {

  state = {
    controls: contactControls
  }

  nameHandler = (event) => {
    const {value} = event.target;
    this.setState({contact: updateObject(this.state.contact, 'name', value)});
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
        {formElementsArray.map(formElement => {
          console.log(formElement);
          return <Input key={formElement.id} {...formElement.config}/>
        })}
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
