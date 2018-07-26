import React, { Component } from 'react';
import "./ContactProfile.scss";
import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';
import * as formControlActions from 'store/actions/formControls';

export class ContactProfile extends Component {
  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const contactID = this.props.location.pathname.split("/")[2];
    await this.props.get('contacts-api', contactID);
    this.props.updateControls('name', this.props.contactProfile);
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
  }

  /*- - - - - - - - - - - - - - - -
  *             Render            *
  * - - - - - - - - - - - - - - - */
  render() {
    const contactProfile = [];
    for (let key in this.props.contactProfile) {
      contactProfile.push({
        id: key.charAt(0).toUpperCase() + key.substr(1),
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
            style={{ marginLeft: '5rem', paddingTop: 0 }}
            onClick={this.toggleEdit}>{!this.state.edit ? 'Edit' : 'Save'}</button>
        </div>

        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={contactProfile} />
          ) : (
            <Forms 
              formElements={formElementsArray} 
              onBlur={this.props.onBlur}
              inputChanged={this.props.inputChanged}
              />
          )}
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
