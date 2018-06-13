import React from 'react';
import PropTypes from 'prop-types';

import { AuthenticationContainer } from '../containers';

class AuthScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'TheApp',
    headerBackTitle: 'Back',
  });

  render() {
    return (
      <AuthenticationContainer navigation={ this.props.navigation } />
    );
  }
}

AuthScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AuthScreen;
