import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { response } from "../ex";
import * as Location from "expo-location";
export default function Meteo() {
  const [meteo, setMeteo] = useState({});

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    getMeteo()
    // console.log(text);
  }

    async function getMeteo() {
    //   const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude},fr&APPID=0d6166ddad3768c332e4a2f72242e6ab`)
    //   const mete = await res.json()
    //   setMeteo(mete)
    //   console.log(mete)
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
  }

  // useEffect(()=> {
  //     getMeteo();
  // }, [])
  // console.log(response);

  return (
    <View>
      <Text>Meteo du jour</Text>
      <Text>{text}</Text>
    </View>
  );
}
