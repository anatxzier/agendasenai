import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Border, Color } from "../constants/GlobalSyles";

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorSilver_100,
    borderWidth: 1,
    width: 270,
    height: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Input;
