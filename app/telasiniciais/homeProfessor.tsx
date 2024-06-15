import * as React from "react";
import { StyleSheet, View, Text, Image} from "react-native";

import { Color, FontFamily, Border, FontSize } from "../../constants/GlobalSyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeChildBg]} />
      <Image
        style={styles.homeItem}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Image
        style={[styles.homeInner, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Text style={styles.home1}>Home</Text>
      <View style={[styles.lineView, styles.homeChildLayout2]} />
      <View style={[styles.homeChild1, styles.homeChildLayout2]} />
      <View style={[styles.homeChild2, styles.homeChildLayout2]} />
      <Image
        style={[styles.ellipseIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.nse4567128135653204992100004Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/nse45671281356532049921000045504-1.png")}
      />
      <Text style={styles.bemVindoCarlos}>Bem vindo, Carlos.</Text>
      <Text style={[styles.agendeUmaSala, styles.umaTypo]}>
        Agende uma sala hoje
      </Text>
      <View style={[styles.rectangleView, styles.homeChildBg]} />
      <Text style={[styles.agendarUmaSala, styles.umaTypo]}>
        Agendar uma sala
      </Text>
      <View style={[styles.homeChild3, styles.homeChildLayout1]} />
      <View style={[styles.homeChild4, styles.homeChildLayout1]} />
      <View style={[styles.homeChild5, styles.homeChildLayout]} />
      <View style={[styles.homeChild6, styles.homeChildLayout]} />
      <Image
        style={styles.calendarBro1Icon}
        resizeMode="cover"
        source={require("../assets/calendarbro-1.png")}
      />
      <Text style={[styles.perfil, styles.faqTypo]}>Perfil</Text>
      <Text style={[styles.faq, styles.faqTypo]}>FAQ</Text>
      <Image
        style={styles.faqsAmico1Icon}
        resizeMode="cover"
        source={require("../assets/faqsamico-1.png")}
      />
      <Text style={[styles.salasAgendadas, styles.salasTypo]}>
        Salas Agendadas
      </Text>
      <Image
        style={styles.timelineBro1Icon}
        resizeMode="cover"
        source={require("../assets/timelinebro-1.png")}
      />
      <Image
        style={styles.accountBro1Icon}
        resizeMode="cover"
        source={require("../assets/accountbro-1.png")}
      />
      <Text style={[styles.salasDaInstituio, styles.salasTypo]}>
        Salas da instituição
      </Text>
      <Image
        style={styles.iconPlus}
        resizeMode="cover"
        source={require("../assets/-icon-plus.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildBg: {
    backgroundColor: Color.colorDarkred_100,
    position: "absolute",
  },
  lineIconLayout: {
    height: 9,
    width: 10,
    position: "absolute",
  },
  homeChildLayout2: {
    height: 2,
    width: 25,
    borderTopWidth: 2,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: 309,
    position: "absolute",
  },
  iconPosition: {
    width: 60,
    left: 54,
    position: "absolute",
  },
  umaTypo: {
    fontFamily: FontFamily.outfitRegular,
    textAlign: "center",
    color: Color.colorWhitesmoke,
    position: "absolute",
  },
  homeChildLayout1: {
    height: 138,
    width: 122,
    backgroundColor: Color.colorDarkred_300,
    left: 42,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  homeChildLayout: {
    left: 188,
    height: 138,
    width: 122,
    backgroundColor: Color.colorDarkred_300,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  faqTypo: {
    height: 37,
    width: 111,
    top: 484,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhitesmoke,
    position: "absolute",
  },
  salasTypo: {
    top: 322,
    height: 37,
    width: 111,
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhitesmoke,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    left: 0,
    width: 360,
    height: 169,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorDarkred_100,
  },
  homeItem: {
    top: -165,
    left: 12,
    width: 399,
    height: 505,
    position: "absolute",
  },
  homeInner: {
    left: 28,
    top: 22,
  },
  lineIcon: {
    top: 31,
    left: 29,
  },
  home1: {
    top: 19,
    left: 156,
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    color: Color.colorWhite,
    textAlign: "left",
    width: 48,
    height: 21,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  lineView: {
    top: 22,
  },
  homeChild1: {
    top: 28,
  },
  homeChild2: {
    top: 35,
  },
  ellipseIcon: {
    top: 63,
    height: 60,
  },
  nse4567128135653204992100004Icon: {
    top: 65,
    height: 56,
  },
  bemVindoCarlos: {
    top: 71,
    left: 118,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
    width: 141,
    height: 25,
    textAlign: "center",
    color: Color.colorWhitesmoke,
    position: "absolute",
  },
  agendeUmaSala: {
    top: 93,
    left: 110,
    width: 157,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.outfitRegular,
    height: 25,
  },
  rectangleView: {
    top: 210,
    left: 55,
    borderRadius: Border.br_3xl,
    width: 255,
    height: 54,
  },
  agendarUmaSala: {
    top: 229,
    left: 112,
    width: 167,
    height: 17,
    fontSize: FontSize.size_mini,
  },
  homeChild3: {
    top: 305,
  },
  homeChild4: {
    top: 472,
  },
  homeChild5: {
    top: 472,
  },
  homeChild6: {
    top: 305,
  },
  calendarBro1Icon: {
    top: 359,
    left: 82,
    width: 89,
    height: 94,
    position: "absolute",
    overflow: "hidden",
  },
  perfil: {
    left: 49,
  },
  faq: {
    left: 194,
  },
  faqsAmico1Icon: {
    top: 522,
    left: 222,
    width: 88,
    height: 88,
    position: "absolute",
    overflow: "hidden",
  },
  salasAgendadas: {
    left: 194,
  },
  timelineBro1Icon: {
    top: 347,
    left: 214,
    width: 107,
    height: 106,
    position: "absolute",
    overflow: "hidden",
  },
  accountBro1Icon: {
    top: 498,
    left: 50,
    width: 132,
    height: 125,
    position: "absolute",
    overflow: "hidden",
  },
  salasDaInstituio: {
    left: 48,
  },
  iconPlus: {
    height: "3.43%",
    width: "8.06%",
    top: "28%",
    right: "68.06%",
    bottom: "68.58%",
    left: "23.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGainsboro,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;
