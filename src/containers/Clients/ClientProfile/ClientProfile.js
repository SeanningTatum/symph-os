import React, { Component } from 'react'
import './ClientProfile.scss';

export class ClientProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content--profile__name">
          <h2>Sean Urgel</h2>
        </div>
        <div className="content--profile__details">
          <div className="left-side">
            <h2>Image Area</h2>
          </div>
          <div className="right-side">
            <h2>Details</h2>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ClientProfile;
