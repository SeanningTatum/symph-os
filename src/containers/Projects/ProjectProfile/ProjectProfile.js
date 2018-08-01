import React, { Component } from 'react';

import Forms from 'components/Forms/Forms';
import ProfileDetails from 'components/Profile/ProfileDetails/ProfileDetails';
import ProfileHeader from 'components/Profile/ProfileHeader/ProfileHeader'; 
import Loading from 'components/UI/Loading/Loading';

// Redux
import { connect } from 'react-redux';
import * as formControlActions from 'store/actions/formControls';
import * as profileActions from 'store/actions/profiles';

export class ProjectProfile extends Component {

  state = {
    edit: false
  }

  /*- - - - - - - - - - - - - - - -
  *        Lifecycle Hooks        *
  * - - - - - - - - - - - - - - - */

  async componentDidMount() {
    const projectID = this.props.location.pathname.split("/")[2];
    await this.props.get('projects-api', projectID);
    console.log(this)
  }

  componentWillUnmount() {
    this.props.resetProfile();
  }
  /*- - - - - - - - - - - - - - - -
  *           Functions           *
  * - - - - - - - - - - - - - - - */

  toggleEdit = () => {
    this.setState(prevState => ({ edit: !prevState.edit }));
    this.props.updateControls('projectControls', this.props.projectProfile);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.update('projects-api', this.props.projectProfile.key, this.props.projectControls);
  }

  /*- - - - - - - - - - - - - - - -
  *             Render           *
  * - - - - - - - - - - - - - - - */

  render() {
    
    const projectProfile = [];
    for (let key in this.props.projectProfile) {
      projectProfile.push({
        id: key.charAt(0).toUpperCase() + key.substr(1),
        value: this.props.projectProfile[key]
      });
    }

    const formElementsArray = [];
    for (let key in this.props.projectControls) {
      formElementsArray.push({
        id: key,
        config: this.props.projectControls[key]
      });
    }

    const profile = (!this.props.loading) ? (
      <React.Fragment>
        <ProfileHeader 
          clicked={this.toggleEdit} 
          name={this.props.projectProfile.project_name}
          edit={this.state.edit}/>
        <div className="profile--info-area">
          {!this.state.edit ? (
            <ProfileDetails profile={projectProfile} />
          ) : (
            <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
              <Forms
                formElements={formElementsArray}
                clicked={this.onSubmit}
                controls={this.props.projectControls}
                controlName={'projectUpdateControls'}/>
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
  projectProfile: state.profile.profile,
  projectControls: state.formControl.projectControls,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectProfile);
