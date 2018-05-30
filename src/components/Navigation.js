import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import UserAuthScreen from './screens/UserAuthScreen';
import MainScreen from './screens/MainScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

import { AUTH_SCREEN, USER_AUTH_SCREEN, MAIN_SCREEN } from '../constants/navigation';

const AuthStack = createStackNavigator(
  {
    [AUTH_SCREEN]: AuthScreen,
    [USER_AUTH_SCREEN]: UserAuthScreen,
  },
  {
    initialRouteName: AUTH_SCREEN,
  }
);

const AppStack = createStackNavigator(
  {
    [MAIN_SCREEN]: MainScreen,
  },
  {
    initialRouteName: MAIN_SCREEN,
  }
);

const AuthSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default AuthSwitch;
