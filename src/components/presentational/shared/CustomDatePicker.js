import React from 'react'
import {
  DatePickerIOS,
} from 'react-native'

const CustomDatePicker = ({ selectedDate, handleChangeDate }) => (
  <DatePickerIOS
    date={ selectedDate || new Date() }
    onDateChange={ handleChangeDate }
  />
);

export default CustomDatePicker;
