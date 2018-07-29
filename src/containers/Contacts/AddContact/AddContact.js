import React, { Component } from 'react'
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

export class AddContact extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.props.controls, 'contacts-api');
    this.props.history.push('/contacts');
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
        onBlur={this.props.onBlur}
        inputChanged={this.props.inputChanged} 
        isFormValid={this.props.isFormValid}
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
  addContact: (controls, api) => dispatch(
    tableActions.add('contacts', controls, api)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
