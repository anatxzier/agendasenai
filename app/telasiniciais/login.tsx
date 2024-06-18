import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../../constants/GlobalSyles";
import Input from "@/components/Input";
import CustomButton from "@/components/button";
import Button from "@/components/button";

const Login = () => {
    return (
        <View style={styles.login}>
            <View style={styles.loginChild} />
            <Text style={styles.login1}>Login</Text>
            <Text style={styles.text}>
                Realize o login para acessar o sistema
            </Text>

            <View style={styles.buttonContainer}>

                <Input label="Email" />
                <Input label="Senha" />

                <Button


                    nome="Entrar"
                    href='telasiniciais/homeProfessor'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginShadowBox: {
        width: '80%', // Redimensiona a largura para ser 80% do contêiner pai
        borderWidth: 1,
        borderColor: Color.colorSilver_100,
        borderStyle: "solid",
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: Border.br_lg,
        elevation: 4,
        shadowRadius: 4,
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
        top: '35%', // Ajusta a posição vertical para 37% do contêiner pai
        left: 0,
        shadowRadius: 5.7,
        elevation: 5.7,
        borderRadius: Border.br_10xl,
        backgroundColor: Color.colorWhite,
        width: '100%',
        height: "70%",
        shadowOpacity: 1,
        shadowOffset: {
            width: 1,
            height: -5,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
    },
    login1: {
        top: 80,
        fontSize: FontSize.size_29xl,
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: Color.colorWhite,
        position: "absolute",
    },
    text: {
        top: '21%', // Ajusta a posição vertical para 21% do contêiner pai
        left: '10%', // Ajusta a posição horizontal para 10% do contêiner pai
        color: Color.colorWhitesmoke,
        width: '80%', // Redimensiona a largura para ser 80% do contêiner pai
        height: 50,
        textAlign: "center",

        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    login: {

        borderRadius: Border.br_11xl,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: '100%', // Altera a altura para ocupar 100% da tela
        overflow: "hidden",
        backgroundColor: Color.colorDarkred_100,
    },
    buttonContainer: {
        width: '50%', // Largura desejada para o botão
        alignItems: 'center', // Centraliza horizontalmente o botão
        marginTop: 50, // Adiciona margem acima do botão
        gap:10,
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
        textAlign: 'center',
    },
});

export default Login;
