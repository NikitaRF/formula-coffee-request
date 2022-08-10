import React from "react";
import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {THEME} from "../theme";

export const ModalRequestSuccess = ({modalLuckWindow, setModalLuckWindow}) => {
    const date = new Date()
    const luckModalClose = () => {
        setModalLuckWindow(false)
    }
    return (
        <Modal visible={modalLuckWindow} animationType='slide' transparent={false}>
            <ScrollView contentContainerStyle={styles.modalWrap}>
                <View style={styles.containerLuck}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo2.png')}
                    />
                    <Text style={styles.textLuckBold}>Ваша заявка принята</Text>
                    <Text style={styles.textLuckRegular}>{date.toLocaleString('ru-Ru')}</Text>
                    <TouchableOpacity
                        style={{...styles.buttonWrap, marginTop: 20}}
                        onPress={() => luckModalClose()}>
                        <Text style={{...styles.buttonText, paddingVertical: 5, fontSize: 15}}>Готово</Text>
                    </TouchableOpacity>
                    <Text></Text>
                </View>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalWrap: {
        marginTop: 50,
        marginHorizontal: 25,
    },
    containerLuck: {
        //flex: 1,
        alignItems: 'center',
        marginTop: '35%',
    },
    textLuckRegular: {
        marginTop: 10,
        fontFamily: THEME.FONT_MAIN,
        color: THEME.COLOR_MAIN_DARK,
    },
    textLuckBold: {
        marginTop: 10,
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_MAIN_DARK,
    },
    logo: {
        width: 95,
        height: 120,
    },
    buttonText: {
        textAlign: 'center',
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
    buttonWrap: {
        width: '70%',
        marginBottom: 40,
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
})