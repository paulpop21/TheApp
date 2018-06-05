import { USER_LOGIN_REQUEST, USER_REGISTER_REQUEST, USER_LOGOUT } from '../constants/actionTypes';

export function loginUser (credentials) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: {
      request: {
        method: 'post',
        url: '/users/authenticate',
        data: credentials
      }
    }
  };
}

export function registerUser (credentials) {
  return {
    type: USER_REGISTER_REQUEST,
    payload: {
      request: {
        method: 'post',
        url: '/users/register',
        data: credentials
      }
    }
  };
}

export function logutUser () {
  return {
    type: USER_LOGOUT,
  };
}
