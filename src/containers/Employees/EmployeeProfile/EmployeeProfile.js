import React, { Component } from 'react';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader';
import Loading from 'components/UI/Loading/Loading';
import { Route, Switch, Redirect } from 'react-router-dom';

import FieldGroup from 'components/Profile/ProfileDetails/FieldGroup/FieldGroup';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as profileActions from 'store/actions/profiles';

export class EmployeeProfile extends Component {

  state = {
    edit: false,
    generalInfo: []
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const employeeID = this.props.location.pathname.split("/")[2];
    await this.props.get('employees-api', employeeID);
    this.initGeneralInfo();
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  initGeneralInfo = () => {
    const { 
      fname, lname, nickname, email, contact_number, 
      current_skills, future_skills,personality_type } = this.props.employeeProfile;

    this.setState({generalInfo: [
        {value: fname, label: "First Name", elementType: 'input', key: 'fname'},
        {value: lname, label: "Last Name", elementType: 'input', key: 'lname'},
        {value: nickname, label: "Nickname", elementType: 'input', key: 'nickname'},
        {value: email, label: 'Email', elementType: 'input', key: 'email'},
        {value: contact_number || '', label: 'Contact Number', elementType: 'input', key: 'contact_number'},
        {value: current_skills || '', label: 'Current Skills and Technologies', elementType: 'textarea', key: 'current_skills'},
        {value: future_skills || '', label: 'Skills and Technologies I want to learn in the next 6 months', elementType: 'textarea', key: 'future_skills'},
        // {value: personality_type || '', label: 'Personality Type', elementType: 'input', key: ''}
    ]});
  }

  onInputChangeHandler = (arrayName, label, event) => {
    const newData = [...this.state[arrayName]];
    const result = newData.findIndex(control => control.label === label);

    newData[result].value = event.target.value;

    this.setState({[arrayName]: newData});
  }

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
    this.props.updateControls('employeeUpdateControls', this.props.employeeProfile);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({edit: true});
    

    // Put generalInfo in data obj
    const data = {};
  
    for (const obj in this.state.generalInfo) {
      const {key, value} = this.state.generalInfo[obj];
      data[key] = value;
    }

    console.log(data);
    // this.props.update('employees-api', this.props.employeeProfile.key, this.props.employeeControls);
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
  * - - - - - - - - - - - - - - - */

  render() {
    const { url } = this.props.match;
    const { fname, lname } = this.props.employeeProfile;

    return (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader clicked={this.toggleEdit} name={`${fname} ${lname}`} edit={this.state.edit} save={this.onSubmit}/>
        <ProfileDetails url={url}>
          <h3>General Info</h3>
          <Switch>
            <Route path={`${url}/general-info`} render={() => (
              this.state.generalInfo.map((info, ndx) => (
                <FieldGroup 
                  {...info} 
                  edit={this.state.edit} 
                  key={ndx} 
                  onChange={this.onInputChangeHandler}
                  arrayName="generalInfo" />
              ))
            )} />
            <Route path={`${url}/employment`} render={() => (
              <React.Fragment>
                {/* <FieldGroup value={contact_number} label="Position" /> */}
                {/* <FieldGroup value={contact_number} label="Working Arrangement" /> */}
                {/* <FieldGroup value={contact_number} label="Team" /> */}
                {/* <FieldGroup value={contact_number} label="Email" /> */}
                {/* <FieldGroup value={contact_number} label="Employment Status" /> */}
                {/* <FieldGroup value={contact_number} label="Started Working at Symph" /> */}
                {/* <FieldGroup value={contact_number} label="Last Day at Symph" /> */}
                {/* <FieldGroup value={contact_number} label="Symph ID no." /> */}
                {/* <FieldGroup value={contact_number} label="Employee Number" /> */}
                {/* <FieldGroup value={contact_number} label="Title / Tagline / Motto" /> */}
                {/* <FieldGroup value={contact_number} label="BPI Payroll Account Number" /> */}
              </React.Fragment>
            )} />
            <Route path={`${url}/government-membership`} render={() => (
              <React.Fragment>
                {/* <FieldGroup value={contact_number} label="SSS" /> */}
                {/* <FieldGroup value={contact_number} label="TIN" /> */}
                {/* <FieldGroup value={contact_number} label="PhilHealth" /> */}
                {/* <FieldGroup value={contact_number} label="Pagibig" /> */}
              </React.Fragment>
            )} />
             <Route path={`${url}/personal-and-family`} render={() => (
              <React.Fragment>
                {/* <FieldGroup value={contact_number} label="Residence Address"/> */}
                {/* <FieldGroup value={contact_number} label="Civil Status"/>         */}
                {/* <FieldGroup value={contact_number} label="Spouses Complete Name"/> */}
                {/* <FieldGroup value={contact_number} label="Children's Complete Name"/> */}
              </React.Fragment>
            )} />
            <Route render={() => <Redirect to={`${url}/general-info`} />} />
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
