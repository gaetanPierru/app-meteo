import { Dimensions, StyleSheet } from "react-native";
const window = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
  tinyLogo: {
    width: window * 0.75,
    height: height * 0.5 
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: window,
  },
  current: {
    marginTop: 30,
    backgroundColor: "lightblue",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: height * 0.75
  }, 
  center: {
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
   borderRadius: 50,
   backgroundColor: "none",
   width: window / 2,
   alignItems: 'center',
   justifyContent: 'center',
   borderColor: "gold",
   borderWidth: 2
  },
  container : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text : {
    color: "gray",
    fontSize: 18,
  },
  span : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});