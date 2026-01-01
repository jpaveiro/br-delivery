import api from '@/src/services/http-service';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Restaurant {
    id: number;
    title: string
    thumbnailUrl: string
}

export default function RestaurantsFeed() {
    const [data, setData] = useState<Restaurant[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        const handleFetch = async () => {
            try {
                const response = await api.request<Restaurant[]>({
                    url: '/photos', // Adaptação temporária, TODO: Trocar API para a correta
                    method: 'get',
                    signal: controller.signal
                });
                setData(response.data)
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
        </View>
    )
}