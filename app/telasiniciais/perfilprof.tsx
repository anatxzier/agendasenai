import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import NameFieldWithLabel from "@/components/Viperfil";

const PerfilProf = () => {
  return (
    <View style={styles.welcoming}>
      <Image
        style={styles.background}
        resizeMode="cover"
        source={require("../../assets/images/Vector1.png")}
      />
      <View style={styles.profileContainer}>
        <Image
          style={styles.imgPerfil}
          source={require("../../assets/images/default.jpg")}
        />
      </View>

      <View style={styles.nameFieldsContainer}>
        <NameFieldWithLabel name="Carlos" label="Nome" />
        <NameFieldWithLabel name="123.456.789-90" label="CPF" />
        <NameFieldWithLabel name="example@gmail.com" label="Email" />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  welcoming: {
    backgroundColor: "#d3d3d3",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: "65%",
  },
  profileContainer: {
    position: 'absolute',
    top: 300,
    left: 20,
  },
  imgPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#fff',
  },
  nameFieldsContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignItems: 'center',
  },
  imgInicio: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    marginBottom: 20,
    marginTop: 30,
  },
  titulo: {
    color: "#575656",
    width: "80%",
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});

export default PerfilProf;
