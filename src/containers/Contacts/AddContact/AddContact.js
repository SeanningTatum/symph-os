import React, { Component } from 'react';
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';
import * as formControlActions from 'store/actions/formControls';
export class AddContact extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.props.controls, 'contactsapi');
    this.props.history.push('/contacts');
    this.props.resetForm('contactControls');
  }

  render() {
    // Change controls into array so we can iterate over it
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <Forms
        formElements={formElementsArray}
        clicked={this.onSubmit}
        controls={this.props.controls}
        controlName='contactControls'/>
    )
  }
}

const mapStateToProps = state => ({
  controls: state.formControl.contactControls
});

const mapDispatchToProps = dispatch => ({
  addContact: (controls, api) => dispatch(tableActions.add('contacts', controls, api)),
  resetForm: (controlName) => (dispatch(formControlActions.resetForm(controlName))),

})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
