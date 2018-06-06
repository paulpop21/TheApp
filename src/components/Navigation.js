import React from 'react';
import { Dimensions, Image } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import UserAuthScreen from './screens/UserAuthScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import BookingsScreen from './screens/BookingsScreen';
import BookingDetailsScreen from './screens/BookingDetailsScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import CustomDrawerContentComponent from './presentations/CustomDrawerContentComponent';

import {
  AUTH_SCREEN,
  USER_AUTH_SCREEN,
  PROFILE_SCREEN,
  BOOKINGS_SCREEN,
  MY_BOOKINGS_SCREEN,
  BOOKINGS_DETAILS_SCREEN
} from '../constants/navigation';

const { width, height } = Dimensions.get('window');

const AuthStack = createStackNavigator(
  {
    [AUTH_SCREEN]: AuthScreen,
    [USER_AUTH_SCREEN]: UserAuthScreen,
  },
  {
    initialRouteName: AUTH_SCREEN,
  }
);

const BookingStack = createStackNavigator(
  {
    [BOOKINGS_SCREEN]: BookingsScreen,
    [BOOKINGS_DETAILS_SCREEN]: BookingDetailsScreen,
  },
  {
    initialRouteName: BOOKINGS_SCREEN,
  }
);

const MyBookingStack = createStackNavigator(
  {
    [MY_BOOKINGS_SCREEN]: MyBookingsScreen,
    [BOOKINGS_DETAILS_SCREEN]: BookingDetailsScreen,
  },
  {
    initialRouteName: MY_BOOKINGS_SCREEN,
  }
);

const routeConfig = {
  [BOOKINGS_SCREEN]: {
    screen: BookingStack,
    navigationOptions: {
      drawerLabel: 'Bookings',
      drawerIcon() {
        return (
          <Image
            source={require('../assets/images/icons/traffic.png')}
            style={{
              height: 26,
              width: 26,
            }}
          />
        );
      },
    }
  },
  [MY_BOOKINGS_SCREEN]: {
    screen: MyBookingStack,
    navigationOptions: {
      drawerLabel: 'My Bookings',
      drawerIcon() {
        return (
          <Image
            source={require('../assets/images/icons/booking.png')}
            style={{
              height: 26,
              width: 26,
            }}
          />
        );
      },
    }

  },
  [PROFILE_SCREEN]: {
    screen: ProfileScreen,
  },
};

const drawerNavigatorConfig = {
  initialRouteName: BOOKINGS_SCREEN,
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
