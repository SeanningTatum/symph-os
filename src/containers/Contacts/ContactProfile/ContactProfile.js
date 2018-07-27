import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ContactProfile.scss";
import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';
import * as formControlActions from 'store/actions/formControls';

export class ContactProfile extends Component {

  static propTypes = {
    contactProfile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }),
    contactControls: PropTypes.object.isRequired
  }

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

  componentWillUnmount() {
    this.props.resetForm();
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
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
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.contactProfile.name}
          edit={this.state.edit}/>
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

  resetProfile: () => dispatch(profileActions.resetProfile()),

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
