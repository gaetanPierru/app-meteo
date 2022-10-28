import { Dimensions, StyleSheet } from "react-native";
const window = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  back: {
    fontSize: window * 0.2,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: window,
    paddingHorizontal: 10,
  },
  title: {
    alignSelf: "center",
    fontSize: window * 0.1,
  },
  container: {
    width: window,
    height: height / 3,
  },
  img: {
    width: window / 3,
    height: 120,
  },
  aligne: {
    display: "flex",
    justifyContent: "space-between",
    width: window,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  temp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tempM: {
    fontSize: window * 0.2,
    fontWeight: "bold",
    color: "white",
  },
  tempMin: {
    fontSize: window * 0.14,
    fontWeight: "bold",
    color: "black",
    opacity: 0.1
  },
  span : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  state : {
    marginBottom: 15,
    color: "black",
    opacity: 0.2,
    fontWeight: "bold",
  }
});
