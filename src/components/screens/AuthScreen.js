import React from 'react';

import AuthenticationContainer from '../containers/AuthenticationContainer';

const AuthScreen = (props) => {
  return (
    <AuthenticationContainer navigation={ props.navigation } />
  );
};

export default AuthScreen;
