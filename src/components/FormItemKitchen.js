import React from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";
import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {requestKitchen} from "../store/actions/requestKitchen";

export const FormItemKitchen = ({Item}) => {
    const dispatch = useDispatch()
    const valueOfInput = useSelector(state => state.menu.requestUser)
    const findElement = valueOfInput.filter((el) => el.name === Item.name)

    const updateInputVal = (val) => {
        dispatch(requestKitchen(Item, val))
    }

    const setValueOfInput = () => {
        if (valueOfInput.length === 0) {
            return ''
        }
        if (findElement.length !== 0) return findElement[0].count
        return ''
    }

    return (
            <View style={findElement.length === 0 ? styles.mainWrap : styles.mainWrapSelected}>
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
    mainWrapSelected: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 1,
        backgroundColor: '#eeedea',
    },
    input: {
        width: '100%',
        minHeight: 40,
        textAlign: 'center',
        // borderColor: 'red',
        // borderStyle: 'solid',
        // borderWidth: 1,
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
        justifyContent: 'center',
        paddingLeft: 10,
        whiteSpace: 'normal',
        paddingVertical: 0,
    },
    characterBlock: {
        width: '15%',
        paddingVertical: 0,
        justifyContent: 'center',
    },
    inputBlock: {
        width: '35%',
        paddingVertical: 0,

    },
    statusButtonsWrap: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
})