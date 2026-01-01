import api from '@/src/services/http-service';
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

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
            {data.slice(0, 20).map(r => (
                <View key={r.id}>
                    <Image 
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/pt/b/bf/SpongeBob_SquarePants_personagem.png"}}
                        resizeMode='cover'
                        onError={(e) => console.log(e)}
                        style= {{ width: 100, height: 100 }}/>
                    <Text>{r.title}</Text>
                </View>
            ))}
        </View>
    )
}