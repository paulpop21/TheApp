import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  ScrollView
} from 'react-native';

import NavigationHeader from '../presentations/shared/NavigationHeader';

export default class MyBookingsScreen extends Component {
  static navigationOptions = () => {
    return {
      drawerLabel: 'My Bookings',
      drawerIcon() {
        return (
          <Image
            source={require('../../assets/images/icons/booking.png')}
            style={{
              height: 26,
              width: 26,
            }}
          />
        );
      },
    };
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <NavigationHeader { ...this.props } />
        <Text>Cars Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
