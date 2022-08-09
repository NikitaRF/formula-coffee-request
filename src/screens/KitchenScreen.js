import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";

import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {getFormKitchen} from "../store/actions/getFormKitchen";
import {FormItem} from '../components/FormItem'



export const KitchenScreen = () => {
    const dispatch = useDispatch()
    const formData = useSelector(state => state.menu.formKitchen)
    // console.log("FORMDATA", formData)

    const itemRequest = useSelector(state => state.menu.requestKitchen)
    console.log('ItemREQUEST', itemRequest)

    const [state, setState] = useState({
        isLoading: false
    })

    useEffect(() => {
        setState({
            ...state,
            isLoading: true,
        })
        dispatch(getFormKitchen())
        setState({
            ...state,
            isLoading: false,
        })
    }, [])

    if(state.isLoading){
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    return (
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
        </View>
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
    flatList: {
        height: "95%",
        alignItems: 'center',
        justifyContent: 'center',
    },
})




// // выборка из БД, пример
// const db = firebase.firestore();
// db.collection('users').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         let res = doc.data().historyOfOrder.filter(function (el) {
//             return el.status === 'В обработке'
//         })
//         //console.log(res)
//     });
// })

// const [refreshing, setRefreshing] = useState(false);
// const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     // dispatch(getOrders(menuSelected.currentMenuSelected)).then(() => setRefreshing(false));
// }, [menuSelected.currentMenuSelected]);
//
// const menuToggle = (item) => {
//     setMenuSelected({
//         currentMenuSelected: item
//     })
// }