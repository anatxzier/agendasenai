import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Link } from '@react-navigation/native'; // Importe o componente Link da sua biblioteca de roteamento

interface GridItemProps {
  imageSource: ImageSourcePropType;
  text: string;
  linkTo: string;
}

const GridItem: React.FC<GridItemProps> = ({ imageSource, text, linkTo }) => {
  return (
    <Link to={linkTo} style={styles.link}>
      <View style={styles.gridItem}>
        <Image
          source={imageSource}
          style={styles.gridImage}
        />
        <Text style={styles.gridItemText}>{text}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    width: '45%',
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    textDecorationLine: 'none', // Remove underline from the link
    backgroundColor: '#9B0000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridItem: {
    padding: 20,
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
