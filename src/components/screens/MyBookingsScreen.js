import React, { Component } from 'react';

import { MyBookingListContainer } from '../containers';
import { NavigationHeader } from '../presentational';

export default class MyBookingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'My Bookings',
      headerLeft: <NavigationHeader navigation={ navigation } />,
      headerBackTitle: 'Back',
    };
  };

  render() {
    return (
      <MyBookingListContainer { ...this.props } />
    );
  }
}
