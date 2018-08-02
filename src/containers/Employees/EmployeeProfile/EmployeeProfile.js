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
    generalInfo: [],
    employmentInfo: [],
    governmentInfo: [],
    personalInfo: []
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const employeeID = this.props.location.pathname.split("/")[2];
    await this.props.get('employeesapi', employeeID);
    this.initGeneralInfo();
    this.initEmploymentInfo();
    this.initGovermentInfo();
    this.initPersonalInfo();
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
      current_skills, future_skills, personality_type } = this.props.employeeProfile;

    this.setState({
      generalInfo: [
        { value: fname, label: "First Name", elementType: 'input', key: 'fname' },
        { value: lname, label: "Last Name", elementType: 'input', key: 'lname' },
        { value: nickname, label: "Nickname", elementType: 'input', key: 'nickname' },
        { value: email, label: 'Email', elementType: 'input', key: 'email' },
        { value: contact_number || '', label: 'Contact Number', elementType: 'input', key: 'contact_number' },
        { value: current_skills || '', label: 'Current Skills and Technologies', elementType: 'textarea', key: 'current_skills' },
        { value: future_skills || '', label: 'Skills and Technologies I want to learn in the next 6 months', elementType: 'textarea', key: 'future_skills' },
        // {value: personality_type || '', label: 'Personality Type', elementType: 'input', key: ''}
      ]
    });
  }

  initEmploymentInfo = () => {
    const {
      position, work_arrangement, team,
      status, work_started, work_end, motto, } = this.props.employeeProfile;

    this.setState({
      employmentInfo: [
        { value: position || '', label: 'Position', elementType: 'input', key: 'position' },
        { value: work_arrangement || '', label: 'Working Arrangement', elementType: 'input', key: 'work_arrangement' },
        { value: team || '', label: 'Team', elementType: 'input', key: 'team' }, // get Team select
        { value: status || '', label: 'Employment Status', elementType: 'input', key: 'status' }, // select
        { value: work_started || '', label: 'Work Started', elementType: 'input', key: 'work_started' }, // date
        { value: work_end || '', label: 'Work Ended', elementType: 'input', key: 'work_end' }, // date
        { value: motto || '', label: 'Motto', elementType: 'textarea', key: 'motto' },
      ]
    })
  }

  initGovermentInfo = () => {
    const {sss, tin, philhealth, pagibig} = this.props.employeeProfile;

    this.setState({governmentInfo: [
      { value: sss || '', label: "SSS", elementType: 'input', key: 'sss' },
      { value: tin || '', label: "TIN", elementType: 'input', key: 'tin' },
      { value: philhealth || '', label: "Phil Health", elementType: 'input', key: 'philhealth' },
      { value: pagibig || '', label: "Pagibig", elementType: 'input', key: 'pagibig' },
    ]});
  }

  initPersonalInfo = () => {
    /* <FieldGroup value={contact_number} label="Spouses Complete Name"/> */
    /* <FieldGroup value={contact_number} label="Children's Complete Name"/> */

    const {address, marital_status, } = this.props.employeeProfile;

    this.setState({personalInfo: [
      { value: address || '', label: "Residencial Address", elementType: 'input', key: 'address' },
      { value: marital_status || '', label: "Marital Status", elementType: 'input', key: 'marital_status' },
    ]});
  }


  onInputChangeHandler = (arrayName, label, event) => {
    const newData = [...this.state[arrayName]];
    const result = newData.findIndex(control => control.label === label);

    newData[result].value = event.target.value;

    this.setState({ [arrayName]: newData });
  }

  toggleEdit = () => {
    this.setState(({ edit: true }));
    this.props.updateControls('employeeUpdateControls', this.props.employeeProfile);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ edit: false });


    // Put generalInfo in data obj
    const data = {};

    for (const ndx in this.state.generalInfo) {
      const { key, value } = this.state.generalInfo[ndx];
      data[key] = value;
    }

    for (const ndx in this.state.employmentInfo) {
      const { key, value } = this.state.employmentInfo[ndx];
      data[key] = value;
    }

    for (const ndx in this.state.governmentInfo) {
      const { key, value } = this.state.governmentInfo[ndx];
      data[key] = value;
    }

    for (const ndx in this.state.personalInfo) {
      const { key, value } = this.state.personalInfo[ndx];
      data[key] = value;
    }

    console.log(data);

    this.props.update('employeesapi', this.props.employeeProfile.key, data);
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
  * - - - - - - - - - - - - - - - */

  render() {
    const { url } = this.props.match;
    const { fname, lname } = this.props.employeeProfile;

    return (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader clicked={this.toggleEdit} name={`${fname} ${lname}`} edit={this.state.edit} save={this.onSubmit} />
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
              this.state.employmentInfo.map((info, ndx) => (
                <FieldGroup
                  {...info}
                  edit={this.state.edit}
                  key={ndx}
                  onChange={this.onInputChangeHandler}
                  arrayName="employmentInfo"
                />
              ))
            )} />
            <Route path={`${url}/government-membership`} render={() => (
              this.state.governmentInfo.map((info, ndx) => (
                <FieldGroup
                  {...info}
                  edit={this.state.edit}
                  key={ndx}
                  onChange={this.onInputChangeHandler}
                  arrayName="governmentInfo"
                />
              ))
            )} />
            <Route path={`${url}/personal-and-family`} render={() => (
              this.state.personalInfo.map((info, ndx) => (
                <FieldGroup
                  {...info}
                  edit={this.state.edit}
                  key={ndx}
                  onChange={this.onInputChangeHandler}
                  arrayName="personalInfo"
                />
              ))
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
