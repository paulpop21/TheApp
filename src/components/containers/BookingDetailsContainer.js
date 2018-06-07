import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  AlertIOS,
  Platform,
  DatePickerAndroid,
  TimePickerAndroid
} from 'react-native';

import BookingDetails from '../presentations/bookingDetails/BookingDetails';

import * as bookingActions from '../../actions/booking';

class BookingDetailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      activeDatePicker: null,
    };
  }

  _handleChangeDate = (date) => {
    this.setState({
      [this.state.activeDatePicker]: date
    });
  };

  _handleOpenDatePicker = (activeDatePicker) => {
    this.setState({
      activeDatePicker
    }, async () => {
      if (this.state.activeDatePicker && Platform.OS === 'android') {
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

      if (startDate - endDate > 0) {
        Platform.OS === 'ios' ? AlertIOS.alert('End date should grater then Start Date') :
          alert('End date should grater then Start Date');
      } else {
        await this.props.createBooking({
          startDate,
          endDate,
          car: navigation.state.params.selectedCar._id
        });

        Platform.OS === 'ios' ? AlertIOS.alert('Your booking has been successfully created') :
          alert('Your booking has been successfully created');

        navigation.goBack();
      }
    } catch (e) {
      Platform.OS === 'ios' ? AlertIOS.alert('Something went wrong. Please try again.') :
        alert('Something went wrong. Please try again.');
    }
  };

  render() {
    const { navigation: { state: { params } } } = this.props;

    return (
      <BookingDetails
        handleChangeDate={ this._handleChangeDate }
        handleOpenDatePicker={ this._handleOpenDatePicker }
        handleSubmit={ this._handleSubmit }
        dateItem={ this.state }
        carItem={ params.selectedCar }
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
