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
      customTextStyle = {},
      meta: {
        touched,
        error,
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
        { touched && (error &&
          <Text ellipsizeMode='head' numberOfLines={ 2 } style={[ styles.text, customTextStyle ]}>{ error }</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#001f25',
    width: 200,
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    color: 'red',
    height: 20,
    width: 200,
  }
});

export default CustomInput;
