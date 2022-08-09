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

const Stack = createStackNavigator();

export const KitchenNavigation = () =>  {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        isLoading: false
    })

    const updateForm = () => {
        setState({
            ...state,
            isLoading: true,
        })
        dispatch(getFormKitchen())
        setState({
            ...state,
            isLoading: false,
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

})




