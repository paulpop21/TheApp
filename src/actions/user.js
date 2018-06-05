export function loginUser (credentials) {
  return {
    type: 'user/LOGIN',
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
    type: 'user/REGISTER',
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
    type: 'user/LOGOUT',
  };
}
