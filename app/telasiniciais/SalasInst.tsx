import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SalasBtn from '@/components/salasbtn';

const TodasSalas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>Salas da Instituição</Text>
      </View>
      <View style={styles.grid}>
        <SalasBtn linkTo='/telasiniciais/salas' text='C12' />
        <SalasBtn linkTo='/telasiniciais/salas' text='C13' />
        <SalasBtn linkTo='/telasiniciais/salas' text='C14' />
        <SalasBtn linkTo='/telasiniciais/salas' text='C15' />
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
  Text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
});

export default TodasSalas;
