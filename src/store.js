import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import defaultConfig from './constants/config';

const client = axios.create({
  baseURL: defaultConfig.apiUrl,
  responseType: 'json',
});

client.interceptors.request.use(async (config) => {
  const newConfig = config;
  const user = JSON.parse(await AsyncStorage.getItem('user')) || null;

  if (user && user.authToken) {
    newConfig.headers['x-auth-token'] = user.authToken;
  }

  return newConfig;
});

client.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 403) {
    const newConfig = error.config;

    return new Promise((resolve, reject) => {
      axios.post(`${defaultConfig.apiUrl}/users/refresh-token`, newConfig.headers['x-auth-token'], newConfig)
        .then(async (success) => {
          newConfig.headers['x-auth-token'] = success.headers['x-auth-token'];

          const user = JSON.parse(await AsyncStorage.getItem('user'));
          user.authToken = success.headers['x-auth-token'];
          await AsyncStorage.setItem('user', JSON.stringify(user));

          axios(newConfig).then(resolve, reject);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  return Promise.reject(error);
});

// eslint-disable-next-line
console.disableYellowBox = true;

export default createStore(
  reducers,
  applyMiddleware(
    axiosMiddleware(client, { returnRejectedPromiseOnError: true }),
    reduxThunk,
  ),
);
