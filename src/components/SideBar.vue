<template>
  <div
    class="dashboard top-[100px] bg-[rgba(43,54,116,1)] flex flex-col items-center py-[100px] w-[265px] min-h-screen justify-between"
  >
    <div class="flex gap-10 flex-col">
      <!-- <RouterLink
        to="/"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="fa fa-home"></i>
        Home
      </RouterLink> -->
      <RouterLink
        to="/pages"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-th-large"></i>

        Pages
      </RouterLink>
      <RouterLink
        to="/blog"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="fa fa-newspaper"></i>

        Blog
      </RouterLink>
      <RouterLink
        to="/admission"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-building"></i>
        Admission
      </RouterLink>
      <RouterLink
        to="/core"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-building"></i>
        Core
      </RouterLink>
      <RouterLink
        to="/courses"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-building"></i>
        Courses
      </RouterLink>

      <RouterLink
        to="/event"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-calendar"></i>

        Events
      </RouterLink>

      <RouterLink
        to="/staffs"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-users"></i>
        Staffs
      </RouterLink>
      <RouterLink
        to="/scholarship"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-users"></i>
        Scholarship
      </RouterLink>
      
      <RouterLink
        to="/faculties-department"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-users"></i>
        Faculties & Department
      </RouterLink>
      <RouterLink
        to="/adminusers"
        class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
      >
        <i class="pi pi-users"></i>
        Admin Users
      </RouterLink>
      <!-- <div class="settings border-t border-[rgba(255,255,255,0.7)] pt-10">
        <RouterLink
          to="/settings"
          class="flex gap-4 font-[400] items-center text-[16px] leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.75)]"
        >
          <i class="pi pi-cog"></i>
          University Settings
        </RouterLink>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const links = computed(() => {
  if (route.path === "/invigilator") {
    return [
      {
        name: "Examination",
        path: "/invigilator/examination",
        img: Exam,
      },
      {
        name: "Settings",
        path: "/invigilator/settings",
        img: Setting,
      },
    ];
  }

  // return [];
});
</script>
