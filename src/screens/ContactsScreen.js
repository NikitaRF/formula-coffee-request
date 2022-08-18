import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {THEME} from "../theme";
import * as Linking from 'expo-linking';



export const ContactsScreen = () => {
    const sendEmail = () => {
        Linking.openURL('mailto:bng@itbls.ru').catch(error => {
            console.log(error);
        });;
    }
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Написать разработчику</Text>
            <TouchableOpacity
                style={styles.buttonWrap}
                onPress={() => sendEmail()}
            >
                <Text style={styles.buttonText}>Написать</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
    buttonWrap:{
        width: '50%',
        marginTop: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    buttonText: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_MAIN_DARK,
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 15,
    },

})