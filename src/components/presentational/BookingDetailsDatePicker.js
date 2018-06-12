import React from 'react'
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const BookingDetailsDatePicker = ({ title, disabled, dateType, date, handleOpenDatePicker }) => (
  <View style={ styles.container }>
    <Text>{ title }</Text>
    <TouchableOpacity
      disabled={ disabled }
      onPress={() => handleOpenDatePicker(dateType) }
    >
      <Text
        ellipsizeMode='middle'
        numberOfLines={ 2 }
        style={ styles.text }
      >
        { (date && date.toLocaleString('en-US')) || 'Choose Date' }
      </Text>
    </TouchableOpacity>
  </View>
);

BookingDetailsDatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleOpenDatePicker: PropTypes.func.isRequired,
  date: PropTypes.object,
  dateType: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#05a5d1',
  }
});

export default BookingDetailsDatePicker;
