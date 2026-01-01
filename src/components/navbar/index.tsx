import { Home, Search, Ticket, User } from 'lucide-react-native';
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Navbar() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.iconContainer}>
                <Home color={styles.label.color} size={styles.label.fontSize + 12}/>
                <Text style={styles.label}>Início</Text>
            </View>
            <View style={styles.iconContainer}>
                <Search color={styles.label.color} size={styles.label.fontSize + 12}/>
                <Text style={styles.label}>Pesquisar</Text>
            </View>
            <View style={styles.iconContainer}>
                <Ticket color={styles.label.color} size={styles.label.fontSize + 12}/>
                <Text style={styles.label}>Pedidos</Text>
            </View>
            <View style={styles.iconContainer}>
                <User color={styles.label.color} size={styles.label.fontSize + 12}/>
                <Text style={styles.label}>Perfil</Text>
            </View>
        </View>
    );
}