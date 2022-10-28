import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import CardMeteo from "./CardMeteo/CardMeteo";
import PreciseMeteo from "./PreciseMeteo/PreciseMeteo";
import { styles } from "./styleMeteoWeek";

export default function MeteoWeek({ setModal, meteo }) {
  let tab = [];
  // console.log(meteo)
  const [distinc, setDistinc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let a = [];

    for (var i = 0; i < meteo.list.length; i++) {
      //  console.log(meteo.list[i].dt_txt.split(" ")[1]);
      if (tab.includes(meteo.list[i].dt_txt.split(" ")[0])) {
        // console.log("deja")
      } else {
        if (meteo.list[i].dt_txt.split(" ")[1] === "12:00:00") {
          tab.push(meteo.list[i].dt_txt.split(" ")[0]);
          a.push(meteo.list[i]);
        }
      }
    }
    setDistinc(a);
    setLoading(false);
  }, []);

  if (loading) return <Text>Loading</Text>;
  // console.log(distinc.length);
  // console.log(tab);
  console.log(current);
  return (
    <View style={styles.container}>
      <View style={styles.current}>
        <PreciseMeteo setModal={setModal} meteo={distinc[current]} />
      </View>

      <View style={styles.day}>
        {distinc?.map((elt, i) => (
          <View key={i}>
            {/* <Text>{JSON.stringify(elt)}</Text> */}
            <Pressable key={i} onPress={() => setCurrent(i)}>
              <CardMeteo
                key={i}
                meteo={elt}
                css={current == i ? "current" : ""}
              />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
