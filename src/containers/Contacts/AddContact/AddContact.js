import React, { Component } from 'react'

export class AddContact extends Component {

  state = {
    controls: {},
    isFormValid: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */
  componentDidUpdate(_, prevState) {
    if (prevState.controls !== this.state.controls) {
      this.setState({isFormValid: this.isValid()});
    }
  }

  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  render() {
    return (
      // <form className="form">
      //   {formElementsArray.map(formElement => (
      //     <Input 
      //       key={formElement.id} 
      //       shouldValidate={formElement.config.validation}
      //       invalid={!formElement.config.valid}
      //       changed={(event) => this.inputChangedHandler(event, formElement.id)}
      //       blur={() => this.onBlurHandler(formElement.id)}
      //       {...formElement.config} />
      //   ))}
      //   <div className="form--button-area">
      //     <button 
      //       className="btn btn-primary" 
      //       onClick={this.onSubmit}
      //       disabled={!this.state.isFormValid}>Submit</button>
      //   </div>
      // </form>
      <div></div>
    )
  }
}

export default AddContact;
