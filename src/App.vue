<script setup>
import Login from "./components/Login.vue";
import { RouterView } from "vue-router";
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <n-message-provider>
    <div class="bg-gray-100 min-h-screen mx-auto  px-3 py-20">
      <div class="main">
        <RouterView></RouterView>
      </div>
    </div>
  </n-message-provider>
</template>

<style scoped></style>
