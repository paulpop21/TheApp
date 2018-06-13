import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
} from 'react-native';

const CustomIconImage = ({ source, customStyles }) => (
  <Image
    source={ source }
    style={ [styles.icon, customStyles] }
  />
);

CustomIconImage.propTypes = {
  source: PropTypes.number.isRequired,
  customStyles: PropTypes.number,
};

CustomIconImage.defaultProps = {
  customStyles: 0,
};

const styles = StyleSheet.create({
  icon: {
    height: 26,
    width: 26,
  },
});

export default CustomIconImage;
