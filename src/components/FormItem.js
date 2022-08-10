import React, {useEffect, useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import {THEME} from "../theme";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {TextInput} from "react-native-gesture-handler";
import {requestKitchen} from "../store/actions/requestKitchen";


export const FormItem = ({Item}) => {
    const dispatch = useDispatch()
    const valueOfInput = useSelector(state => state.menu.requestKitchen)

    // if(state.isLoading) {
    //     return(
    //         <View style={styles.preloader}>
    //             <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
    //         </View>
    //     )
    // }



    const updateInputVal = (val) => {
        dispatch(requestKitchen(Item, val))
    }

    const setValueOfInput = () => {
        if (valueOfInput.length === 0) {
            return ''
        }
        const findElement = valueOfInput.filter((el) => el.name === Item.name)
        return findElement.count
    }

    return (
        <View style={styles.mainWrap}>
            <View style={[styles.blockTable, styles.nameBlock]}>
                <Text>{Item.name}</Text>
            </View>
            <View style={[styles.blockTable, styles.characterBlock]}>
                <Text>{Item.unit}</Text>
            </View>
            <View style={[styles.blockTable, styles.inputBlock]}>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='numeric'
                    placeholder='Ввести'
                    placeholderTextColor={THEME.COLOR_MAIN_PLACEHOLDER}
                    textContentType='none'
                    style={styles.input}
                    maxLength={5}
                    onChangeText={(val) => updateInputVal(val)}
                    value={setValueOfInput()}
                />
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
        paddingVertical: 10,
        alignItems: 'center',
    },
    nameBlock: {
        width: '50%',
        alignItems: 'left',
        paddingLeft: 10,
    },
    characterBlock: {
        width: '15%',
    },
    inputBlock: {
        width: '35%',
    },
    statusButtonsWrap: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

})