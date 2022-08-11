import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {THEME} from "../theme";

export const MainScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
            <Text style={styles.title}>Приложение для составления заявок</Text>
            <TouchableOpacity
                style={styles.buttonWrap}
                onPress={() => navigation.navigate('Кухня')}
            >
                <Text style={styles.buttonText}>Заявка по кухне</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonWrap}
                onPress={() => navigation.navigate('Бар')}
            >
                <Text style={styles.buttonText}>Заявка по бару</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        marginTop: '35%',
    },
    logo: {
        width: 95,
        height: 120,
    },
    title: {
        marginTop: 10,
        fontFamily: 'open-bold',
        color: THEME.COLOR_MAIN_DARK
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

