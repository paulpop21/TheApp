import React, { Component } from 'react';

import BookingListContainer from '../containers/BookingListContainer';
import NavigationHeader from '../presentations/shared/NavigationHeader';

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
