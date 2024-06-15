import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import RedButton from "@/components/button";

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

            <RedButton/>

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
        height: "80%",
    },
    imgInicio: {
        width: windowWidth * 0.8, 
        height: windowWidth * 0.8, 
        marginBottom: 20, 
        marginTop: 30,
    },
    titulo: {
        color: "#fff",
        width: "80%", // Ajustado para ocupar 80% da largura da tela
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10, // Espaçamento superior adicional
    },
});

export default Welcome;
