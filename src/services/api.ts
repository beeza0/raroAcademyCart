import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = 'http://localhost:3001';

api.interceptors.request.use(

    async (config: any) => {
        config.url = `${api.defaults.baseURL}${config.url}`;
        return config;
    },
    error => {
        Promise.reject(error);
    },
);

export default api;