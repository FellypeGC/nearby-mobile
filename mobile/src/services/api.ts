import axios from 'axios';

export const api = axios.create({
  // Base URL for API requests (deve se trocar o IP conforme a rede)
  baseURL: 'http://192.168.100.16:3333',
  timeout: 10000,
})