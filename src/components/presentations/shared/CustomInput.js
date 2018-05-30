import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';


class CustomInput extends Component {
  render() {
    const {
      input: {
        onChange,
        ...restInput
      },
      customInputStyle = {},
      meta: {
        touched,
        error,
        warning
      },
      refName = null,
      ...restProps
    } = this.props;

    return (
      <View
        style={{
          alignItems: 'flex-start'
        }}
      >
        <TextInput
          style={ [ styles.input, customInputStyle ] }
          onChangeText={ onChange }
          ref={ refName }
          { ...restInput }
          { ...restProps }
        />
        { touched && ((error && <Text style={{ color: 'red', height: 20 }}>{ error }</Text>) ||
          (warning && <Text style={{ color: 'orange' }}>{ warning }</Text>)) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#C70039',
    width: 200,
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default CustomInput;
