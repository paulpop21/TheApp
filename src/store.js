import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import defaultConfig from "./constants/config";

const client = axios.create({
  baseURL: defaultConfig.apiUrl,
  responseType: 'json'
});

client.interceptors.request.use(async (config) => {
  const user = JSON.parse(await AsyncStorage.getItem('user'))|| null;

  if (user && user.authToken) {
    config.headers['x-auth-token'] = user.authToken;
  }

  return config;
});

client.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 403) {
    return new Promise(function (resolve, reject) {
      axios.post(defaultConfig.apiUrl + '/users/refresh-token', error.config.headers['x-auth-token'], error.config)
        .then(async (success) => {
          error.config.headers['x-auth-token'] = success.headers['x-auth-token'];

          const user = JSON.parse(await AsyncStorage.getItem('user'));
          user.authToken = success.headers['x-auth-token'];
          await AsyncStorage.setItem('user', JSON.stringify(user));

          axios(error.config).then(resolve, reject);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  return Promise.reject(error);
});

console.disableYellowBox = true;

export default createStore(reducers, applyMiddleware(axiosMiddleware(client, { returnRejectedPromiseOnError: true }), reduxThunk));
