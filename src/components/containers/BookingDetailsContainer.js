import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  AlertIOS,
  Platform,
  DatePickerAndroid,
  TimePickerAndroid
} from 'react-native';

import { BookingDetails } from '../presentational';

import * as bookingActions from '../../actions/booking';

import { BOOKING_TYPE_NEW, BOOKING_TYPE_UPCOMING } from '../../constants/booking'
import { MY_BOOKINGS_SCREEN } from '../../constants/navigation';
import { calculatePrice } from '../../utils';

class BookingDetailsContainer extends Component {
  constructor(props) {
    super(props);
    const isExistingBooking = props.navigation.state.params.bookingType === BOOKING_TYPE_UPCOMING;

    this.state = {
      startDate: isExistingBooking ? new Date(props.navigation.state.params.selectedBooking.startDate) : null,
      endDate: isExistingBooking ? new Date(props.navigation.state.params.selectedBooking.endDate) : null,
      activeDatePicker: null,
      isMapDisplayed: false,
    };
  }

  _handleChangeDate = (date) => {
    this.setState({
      [this.state.activeDatePicker]: date
    });
  };

  _handleToggleMap = () => {
    this.setState((prevState) => ({
      isMapDisplayed: !prevState.isMapDisplayed
    }));
  };

  _handleOpenDatePicker = (activeDatePicker) => {
    this.setState({
      activeDatePicker
    }, async () => {
      if (Platform.OS === 'android' && this.state.activeDatePicker) {
        const { activeDatePicker, startDate, endDate } = this.state;
        const currentDate = (activeDatePicker === 'startDate' ? startDate : endDate) || new Date();

        try {
          const { action, year, month, day } = await DatePickerAndroid.open({
            date: currentDate
          });

          if (action !== DatePickerAndroid.dismissedAction) {
            const {action, hour, minute} = await TimePickerAndroid.open({
              hour: currentDate.getHours(),
              minute: currentDate.getMinutes(),
              is24Hour: false,
            });

            if (action !== TimePickerAndroid.dismissedAction) {
              this.setState({
                [activeDatePicker]: new Date(year, month, day, hour, minute),
                activeDatePicker: null,
              });
            }
          }
        } catch ({ message }) {
          console.warn('Cannot open date picker', message);
        }
      }
    });
  };

  _handleSubmit = async () => {
    try {
      const { navigation } = this.props;
      const { startDate, endDate } = this.state;

      if (startDate - endDate > 0 || startDate - Date.now() < 0) {
        Platform.OS === 'ios' ? AlertIOS.alert(`Start Date can't be in the past and End date must be grater then Start Date`) :
          alert(`Start Date can't be in the past and End date must be grater then Start Date`);
      } else {
        if (navigation.state.params.bookingType === BOOKING_TYPE_NEW) {
          await this.props.createBooking({
            startDate,
            endDate,
            car: navigation.state.params.selectedBooking.car._id
          });
        } else {
          await this.props.editBooking(
            navigation.state.params.selectedBooking._id,
            {
              startDate,
              endDate,
              car: navigation.state.params.selectedBooking.car._id
            }
          );
        }

        Platform.OS === 'ios' ? AlertIOS.alert('Your booking has been successfully created') :
          alert('Your booking has been successfully created');

        await this.props.getAllBookings();

        navigation.navigate(MY_BOOKINGS_SCREEN);
      }
    } catch (e) {
      Platform.OS === 'ios' ? AlertIOS.alert('Something went wrong. Please try again.') :
        alert('Something went wrong. Please try again.');
    }
  };

  render() {
    const { navigation: { state: { params } } } = this.props;
    const isEditable = [BOOKING_TYPE_NEW ,BOOKING_TYPE_UPCOMING].includes(params.bookingType);
    const bookingPrice = calculatePrice(this.state.startDate, this.state.endDate, params.selectedBooking.car.price);

    return (
      <BookingDetails
        handleChangeDate={ this._handleChangeDate }
        handleOpenDatePicker={ this._handleOpenDatePicker }
        handleSubmit={ this._handleSubmit }
        handleToggleMap={ this._handleToggleMap }
        dateItem={ this.state }
        isEditable={ isEditable }
        isMapDisplayed={ this.state.isMapDisplayed }
        isNewBooking={ params.bookingType === BOOKING_TYPE_NEW }
        bookingItem={{
          bookingPrice,
          ...params.selectedBooking,
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...bookingActions,
  }, dispatch);
};

export default connect(undefined, mapDispatchToProps)(BookingDetailsContainer);
