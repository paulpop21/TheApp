import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyProfileContainer } from '../containers';
import { NavigationHeader } from '../presentational';

class MyProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Profile',
    headerLeft: <NavigationHeader navigation={ navigation } />,
  });

  render() {
    return (
      <MyProfileContainer { ...this.props } />
    );
  }
}

MyProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyProfileScreen;
