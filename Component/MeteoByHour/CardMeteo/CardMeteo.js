import React from 'react'
import { View, Text, Image } from "react-native";
import { styles } from "./styleCardMeteo";

export default function CardMeteo({meteo, css}) {
  return (
    <View style={css == ""? styles.card: styles.current}>
        <Text style={styles.text}>{Math.round(meteo.main.temp)}°</Text>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `http://openweathermap.org/img/wn/${meteo.weather[0].icon}@4x.png`,
            }} />
        </View>
        <Text style={styles.text}>{meteo.dt_txt.split(" ")[1].slice(0, -3)}</Text>
    </View>
  )
}
