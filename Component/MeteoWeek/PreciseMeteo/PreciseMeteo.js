import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { styles } from "./stylePreciseMeteo";
const dayjs = require('dayjs')

export default function PreciseMeteo({ setModal, meteo }) {
  console.log(meteo);
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Pressable
          onPress={() => {
            setModal(false);
          }}
        >
          <Text style={styles.back}>{"<"}</Text>
        </Pressable>
        <Text style={styles.title}>5 jours</Text>
      </View>

      <View style={styles.aligne}>
        <Image
          style={styles.img}
          source={{
            uri: `http://openweathermap.org/img/wn/${meteo.weather[0].icon}@4x.png`,
          }}
        />
        <View>
          <Text>{dayjs(meteo.dt_txt.split(" ")[0]).format('dddd D MMMM')}</Text>
          <View style={styles.temp}>
            <Text style={styles.tempM}>{Math.round(meteo.main.temp_max)}</Text>
            <Text style={styles.tempMin}>
              /{Math.round(meteo.main.temp_min)}°
            </Text>
          </View>
          <Text style={styles.state}>{meteo.weather[0].main}</Text>
        </View>
      </View>
      <View style={styles.aligne}>
        <View style={styles.span}>
          <Text>🍃</Text>
          <Text>
            {Math.round(meteo.wind.speed / 1000 / (1 / 3600))}{" "}
            km/h
          </Text>
          <Text>wind</Text>
        </View>
        <View style={styles.span}>
          <Text>💧</Text>
          <Text> {meteo.main.humidity} %</Text>
          <Text>humidity</Text>
        </View>

        <View style={styles.span}>
          <Text>🌧️</Text>
          <Text>
            {meteo.pop * 100}
            %
          </Text>
          <Text>rain chance </Text>
        </View>
      </View>
    </View>
  );
}
