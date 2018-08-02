import React, { Component } from 'react';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 
import Loading from 'components/UI/Loading/Loading';
import {Route, Switch, Redirect} from 'react-router-dom';

import FieldGroup from 'components/Profile/ProfileDetails/FieldGroup/FieldGroup';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as profileActions from 'store/actions/profiles';

export class EmployeeProfile extends Component {

  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const employeeID = this.props.location.pathname.split("/")[2];
    await this.props.get('employees-api', employeeID);
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
    this.props.updateControls('employeeUpdateControls', this.props.employeeProfile);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.update('employees-api', this.props.employeeProfile.key, this.props.employeeControls);
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
  * - - - - - - - - - - - - - - - */

  render() {
    console.log(this.props.employeeProfile);
    const {fname, lname, nickname, email, contact_number} = this.props.employeeProfile;
    const {url} = this.props.match;
    console.log(this.props)
    return (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader clicked={this.toggleEdit} name={`${fname} ${lname}`}edit={this.state.edit}/>
        <ProfileDetails url={url}>
          <h3>General Info</h3>
          <Switch>
            <Route path={`${url}/general-info`} render={() => (
              <React.Fragment>
                <FieldGroup value={fname} label="First name"/>
                <FieldGroup value={lname} label="Last name"/>        
                <FieldGroup value={nickname} label="Nickname"/>
                <FieldGroup value={email} label="Email"/>
                <FieldGroup value={contact_number} label="Contact Number"/>
              </React.Fragment>
            )} />
            <Route path={`${url}/employment`} render={() => (
              <React.Fragment>
                <FieldGroup value={contact_number} label="Position"/>
                <FieldGroup value={contact_number} label="Working Arrangement"/>        
                <FieldGroup value={contact_number} label="Team"/>
                <FieldGroup value={contact_number} label="Email"/>
                <FieldGroup value={contact_number} label="Employment Status"/>
                <FieldGroup value={contact_number} label="Started Working at Symph"/>
                <FieldGroup value={contact_number} label="Last Day at Symph"/>
                <FieldGroup value={contact_number} label="Symph ID no."/>
                <FieldGroup value={contact_number} label="Employee Number"/>
                <FieldGroup value={contact_number} label="Title / Tagline / Motto"/>
                <FieldGroup value={contact_number} label="BPI Payroll Account Number"/>
              </React.Fragment>
            )} />
            <Route render={() => <Redirect to={`${url}/general-info`}/>}/>
          </Switch>
        </ProfileDetails>
      </React.Fragment>


    ) : <Loading />;
  }
}

const mapStateToProps = state => ({
  employeeProfile: state.profile.profile,
  employeeControls: state.formControl.employeeUpdateControls,
  loading: state.profile.loading,
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id)),

  update: (api, id, controls) => dispatch(profileActions.update(api, id, controls)),

  resetProfile: () => dispatch(profileActions.resetProfile()),

  updateControls: (controlName, values) => (
    dispatch(formControlActions.updateControls(controlName, values))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeProfile);
