import React from 'react';
import PropTypes from 'prop-types';

import { AuthLoadingContainer } from '../containers';

const AuthLoadingScreen = props => (
  <AuthLoadingContainer navigation={ props.navigation } />
);

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AuthLoadingScreen;
