import { Text, View } from "react-native";

import { styles } from "./styles";

export default function TopBar() {
    const address = 'Av. Brig. Faria Lima, xxxx'
    return (
        <View style={styles.wrapper}>
            <Text style={styles.address}>{address}</Text>
        </View>
    )
}