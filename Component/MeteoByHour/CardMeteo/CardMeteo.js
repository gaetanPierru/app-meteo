import React from 'react'
import { View, Text, Image } from "react-native";
import { response } from "../../../ex";
import { styles } from "./styleCardMeteo";

export default function CardMeteo({index}) {
    console.log(index)
  return (
    <View style={styles.card}>
        <Text style={styles.text}>{Math.round(response.list[index].main.temp)}°</Text>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `http://openweathermap.org/img/wn/${response.list[index].weather[0].icon}@2x.png`,
            }} />
        </View>
        <Text style={styles.text}>{response.list[index].dt_txt.split(" ")[1].slice(0, -3)}</Text>
    </View>
  )
}
