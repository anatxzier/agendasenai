import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from "react-native";
import Button from "@/components/button";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native'; // Importando o hook useNavigation

const Welcome = () => {

    return (
        <View style={styles.welcoming}>
            <Image
                style={styles.background}
                resizeMode="cover"
                source={require("../../assets/images/Vector1.png")}
            />

            <Image
                style={styles.imgInicio}
                resizeMode="cover"
                source={require("../../assets/images/welc.png")}
            />

            <Text style={[styles.titulo]}>
                AgendaSenai é uma plataforma que otimiza a gestão de eventos e cursos do SENAI, oferecendo acesso fácil e em tempo real a horários e notificações.
            </Text>

            <View style={styles.buttonContainer}>
                <Button nome="Entrar"
                href="telasiniciais/login"
                ></Button>
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
        gap: 60,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: "65%",
    },
    imgInicio: {
        width: windowWidth * 0.8, 
        height: windowWidth * 0.8, 
        marginBottom: 20, 
        marginTop: 30,
    },
    titulo: {
        color: "#575656",
        width: "80%", // Ajustado para ocupar 80% da largura da tela
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10, // Espaçamento superior adicional
    },
    buttonContainer: {
        width: '50%', // Largura desejada para o botão
        alignItems: 'center', // Centraliza horizontalmente o botão
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

export default Welcome;
