import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as authActions from 'store/actions/auth';

export class Auth extends Component {
  responseGoogle = (response) => {
<<<<<<< HEAD
    fetch('https://symph-operating-system-210700.appspot.com/_ah/api/credentials/v1/get')
=======
    fetch('http://symph-operating-system-210700.appspot.com/_ah/api/credentials/v1/get')
>>>>>>> change-css
      .then(response => response.json())
      .then(whitelist => {
        console.log(whitelist);
        this.props.onAuth(response, whitelist);
      })
  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated && <Redirect to="/contacts" />}
        <GoogleLogin 
          clientId="1007949685199-4i403shms56f5dts6qn1oks3p1fdaemj.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle} 
          onFailure={this.responseGoogle}
          accessType="offline"
          prompt="consent" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
  onAuth: (response, whitelist) => dispatch(authActions.onAuth(response, whitelist)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
