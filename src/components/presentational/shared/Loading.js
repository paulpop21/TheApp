import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
} from 'react-native';

const Loading = () => (
  <React.Fragment>
    <ActivityIndicator />
    <StatusBar barStyle='default' />
  </React.Fragment>
);

export default Loading;
