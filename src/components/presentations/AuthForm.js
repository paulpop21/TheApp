import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
} from 'react-native';

import CustomInput from './shared/CustomInput';
import CustomButton from './shared/CustomButton';
import Loading from './shared/Loading';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const AuthForm = ({ title, buttonTitle, handleSubmit, passwordRef, handleInputFocus, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView style={ styles.container } behavior="padding" enabled>
      <View>
        <Text style={ styles.title }>{ title }</Text>
      </View>
      <Field
        name='email'
        component={ CustomInput }
        placeholder='Enter your username'
        keyboardType='email-address'
        returnKeyType='next'
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        onSubmitEditing={ handleInputFocus }
      />
      <Field
        name='password'
        component={ CustomInput }
        placeholder='Enter your password'
        keyboardType='default'
        secureTextEntry
        returnKeyType='done'
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        onSubmitEditing={ handleSubmit }
        refName={ passwordRef }
        withRef={ true }
      />
      <CustomButton
        buttonText={ buttonTitle }
        onPressHandle={ handleSubmit }
        customButtonStyle={{ width: 200 }}
      />
    </KeyboardAvoidingView>
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

export default reduxForm({
  form: 'auth',
  validate,
})(AuthForm);
