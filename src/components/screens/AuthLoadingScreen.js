import React from 'react';

import AuthLoadingContainer from '../containers/AuthLoadingContainer';

const AuthLoadingScreen = (props) => {
  return (
    <AuthLoadingContainer navigation={ props.navigation } />
  );
};

export default AuthLoadingScreen;
