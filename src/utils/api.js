import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";
import { setActivePinia, createPinia } from 'pinia'

setActivePinia(createPinia());
const BaseUrl = import.meta.env.VITE_BASE_URL;
// const auth = useAuthStore();
const router = useRouter();
const token = localStorage.getItem("userToken");
const auth = useAuthStore();
if(token == null) {
  console.log(token)
}
// token = null;
console.log(token)

const api = axios.create({
  baseURL: BaseUrl,

});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  config => {
    const userToken = localStorage.getItem('userToken');
    const excludedRoutes = ['/login', '/register']; // Add more if needed

    // Check if current request URL is in the excluded list
    const isExcluded = excludedRoutes.some(route => config.url.includes(route));

    if (!isExcluded && userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  }, 
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {


    if (error.response?.status === 401) {
      console.log('401 Unauthorized – intercepted');
      // redirect to login, show message, etc.
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
      // Optionally, you can clear the token or perform other actions
      auth.logout();
    }
   
    return Promise.reject(error);
  }
);


export default api;
export { BaseUrl };
