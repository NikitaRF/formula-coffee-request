import {createStackNavigator} from '@react-navigation/stack';
import {KitchenScreen} from "../screens/KitchenScreen";
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";


const Stack = createStackNavigator();

export const KitchenNavigation = () =>  {

    return (
        <Stack.Navigator
        screenOptions={({ navigation }) => ({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
                    <Item title='Menu'
                    iconName='ios-menu'
                    onPress={() => navigation.toggleDrawer()}/>
                </HeaderButtons>
            ),
        })}
        >
            <Stack.Screen name="Заявка кухня" component={KitchenScreen} />
        </Stack.Navigator>
    );
}




