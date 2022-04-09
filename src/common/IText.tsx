/* eslint-disable react/forbid-elements */
import React from 'react';
import {Text, TextStyle} from 'react-native';

const FONT_FAMILY = 'SourceSansPro';

type FontType = 'Light' | 'Regular' | 'SemiBold' | 'Bold';

type Props = {
  type?: FontType;
  size?: number;
  children: React.ReactNode;
  style?: TextStyle;
  hyperlink?: boolean;
  onPress?: () => void;
};

const IText = ({
  type = 'Regular',
  children,
  size = 14,
  style,
  hyperlink,
  onPress,
}: Props) => {
  const fontFamily = `${FONT_FAMILY}-${type}`;

  const common: TextStyle = {
    fontFamily: fontFamily,
    fontSize: size,
    textDecorationLine: hyperlink ? 'underline' : 'none',
  };

  return (
    <Text style={[common, style]} onPress={onPress}>
      {children}
    </Text>
  );
};

export default IText;
