import React, { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import { fonts } from './src/bootstrap';
import store from './src/store';
import { Root } from './src/components/Root';

// Не прятать нативный splash, пока не загрузятся шрифты.
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts(fonts);

    const onLayoutRootView = useCallback(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Provider store={store}>
                <Root />
            </Provider>
        </GestureHandlerRootView>
    );
}
