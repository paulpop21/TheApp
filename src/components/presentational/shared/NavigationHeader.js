import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HeaderComponent = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={ styles.headerButton }
      onPress={() => {
        navigation.openDrawer();
      }}
    >
      <Image
        source={ require('../../../assets/images/icons/menu-icon.png') }
        style={ styles.headerIcon }
      />
    </TouchableOpacity>
  );
};

HeaderComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  headerButton: {
    marginLeft: 10,
  },
  headerIcon: {
    height: 32,
    width: 32,
  },
});

export default HeaderComponent;
