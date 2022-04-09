import React from 'react';
import {Text} from 'react-native';

const FONT_FAMILY = 'SourceSansPro';

type FontType = 'Light' | 'Regular' | 'SemiBold' | 'Bold';

type Props = {
  type?: FontType;
  children: React.ReactNode;
};

const IText = ({type = 'Regular', children}: Props) => {
  const fontFamily = `${FONT_FAMILY}-${type}`;

  const style = {
    fontFamily: fontFamily,
  };

  return <Text style={style}>{children}</Text>;
};

export default IText;
