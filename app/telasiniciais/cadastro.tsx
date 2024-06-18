import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../../constants/GlobalSyles";
import Input from "@/components/Input";
import CustomButton from "@/components/button";
import HomeProfessor from "./homeProfessor";

const Cadastro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cadastro}>
        <Text style={styles.cadastro1}>Cadastro</Text>
        <Text style={styles.text}>Cadastre um novo professor</Text>

        <View style={styles.inputContainer}>
        <Input label="Nome" />
        <Input label="Sobrenome" />
        <Input label="CPF" />
        <Input label="Email" />
        <Input label="Senha" />

        {/* <CustomButton
                    buttonStyle={styles.btn}
                    text="Cadastrar"
         
                    textStyle={styles.btntext} */}
                
        </View>

      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorDarkred_100,
    width: '100%',
  },
  cadastro: {
    padding: 20,
    borderRadius: Border.br_11xl,
    alignItems: "center",
    width: '100%',
    justifyContent: 'flex-end',
    top: '5%'
  },
  cadastro1: {
    fontSize: FontSize.size_29xl,
    color: Color.colorWhite,
    marginBottom: 20,
    
  },
  text: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "center",
    marginBottom: 20,

  },
  inputContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
    alignItems: 'center',

  },



btn: {
    backgroundColor: '#9b0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,


},
btntext: {
    color: 'white',
    fontSize: 18,


},
});


export default Cadastro;
