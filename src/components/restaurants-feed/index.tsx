import api from '@/src/services/http-service';
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from './styles';
interface Restaurant {
    id: number;
    title: string;
    thumbnailUrl: string;
}

export default function RestaurantsFeed() {
    const [data, setData] = useState<Restaurant[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        const handleFetch = async () => {
            try {
                const restaurants = await api.request<Restaurant[], Restaurant[]>({
                url: "/photos",
                method: "get",
                signal: controller.signal,
                });

                setData(restaurants);

            } catch (error) {
                const err = error as any;
                if (err?.code === 'ERR_CANCELED') return;
            }
        };

        handleFetch();

        return () => controller.abort();
    }, []);
    
    return (
        <View>
            <View style={styles.contentWrapper}>
                {data.slice(0, 20).map(r => (
                    <View style={styles.restaurantContainer} key={r.id}>
                        <Image 
                            source={{ uri: "https://upload.wikimedia.org/wikipedia/pt/b/bf/SpongeBob_SquarePants_personagem.png"}}
                            resizeMode='cover'
                            alt='img'
                            onError={(e) => console.log(e)}
                            style={styles.image}/>
                        <Text style={styles.label}>{r.id}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}