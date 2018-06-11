import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  SectionList, Text, View,
} from 'react-native';

import BookingListItem from '../presentations/BookingListItem';
import BookingListSectionHeader from '../presentations/BookingListSectionHeader';
import Loading from '../presentations/shared/Loading';

import * as bookingActions from '../../actions/booking';

import { BOOKINGS_DETAILS_SCREEN } from '../../constants/navigation';
import { BOOKING_TYPE_UPCOMING } from "../../constants/booking";

class MyBookingListContainer extends Component {
  componentDidMount() {
    this.props.getAllBookings();
  }


  _handleSelectBooking = (selectedBooking, bookingType) => {
    this.props.navigation.navigate(
      BOOKINGS_DETAILS_SCREEN,
      {
        selectedBooking,
        bookingType,
      });
  };

  render() {
    const { booking: { bookingsList, loading } } = this.props;

    if (loading) {
      return <Loading />
    }

    return (
      <SafeAreaView style={ styles.container }>
        <SectionList
          sections={ bookingsList }
          renderItem={({ item, index, section }) => (
            <BookingListItem
              isEditable={ section.title === BOOKING_TYPE_UPCOMING }
              booking={ item }
              bookingType={ section.title }
              handleSelectBooking={ this._handleSelectBooking }
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
           <BookingListSectionHeader title={ title } />
          )}
          keyExtractor={ item => item._id }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = ({ booking }) => {
  return {
    booking
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...bookingActions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBookingListContainer);
