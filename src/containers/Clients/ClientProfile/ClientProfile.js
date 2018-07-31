import React, { Component } from 'react';

import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as profileActions from 'store/actions/profiles';

class ClientProfile extends Component {

  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const clientID = this.props.location.pathname.split("/")[2];
    await this.props.get('clients-api', clientID);
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
    this.props.updateControls('clientControls', this.props.clientProfile);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.update('clients-api', this.props.clientProfile.key, this.props.clientControls);
    this.props.history.push('/clients');
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

    const profile = (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.clientProfile.name}
          edit={this.state.edit}/>
        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={clientProfile} />
          ) : (
            <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
              <Forms
                formElements={formElementsArray}
                clicked={this.onSubmit}
                controls={this.props.clientControls}
                controlName={'clientControls'}/>
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
  clientProfile: state.profile.profile,
  clientControls: state.formControl.clientControls,
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
