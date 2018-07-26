import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import * as profileActions from 'store/actions/profiles';

export class ContactProfile extends Component {

  componentDidMount() {
    const contactID = this.props.location.pathname.split("/")[2];
    this.props.get('contacts-api', contactID)
  }

  render() {
    return (
      <div>
        <h2>contact profile</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contactProfile: {}
})

const mapDispatchToProps = dispatch => ({
  get: (api, id) => dispatch(profileActions.get(api, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);
