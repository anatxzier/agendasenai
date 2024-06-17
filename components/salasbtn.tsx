import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface GridItemProps {
  text: string;
}

const SalasBtn: React.FC<GridItemProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <Text style={styles.gridItemText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: '#9b0000',
    width: '45%',
    marginVertical: 10,
    padding: 40,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  gridItemText: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
});

export default SalasBtn;
