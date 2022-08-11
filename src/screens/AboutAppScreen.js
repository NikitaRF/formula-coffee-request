import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {THEME} from "../theme";



export const AboutAppScreen = () => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Formula-Coffee-Requests</Text>
            <Text style={styles.description}>Версия приложения <Text style={styles.version}>1.0</Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    version: {
        fontFamily: 'open-bold'
    },
    title: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
    description: {
        color: THEME.COLOR_MAIN_LIGHT,

    },
})