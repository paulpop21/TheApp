import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BookingListContainer } from '../containers';
import { NavigationHeader } from '../presentational';

class BookingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Bookings',
    headerLeft: <NavigationHeader navigation={ navigation } />,
    headerBackTitle: 'Back',
  });

  render() {
    return (
      <BookingListContainer { ...this.props } />
    );
  }
}

BookingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BookingsScreen;
