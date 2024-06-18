import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }} />

      <Stack.Screen
        name="telasiniciais/welcome"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="telasiniciais/login"
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name="telasiniciais/homeProfessor"
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name="telasiniciais/SalasInst"
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name="telasiniciais/perfilprof"
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name="telasiniciais/SalaAgendada"
        options={{ headerShown: false }}
      />

      




    </Stack>

  );
}