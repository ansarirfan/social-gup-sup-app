import axios from 'axios'


const API = axios.create({ baseURL: 'https://social-gup-sup-app.onrender.com/' });

export const getMessage = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);
