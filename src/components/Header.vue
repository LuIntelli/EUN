<template>
  <header
    class="p-10 py-10 fixed w-full z-20 bg-white flex items-center justify-between gap-10 h-[110px] shadow-sm"
  >
    <a href="/" class="block">
      <img
        :src="Logo"
        alt="European University Logo"
        class="w-[100px]"
        title="European University Logo"
      />
    </a>
    <div class="flex items-center rounded-md   gap-5 w-[400px] border shadow-slate-100  py-5 shadow-md relative">
      <!-- <div class="img user border rounded-l-lg w-[100px] h-[70px]"></div> -->
      <div
        class="user-details flex justify-between px-1 pr-5 w-full items-center"
      >
        <div class="details flex flex-col w-full pl-2 gap-1">
          <h2 class="text-[rgba(61,58,121,1)] w-full font-[600] text-[12px] border-b-2 border-[rgba(61,58,121,1)] pb-2">
           Full Name : {{ auth?.user?.full_name }}
          </h2>
          <h3
            class="text-[rgba(61,58,121,1)] user text-[12px]"
          >
          Username :  {{ auth?.user?.username }}
          </h3>
        </div>
        <div class="toggle">
          <button
            @click="toggleStatus"
            v-if="!auth.status"
            class="border-2 border-[rgba(61,58,121,1)] status_ w-[40px] rounded-full h-[40px] shadow"
          >
            <i class="fa fa-caret-down status_ text-[rgba(61,58,121,1)]"></i>
          </button>
          <button
            @click="toggleStatus"
            v-else
            class="border-2 border-[rgba(61,58,121,1)] w-[40px] status_ rounded-full h-[40px] shadow"
          >
            <i class="fa fa-caret-up status_ text-[rgba(61,58,121,1)]"></i>
          </button>
        </div>
      </div>
      <div
        v-if="auth.status"
        class="links w-full transition-all 3s ease-in-out absolute top-[110px] bg-white shadow-lg rounded-lg p-5"
      >
        <h2 class="text-center text-[rgba(61,58,121,1)] py-3 border-b mb-10">
          Settings <i class="fa fa-cog text-[rgba(61,58,121,1)]"></i>
        </h2>
        <ul class="flex flex-col gap-5">
          <li class="user">
            <router-link
              to="/update-profile/"
              class="text-[rgba(61,58,121,1)] border-b py-1 flex gap-5"
              >Update Profile <i class="pi pi-user"></i
            ></router-link>
          </li>
          <li class="user">
            <router-link
              to="/change-password/"
              class="text-[rgba(61,58,121,1)] py-1 border-b flex items-center gap-2"
              >Change Pasword</router-link
            >
          </li>
          <li class="user">
            <button @click="logout"
              class="bg-[rgba(61,58,121,1)] px-5 text-white py-2 rounded-sm border-b flex items-center gap-2"
              >Logout</button
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from "../assets/logo.jpg";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";

const status = ref(false);
const auth = useAuthStore();
console.log(auth.user);

const showUser = ref(false);
auth.status = status.value;
const toggleStatus = () => {
  auth.status = !auth.status;
};

// Logout function
const logout = () => {
  auth.logout();
  window.location.href = "/login";
};
</script>
