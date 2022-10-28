import { Dimensions, StyleSheet } from "react-native";
const window = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
  day: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: window,
    marginTop: 10,
    marginBottom: 10
  },
  nextDay: {
    color: "blue",
    textDecorationLine: "underline",
    textDecorationColor: "blue"
  },
  current: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray"
  },
  cardList: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    width: window,
  }
});