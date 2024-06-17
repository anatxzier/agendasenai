import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface NameFieldWithLabelProps {
  label: string;
  name: string;
}

const { width } = Dimensions.get('window');

const NameFieldWithLabel: React.FC<NameFieldWithLabelProps> = ({ label, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    padding: 10,

    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#000',
    width: width * 0.9, 
    alignSelf: 'center', 
  },
  label: {
    fontSize: 14,
    color: '#666',

  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NameFieldWithLabel;
