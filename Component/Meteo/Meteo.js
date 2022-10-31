import { View, Text, Pressable, Image } from "react-native";
import * as Location from "expo-location";
import { styles } from "./styleMeteo";
const dayjs = require("dayjs");
require("dayjs/locale/fr");

export default function Meteo({ meteo, getMeteo, current }) {
  return (
    <View style={styles.current}>
      <Text style={styles.center}>Meteo du jour à</Text>
      <Text style={styles.center}>📍 {meteo.city.name}</Text>
      <View style={styles.center}>
        <Pressable
          style={styles.button}
          onPress={async () =>
            await getMeteo(await Location.getCurrentPositionAsync({}))
          }
        >
          <Text style={styles.text}> • Mettre a jour</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `http://openweathermap.org/img/wn/${meteo.list[current].weather[0].icon}@4x.png`,
          }}
        />
      </View>

      <Text style={styles.temp}>
        {Math.round(meteo.list[current].main.temp)}°
      </Text>
      <Text style={styles.state}>{meteo.list[current].weather[0].main}</Text>
      <Text style={styles.center}>
        {dayjs(meteo.list[current].dt_txt.split(" ")[0]).locale("fr").format("dddd D MMMM")}
      </Text>

      <View style={styles.description}>
        <View style={styles.span}>
          <Text>🍃</Text>
          <Text>
            {Math.round(meteo.list[current].wind.speed / 1000 / (1 / 3600))}{" "}
            km/h
          </Text>
          <Text>wind</Text>
        </View>
        <View style={styles.span}>
          <Text>💧</Text>
          <Text> {meteo.list[current].main.humidity} %</Text>
          <Text>humidity</Text>
        </View>

        <View style={styles.span}>
          <Text>🌧️</Text>
          <Text>
            {meteo.list[current].pop * 100}
            %
          </Text>
          <Text>rain chance </Text>
        </View>
      </View>
    </View>
  );
}
