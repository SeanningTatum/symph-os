import React, { Component } from 'react';

import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';
import * as formControlActions from 'store/actions/formControls';

export class employeeProfile extends Component {

  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const employeeID = this.props.location.pathname.split("/")[2];
    await this.props.get('employees-api', employeeID);
    this.props.updateControls('name', this.props.employeeProfile);
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
    
    const employeeProfile = [];
    for (let key in this.props.employeeProfile) {
      employeeProfile.push({
        id: key.charAt(0).toUpperCase() + key.substr(1),
        value: this.props.employeeProfile[key]
      });
    }

    const formElementsArray = [];
    for (let key in this.props.employeeControls) {
      formElementsArray.push({
        id: key,
        config: this.props.employeeControls[key]
      });
    }

    return (
      <React.Fragment>
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.employeeProfile.name}
          edit={this.state.edit}/>
        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={employeeProfile} />
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
  employeeProfile: state.profile.profile,
  employeeControls: state.formControl.employeeControls
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id)),

  resetProfile: () => dispatch(profileActions.resetProfile()),

  inputChanged: (event, controlName) => (
    dispatch(formControlActions.inputChanged(event.target.value, controlName, 'employeeControls'))
  ),

  onBlur: (controlName) => (
    dispatch(formControlActions.blur(controlName, 'employeeControls'))
  ),

  resetForm: () => (
    dispatch(formControlActions.resetForm('employeeControls'))
  ),

  updateControls: (controlName, values) => (
    dispatch(formControlActions.updateControls(controlName, 'employeeControls', values))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(employeeProfile);
