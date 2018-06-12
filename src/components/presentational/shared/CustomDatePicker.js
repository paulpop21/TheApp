import React from 'react';
import PropTypes from 'prop-types';
import {
  DatePickerIOS,
} from 'react-native';

const CustomDatePicker = ({ handleChangeDate, selectedDate }) => (
  <DatePickerIOS
    date={ selectedDate || new Date() }
    onDateChange={ handleChangeDate }
  />
);

CustomDatePicker.propTypes = {
  handleChangeDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
};

export default CustomDatePicker;
