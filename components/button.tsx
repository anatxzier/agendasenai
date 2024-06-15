import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  text: string;
  textStyle?: TextStyle
  buttonStyle?: ViewStyle;
}


const CustomButton: React.FC<CustomButtonProps> = ({ text,  buttonStyle, textStyle}) => {
  return (
    <View style={[buttonStyle]}>
      <TouchableOpacity style={[ buttonStyle]} >
        <Text style={[textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CustomButton;
