//nơi cấu hình base cho axios
import axios from 'axios';
const apiAxios = axios .create({
    baseURL: 'https://6291d2029d159855f0809d06.mockapi.io'
});

export default apiAxios;