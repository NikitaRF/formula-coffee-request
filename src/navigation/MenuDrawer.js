import React, {useEffect, useState} from "react";
import {Text, Image, StyleSheet, View, Linking, Button, TouchableOpacity} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {AntDesign, FontAwesome, FontAwesome5, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";


import { THEME } from "../theme";
import {OrdersNavigation} from "./OrdersNavigation";
import {userLogout} from "../store/actions/userLogout";
import {MenuNavigation} from "./MenuNavigation";




function CustomDrawerContent(props) {
    const dispatch = useDispatch()
    const userDisplayName = useSelector(state => state.user.userAuth)
    //console.log('UID', firebase.auth().currentUser.uid)


    const signOut = () => {
        if (firebase.auth().currentUser) {
            firebase.auth().signOut().then(() => {
                dispatch(userLogout())
            })
                .catch(error => console.log('!!!', error))
        }
    }

    const currentYear = new Date().getFullYear()
    return (
        //<DrawerContentScrollView {...props}>
            <View style={styles.mainWrapper}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo2.png')}
                    />
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoBlockText}>Привет!</Text>
                        <Text style={styles.infoBlockText}>{userDisplayName}</Text>
                        <TouchableOpacity
                            style={styles.buttonSignOutWrap}
                            onPress={() => signOut()}
                        >
                                <Text style={styles.buttonSignOutText}>Выйти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <DrawerItemList {...props} />
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.socials}>
                        <AntDesign name="facebook-square" onPress={() => Linking.openURL('https://www.facebook.com/FormulaCoffee.SRG/')} size={32} color={THEME.COLOR_MAIN_DARK} />
                        <AntDesign name="instagram" size={32} onPress={() => Linking.openURL('https://www.instagram.com/formula__coffee/')} color={THEME.COLOR_MAIN_DARK} />
                        <Entypo name="tripadvisor" size={32} onPress={() => Linking.openURL('https://www.tripadvisor.ru/Restaurant_Review-g737146-d19431381-Reviews-Formula_Coffee-Surgut_Surgutsky_District_Khanty_Mansi_Autonomous_Okrug_Yugra_Tyu.html')} color={THEME.COLOR_MAIN_DARK} />
                    </View>
                    <Text style={styles.copyrightText}> © {currentYear} Формула кофе</Text>
                </View>
            </View>

        //</DrawerContentScrollView>
    );
}

export const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();
    const iconSize = 20;

    return (
        <Drawer.Navigator
            drawerType='front'
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeTintColor: THEME.COLOR_MAIN_LIGHT,
                inactiveTintColor: THEME.COLOR_MAIN_DARK,
            }}
        >

            <Drawer.Screen
                name="Заказы"
                component={OrdersNavigation}
                options={{
                    drawerIcon: ({focused}) => <FontAwesome5
                        name='shopping-bag'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
            <Drawer.Screen
                name="Меню"
                component={MenuNavigation}
                options={{
                    drawerIcon: ({focused}) => <MaterialIcons
                        name='menu-book'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />

        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    mainWrapper:{
        flexDirection: 'column',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 35,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 15,

    },
    infoBlock:{
        height: 120,
        maxWidth: '50%',
    },
    infoBlockText:{
        color: THEME.COLOR_MAIN_DARK
    },
    logo: {
        width: 95,
        maxWidth: '50%',
        height: 120,
    },
    bottomWrapper: {
        alignItems: 'center',
        marginTop: 'auto',
    },
    socials:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,

    },
    copyrightText:{
        color: THEME.COLOR_MAIN_DARK
    },
    buttonSignOutWrap:{
        marginTop: 'auto',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: THEME.COLOR_MAIN_LIGHT,
    },
    buttonSignOutText: {
        fontSize: 14,
        textAlign: 'center',
        color: THEME.COLOR_MAIN_DARK
    },
    basketMarkerWrap: {
        position: 'absolute',
        right: 0,
        top: -12,

    },
    markerCircle: {
        //backgroundColor: THEME.COLOR_MAIN_LIGHT,

    },
    basketMarker: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
})