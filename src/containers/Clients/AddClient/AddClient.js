import React, { Component } from 'react';
import Forms from 'components/Forms/Forms';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as tableActions from 'store/actions/tables';

export class AddClient extends Component {

  state = {
    isFormValid: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentDidMount() {
    this.setState({ isFormValid: this.isValid() });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.controls !== this.props.controls) {
      this.setState({ isFormValid: this.isValid() });
    }
  }

  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  onSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.props.controls);
    this.props.resetForm();
    this.props.history.push('/clients')
  }

  isValid = () => {
    return (
      this.props.controls['client_name'].valid &&
      this.props.controls['legal_name'].valid &&
      this.props.controls['type'].valid
    );
  }

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */

  render() {
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({ id: key, config: this.props.controls[key] });
    }

    return (
      <form className="form">
        <Forms
          formElements={formElementsArray}
          onBlur={this.props.onBlur}
          inputChanged={this.props.inputChanged} />
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

/*- - - - - - - - - - - - - - - -
*             Redux             *
* - - - - - - - - - - - - - - - */

const mapStateToProps = state => ({
  controls: state.formControl.clientControls
});

const mapDispatchToProps = dispatch => ({
  add: (controls) => dispatch(tableActions.add('clients', controls, 'clients-api')),

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'clientControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'clientControls'))
  ),

  resetForm: () => {
    dispatch(formControlActions.resetForm('clientControls'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
