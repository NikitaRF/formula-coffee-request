import React, {useState} from "react";
import {Text, View, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";

import email from "react-native-email";


export const FormItemModal = ({Item}) => {

    return (
        <View style={styles.mainWrap}>
            <View style={[styles.blockTable, styles.nameBlock]}>
                <Text>{Item.name}</Text>
            </View>
            <View style={[styles.blockTable, styles.characterBlock]}>
                <Text>{Item.unit}</Text>
            </View>
            <View style={[styles.blockTable, styles.inputBlock]}>
                <Text>{Item.count}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 1,
    },
    blockTable: {
        borderStyle: 'solid',
        borderColor: THEME.COLOR_MAIN_DARK,
        borderWidth: 1,
        padding: 2,
        paddingVertical: 0,
        alignItems: 'center',
    },
    nameBlock: {
        width: '50%',
        alignItems: 'left',
        paddingLeft: 10,
        justifyContent: 'center',
    },
    characterBlock: {
        width: '15%',
        justifyContent: 'center',
    },
    inputBlock: {
        width: '35%',
        justifyContent: 'center',
        minHeight: 40,
    },
    statusButtonsWrap: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})