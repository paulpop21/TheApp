import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const BookingDetailsDatePicker = ({
  title,
  disabled,
  dateType,
  date,
  handleOpenDatePicker,
}) => (
  <View style={ styles.container }>
    <Text>{ title }</Text>
    <TouchableOpacity
      disabled={ disabled }
      onPress={ () => handleOpenDatePicker(dateType) }
    >
      <Text
        ellipsizeMode='middle'
        numberOfLines={ 2 }
        style={ styles.text }
      >
        { (date && moment(date).format('D/M/YY hh:mm a')) || 'Choose Date' }
      </Text>
    </TouchableOpacity>
  </View>
);

BookingDetailsDatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleOpenDatePicker: PropTypes.func.isRequired,
  dateType: PropTypes.string.isRequired,
  date: PropTypes.object,
};

BookingDetailsDatePicker.defaultProps = {
  date: null,
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
  },
});

export default BookingDetailsDatePicker;
