import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const API_URL = "http://localhost:8050/api";

export const register = async (userData) => {
    const authStore = useAuthStore();
    const response = await axios.post(`${API_URL}/register`, userData);
    authStore.setToken(response.data.token);
    authStore.login();

    return response.data;
};

export const login = async (userData) => {
    const authStore = useAuthStore();
    const response = await axios.post(`${API_URL}/login`, userData);
    authStore.setToken(response.data.token);
    authStore.login();

    return response.data;
};

export const logout = async () => {
    const authStore = useAuthStore();
    const token = authStore.token;
    await axios.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });
    authStore.logout();
    authStore.setToken(null);
};

export const getUser = async () => {
    const authStore = useAuthStore();
    const token = authStore.token;
    const response = await axios.get(`${API_URL}/user`, { headers: { Authorization: `Bearer ${token}` } });

    return response.data;
};
