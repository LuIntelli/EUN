import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";
import { setActivePinia, createPinia } from "pinia";

setActivePinia(createPinia());
const BaseUrl = import.meta.env.VITE_BASE_URL;
// const auth = useAuthStore();
const router = useRouter();
const token = localStorage.getItem("userToken");
const auth = useAuthStore();
if (token == null) {
  console.log(token);
}
// token = null;  
console.log(token);

const noApi = axios.create({
  baseURL: BaseUrl,
});

const api = axios.create({
  baseURL: BaseUrl,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  // },
});
api.interceptors.request.use((config) => {
  const token = () => {
    try {
      const { userToken: my_token } = useAuthStore();
      return my_token;
      // return JSON.parse(sessionStorage.getItem("state"))?.auth?.user?.token
      //   ?.access;
    } catch (e) {
      return null;
    }
  };

  config.headers["Authorization"] = `Bearer ${token()}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("401 Unauthorized – intercepted");
      // redirect to login, show message, etc.
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
        console.log(error, "Unauthorized access, redirecting to login");
      }
      // Optionally, you can clear the userToken or perform other actions
      console.log("Log out, redirecting to login");
      auth.logout();
    }

    return Promise.reject(error);
  }
);

export default api;
export { BaseUrl, noApi };
