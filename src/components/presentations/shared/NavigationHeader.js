import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const HeaderComponent = ({ navigation }) => {
  return (
    <View
      style={ styles.headerContainer }
    >
      <TouchableHighlight
        style={ styles.headerButton }
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Image
          source={require('../../../assets/images/icons/menu-icon.png')}
          style={ styles.headerIcon }
        />
      </TouchableHighlight>
    </View>
  );
};

HeaderComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 10,
  },
  headerIcon: {
    height: 32,
    width: 32,
  },
});

export default HeaderComponent;
