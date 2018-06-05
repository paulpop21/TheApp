import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  Button
} from 'react-native';

import NavigationHeader from '../presentations/shared/NavigationHeader';

export default class ProfileScreen extends Component {
  static navigationOptions = () => {
    return {
      drawerLabel: 'My Profile',
      drawerIcon() {
        return (
          <Image
            source={require('../../assets/images/icons/profile.png')}
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
