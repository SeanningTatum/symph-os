import React, { Component } from 'react';
import "./ContactProfile.scss";
import Input from 'components/Input/Input';

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';
import * as formControlActions from 'store/actions/formControls';

export class ContactProfile extends Component {

  state = {
    edit: false
  }

  async componentDidMount() {
    const contactID = this.props.location.pathname.split("/")[2];
    await this.props.get('contacts-api', contactID);
    this.props.updateControls('name', this.props.contactProfile);
  }

  toggleEdit = () => {
    this.setState(prevState => ({edit: !prevState.edit}));
  }

  render() {
    const contactProfile = [];
    for (let key in this.props.contactProfile) {
      contactProfile.push({ 
        id: key, //key.charAt(0).toUpperCase() + key.substr(1), 
        value: this.props.contactProfile[key]
      });
    }

    const formElementsArray = [];
    for (let key in this.props.contactControls) {
      formElementsArray.push({ 
        id: key, 
        config: this.props.contactControls[key]
      });
    }

    return (
      <React.Fragment>
        <div className="profile__header">
          <h2>{this.props.contactProfile.name}</h2>
          <button 
            className="btn" 
            style={{marginLeft: '5rem', paddingTop: 0}}
            onClick={this.toggleEdit}>{!this.state.edit ? 'Edit' : 'Save'}</button>
        </div>

        <div className="profile--info-area">
          {/* {contactProfile.map(profile => (
            <div key={profile.id} className="profile--info-area__info">
              <h3 className="info__name">{profile.id}</h3>
              <p className="info__value">{profile.value}</p>
            </div>
          ))} */}
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              shouldValidate={formElement.config.validation}
              invalid={!formElement.config.valid}
              changed={(event) => this.props.inputChanged(event, formElement.id)}
              blur={() => this.props.onBlur(formElement.id)}
              {...formElement.config} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  contactProfile: state.profile.profile,
  contactControls: state.formControl.contactControls
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id)),

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'contactControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'contactControls'))
  ),

  resetForm: () => (
    dispatch(formControlActions.resetForm('contactControls'))
  ),

  updateControls: (controlName, values) => (
    dispatch(formControlActions.updateControls(controlName, 'contactControls', values))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);
