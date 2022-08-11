import {createStackNavigator} from '@react-navigation/stack';
import {KitchenScreen} from "../screens/KitchenScreen";
import React, {useState} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {MaterialIcons} from "@expo/vector-icons";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {THEME} from "../theme";
import {getFormKitchen} from "../store/actions/getFormKitchen";
import {useDispatch, useSelector} from "react-redux";
import {clearRequestKitchen} from "../store/actions/clearKitchenRequest";

const Stack = createStackNavigator();

export const KitchenNavigation = () =>  {
    const dispatch = useDispatch()


    const updateForm = async () => {
        await dispatch(getFormKitchen())
        dispatch(clearRequestKitchen())
    }


    return (
        <Stack.Navigator
        screenOptions={({ navigation }) => ({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
                    <Item title='Menu'
                    iconName='ios-menu'
                    onPress={() => navigation.toggleDrawer()}/>
                </HeaderButtons>
            ), headerRight: () => (
                <View style={{marginRight: 20}}>
                    <MaterialIcons
                        name="update"
                        size={24}
                        color={THEME.COLOR_MAIN_DARK}
                        onPress={() => updateForm()}
                    />
                </View>
            )
        })}
        >
            <Stack.Screen name="Заявка кухня" component={KitchenScreen} />
        </Stack.Navigator>
    );
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
})




