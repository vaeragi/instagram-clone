import React from 'react';
import {TextInput, ViewStyle, TextStyle, KeyboardType} from 'react-native';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle | TextStyle;
  keyboardType: KeyboardType;
}

function InputField(props: Props) {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      style={props.style}
      keyboardType={props.keyboardType}
    />
  );
}

export default InputField;
