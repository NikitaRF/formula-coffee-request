import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import {AboutAppScreen} from "../screens/AboutAppScreen";
import {HeaderMenuButton} from "../components/AppHeaderIcon";


const Stack = createStackNavigator();

export const AboutAppNavigation = () =>  {

    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <HeaderMenuButton onPress={() => navigation.toggleDrawer()} />
                ),
            })}
        >
            <Stack.Screen name="О приложении" component={AboutAppScreen} />
        </Stack.Navigator>
    );
}