import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const CustomButton = ({ buttonText, onPressHandle, customButtonStyle, customTextStyle, ...props }) => {
  return (
    <TouchableOpacity
      style={ [ styles.button, customButtonStyle ] }
      activeOpacity={ 0.7 }
      onPress={ onPressHandle }
      { ...props }
    >
      <Text style={ [ styles.buttonText, customTextStyle ] }>{ buttonText }</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPressHandle: PropTypes.func.isRequired,
  customButtonStyle: PropTypes.object,
  customTextStyle: PropTypes.object,
};

CustomButton.defaultProps = {
  customButtonStyle: {},
  customTextStyle: {},
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#001f25',
    width: 180,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#05a5d1',
    fontWeight: 'bold',
  },
});

export default CustomButton;
