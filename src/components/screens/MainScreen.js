import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';


export default class MainScreen extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <Text style={ styles.title }>Main screen for TheApp</Text>
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
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#C70039',
    marginBottom: 20,
  }
});
