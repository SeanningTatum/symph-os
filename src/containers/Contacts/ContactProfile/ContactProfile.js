import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux';
import * as tableActions from 'store/actions/tables';

export class ContactProfile extends Component {

  componentDidMount() {
    const contactkey = this.props.location.pathname.split("/")[2];
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

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);
