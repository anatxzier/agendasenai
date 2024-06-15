import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../../constants/GlobalSyles";
import Input from "@/components/Input";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Text style={styles.login1}>Login</Text>
      <Text style={styles.realizeOLogin}>
        Realize o login para acessar o sistema
      </Text>

      <Input
      label="Email"
      placeholder="example@gmail.com"
      
      />


      <View style={styles.rectangleView} />
      <Text style={styles.entrar}>Entrar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    height: 25,
    textAlign: "center",
    fontFamily: FontFamily.outfitRegular,
    position: "absolute",
  },
  loginShadowBox: {
    width: 270,
    borderWidth: 1,
    borderColor: Color.colorSilver_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_lg,
    elevation: 4,
    shadowRadius: 4,
    left: 39,
    height: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  loginChild: {
    top: 300,
    left: 0,
    shadowRadius: 5.7,
    elevation: 5.7,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.colorWhite,
    width: 360,
    height: 500,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  login1: {
    top: 93,
    left: 125,
    fontSize: FontSize.size_29xl,
    width: 111,
    height: 58,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  realizeOLogin: {
    top: 166,
    left: 37,
    color: Color.colorWhitesmoke,
    width: 287,
    height: 50,
    textAlign: "center",
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  email: {
    top: 375,
    width: 54,
    color: Color.colorBlack,
    left: 39,
    height: 25,
    fontSize: FontSize.size_xl,
  },
  senha: {
    top: 488,
    width: 60,
    color: Color.colorBlack,
    left: 39,
    height: 25,
    fontSize: FontSize.size_xl,
  },
  loginItem: {
    top: 410,
  },
  loginInner: {
    top: 523,
  },
  examplegmailcom: {
    top: 423,
    left: 46,
    fontSize: FontSize.size_base,
    color: Color.colorSilver_200,
    width: 162,
  },
  rectangleView: {
    top: 661,
    left: 64,
    borderRadius: Border.br_sm,
    width: 220,
    height: 54,
    position: "absolute",
    backgroundColor: Color.colorDarkred_100,
  },
  entrar: {
    top: 671,
    left: 145,
    width: 64,
    height: 41,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_11xl,
    flex: 1,
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkred_100,
  },
});

export default Login;
