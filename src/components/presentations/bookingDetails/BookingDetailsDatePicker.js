import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const BookingDetailsDatePicker = ({ title, dateType, date, handleOpenDatePicker }) => (
  <View
    style={ styles.container }
  >
    <Text>{ title }</Text>
    <TouchableOpacity
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
  }
});

export default BookingDetailsDatePicker;
