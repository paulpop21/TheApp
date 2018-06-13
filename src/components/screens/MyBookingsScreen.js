import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyBookingListContainer } from '../containers';
import { NavigationHeader } from '../presentational';

class MyBookingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'My Bookings',
    headerLeft: <NavigationHeader navigation={ navigation } />,
    headerBackTitle: 'Back',
  });

  render() {
    return (
      <MyBookingListContainer { ...this.props } />
    );
  }
}

MyBookingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyBookingsScreen;
