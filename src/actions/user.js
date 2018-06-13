import {
  USER_LOGIN_REQUEST,
  USER_REGISTER_REQUEST,
  USER_LOGOUT,
  USER_SET_USER_DETAILS,
} from '../constants/actionTypes';

export const loginUser = credentials => ({
  type: USER_LOGIN_REQUEST,
  payload: {
    request: {
      method: 'post',
      url: '/users/authenticate',
      data: credentials,
    },
  },
});

export const registerUser = credentials => ({
  type: USER_REGISTER_REQUEST,
  payload: {
    request: {
      method: 'post',
      url: '/users/register',
      data: credentials,
    },
  },
});

export const logutUser = () => ({
  type: USER_LOGOUT,
});

export const setUserDetails = userDetails => ({
  type: USER_SET_USER_DETAILS,
  payload: {
    userDetails,
  },
});
