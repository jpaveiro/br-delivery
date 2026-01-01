import { theme } from '@/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 10,
        paddingVertical: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#ffffffff',
        overflow: 'hidden',
        zIndex: 1000
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
  },

  label: {
    fontSize: theme.fonts.size.tiny,
    color: '#666',
    paddingTop: 6
  }
});