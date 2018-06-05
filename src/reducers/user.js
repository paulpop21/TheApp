import { AsyncStorage } from 'react-native';

import * as actionTypes from '../constants/actionTypes';

const getUserFromStorage = async () => {
  const user = await AsyncStorage.getItem('user');

  if (user)
    return JSON.parse(user);

  return null;
};

const defaultState = {
  user: getUserFromStorage(),
  loading: false,
};

export default function userReducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
    case actionTypes.USER_REGISTER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.USER_LOGIN_SUCCESS:
    case actionTypes.USER_REGISTER_SUCCESS: {
      const user = {
        ...action.payload.data,
        authToken: action.payload.headers['x-auth-token']
      };

      AsyncStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        user,
        loading: false,
      };
    }

    case actionTypes.USER_LOGIN_ERROR:
    case actionTypes.USER_REGISTER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case actionTypes.USER_LOGOUT: {
      AsyncStorage.clear();

      return {
        ...defaultState
      }
    }

    default: {
      return state;
    }
  }
}
