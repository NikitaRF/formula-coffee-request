import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import React from "react";
import {HeaderMenuButton} from "../components/AppHeaderIcon";

const Stack = createStackNavigator();
export const MainNavigation = () =>  {

    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <HeaderMenuButton onPress={() => navigation.toggleDrawer()} />
                ),
            })}
        >
            <Stack.Screen name="MainHome" component={MainScreen} options={{ title: 'Главная' }} />
        </Stack.Navigator>
    );
}




