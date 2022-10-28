import { Dimensions, StyleSheet } from "react-native";
const window = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
    tinyLogo: {
        width: window * 0.13,
        height: height * 0.1
    }, 
    description : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: window,
        paddingHorizontal: 20
     },
     text : {
        color: "gray",
        alignSelf: "center"
     },
     textB : {
        color: "white",
        alignSelf: "center"
     }, 
     current : {
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-between",
         width: window,
         paddingHorizontal: 20,
         backgroundColor: "blue"
      }
});