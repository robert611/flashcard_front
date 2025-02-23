import axios from "axios";

const API_URL = "http://localhost:8050/api";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = async () => {
  const token = localStorage.getItem("token");
  await axios.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });
  localStorage.removeItem("token");
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/user`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
};
