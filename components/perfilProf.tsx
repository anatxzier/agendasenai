import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface GridItemProps {
  imageSource: ImageSourcePropType;
  text: string;
}

const PerfilProf: React.FC<GridItemProps> = ({ imageSource, text }) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <Image
        source={imageSource}
        style={styles.gridImage}
      />
      <Text style={styles.gridItemText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: '#e4e4e4',
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
  gridImage: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  gridItemText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default PerfilProf;

