import { theme } from "@/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "../components/navbar";
import RestaurantsFeed from "../components/restaurants-feed";
import TopBar from "../components/topbar";

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <TopBar/>
            <ScrollView style={styles.mainContentWrapper}>
                <View style={styles.topContent}>
                    <Text style={styles.topLabel}>Olá, João Pedro!</Text>
                </View>

                <Text style={styles.feedTitle}>Últimas lojas</Text>
                <ScrollView style={styles.horizontalContentWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <RestaurantsFeed/>
                    </View>
                </ScrollView>

                <Text style={styles.feedTitle}>Mais pedidos</Text>
                <ScrollView style={styles.horizontalContentWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <RestaurantsFeed/>
                    </View>
                </ScrollView>
            </ScrollView>
            <Navbar/>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContentWrapper: {
        marginTop: 103, // Tamanho total do topbar
        marginBottom: 73, // Tamanho total da navbar
        marginLeft: '5%'
    },

    verticalContentWrapper: {
        borderWidth: 1,
        borderColor: 'red'
    },

    horizontalContentWrapper: {
        borderWidth: 1,
        borderColor: 'red'
    },

    topContent: {
        marginBottom: 20
    },

    topLabel: {
        fontSize: theme.fonts.size.large
    },

    feedTitle: {
        marginTop: 20,
        fontSize: theme.fonts.size.large 
    }
});