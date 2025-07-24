import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userToken: localStorage.getItem("userToken") || null,
    user: JSON.parse(localStorage.getItem("userAdmin")) || null,
    status: false,
  }),
  getters: {
    isLoggedIn: (state) => {
      return !!state.userToken;
    },
  },
  actions: {
    login(userToken, user) {
      this.userToken = userToken;
      this.user = user;
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("userAdmin", JSON.stringify(user));
    },
    logout() {
      this.userToken = null;
      this.user = null;
      localStorage.removeItem("userAdmin");
      localStorage.removeItem("userToken");
    }
  },
});
