import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {MaterialIcons} from "@expo/vector-icons";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {OfficeScreen} from "../screens/OfficeScreen";
import {clearRequestOffice} from "../store/actions/clearRequestOffice";
import {getFormOffice} from "../store/actions/getFormOffice";

const Stack = createStackNavigator();

export const OfficeNavigation = () =>  {
    const dispatch = useDispatch()

    const clearForm = () => {
        dispatch(clearRequestOffice())
    }

    const updateForm = async () => {
        await dispatch(getFormOffice())
        dispatch(clearRequestOffice())
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
            <Stack.Screen name="Заявка на расходники" component={OfficeScreen} />
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




