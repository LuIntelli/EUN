<template>
  <section class="body">
    <main class="flex gap-5 justify-between relative top-[0px] w-full">
      <div class="main-content w-full p-5">
        <div class="top border-b-2 py-2 border-[rgba(235,164,20,1)]">
          <h2 class="font-bold mainTitle">Faculties</h2>
        </div>
        <div class="flex items-center justify-between my-5">
          <div
            class="pages flex items-center gap-2 border-b-2 my-5 py-2 border-[rgba(80,66,66,1)] w-[350px]"
          >
            <i class="fa fa-circle text-[rgba(13,6,45,1)] text-[8px]"></i>
            <h2
              class="font-bold text-[rgba(13,6,45,1)] flex items-center gap-3"
            >
              Faculties List
              <span
                @click="toggleCategory"
                class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                ><i class="fa fa-plus text-white text-[10px]"></i
              ></span>
            </h2>
          </div>
          <div class="relative w-full max-w-md">
            <!-- Search Icon (Font Awesome) -->
            <span
              class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"
            >
              <i class="fa fa-search text-[rgba(107,114,128,1)]"></i>
            </span>

            <!-- Input Field -->
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search by ID, Email, or Phone"
              class="w-full pl-[40px] pr-[15px] py-[13px] border border-[rgba(229,231,235,1)] rounded-[16px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <section class="grid grid-cols-3 gap-[15px]">
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/">
                Faculty of Science & Technology
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-2 items-center"
                >
                  <i class="fa fa-address-book text-[rgba(120,116,134,1)]"></i>

                  30 Lecturers
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-2 items-center"
                >
                  <i class="pi pi-file align-middle"></i><span>15 Staffs</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/faculties/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] flex items-center justify-center h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/about"> About </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/about/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/admission">
                Admission
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/admission/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/faculties">
                Faculties
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/faculty/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/courses">
                Courses
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/courses/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/footer"> Footer </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <button
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </button>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- More Pages -->
        <div
          class="pages flex items-center gap-2 border-b-2 my-5 py-2 border-[rgba(66,58,197,1)] w-[350px]"
        >
          <i class="fa fa-circle text-[rgba(66,58,197,1)] text-[8px]"></i>
          <h2 class="font-bold text-[rgba(13,6,45,1)]">More Pages</h2>
          <span
            class="bg-[rgba(36,173,241,1)] w-[20px] flex justify-center items-center rounded-full h-[20px]"
            ><i class="fa fa-plus text-white text-[10px]"></i
          ></span>
        </div>
        <section class="grid grid-cols-3 gap-[15px]">
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/events"> Events </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/events/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/research">
                Research
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <button
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </button>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/scholarship">
                Scholarship
              </router-link>
              <div class="state text-end">
                <span class="text-green-500 font-bold"
                  >EUN Admin DashBoard</span
                >
              </div>
            </div>
            <div class="body rounded-[8px] my-2 w-full">
              <img :src="HomeImage" class="w-full rounded-[8px]" alt="" />
            </div>
            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-sort-amount-up text-[rgba(120,116,134,1)]"></i
                  >5 Selections
                </button>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-image text-[20px]"></i><span>4 Images</span>
                </button>
              </div>
              <div class="gap-4 flex items-center">
                <router-link
                  to="/scholarship/edit"
                  class="w-[30px] flex items-center justify-center h-[30px] bg-blue-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-pen text-blue-500 font-bold text-[12px]"></i>
                </router-link>
                <button
                  class="w-[30px] h-[30px] bg-red-100 shadow-sm rounded-full"
                >
                  <i class="fa fa-trash text-red-500 font-bold text-[12px]"></i>
                </button>
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
import HomeImage from "@/assets/imgs/FacultyImages/faculty.jpg";
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
