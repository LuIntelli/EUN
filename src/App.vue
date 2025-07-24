<script setup>
import Login from "./components/Login.vue";
import { RouterView } from "vue-router";
import { NMessageProvider } from "naive-ui";
import { useAuthStore } from "./stores/auth.js";



const auth = useAuthStore();
document.body.addEventListener("click", (e) => {
  if(!e.target.classList.contains("status_")) {
    auth.status = false;
  }
});
</script>

<template>
  <n-message-provider>
    <div class="bg-gray-100 w-full h-full min-h-screen mx-auto">
      <div class="main">
        <RouterView></RouterView>
      </div>
    </div>
  </n-message-provider>
</template>

<style scoped></style>
