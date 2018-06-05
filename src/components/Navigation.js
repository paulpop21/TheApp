import React from 'react';
import { Dimensions } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import UserAuthScreen from './screens/UserAuthScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import BookingsScreen from './screens/BookingsScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import CustomDrawerContentComponent from './presentations/CustomDrawerContentComponent';

import { AUTH_SCREEN, USER_AUTH_SCREEN, PROFILE_SCREEN, BOOKINGS_SCREEN, MY_BOOKINGS_SCREEN } from '../constants/navigation';

const { width } = Dimensions.get('window');

const AuthStack = createStackNavigator(
  {
    [AUTH_SCREEN]: AuthScreen,
    [USER_AUTH_SCREEN]: UserAuthScreen,
  },
  {
    initialRouteName: AUTH_SCREEN,
  }
);

const routeConfig = {
  [MY_BOOKINGS_SCREEN]: {
    screen: MyBookingsScreen,
  },
  [BOOKINGS_SCREEN]: {
    screen: BookingsScreen,
  },
  [PROFILE_SCREEN]: {
    screen: ProfileScreen,
  },
};

const drawerNavigatorConfig = {
  initialRouteName: MY_BOOKINGS_SCREEN,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#C70039',
  },
};

const AppStack = createDrawerNavigator(
  routeConfig,
  drawerNavigatorConfig
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
