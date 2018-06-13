import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import { CustomButton } from './';

const Authentication = ({ handleGoToLogin, handleGoToRegister }) => (
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

Authentication.propTypes = {
  handleGoToLogin: PropTypes.func.isRequired,
  handleGoToRegister: PropTypes.func.isRequired,
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
  },
});

export default Authentication;
