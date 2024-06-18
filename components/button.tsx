import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Link } from "expo-router"
import { LinkProps } from "expo-router/build/link/Link"

interface LinkBtnProps extends LinkProps {
  nome: string
}

export default function Button({ nome, ...props }: LinkBtnProps) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 20
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '78%',
      height: 47,
      backgroundColor: '#9b0000',
      borderRadius: 5,
    },
    TextButton: {
      fontSize: 14,
      color: "#FFFFFF",
    },
  })
  return (
    <Link style={styles.container} {...props} asChild >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.TextButton }>{nome}</Text>
      </TouchableOpacity>
    </Link>
  )
}

