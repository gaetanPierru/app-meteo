import React from 'react'
import { View, Text, Button, Image, ScrollView } from "react-native";
import CardMeteo from './CardMeteo/CardMeteo';
import { styles } from "./styleMeteoByHour"

export default function MeteoByHour() {
    return (
        <View>
            <View style={styles.day}>
                <Text style={styles.current}>Aujourd'hui</Text>
                <Text style={styles.nextDay}>5 jours</Text>
            </View>

            <View style={styles.cardList}>
            <ScrollView horizontal={true}>
                <CardMeteo index={1}/>
                <CardMeteo index={2}/>
                <CardMeteo index={3}/>
                <CardMeteo index={4}/>
                <CardMeteo index={5}/>
                <CardMeteo index={6}/>
                <CardMeteo index={7}/>
                <CardMeteo index={8}/>
                <CardMeteo index={9}/>
                <CardMeteo index={10}/>
            </ScrollView>

            </View>
        </View>
    )
}
