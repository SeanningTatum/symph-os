import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import * as authActions from 'store/actions/auth';

export class Auth extends Component {
  static propTypes = {

  }

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
          onFailure={this.responseGoogle}/>
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
