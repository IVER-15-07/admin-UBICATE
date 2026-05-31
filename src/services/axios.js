import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8181/api",
  headers: {
    "Content-Type": "application/json",
    "Accept":       "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status  = error.response?.status;
    const message = error.response?.data?.message ?? error.message;

    console.error("API Error:", { status, message });

    if (status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }

    if (status === 403) {
      window.location.href = "/unauthorized";
    }

    return Promise.reject(error);
  }
);

export default api;