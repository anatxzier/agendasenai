import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SalasBtn from '@/components/salasbtn';

const { width } = Dimensions.get('window');

const SalaAgendada = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Text}>SALA C13</Text>
      </View>
      <View style={styles.info}>
      <Text style={styles.title}>Laboratório de Desenvolvimento de Sistemas</Text>
      <Text>texo texto texotkfdgkdfhkmtropih</Text>








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

  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 50,
  },

  title:{
    fontSize:30,
    textAlign:'center',
    color:"#595959"
  }
});

export default SalaAgendada;
