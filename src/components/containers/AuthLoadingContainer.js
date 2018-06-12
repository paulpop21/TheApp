import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';

import { Loading } from '../presentational';

import * as userActions from "../../actions/user";

import { APP_STACK , AUTH_STACK } from '../../constants/navigation';

class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);

    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      this.props.setUserDetails(user);
    }

    this.props.navigation.navigate(user ? APP_STACK : AUTH_STACK);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Loading />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...userActions,
  }, dispatch);
};

export default connect(undefined, mapDispatchToProps)(AuthLoadingContainer);
