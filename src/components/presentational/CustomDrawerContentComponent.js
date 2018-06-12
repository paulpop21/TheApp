import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import { CustomIconImage } from './';

import * as userActions from '../../actions/user';

import { AUTH_STACK } from '../../constants/navigation';

const CustomDrawerContentComponent = (props) => (
  <SafeAreaView style={ styles.container } forceInset={{ horizontal: 'never' }}>
    <DrawerItems {...props} />
    <View style={ styles.bottomContainer }>
      <TouchableOpacity
        style={ styles.button }
        onPress={() => {
          props.logutUser();
          props.navigation.navigate(AUTH_STACK);
        }}
      >
        <View style={ styles.item }>
          <View
            style={ styles.icon }
          >
            <CustomIconImage
              source={require('../../assets/images/icons/exit.png')}
            />
          </View>
          <Text style={ styles.buttonText }>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
    opacity: 0.62,
  },
  button: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    fontWeight: 'bold',
    margin: 16,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...userActions,
  }, dispatch);
};

export default connect(undefined, mapDispatchToProps)(CustomDrawerContentComponent);
