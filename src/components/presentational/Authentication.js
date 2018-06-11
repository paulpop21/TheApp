import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import { CustomButton } from './';

const Auth = ({ handleGoToLogin, handleGoToRegister }) => {
  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.title }>Welcome to TheApp</Text>
      <CustomButton
        buttonText='SignUp'
        onPressHandle={ handleGoToRegister }
      />
      <CustomButton
        buttonText='LogIn'
        onPressHandle={ handleGoToLogin }
      />
    </SafeAreaView>
  );
};

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
    color: '#05a5d1',
    marginBottom: 20,
  }
});

export default Auth;
