import React from "react";
import {Image, StyleSheet, View} from "react-native";

export const MainScreen = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
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
})

