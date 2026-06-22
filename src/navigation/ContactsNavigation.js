import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {HeaderMenuButton} from "../components/AppHeaderIcon";
import {ContactsScreen} from "../screens/ContactsScreen";


const Stack = createStackNavigator();

export const ContactsNavigation = () =>  {

    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <HeaderMenuButton onPress={() => navigation.toggleDrawer()} />
                ),
            })}
        >
            <Stack.Screen name="ContactsHome" component={ContactsScreen} options={{ title: 'Контакты' }} />
        </Stack.Navigator>
    );
}