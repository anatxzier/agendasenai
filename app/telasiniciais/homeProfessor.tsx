import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import GridItem from '@/components/homebtn';
import Button from '@/components/button';

const { width } = Dimensions.get('window');

const HomeProfessor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Image
            source={require('../../assets/images/default.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.welcomeText}>Bem vindo, Carlos.</Text>
          <Text style={styles.subtitle}>Agende uma sala hoje</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button nome='Agendar uma sala' href='telasiniciais/SalasInst' />
      </View>

      <View style={styles.grid}>
        <GridItem
        linkTo='/telasiniciais/SalasInst'
          imageSource={require('../../assets/images/home1.png')}
          text="Salas da instituição"
        />
        <GridItem
        linkTo='/telasiniciais/SalaAgendada'
          imageSource={require('../../assets/images/home2.png')}
          text="Salas Agendadas"
        />
        <GridItem
         linkTo='/telasiniciais/perfilprof'
          imageSource={require('../../assets/images/home3.png')}
          text="Perfil"
        />
        <GridItem
         linkTo='/'
          imageSource={require('../../assets/images/home4.png')}
          text=""
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
    paddingVertical: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
});

export default HomeProfessor;
