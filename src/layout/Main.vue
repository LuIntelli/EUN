<template>
  <div class="flex gap-6 min-h-screen">
    <Header />
    <div class="main h-[800px] hide-scrollbar overflow-y-auto fixed left-0 top-[100px]">
      <SideBar />
    </div>
    <div class="views w-full ml-[290px] mt-[130px]">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import Header from "@/components/Header.vue";
</script>
