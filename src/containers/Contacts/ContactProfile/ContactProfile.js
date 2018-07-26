import React, { Component } from 'react';

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
    return (
      <div>
        <h2>{this.props.contactProfile.name}</h2>
      </div>
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
