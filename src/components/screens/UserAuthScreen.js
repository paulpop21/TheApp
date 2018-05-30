import React from 'react';

import UserAuthContainer from '../containers/UserAuthContainer';

const UserAuthScreen = (props) => {
  return (
    <UserAuthContainer navigation={ props.navigation } />
  );
};

export default UserAuthScreen;