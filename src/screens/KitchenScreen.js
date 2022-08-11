import React, {useEffect, useReducer, useState} from "react";
import {ActivityIndicator, KeyboardAvoidingView, Keyboard, FlatList, StyleSheet, Text, View, Modal} from "react-native";
import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {getFormKitchen} from "../store/actions/getFormKitchen";
import {FormItem} from '../components/FormItem'
import {TouchableOpacity} from "react-native-gesture-handler";
import {FormItemModal} from "../components/FormItemModal";
import email from "react-native-email";
import {clearRequestKitchen} from "../store/actions/clearKitchenRequest";
import {ModalRequestSuccess} from "../components/ModalRequestSuccess";

export const KitchenScreen = ({navigation}) => {
    const userDisplayName = useSelector(state => state.user.userAuth)
    //console.log(userDisplayName)

    const dispatch = useDispatch()
    const formData = useSelector(state => state.menu.formKitchen)
    // console.log("FORMDATA", formData)

    const itemRequest = useSelector(state => state.menu.requestKitchen)
    //console.log('ItemREQUEST', itemRequest)

    const [modal, setModal] = useState(false)
    const [state, setState] = useState({
        isLoading: false
    })
    const [modalLuckWindow, setModalLuckWindow] = useState(false)

    const handleEmail = () => {
        const nowDate = new Date()
        const formatter = new Intl.DateTimeFormat("ru", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            weekday: "long",
        });
        const currentDate = formatter.format(nowDate)
        let message = ''
        itemRequest.forEach( (e) => message += `${e.name} (${e.unit}) - ${e.count} \n`)

        const to = ['bng@itbls.ru', 'mar1.usacheva@yandex.ru'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: `Заявка кухня, ${currentDate}`,
            body: `Заявку составил ${userDisplayName} \n\n ${message}`,
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }

    const updateForm = async () => {
        setState({
            isLoading: true,
        })
        await dispatch(getFormKitchen())
        dispatch(clearRequestKitchen())
        setState({
            isLoading: false,
        })
    }

    useEffect(() => {
        loadFormData()
    }, [])

    const loadFormData = async () => {
        setState({
            isLoading: true,
        })
        await dispatch(getFormKitchen())
        setState({
            isLoading: false,
        })
    }

    const postRequest = () => {
        setModal(true)
    }
    const acceptRequest = async () => {
        setModal(false)
        handleEmail()
        await updateForm()
        setModalLuckWindow(true)
    }
    const canselRequest = () => {
        setModal(false)
    }


    if(state.isLoading){
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    // Модалка успеха заявки
    if (modalLuckWindow) {
        return (
            <ModalRequestSuccess navigation={navigation} modalLuckWindow={modalLuckWindow} setModalLuckWindow={e => setModalLuckWindow(false)}/>
        )
    }


    // Модалка подтверждение заявки
    if (modal) {
        return (
            <Modal visible={modal} animationType='slide' transparent={false}>
                <View style={styles.modalCenter}>
                    <Text style={styles.modalTitleText}>Подтвердите заявку</Text>
                    <View style={styles.titleBlock}>
                        <View style={[styles.blockTable, styles.nameBlock]}>
                            <Text style={styles.titleText}>Наименование</Text>
                        </View>
                        <View style={[styles.blockTable, styles.characterBlock]}>
                            <Text style={styles.titleText}>е/и</Text>
                        </View>
                        <View style={[styles.blockTable, styles.inputBlock]}>
                            <Text style={styles.titleText}>кол-во</Text>
                        </View>
                    </View>
                    <View style={styles.modalFlatList}>
                        <FlatList
                            data={itemRequest}
                            keyExtractor={(menu) => menu.name}
                            refreshing={true}
                            renderItem={({item}) => <FormItemModal Item={item} /> }
                        />
                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.buttonWrap}
                            onPress={() => acceptRequest()}
                        >
                            <Text style={styles.buttonText}>Подтвердить</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonWrap}
                            onPress={() => canselRequest()}
                        >
                            <Text style={styles.buttonText}>Назад</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
        <View style={styles.center}>
                <View style={styles.titleBlock}>
                    <View style={[styles.blockTable, styles.nameBlock]}>
                        <Text style={styles.titleText}>Наименование</Text>
                    </View>
                    <View style={[styles.blockTable, styles.characterBlock]}>
                        <Text style={styles.titleText}>е/и</Text>
                    </View>
                    <View style={[styles.blockTable, styles.inputBlock]}>
                        <Text style={styles.titleText}>кол-во</Text>
                    </View>
                </View>
                <View style={styles.flatList}>
                    <FlatList
                        data={formData}
                        keyExtractor={(menu) => menu.name}
                        refreshing={true}
                        renderItem={({item}) => <FormItem Item={item} /> }
                    />
                </View>
                <TouchableOpacity
                    style={itemRequest.length ? styles.buttonWrap : styles.buttonWrapDisabled}
                    onPress={() => postRequest()}
                    disabled={itemRequest.length ? false : true}
                >
                    <Text style={ itemRequest.length ? styles.buttonText : styles.buttonTextDisabled}>Отправить</Text>
                </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    preloader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
        bottom: 0,
        backgroundColor: '#fff'
    },
    buttonWrap:{
        width: 130,
        height: 35,
        marginBottom: 10,
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    buttonWrapDisabled:{
        width: 130,
        height: 35,
        marginBottom: 10,
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_DISABLED_BG,
    },
    modalButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    modalCenter: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeedea',
    },
    buttonText: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_MAIN_DARK,
        textAlign: 'center',
        fontSize: 15,
    },
    buttonTextDisabled: {
        fontFamily: THEME.FONT_BOLD,
        color: THEME.COLOR_MAIN_DISABLED_FONT,
        textAlign: 'center',
        fontSize: 15,
    },
    center: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBlock: {
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: THEME.COLOR_MAIN_LIGHT
    },
    blockTable: {
        borderStyle: 'solid',
        borderColor: THEME.COLOR_MAIN_DARK,
        borderWidth: 1,
        padding: 2,
        paddingVertical: 5,
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
    titleText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    modalTitleText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        color: THEME.COLOR_MAIN_DARK
    },
    flatList: {
        height: "85%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 25,
    },
    modalFlatList: {
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center',
    },
})