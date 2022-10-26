import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Meteo from "./Component/Meteo/Meteo";
import MeteoByHour from "./Component/MeteoByHour/MeteoByHour";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Meteo />
      <MeteoByHour />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
});
