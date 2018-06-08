import { AsyncStorage } from 'react-native';

import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  userDetails: null,
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
      const userDetails = {
        ...action.payload.data,
        authToken: action.payload.headers['x-auth-token']
      };

      AsyncStorage.setItem('user', JSON.stringify(userDetails));

      return {
        ...state,
        userDetails,
        loading: false,
      };
    }

    case actionTypes.USER_SET_USER_DETAILS: {
      return {
        ...state,
        userDetails: action.payload.userDetails,
      }
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
