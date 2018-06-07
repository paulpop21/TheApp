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
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'My Bookings',
      headerLeft: <NavigationHeader navigation={ navigation } />,
      headerBackTitle: 'Back',
    };
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
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
