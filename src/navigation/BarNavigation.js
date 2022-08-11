import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {MaterialIcons} from "@expo/vector-icons";
import {View} from "react-native";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {BarScreen} from "../screens/BarScreen";
import {clearRequestBar} from "../store/actions/clearRequestBar";
import {getFormBar} from "../store/actions/getFormBar";

const Stack = createStackNavigator();

export const BarNavigation = () =>  {
    const dispatch = useDispatch()

    const clearForm = () => {
        dispatch(clearRequestBar())
    }
    const updateForm = async () => {
        await dispatch(getFormBar())
        dispatch(clearRequestBar())
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

                    <View style={{marginRight: 20, flexDirection: 'row'}}>
                        <MaterialIcons
                            style={{marginRight: 25}}
                            name="file-download"
                            size={24}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => updateForm()}
                        />
                        <MaterialIcons
                            name="refresh"
                            size={24}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => clearForm()}
                        />
                    </View>
                )
            })}
        >
            <Stack.Screen name="Заявка бар" component={BarScreen} />
        </Stack.Navigator>
    );
}




