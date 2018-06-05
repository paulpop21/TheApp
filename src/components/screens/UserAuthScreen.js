import React from 'react';

import UserAuthContainer from '../containers/UserAuthContainer';

export default class UserAuthScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${ navigation.state.params.screenTitle }`
  });

  render() {
    return (
      <UserAuthContainer navigation={ this.props.navigation } />
    );
  }
}
