import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navigation from './Navigation';

import store from '../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation />
      </Provider>
    );
  }
}
