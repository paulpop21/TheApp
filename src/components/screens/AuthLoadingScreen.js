import React from 'react';

import { AuthLoadingContainer } from '../containers';

const AuthLoadingScreen = (props) => {
  return (
    <AuthLoadingContainer navigation={ props.navigation } />
  );
};

export default AuthLoadingScreen;
