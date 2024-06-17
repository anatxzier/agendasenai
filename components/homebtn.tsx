import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType  } from 'react-native';

interface GridItemProps {
    imageSource: ImageSourcePropType;
    text: string;
  }
  
  const GridItem: React.FC<GridItemProps> = ({ imageSource, text }) => {
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
    backgroundColor: '#9B0000',
    width: '45%',
    marginVertical: 10,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  gridImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  gridItemText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default GridItem;
