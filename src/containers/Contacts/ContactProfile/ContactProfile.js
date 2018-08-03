import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader';
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';

export class ContactProfile extends Component {

  state = {
    edit: false,
    generalInfo: [],
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const contactID = this.props.location.pathname.split("/")[2];
    await this.props.get('contactsapi', contactID);
    this.initGeneralInfo();
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  initGeneralInfo = () => {
    const { name, nickname, email, company } = this.props.contactProfile;

    this.setState({
      generalInfo: [
        { value: name, label: "Name", elementType: 'input', key: 'name' },
        { value: nickname, label: "Nickname", elementType: 'input', key: 'nickname' },
        { value: email, label: "Name", elementType: 'input', key: 'email' },
        { value: company, label: "Name", elementType: 'input', key: 'company' },
      ]
    })
  }


  onInputChangeHandler = (arrayName, label, event) => {
    const newData = [...this.state[arrayName]];
    const result = newData.findIndex(control => control.label === label);

    newData[result].value = event.target.value;

    this.setState({ [arrayName]: newData });
  }

  toggleEdit = () => {
    this.setState({ edit: true });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    for (const ndx in this.state.generalInfo) {
      const { key, value } = this.state.generalInfo[ndx];
      data[key] = value;
    }
    
    await this.props.update('contactsapi', this.props.contactProfile.key, this.props.contactControls);
    this.props.history.push('/contacts');
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
  * - - - - - - - - - - - - - - - */

  render() {

    const { url } = this.props.match;

    const sidenavLinks = [
      { link: `${url}/general`, name: 'General' },
    ];

    const profile = (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader
          clicked={this.toggleEdit}
          name={this.props.contactProfile.name}
          edit={this.state.edit} 
          save={this.onSubmit}
          />

        <Switch>
          <Route render={() => (
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
    ) : (
        <Loading />
      )

    return profile;
  }
}

const mapStateToProps = state => ({
  contactProfile: state.profile.profile,
  contactControls: state.formControl.contactControls,
  loading: state.profile.loading,
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id)),

  update: (api, id, controls) => dispatch(profileActions.update(api, id, controls)),

  resetProfile: () => dispatch(profileActions.resetProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);
