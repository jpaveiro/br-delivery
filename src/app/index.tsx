import Navbar from "@/components/navbar";
import TopBar from "@/components/topbar";
import { theme } from '@/theme';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <TopBar/>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Hello, World!</Text>
                <Text>linkedin.com/in/jpaveiro</Text>
            </View>
            <Navbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    
    title: { 
        fontWeight: 'bold',
        fontSize: theme.fonts.size.title
    }
})