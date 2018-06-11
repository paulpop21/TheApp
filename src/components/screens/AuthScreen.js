import React from 'react';

import { AuthenticationContainer } from '../containers';

export default class AuthScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'TheApp',
    headerBackTitle: 'Back'
  });

  render() {
    return (
      <AuthenticationContainer navigation={ this.props.navigation } />
    );
  }
}
