import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window').width

export const styleLoader = StyleSheet.create({
    loading: {
        fontWeight: "bold",
        fontSize: window * 0.15,
        position: "relative",
    },
    image : {
        width : "100%",
        height: "70%"
    },
    container: {
      display: "flex",
      justifyContent: "center",
      width: window,
      alignItems: "center",
      paddingTop: window * 0.25
    }
})