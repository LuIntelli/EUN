<template>
  <section class="body w-full relative">
    <div v-if="category == true" class="absolute w-[50%] left-[25%] z-30 top-5">
      <AddAdmissionCategory :category @toggle="toggleCategory" />
    </div>
    <div v-if="program == true" class="absolute w-[50%] left-[25%] z-30 top-5">
      <AddProgram :program @toggle="toggleProgram" />
    </div>
    <div
      v-if="scholarship == true"
      class="absolute w-[50%] left-[25%] z-30 top-5"
    >
      <AddScholarship :category @toggle="toggleScholarship" />
    </div>
    <div
      v-if="admissionDatesAndDeadlines == true"
      class="absolute w-[50%] left-[25%] z-30 top-5"
    >
      <AddAdmissionDatesAndDeadlines
        :category
        @toggle="toggleAdmissionDatesAndDeadlines"
      />
    </div>

    <main
      class="flex gap-5 bg-gray-100 justify-between relative top-[0px] w-full"
    >
      <div class="main-content w-full p-5">
        <div class="top border-b-2 py-2 border-[rgba(235,164,20,1)]">
          <h2 class="font-bold mainTitle">
            University Programs/Admission/scholarship
          </h2>
        </div>
        <div class="flex items-center justify-between my-5">
          <div
            class="pages flex items-center gap-2 border-b-2 my-5 py-2 border-[rgba(255,165,0,1)] w-[350px]"
          >
            <i class="fa fa-circle text-[rgba(255,165,0,1)] text-[8px]"></i>
            <h2 class="font-bold text-[rgba(13,6,45,1)]">Admission</h2>
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
        <!-- Category -->
        <div class="category my-3">
          <h2
            class="flex items-center gap-3 text-[rgba(107,114,128,1)] font-[600] text-[16px]"
          >
            Category
            <span
              @click="toggleCategory"
              class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
              ><i class="fa fa-plus text-white text-[10px]"></i
            ></span>
          </h2>
        </div>
        <section class="grid grid-cols-3 gap-[15px]">
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/">
                Undergraduate
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/about">
                Direct Entry
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/admission">
                International Students
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Program -->
        <div class="program my-3">
          <h2
            class="flex items-center gap-3 text-[rgba(107,114,128,1)] font-[600] text-[16px]"
          >
            Programs
            <span
              @click="toggleProgram"
              class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
              ><i class="fa fa-plus text-white text-[10px]"></i
            ></span>
          </h2>
        </div>
        <section class="grid grid-cols-4 gap-[15px]">
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/faculties">
                Regular
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/courses">
                Direct Entry
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/footer">
                Direct Entry
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/footer">
                Continuous Learning
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Scholarship -->
        <div
          class="pages flex items-center gap-2 border-b-2 my-5 py-2 border-[rgba(15,174,39,1)] w-[350px]"
        >
          <i class="fa fa-circle text-[rgba(15,174,39,1)] text-[8px]"></i>
          <h2 class="font-[700] text-[rgba(13,6,45,1)] text-[16px]">
            Scholarship
          </h2>
          <span
            @click="toggleScholarship"
            class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
            ><i class="fa fa-plus text-white text-[10px]"></i
          ></span>
        </div>
        <section class="grid grid-cols-4 gap-[15px]">
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/events">
                Merit Based Entry
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/research">
                Early Applicant Discount
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/scholarship">
                Female In Stem Scholarship
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/scholarship">
                Needs Based Grant (Limited)
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <span
                  id="selections"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  6 Requirements
                </span>
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="pi pi-file text-[20px]"></i><span>2 files</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Admission dates and deadlines -->
        <div
          class="pages flex items-center gap-2 border-b-2 my-5 py-2 border-[rgba(66,58,197,1)] w-[350px]"
        >
          <i class="fa fa-circle text-[rgba(66,58,197,1)] text-[8px]"></i>
          <h2 class="font-[700] text-[rgba(13,6,45,1)] text-[16px]">
            Admission dates and deadlines
          </h2>
          <span
            @click="toggleAdmissionDatesAndDeadlines"
            class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
            ><i class="fa fa-plus text-white text-[10px]"></i
          ></span>
        </div>
        <section class="grid grid-cols-4 gap-[15px]">
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/events">
                Application Commences
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-calendar text-[20px]"></i
                  ><span>1st October 2025</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/research">
                Application Deadline
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-calendar text-[20px]"></i
                  ><span>1st October 2025</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/scholarship">
                Application Deadline
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-calendar text-[20px]"></i
                  ><span>1st October 2025</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-[1.5px] border-[rgba(80,66,66,1)] flex flex-col gap-2 rounded-[15px] p-5"
          >
            <div class="top flex justify-between items-center">
              <router-link class="font-bold" to="/scholarship">
                Admission Commences
              </router-link>
              <div class="state text-end">
                <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
            </div>

            <div
              class="text-white flex gap-5 flex-wrap justify-between items-center"
            >
              <div class="actions flex items-center gap-3">
                <button
                  id="images"
                  class="text-gray-500 font-medium flex gap-3 items-center"
                >
                  <i class="fa fa-calendar text-[20px]"></i
                  ><span>1st October 2025</span>
                </button>
              </div>
              <div class="top flex justify-between items-center">
                <div class="state text-end">
                  <n-switch
                    v-model:value="home"
                    class="text-white h-full rounded-full ml-3 p-2"
                  >
                  </n-switch>
                  <span class="text-green-500 font-bold"
                    >EUN Admin DashBoard</span
                  >
                </div>
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
import AddAdmissionCategory from "./HomeCategory/AddAdmissionCategory.vue";
import AddProgram from "./HomeCategory/AddProgram.vue";
import AddScholarship from "./HomeCategory/AddScholarship.vue";
import AddAdmissionDatesAndDeadlines from "./HomeCategory/AddAdmissionDatesAndDeadlines.vue";
import SideBar from "./SideBar.vue";
import { ref } from "vue";

// Active and InActive States
let home,
  category = ref(false),
  scholarship = ref(false),
  admissionDatesAndDeadlines = ref(false),
  program = ref(false),
  faculties,
  courses,
  footer,
  admission,
  events,
  research = ref(false);

// Toggle Category
const toggleCategory = (data) => {
  console.log(data, "sksk", category.value);
  program.value = false;
  scholarship.value = false;
  admissionDatesAndDeadlines.value = false;
  category.value = !category.value || data;
};
// Toggle Program
const toggleProgram = (data) => {
  console.log(data, "sksk", program.value);
  category.value = false;
  scholarship.value = false;
  admissionDatesAndDeadlines.value = false;
  program.value = !program.value || data;
};
// Toggle Category
const toggleScholarship = (data) => {
  console.log(data, "sksk", scholarship.value);
  program.value = false;
  category.value = false;
  admissionDatesAndDeadlines.value = false;
  scholarship.value = !scholarship.value || data;
};
// Toggle Category
const toggleAdmissionDatesAndDeadlines = (data) => {
  console.log(data, "sksk", admissionDatesAndDeadlines.value);
  program.value = false;
  scholarship.value = false;
  category.value = false;
  admissionDatesAndDeadlines.value = !admissionDatesAndDeadlines.value || data;
};
</script>
