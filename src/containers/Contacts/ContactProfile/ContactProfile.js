import React, { Component } from 'react';
import "./ContactProfile.scss";

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';

export class ContactProfile extends Component {

  async componentDidMount() {
    const contactID = this.props.location.pathname.split("/")[2];
    await this.props.get('contacts-api', contactID);
    console.log(this.props.contactProfile);
  }

  render() {
    const contactProfile = [];
    for (let key in this.props.contactProfile) {
      contactProfile.push({ 
        id: key.charAt(0).toUpperCase() + key.substr(1), 
        value: this.props.contactProfile[key]
      });
    }

    return (
      <React.Fragment>
        <div className="profile__header">
          <h2>{this.props.contactProfile.name}</h2>
        </div>

        <div className="profile--info-area">
          {contactProfile.map(profile => (
            <div key={profile.id} className="profile--info-area__info">
              <h3 className="info__name">{profile.id}</h3>
              <p className="info__value">{profile.value}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  contactProfile: state.profile.profile
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);
