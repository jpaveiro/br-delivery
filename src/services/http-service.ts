import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

export default api;