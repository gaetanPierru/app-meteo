import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { response } from "../../ex";
import * as Location from "expo-location";
import { styles } from "./styleMeteo";

export default function Meteo() {
  const [meteo, setMeteo] = useState(response);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission d'acces a la localisation refuses");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    let text = "Waiting..";
    if (location) {
      text = JSON.stringify(location);
      getMeteo()
      console.log(text);
    }

  }, []);


  async function getMeteo() {
    console.log(location);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=FR&APPID=0d6166ddad3768c332e4a2f72242e6ab`)
    const mete = await res.json()
    setMeteo(mete)
    console.log(mete.list[0].rain)  
  }



  return (
    <View>
      <View style={styles.current}>
        <Text style={styles.center}>Meteo du jour à</Text>
        <Text style={styles.center}>{meteo.city.name}</Text>
        <View style={styles.center}>
          <Pressable style={styles.button} onPress={getMeteo}>
            <Text style={styles.text}> • Mettre a jour</Text>
          </Pressable>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `http://openweathermap.org/img/wn/${meteo.list[0].weather[0].icon}@2x.png`,
            }} />
        </View>

        <Text style={styles.center}>{meteo.list[0].main.temp}°</Text>
        <Text style={styles.center}>{meteo.list[0].weather[0].main}</Text>
        <Text style={styles.center}>{meteo.list[0].dt_txt}</Text>


        <View style={styles.description}>
          <Text>wind {Math.round((meteo.list[0].wind.speed / 1000) / (1 / 3600))} km/h</Text>
          <Text>humidity {meteo.list[0].main.humidity} %</Text>
          <Text>rain chance {meteo.list[0].rain ? meteo.list[0].rain["3h"] * 100 : 0}%</Text>
        </View>
      </View>
    </View>
  );
}
