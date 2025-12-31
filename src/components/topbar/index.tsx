import { Text, View } from "react-native";
import { styles } from "./styles";

export default function TopBar() {
    /* TODO -> Pegar o endereço via consulta do endereço padrão ao usuário do jwt. */
    const address = 'Rua Camarão de Marte, 1234';
    
    return (
        <View style={styles.wrapper}>
            <Text style={styles.address}>{address}</Text>
        </View>
    )
}