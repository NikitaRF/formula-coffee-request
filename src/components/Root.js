import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {SignInScreen} from "../screens/SignInScreen";
import {MenuDrawer} from "../navigation/MenuDrawer";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    },

};

export const Root = () => {
    const isAuth = useSelector(state => state.user.userAuth)
    //console.log("Состояние авторизации в редакс", isAuth)

    const Stack = createStackNavigator ( ) ;

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName='SignInScreen'
            >
                {isAuth == null ? (
                    <>
                        <Stack.Screen name="SignInScreen" component={SignInScreen} />
                    </>
                ) : (
                    <Stack.Screen name="MenuDrawer" component={MenuDrawer} />
                )}

            </Stack.Navigator>
        </NavigationContainer>
        )
}