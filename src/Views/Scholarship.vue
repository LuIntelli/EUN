<template>
  <section class="body relative top-[-30px]">
    <main class="flex gap-5 justify-between relative w-full">
      <div class="main-content w-full p-5">
        <div class="py-2">
          <!-- <h2 class="font-bold mainTitle">Pages</h2> -->
        </div>
        <div
          class="pages flex items-center gap-2 my-1 py-2 border-[#d1cfcf] w-[350px]"
        >
          <i class="fa fa-circle text-[rgba(61,58,121,1)] text-[8px]"></i>
          <h2 class="font-bold text-[rgba(61,58,121,1)] text-lg">
            Scholarship
          </h2>
        </div>
        <section class="grid grid-cols-3 gap-[15px]">
          <div
            class="border-[1.5px] bg-white border-[#f5f5f5] flex flex-col gap-10 justify-between rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link
                class="font-bold text-lg text-[rgba(61,58,121,1)]"
                to="/scholarship/lists"
              >
                Scholarship</router-link
              >
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <router-link
                  to="/scholarship/create"
                  class="p-2 px-5 flex items-center gap-2 font-medium flex items-center justify-center h-[30px] bg-green-500 shadow-sm rounded-full"
                  >Create
                  <i class="fa fa-plus text-blue-100 font-bold text-[12px]"></i>
                </router-link>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/scholarship/lists"
                  class="p-2 px-5 flex items-center font-medium gap-2 flex items-center justify-center h-[30px] bg-blue-500 shadow-sm rounded-full"
                >
                  view<i
                    class="fa fa-eye text-blue-100 font-bold text-[12px]"
                  ></i>
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[#f5f5f5] flex flex-col gap-10 justify-between bg-white rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link
                class="font-bold text-lg text-[rgba(61,58,121,1)]"
                to="/scholarship/list-page/lists"
              >
                Scholarship Lists Pages
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <router-link
                  to="/scholarship/list-page/create"
                  class="p-2 px-5 flex items-center gap-2 font-medium flex items-center justify-center h-[30px] bg-green-500 shadow-sm rounded-full"
                  >Create
                  <i class="fa fa-plus text-blue-100 font-bold text-[12px]"></i>
                </router-link>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/scholarship/list-page/lists"
                  class="p-2 px-5 flex items-center font-medium gap-2 flex items-center justify-center h-[30px] bg-blue-500 shadow-sm rounded-full"
                >
                  view<i
                    class="fa fa-eye text-blue-100 font-bold text-[12px]"
                  ></i>
                </router-link>
                <!-- <button
                  class="p-2 w-[30px] justify-center h-[30px] bg-red-500 flex items-center gap-2 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-100 font-bold text-[12px]"></i>
                </button> -->
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </section>
</template>

<script setup>
import Logo from "@/assets/logo.jpg";
import HomeImage from "@/assets/imgs/hero.jpg";
import SideBar from "../components/SideBar.vue";
import { ref } from "vue";

// Active and InActive States
let home,
  about,
  scholarship,
  faculties,
  courses,
  footer,
  admission,
  events,
  research = ref(false);
</script>
