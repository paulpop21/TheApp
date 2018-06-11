import React, { Component } from 'react';

import { BookingDetailsContainer } from '../containers';

export default class BookingDetailsScreen extends Component {
  static navigationOptions = () => ({
    title: 'Booking Details',
  });

  render() {
    return (
      <BookingDetailsContainer { ...this.props } />
    );
  }
}
