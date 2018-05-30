import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';

import AuthForm from '../presentations/AuthForm';
import { LOGIN_SCREEN } from '../../constants/navigation';

export default class UserAuthContainer extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  _handleSubmit = async ({ email, password }) => {
    const { navigation: { state: { params } } } = this.props;

    try {
      if (params.screenName === LOGIN_SCREEN) {
        await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      } else {
        await firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
        }

      await AsyncStorage.setItem('userEmail', email);

      this.props.navigation.navigate('App');
    } catch (error) {
      console.log(error);
    }
  };

  _handleInputFocus = async () => {
    this.myRef.current.focus();
  };

  render() {
    const { navigation: { state: { params } } } = this.props;

    return (
      <AuthForm
        title={ params.screenName === LOGIN_SCREEN ? 'Login to TheApp' : 'SignUp to TheApp' }
        buttonTitle={ params.screenName === LOGIN_SCREEN ? 'Login' : 'SignUp' }
        onSubmit={ this._handleSubmit }
        passwordRef={ this.myRef }
        handleInputFocus={ this._handleInputFocus }
      />
    );
  }
}
