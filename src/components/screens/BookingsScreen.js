import React, { Component } from 'react';

import { BookingListContainer } from '../containers';
import { NavigationHeader } from '../presentational';

export default class BookingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Bookings',
      headerLeft: <NavigationHeader navigation={ navigation } />,
      headerBackTitle: 'Back',
    };
  };

  render() {
    return (
      <BookingListContainer { ...this.props } />
    );
  }
}
