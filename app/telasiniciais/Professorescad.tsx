import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import PerfilProf from '@/components/perfilProf';
const { width } = Dimensions.get('window');

const Professorescad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Instrutores</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Entypo name="plus" size={24} color="white" />
        <Text style={styles.buttonText}>Adicione um Instrutor</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <PerfilProf 
        imageSource={require('../../assets/images/default.jpg')} 
        text='Carlos Eduardo'>


        </PerfilProf>

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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#9B0000',
    margin: 20,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50,
    width: '50%',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 50,
  },

});

export default Professorescad;
