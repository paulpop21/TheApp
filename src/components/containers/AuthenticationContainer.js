import React, { Component } from 'react';

import Authentication from '../presentations/Authentication';

import { USER_AUTH_SCREEN, LOGIN_SCREEN, REGISTER_SCREEN } from '../../constants/navigation';

export default class AuthContainer extends Component {
  _navigateToLogin = () => {
    this.props.navigation.navigate(USER_AUTH_SCREEN, { screenName: LOGIN_SCREEN, screenTitle: 'Login' });
  };

  _navigateToRegister = () => {
    this.props.navigation.navigate(USER_AUTH_SCREEN, { screenName: REGISTER_SCREEN, screenTitle: 'SignUp' });
  };

  render() {
    return (
      <Authentication
        handleGoToLogin={ this._navigateToLogin }
        handleGoToRegister={ this._navigateToRegister }
      />
    );
  }
}
