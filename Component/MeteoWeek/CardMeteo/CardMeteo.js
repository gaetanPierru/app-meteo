import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styleCardMeteo";
const dayjs = require('dayjs')

export default function CardMeteo({ meteo, css }) {
  return (
    <View style={css == ""? styles.description: styles.current}>
      <Text style={styles.text}>{dayjs(meteo.dt_txt.split(" ")[0]).format('dddd')}</Text>

        <Image
          style={styles.tinyLogo}
          source={{
            uri: `http://openweathermap.org/img/wn/${meteo.weather[0].icon}@4x.png`,
          }}
        />
      <Text style={styles.text}>
        {meteo.weather[0].main}
      </Text>
      <Text style={styles.textB}>{Math.round(meteo.main.temp_max)}°</Text>
      <Text style={styles.text}>{Math.round(meteo.main.temp_min)}°</Text>
    </View>
  );
}
