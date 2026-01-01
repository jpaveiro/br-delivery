import Navbar from "@/src/components/navbar";
import TopBar from "@/src/components/topbar";
import { ScrollView, StyleSheet, View } from "react-native";
import RestaurantsFeed from "../components/restaurants-feed";

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <TopBar/>
            <ScrollView>
                <View style={styles.contentWrapper}>
                    <RestaurantsFeed/>
                </View>
            </ScrollView>
            <Navbar/>
        </View>

    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        marginTop: 103, // Tamanho total do topbar
        marginBottom: 73, // Tamanho total da navbar
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 1,
        borderColor: 'red'
    }
});