import React, { PureComponent } from 'react';
import Input from 'components/Input/Input';
import './AddClient.scss';

// Utilities
import { clientControls } from 'utils/formControls/clientControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

// Redux
import * as clientActions from 'store/actions/clients';
import { connect } from 'react-redux';

export class AddClient extends PureComponent {

  state = {
    // controls: clientControls,
    isFormValid: false
  }


  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  // componentDidUpdate(_, prevState) {
  //   if (prevState.controls !== this.state.controls) {
  //     this.setState({ isFormValid: this.isValid() });
  //   }
  // }

  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */
  inputChangedHandler = (event, controlName) => {
    
    // this.setState({ controls: updatedControls });
  }

  onBlurHandler = (controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        dirty: true
      })
    });
    this.setState({ controls: updatedControls });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addClient({
      client_name: this.state.controls['client_name'].value,
      legal_name: this.state.controls['legal_name'].value,
      type: this.state.controls['type'].value
    });
    this.props.history.push('/clients');
  }

  isValid = () => {
    return (
      this.state.controls['client_name'].valid &&
      this.state.controls['legal_name'].valid &&
      this.state.controls['type'].valid
    );
  }

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({ id: key, config: this.state.controls[key] });
    }

    return (
      <form className="form">
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            blur={() => this.onBlurHandler(formElement.id)}
            {...formElement.config} />
        ))}
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

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addClient: client => dispatch(clientActions.addClient(client))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
