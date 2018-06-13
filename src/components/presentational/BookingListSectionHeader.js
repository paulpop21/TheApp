import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const BookingListSectionHeader = ({ title }) => (
  <View
    style={ styles.container }
  >
    <Text style={ styles.text }>{ title }</Text>
  </View>
);

BookingListSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#001f25',
  },

  text: {
    fontWeight: 'bold',
    color: '#05a5d1',
  },
});

export default BookingListSectionHeader;
