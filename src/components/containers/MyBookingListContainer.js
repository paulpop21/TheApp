import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
} from 'react-native';

import {
  BookingListItem,
  BookingListSectionHeader,
  Loading,
} from '../presentational';

import * as bookingActions from '../../actions/booking';

import { BOOKINGS_DETAILS_SCREEN } from '../../constants/navigation';
import { BOOKING_TYPE_UPCOMING } from '../../constants/booking';

class MyBookingListContainer extends Component {
  componentDidMount() {
    this.props.getAllBookings();
  }

  componentWillUnmount() {
    this.props.clearBookingsList();
  }

  _handleSelectBooking = (selectedBooking, bookingType) => {
    this.props.navigation.navigate(
      BOOKINGS_DETAILS_SCREEN,
      {
        selectedBooking,
        bookingType,
      },
    );
  };

  render() {
    const { booking: { bookingsList, loading } } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <SafeAreaView style={ styles.container }>
        <SectionList
          sections={ bookingsList }
          stickySectionHeadersEnabled
          renderItem={ ({ item, section }) => (
            <BookingListItem
              isEditable={ section.title === BOOKING_TYPE_UPCOMING }
              booking={ item }
              bookingType={ section.title }
              handleSelectBooking={ this._handleSelectBooking }
            />
          ) }
          renderSectionHeader={ ({ section: { title } }) => (
            <BookingListSectionHeader title={ title } />
          ) }
          keyExtractor={ item => item._id }
        />
      </SafeAreaView>
    );
  }
}

MyBookingListContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  booking: PropTypes.object.isRequired,
  getAllBookings: PropTypes.func.isRequired,
  clearBookingsList: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = ({ booking }) => ({
  booking,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...bookingActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyBookingListContainer);
