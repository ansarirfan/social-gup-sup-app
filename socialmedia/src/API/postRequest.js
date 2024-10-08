import axios from 'axios'


const API = axios.create({baseURL: "https://social-gup-sup-app.onrender.com/"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const getTimeLinePosts  = (id) => API.get(`/post/${id}/timeline`)
export const likePost  = (id, userId) => API.put(`/post/${id}/like`, {userId:userId})
