import React, { Component } from 'react';

import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as profileActions from 'store/actions/profiles';

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
    this.props.update('employees-api', this.props.employeeProfile.employee_id, this.props.employeeControls);
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

    const profile = (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.employeeProfile.fname + " " +this.props.employeeProfile.lname}
          edit={this.state.edit}/>
        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={employeeProfile} />
          ) : (
            <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
              <Forms
                formElements={formElementsArray}
                clicked={this.onSubmit}
                controls={this.props.employeeControls}
                controlName={'employeeUpdateControls'}/>
            </div>
          )}
        </div>
      </React.Fragment>
    ) : (
      <Loading />
    )
    
    return profile;
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

export default connect(mapStateToProps, mapDispatchToProps)(employeeProfile);
