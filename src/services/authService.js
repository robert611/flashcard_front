import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const API_URL = "http://localhost:8050/api";

export const register = async (userData) => {
    const authStore = useAuthStore();
    const response = await axios.post(`${API_URL}/register`, userData);
    localStorage.setItem("token", response.data.token);
    authStore.login();

    return response.data;
};

export const login = async (userData) => {
    const authStore = useAuthStore();
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem("token", response.data.token);
    authStore.login();

    return response.data;
};

export const logout = async () => {
    const authStore = useAuthStore();
    const token = localStorage.getItem("token");
    await axios.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });
    authStore.logout();
    localStorage.removeItem("token");
};

export const getUser = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user`, { headers: { Authorization: `Bearer ${token}` } });

    return response.data;
};
