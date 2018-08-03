import React, { Component } from 'react';
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';
import * as formControlActions from 'store/actions/formControls';

export class AddClient extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls);
    this.props.history.push('/clients')
  }

  render() {
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <Forms
        formElements={formElementsArray}
        clicked={this.onSubmit}
        controls={this.props.controls}
        controlName='clientControls' />
    )
  }
}

const mapStateToProps = state => ({
  controls: state.formControl.clientControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls) => dispatch(tableActions.add('clients', controls, 'clientsapi')),
  resetForm: (controlName) => (dispatch(formControlActions.resetForm(controlName))),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
