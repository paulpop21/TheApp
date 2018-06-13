import React from 'react';
import PropTypes from 'prop-types';

import { UserAuthContainer } from '../containers';

class UserAuthScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.screenTitle}`,
  });

  render() {
    return (
      <UserAuthContainer navigation={ this.props.navigation } />
    );
  }
}

UserAuthScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default UserAuthScreen;
