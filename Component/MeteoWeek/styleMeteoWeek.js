import { Dimensions, StyleSheet } from "react-native";
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black", 
    height: height
  }, 
  current : {
    backgroundColor: "lightblue",
    height: height * 0.45,
  }, 
  day : {
    height: height * 0.65,
  }
});