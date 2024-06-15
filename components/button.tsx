import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RedButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#9b0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:'50%'
    
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    
  },
});

export default RedButton;
