import React, { Component } from 'react';

import MyBookingListContainer from '../containers/MyBookingListContainer';
import NavigationHeader from '../presentations/shared/NavigationHeader';

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
