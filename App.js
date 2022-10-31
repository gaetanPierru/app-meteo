import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import Meteo from "./Component/Meteo/Meteo";
import MeteoByHour from "./Component/MeteoByHour/MeteoByHour";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import MeteoWeek from "./Component/MeteoWeek/MeteoWeek";
import LoaderPikachu from "./Component/Loader Pikachu/LoaderPikachu"
const window = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  const [meteo, setMeteo] = useState(null);
  const [current, setCurrent] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission d'acces a la localisation refuses");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      getMeteo(location);
    })();
  }, []);

  async function getMeteo(location) {
    console.log(location);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=fr&APPID=0d6166ddad3768c332e4a2f72242e6ab&units=metric`
    );
    const mete = await res.json();
    setMeteo(mete);
    setLoading(false);
    // console.log(mete);
  }

  if (loading) {
    return (
      <LoaderPikachu />
    );
  }
  if (modal) {
    return (
      <View>
        <MeteoWeek setModal={setModal} meteo={meteo} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Meteo meteo={meteo} getMeteo={getMeteo} current={current} />
      <MeteoByHour meteo={meteo} setCurrent={setCurrent} current={current} setModal={setModal} />
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
    backgroundColor: "black",
    overflow: "visible"
  }
});
