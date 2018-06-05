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

export default class BookingsScreen extends Component {
  static navigationOptions = () => {
    return {
      drawerLabel: 'Bookings',
      drawerIcon() {
        return (
          <Image
            source={require('../../assets/images/icons/traffic.png')}
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
        <Text>Bookings Screen</Text>
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
