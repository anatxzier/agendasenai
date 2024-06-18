import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SalaAgendada = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SALA C13</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Laboratório de Desenvolvimento de Sistemas</Text>
        <View style={styles.desc}>
          <Text style={styles.subtitle}>Agendamentos</Text>
          <Text style={styles.agendamentoText}>
            Segunda-Feira, 17/02 - 14:00 a 16:30{"\n"}
            Professor: Thiago
          </Text>
          <Text style={styles.agendamentoText}>
            Terça-Feira, 18/03 - 07:00 a 16:30{"\n"}
            Professor: Carlos
          </Text>
        </View>
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
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: '#595959',
    marginBottom: 20,
  },
  desc: {
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  agendamentoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SalaAgendada;
