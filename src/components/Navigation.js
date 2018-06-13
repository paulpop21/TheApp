import React from 'react';
import { Dimensions } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import {
  AuthScreen,
  UserAuthScreen,
  MyBookingsScreen,
  BookingsScreen,
  BookingDetailsScreen,
  AuthLoadingScreen,
} from './screens';

import {
  CustomDrawerContentComponent,
  CustomIconImage,
} from './presentational';

import {
  AUTH_SCREEN,
  USER_AUTH_SCREEN,
  BOOKINGS_SCREEN,
  MY_BOOKINGS_SCREEN,
  BOOKINGS_DETAILS_SCREEN,
} from '../constants/navigation';

const { width } = Dimensions.get('window');

const AuthStack = createStackNavigator(
  {
    [AUTH_SCREEN]: AuthScreen,
    [USER_AUTH_SCREEN]: UserAuthScreen,
  },
  {
    initialRouteName: AUTH_SCREEN,
  },
);

const BookingStack = createStackNavigator(
  {
    [BOOKINGS_SCREEN]: BookingsScreen,
    [BOOKINGS_DETAILS_SCREEN]: BookingDetailsScreen,
  },
  {
    initialRouteName: BOOKINGS_SCREEN,
  },
);

const MyBookingStack = createStackNavigator(
  {
    [MY_BOOKINGS_SCREEN]: MyBookingsScreen,
    [BOOKINGS_DETAILS_SCREEN]: BookingDetailsScreen,
  },
  {
    initialRouteName: MY_BOOKINGS_SCREEN,
  },
);

const routeConfig = {
  [BOOKINGS_SCREEN]: {
    screen: BookingStack,
    navigationOptions: {
      drawerLabel: 'Bookings',
      drawerIcon() {
        return (
          <CustomIconImage
            source={ require('../assets/images/icons/traffic.png') }
          />
        );
      },
    },
  },
  [MY_BOOKINGS_SCREEN]: {
    screen: MyBookingStack,
    navigationOptions: {
      drawerLabel: 'My Bookings',
      drawerIcon() {
        return (
          <CustomIconImage
            source={ require('../assets/images/icons/booking.png') }
          />
        );
      },
    },

  },
};

const drawerNavigatorConfig = {
  initialRouteName: BOOKINGS_SCREEN,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#05a5d1',
  },
};

const AppStack = createDrawerNavigator(
  routeConfig,
  drawerNavigatorConfig,
);

const AuthSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default AuthSwitch;
