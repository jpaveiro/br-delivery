import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
    wrapper: {
        top: 0,
        position: 'absolute',
        width: '100%',
        paddingTop: 60,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        overflow: 'hidden',
        zIndex: 1000
    },
    address: {
        color: theme.colors.text,
        fontSize: theme.fonts.size.regular,
        textAlign: 'center'
    }
});