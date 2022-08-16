import React from "react";
import {Text, Image, StyleSheet, View, Linking, TouchableOpacity} from "react-native";
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import { THEME } from "../theme";
import {KitchenNavigation} from "./KitchenNavigation";
import {userLogout} from "../store/actions/userLogout";
import {AboutAppNavigation} from "./AboutAppNavigation";
import {MainNavigation} from "./MainNavigation";
import {BarNavigation} from "./BarNavigation";

function CustomDrawerContent(props) {
    const currentYear = new Date().getFullYear()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user.userInfo)
    const userDisplayName = useSelector(state => state.user.userAuth)
    // console.log('UID', firebase.auth().currentUser.uid)
    // console.log(userDisplayName)

    const signOut = () => {
        if (firebase.auth().currentUser) {
            firebase.auth().signOut().then(() => {
                dispatch(userLogout())
            })
                .catch(error => console.log('!!!', error))
        }
    }

    return (
        //<DrawerContentScrollView {...props}>
            <View style={styles.mainWrapper}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo2.png')}
                    />
                    <View style={styles.infoBlock}>
                        <Text style={styles.infoBlockTitle}>Привет!</Text>
                        <Text style={styles.infoBlockText}>{userDisplayName}</Text>
                        <Text style={{...styles.infoBlockTitle, marginTop: 'auto'}}>Должность</Text>
                        <Text style={styles.infoBlockText}>{userData.jobTitle}</Text>
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
                name="Главная"
                component={MainNavigation}
                options={{
                    drawerIcon: ({focused}) => <AntDesign
                        name='home'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />

            <Drawer.Screen
                name="Кухня"
                component={KitchenNavigation}
                options={{
                    drawerIcon: ({focused}) => <MaterialCommunityIcons
                        name='food-turkey'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />

            <Drawer.Screen
                name="Бар"
                component={BarNavigation}
                options={{
                    drawerIcon: ({focused}) => <MaterialIcons
                        name='local-bar'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />

            <Drawer.Screen
                name="О приложении"
                component={AboutAppNavigation}
                options={{
                    drawerIcon: ({focused}) => <AntDesign
                        name='info'
                        size={iconSize}
                        color={focused ? THEME.COLOR_MAIN_LIGHT : THEME.COLOR_MAIN_DARK}
                    />
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
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
    infoBlockTitle:{
        color: THEME.COLOR_MAIN_DARK,
        fontWeight: 'bold',
    },
    infoBlockText:{
        color: THEME.COLOR_MAIN_DARK,
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
    basketMarker: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
})