/* eslint-disable react/forbid-elements */
import React from 'react';
import {TextInput, ViewStyle, TextStyle, KeyboardType} from 'react-native';

type Props = {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle | TextStyle;
  keyboardType?: KeyboardType;
};

function ITextInput(props: Props) {
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

export default ITextInput;
