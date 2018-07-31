import React, { Component } from 'react';

import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as profileActions from 'store/actions/profiles';

class ContactProfile extends Component {

  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const contactID = this.props.location.pathname.split("/")[2];
    await this.props.get('contacts-api', contactID);
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
    this.props.updateControls('contactControls', this.props.contactProfile);
  }

  onSubmit = async (event) => {
    event.preventDefault();
    await this.props.update('contacts-api', this.props.contactProfile.key, this.props.contactControls);
    this.props.history.push('/contacts');
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

    const profile = (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.contactProfile.name}
          edit={this.state.edit}/>
        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={contactProfile} />
          ) : (
            <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
              <Forms
                formElements={formElementsArray}
                clicked={this.onSubmit}
                controls={this.props.contactControls}
                controlName={'contactControls'}/>
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
  contactProfile: state.profile.profile,
  contactControls: state.formControl.contactControls,
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);
