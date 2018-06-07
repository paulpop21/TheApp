import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Loading from '../presentations/shared/Loading';

import { APP_STACK , AUTH_STACK } from '../../constants/navigation';

class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);

    this._isLoggedIn();
  }

  _isLoggedIn = () => {
    this.props.navigation.navigate(this.props.user ? APP_STACK : AUTH_STACK);
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

const mapStateToProps = ({ user: { user } }) => {
  return {
    user
  }
};

export default connect(mapStateToProps)(AuthLoadingContainer);
