import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface AtomTextProps extends TextProps {
  children: React.ReactNode;
  textStyle?: TextStyle;
}

const AtomText: React.FC<AtomTextProps> = ({ children, textStyle, ...props }) => {
  return (
    <Text style={[textStyle]} {...props}>
      {children}
    </Text>
  );
};

export default AtomText;