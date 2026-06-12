import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' // Substitua pela porta onde seu BACK-END está rodando
});

export default api;