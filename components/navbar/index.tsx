import { Home, Search, Ticket, User } from 'lucide-react-native';
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Navbar() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.iconContainer}>
                <Home/>
                <Text>Início</Text>
            </View>
            <View style={styles.iconContainer}>
                <Search/>
                <Text>Pesquisar</Text>
            </View>
            <View style={styles.iconContainer}>
                <Ticket/>
                <Text>Pedidos</Text>
            </View>
            <View style={styles.iconContainer}>
                <User/>
                <Text>Perfil</Text>
            </View>
        </View>
    );
}