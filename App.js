import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Meteo from "./Component/Meteo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <StatusBar style="auto" />
      <Meteo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
