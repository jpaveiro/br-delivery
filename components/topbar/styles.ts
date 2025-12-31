import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
    wrapper: {
        position: 'fixed',
        width: '100%',
        paddingTop: 60,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    address: {
        color: theme.colors.text,
        fontSize: theme.fonts.size.regular,
        textAlign: 'center'
    }
});