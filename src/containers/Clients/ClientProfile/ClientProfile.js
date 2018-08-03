import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';

export class ClientProfile extends Component {

  state = {
    edit: false,
    generalInfo: []
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const clientID = this.props.location.pathname.split("/")[2];
    await this.props.get('clientsapi', clientID);
    this.initGeneralInfo();
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  initGeneralInfo = () => {
    const {company, email, name, nickname, number, position} = this.props.clientProfile;

    this.setState({
      generalInfo: [
        { value: name, label: "Name", elementType: 'input', key: 'name' },
        { value: nickname, label: "Nickname", elementType: 'input', key: 'nickname' },
        { value: email, label: "Email", elementType: 'input', key: 'email' },
        { value: company, label: "Company", elementType: 'input', key: 'company' },
        { value: number, label: "Number", elementType: 'input', key: 'number' },
        { value: position, label: "Position", elementType: 'input', key: 'position' },
      ]
    })
  }
  
  toggleEdit = () => {
    this.setState({ edit: true });
  }

  onInputChangeHandler = (arrayName, label, event) => {
    const newData = [...this.state[arrayName]];
    const result = newData.findIndex(control => control.label === label);

    newData[result].value = event.target.value;

    this.setState({ [arrayName]: newData });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({edit: false});
    const data = {};

    for (const ndx in this.state.generalInfo) {
      const { key, value } = this.state.generalInfo[ndx];
      data[key] = value;
    }

    this.props.update('clientsapi', this.props.clientProfile.key, data);
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
  * - - - - - - - - - - - - - - - */

  render() {
    const { url } = this.props.match;
    
    const sidenavLinks = [
      { link: `${url}/general`, name: 'General' },
    ];

    const profile = (
      <React.Fragment>
        <ProfileHeader
          clicked={this.toggleEdit}
          name={this.props.clientProfile.name}
          edit={this.state.edit} 
          save={this.onSubmit}/>

        <Switch>
          <Route path={`${url}/general`} render={() => (
            <ProfileDetails
              edit={this.state.edit}
              info={this.state.generalInfo}
              onChange={this.onInputChangeHandler}
              sidenavLinks={sidenavLinks}
              arrayName="generalInfo"
              current={'General'}
              url={url} />
          )} />

          <Route render={() => <Redirect to={`${url}/general`} />} />
        </Switch>
      </React.Fragment>
    );
    
    return this.props.loading ? profile : <Loading />;
  }
}

const mapStateToProps = state => ({
  clientProfile: state.profile.profile,
  clientControls: state.formControl.clientControls,
  loading: state.profile.loading,
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id)),

  update: (api, id, data) => dispatch(profileActions.update(api, id, data)),

  resetProfile: () => dispatch(profileActions.resetProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
