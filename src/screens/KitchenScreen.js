import React, {useCallback, useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
//

export const KitchenScreen = () => {
    const dispatch = useDispatch()
    const formData = useSelector(state => state.menu.form)

    const [menuSelected, setMenuSelected] = useState({
        currentMenuSelected: 'В обработке',
    })

    const [state, setState] = useState({
        isLoading: false
    })

    useEffect(() => {
        setState({
            ...state,
            isLoading: true,
        })
        // dispatch(getOrders(menuSelected.currentMenuSelected))
        setState({
            ...state,
            isLoading: false,
        })
    }, [menuSelected.currentMenuSelected])




    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // dispatch(getOrders(menuSelected.currentMenuSelected)).then(() => setRefreshing(false));
    }, [menuSelected.currentMenuSelected]);

    const menuToggle = (item) => {
        setMenuSelected({
            currentMenuSelected: item
        })
    }

    if(state.isLoading){
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color={THEME.COLOR_MAIN_DARK}/>
            </View>
        )
    }

    return (
        <View style={styles.center}>
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
    lineMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: "5%",
        width: '100%',
        borderWidth: 1,
        borderColor: THEME.COLOR_MAIN_LIGHT,
    },
    menuItemBlock: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    menuItemBlockSelected: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    menuItemText: {
        fontFamily: THEME.FONT_MAIN,
        color: THEME.COLOR_MAIN_DARK,
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