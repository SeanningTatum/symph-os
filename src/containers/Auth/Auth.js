import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as authActions from 'store/actions/auth';

class Auth extends Component {
  responseGoogle = (response) => {
    this.props.onAuth(response);
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
          prompt="consent"
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
  onAuth: (response) => dispatch(authActions.onAuth(response)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
