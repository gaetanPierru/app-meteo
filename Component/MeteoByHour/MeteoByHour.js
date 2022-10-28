import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import CardMeteo from "./CardMeteo/CardMeteo";
import { styles } from "./styleMeteoByHour";

export default function MeteoByHour({ meteo, setCurrent, current, setModal}) {
  return (
    <View>
      <View style={styles.day}>
        <Text style={styles.current}>Aujourd'hui</Text>
        <Pressable onPress={() => setModal(true)}>
          <Text style={styles.nextDay}>5 jours</Text>
        </Pressable>
      </View>

      <View style={styles.cardList}>
        <ScrollView horizontal={true}>
          {meteo.list.slice(0, 8).map((mete, index) => {
            return (
              <Pressable key={index} onPress={() => setCurrent(index)}>
                <CardMeteo
                  meteo={mete}
                  key={index}
                  css={index == current ? styles.current : ""}
                />
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
