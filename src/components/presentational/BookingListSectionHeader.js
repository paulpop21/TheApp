import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const BookingListSectionHeader = ({ title }) => {
  return (
    <View
      style={ styles.container }
    >
      <Text style={ styles.text }>{ title }</Text>
    </View>
  );
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
