import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import GridItem from '@/components/homebtn';

const { width } = Dimensions.get('window');

const ProfessoresCad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Bem vindo, Carlos.</Text>
          <Text style={styles.subtitle}>Agende uma sala hoje</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar uma sala</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <GridItem
          imageSource={require('../../assets/images/default.jpg')}
          text="Carlos Eduardo"
        />
  
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9B0000',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingBottom: 30,
    flexDirection: 'row',

    
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,


  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
    alignItems:'center',
    paddingBottom: 30,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#9B0000',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 50,

  },
  gridItem: {
    
    marginVertical: 10,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',

  },
  gridImage: {
    width: '100%', // Alteração aqui
    height: 80, // Mantém a altura desejada
    marginBottom: 10,
  },
  
  gridItemText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    
  },
});

export default ProfessoresCad;
