import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BookingDetailsContainer } from '../containers';

class BookingDetailsScreen extends Component {
  static navigationOptions = () => ({
    title: 'Booking Details',
  });

  render() {
    return (
      <BookingDetailsContainer { ...this.props } />
    );
  }
}

BookingDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BookingDetailsScreen;
