import { createRouter, createWebHistory } from "vue-router";
import Login from "../Views/Login.vue";
import Register from "../Views/Register.vue";
import Home from "../Views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/coursedetails",
      name: "course-details",
      component: Register,
    },
  ],
});

export default router;
