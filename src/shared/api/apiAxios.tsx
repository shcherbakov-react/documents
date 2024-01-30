import axios from 'axios';

export const $apiAxios = axios.create({
    baseURL: 'http://185.22.61.73:8088',
});

