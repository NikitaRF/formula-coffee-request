import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { THEME } from "../theme";

// Кнопка-гамбургер для открытия Drawer. Используется как headerLeft во всех стеках.
// Заменяет прежний react-navigation-header-buttons (несовместим с React Navigation v7).
export const HeaderMenuButton = ({ onPress }) => (
    <Ionicons
        name="menu"
        size={26}
        color={THEME.COLOR_MAIN_DARK}
        style={{ marginLeft: 15 }}
        onPress={onPress}
    />
);
