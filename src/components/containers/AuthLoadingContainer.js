import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);

    this._isLoggedInAsync();
  }

  _isLoggedInAsync = async () => {
    const userToken = await AsyncStorage.getItem('userEmail');
    console.log(userToken);

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
