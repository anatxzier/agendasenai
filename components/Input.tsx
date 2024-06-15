import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../constants/GlobalSyles";
interface InputWithLabelProps {
    label: string;
    placeholder: string;
  }
  
  const Input: React.FC<InputWithLabelProps> = ({ label, placeholder }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor="#888"
            />
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          marginBottom: 20,
        },
        label: {
          marginBottom: 5,
          fontSize: 16,
        },
        input: {
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
        },
      });
      
      export default Input;