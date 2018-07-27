import React, { Component } from 'react';

import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';
import * as formControlActions from 'store/actions/formControls';

export class clientProfile extends Component {

  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const clientID = this.props.location.pathname.split("/")[2];
    await this.props.get('clients-api', clientID);
    this.props.updateControls('name', this.props.clientProfile);
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
    
    const clientProfile = [];
    for (let key in this.props.clientProfile) {
      clientProfile.push({
        id: key.charAt(0).toUpperCase() + key.substr(1),
        value: this.props.clientProfile[key]
      });
    }

    const formElementsArray = [];
    for (let key in this.props.clientControls) {
      formElementsArray.push({
        id: key,
        config: this.props.clientControls[key]
      });
    }

    return (
      <React.Fragment>
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.clientProfile.name}
          edit={this.state.edit}/>
        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={clientProfile} />
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
  clientProfile: state.profile.profile,
  clientControls: state.formControl.clientControls
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id)),

  resetProfile: () => dispatch(profileActions.resetProfile()),

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'clientControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'clientControls'))
  ),

  resetForm: () => (
    dispatch(formControlActions.resetForm('clientControls'))
  ),

  updateControls: (controlName, values) => (
    dispatch(formControlActions.updateControls(controlName, 'clientControls', values))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(clientProfile);
