import { Dimensions, StyleSheet } from "react-native";
const window = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
    tinyLogo: {
        width: window /4,
        height: height * 0.1
    },
    card: {
        textAlign: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: "darkgray",
    },
    text : {
        color: "white",
        fontWeight: "bold"
    }, 
    current : {
      backgroundColor: "blue",
      textAlign: "center",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 50,
      alignItems: "center"
    }
});