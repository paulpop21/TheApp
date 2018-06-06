import React, { Component } from 'react';
import {
  Platform,
  DatePickerAndroid,
  TimePickerAndroid
} from 'react-native';

import BookingDetails from '../presentations/bookingDetails/BookingDetails';

export default class BookingDetailsContainer extends Component {
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

  _handleSubmit = () => {
    console.log('test');

    if (this.state.startDate - this.state.endDate > 0) {
      alert('End date should grater then Start Date')
    }


    // TODO: Add call for create booking
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
