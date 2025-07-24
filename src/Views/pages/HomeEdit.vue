<template>
  <section class="body">
    <div>
      <Header />
    </div>
    <main class="flex gap-5 justify-between relative top-[0px] w-full">
      <div
        class="sidebar fixed top-[90px] left-0 h-[calc(100vh-120px)] w-[250px] hidden md:block z-10"
      >
        <SideBar />
      </div>
      <div class="main-content bg-white w-full py-0 h-full px-5">
        <div class="top border-b-2 py-2 border-[rgba(235,164,20,1)]">
          <router-link
            to="/pages"
            class="font-[700] back w-[200px] flex items-center gap-2 text-[20px] text-[rgba(75,69,102,1)]"
            ><i class="fa fa-caret-left"></i> Back</router-link
          >
        </div>
        <form
          @submit.prevent="submitForm"
          class="edit border my-5 px-5 py-5 rounded-[20px] border-[rgba(228,231,236,1)]"
        >
          <h2
            class="text-center font-[700] text-[rgba(69,77,90,1)] text-[20px] leading-[140%]"
          >
            Edit Home Page
          </h2>
          <div class="w-full">
            <!-- Hero -->
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Hero section</h2>
            </div>
            <h2
              class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
            >
              Hero image
            </h2>

            <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :max="5"
            >
              <n-upload-dragger
                style="border-radius: 20px; padding: 20px; text-align: center"
              >
                <div style="margin-bottom: 12px">
                  <n-icon size="48" :depth="3">
                    <ArchiveIcon />
                  </n-icon>
                </div>

                <n-text
                  class="text-[rgba(71,84,103,1)]"
                  style="font-size: 16px"
                >
                  <span class="text-[rgba(80,48,229,1)] font-[600]"
                    >Click to upload
                  </span>
                  <span class="text-[rgba(71,84,103,1)] font-[400]">
                    or drag to upload</span
                  >
                </n-text>

                <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
                  SVG, PNG, JPG or GIF (max. 1440x600px)
                </n-p>
              </n-upload-dragger>
            </n-upload>
            <div class="hero-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Hero title
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="hero_title"
                placeholder="Empowering Future Leaders Through Innovation and Excellence"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="hero-subtitle mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Hero subtitle
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="hero_sub_title"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="hero-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Add Requirements
                <span
                  @click="addAddmissionRequirement"
                  class="bg-[rgba(36,173,241,1)] w-[20px] cursor-pointer flex justify-center items-center rounded-full h-[20px]"
                  ><i class="fa fa-plus text-white text-[10px]"></i
                ></span>
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="requirement"
                placeholder="Enter requirements"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
              <div class="space-y-2 mt-3">
                <div
                  class="flex items-center gap-2"
                  v-for="(requirement, index) in addmissionRequirements"
                  :key="requirement.id"
                >
                  <n-input
                    v-model:value="requirement.value"
                    type="text"
                    bordered="false"
                    placeholder="Enter requirement..."
                    class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                  />
                  <button
                    @click="removeAddmissionRequirement(index)"
                    class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                  >
                    <i class="fa fa-minus text-red-500"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="hero-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Hero CTA text
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="hero_cta"
                placeholder="Apply Now"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
          </div>
          <div class="w-full mt-10">
            <!-- About -->
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">About section</h2>
            </div>
            <h2
              class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
            >
              About image:
            </h2>

            <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :max="5"
            >
              <n-upload-dragger
                style="border-radius: 20px; padding: 20px; text-align: center"
              >
                <div style="margin-bottom: 12px">
                  <n-icon size="48" :depth="3">
                    <ArchiveIcon />
                  </n-icon>
                </div>

                <n-text
                  class="text-[rgba(71,84,103,1)]"
                  style="font-size: 16px"
                >
                  <span class="text-[rgba(80,48,229,1)] font-[600]"
                    >Click to upload
                  </span>
                  <span class="text-[rgba(71,84,103,1)] font-[400]">
                    or drag to upload</span
                  >
                </n-text>

                <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
                  SVG, PNG, JPG or GIF (max. 1440x600px)
                </n-p>
              </n-upload-dragger>
            </n-upload>
            <div class="about-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                About title
              </h2>
              <n-input
                type="text"
                bordered="false"
                placeholder="About EUN"
                v-model:value="about_title"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="about-description mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                About description
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="about_description"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="about-statistics mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Statistics
                <span
                  class="bg-[rgba(36,173,241,1)] w-[20px] flex justify-center items-center rounded-full h-[20px]"
                  ><i class="fa fa-plus text-white text-[10px]"></i
                ></span>
              </h2>
              <div class="grid grid-cols-2 gap-2">
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="statistics.faculty_count"
                  placeholder="Faculties count ( optional )"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="statistics.faculty_count_val"
                  placeholder="Numbers/Texts ( optional )"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="statistics.courses_count"
                  placeholder="Courses count: "
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="statistics.courses_count_val"
                  placeholder="50 ( optional )"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="statistics.globa_outlook"
                  placeholder="Global outlook text: "
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="statistics.globa_outlook_val"
                  placeholder="Global Outlook, African Roots ( optional )"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
            </div>
          </div>
          <!-- Why-EUN -->

          <div class="w-full mt-10">
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Why choose EUN</h2>
            </div>
            <div class="Why-choose-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Why choose title:
              </h2>
              <n-input
                type="text"
                bordered="false"
                placeholder="Why choose EUN?"
                v-model:value="why_EUN_title"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="Why-choose-quote mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Why choose quote:
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="why_EUN_quote"
                placeholder="We're redefining African higher education"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="Why-choose-description mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Why choose description:
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="why_EUN_description"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>

            <div class="Why-choose-img1 my-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Why choose image1:
              </h2>
              <n-upload
                multiple
                directory-dnd
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :max="5"
              >
                <n-upload-dragger
                  style="border-radius: 20px; padding: 20px; text-align: center"
                >
                  <div style="margin-bottom: 12px">
                    <n-icon size="48" :depth="3">
                      <ArchiveIcon />
                    </n-icon>
                  </div>

                  <n-text
                    class="text-[rgba(71,84,103,1)]"
                    style="font-size: 16px"
                  >
                    <span class="text-[rgba(80,48,229,1)] font-[600]"
                      >Click to upload
                    </span>
                    <span class="text-[rgba(71,84,103,1)] font-[400]">
                      or drag to upload</span
                    >
                  </n-text>

                  <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
                    SVG, PNG, JPG or GIF (max. 1440x600px)
                  </n-p>
                </n-upload-dragger>
              </n-upload>
            </div>
            <div class="Why-choose-img2 my-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Why choose image2:
              </h2>
              <n-upload
                multiple
                directory-dnd
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :max="5"
              >
                <n-upload-dragger
                  style="border-radius: 20px; padding: 20px; text-align: center"
                >
                  <div style="margin-bottom: 12px">
                    <n-icon size="48" :depth="3">
                      <ArchiveIcon />
                    </n-icon>
                  </div>

                  <n-text
                    class="text-[rgba(71,84,103,1)]"
                    style="font-size: 16px"
                  >
                    <span class="text-[rgba(80,48,229,1)] font-[600]"
                      >Click to upload
                    </span>
                    <span class="text-[rgba(71,84,103,1)] font-[400]">
                      or drag to upload</span
                    >
                  </n-text>

                  <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
                    SVG, PNG, JPG or GIF (max. 1440x600px)
                  </n-p>
                </n-upload-dragger>
              </n-upload>
            </div>
          </div>
          <!-- Photo Slides -->
          <div class="w-full mt-10">
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Photo Slides</h2>
            </div>
            <h2
              class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
            >
              Image1:
            </h2>

            <div>
              <n-upload
                :custom-request="handleUpload"
                :show-file-list="false"
                accept="image/*"
              >
                <n-upload-dragger style="border-radius: 20px">
                  <div class="flex flex-col items-center justify-center">
                    <!-- Image Icon -->
                    <n-icon size="48" class="text-blue-500 mb-2">
                      <ImageIcon />
                    </n-icon>

                    <!-- Upload Prompt -->

                    <n-text class="text-[rgba(80,48,229,1)] font-[600]">
                      Click or drag image to upload
                    </n-text>
                    <n-p class="text-[rgba(71,84,103,1)] font-[400]">
                      PNG, JPG, or GIF (max 5MB)
                    </n-p>
                    <!-- Subtext -->

                    <!-- Progress Bar and % -->
                    <div v-if="uploading" class="w-full px-5">
                      <n-progress
                        type="line"
                        :percentage="percent"
                        :show-indicator="false"
                        height="10"
                        class="rounded-xl"
                      />
                      <p class="text-sm text-center font-medium mt-1">
                        {{ percent }}%
                      </p>
                    </div>

                    <!-- Delete Button -->
                    <div v-if="uploaded" class="mt-3">
                      <n-button
                        type="error"
                        size="small"
                        secondary
                        @click="resetUpload"
                      >
                        <template #icon>
                          <n-icon><TrashIcon /></n-icon>
                        </template>
                        Delete Upload
                      </n-button>
                    </div>
                  </div>
                </n-upload-dragger>
              </n-upload>
            </div>
          </div>

          <!-- Top Programs -->
          <div class="w-full mt-10">
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Top Programs</h2>
            </div>
            <div class="programs-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Programs title:
              </h2>
              <n-input
                type="text"
                bordered="false"
                placeholder="Explore Our Top Programs"
                v-model:value="program_title"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="programs-quote mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Add Top Programs:

                <span
                  @click="addTopProgram"
                  class="bg-[rgba(36,173,241,1)] w-[20px] cursor-pointer flex justify-center items-center rounded-full h-[20px]"
                  ><i class="fa fa-plus text-white text-[10px]"></i
                ></span>
              </h2>
              <n-input
                size="large"
                type="text"
                bordered="false"
                v-model:value="program"
                placeholder="Engineering "
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />

              <div class="space-y-2 mt-3">
                <div
                  class="flex items-center gap-2"
                  v-for="(topProgram, index) in topPrograms"
                  :key="topProgram.id"
                >
                  <n-input
                    v-model:value="topProgram.value"
                    type="text"
                    bordered="false"
                    placeholder="Enter program..."
                    class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                  />
                  <button
                    @click="removeTopProgram(index)"
                    class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                  >
                    <i class="fa fa-minus text-red-500"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Testimonials and News -->
            <div class="w-full">
              <div
                class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
              >
                <i class="fa fa-caret-down text-[20px]"></i>
                <h2 class="text-[16px]">Testimonials and News</h2>
              </div>

              <div class="student-name mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Student name:
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  placeholder="Kingsley Maryann"
                  v-model:value="student_name"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
              <div class="student-program mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Student program:
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="student_program"
                  placeholder="Undergraduate"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
              <div class="quote mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Quote:
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  placeholder="Nice school"
                  v-model:value="student_quote"
                  class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
              <div class="student-photo mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Student photo:
                </h2>
                <n-upload
                  multiple
                  directory-dnd
                  action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                  :max="5"
                >
                  <n-upload-dragger
                    style="
                      border-radius: 20px;
                      padding: 20px;
                      text-align: center;
                    "
                  >
                    <div style="margin-bottom: 12px">
                      <n-icon size="48" :depth="3">
                        <ArchiveIcon />
                      </n-icon>
                    </div>

                    <n-text
                      class="text-[rgba(71,84,103,1)]"
                      style="font-size: 16px"
                    >
                      <span class="text-[rgba(80,48,229,1)] font-[600]"
                        >Click to upload
                      </span>
                      <span class="text-[rgba(71,84,103,1)] font-[400]">
                        or drag to upload</span
                      >
                    </n-text>

                    <n-p depth="3" style="margin: 8px 0 0 0; font-weight: 500">
                      SVG, PNG, JPG or GIF (max. 1440x600px)
                    </n-p>
                  </n-upload-dragger>
                </n-upload>
              </div>
              <div class="news mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Select News to display
                  <span
                    @click="addNews"
                    class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                    ><i class="fa fa-plus text-white text-[10px]"></i
                  ></span>
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="newsdata"
                  placeholder="Enter news"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <div class="space-y-2 mt-3">
                  <div
                    class="flex items-center gap-2"
                    v-for="(display, index) in news"
                    :key="display.id"
                  >
                    <n-input
                      v-model:value="display.value"
                      type="text"
                      bordered="false"
                      placeholder="Enter news..."
                      class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                    />
                    <button
                      @click="removeNews(index)"
                      class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                    >
                      <i class="fa fa-minus text-red-500"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="events mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Select Events to display
                  <span
                    @click="addEvents"
                    class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                    ><i class="fa fa-plus text-white text-[10px]"></i
                  ></span>
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="eventdata"
                  placeholder="Apply Now"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <div class="space-y-2 mt-3">
                  <div
                    class="flex items-center gap-2"
                    v-for="(event, index) in events"
                    :key="event.id"
                  >
                    <n-input
                      v-model:value="event.value"
                      type="text"
                      bordered="false"
                      placeholder="Enter news..."
                      class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                    />
                    <button
                      @click="removeEvents(index)"
                      class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                    >
                      <i class="fa fa-minus text-red-500"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- News Letter -->
            <div class="w-full">
              <div
                class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
              >
                <i class="fa fa-caret-down text-[20px]"></i>
                <h2 class="text-[16px]">News Letter</h2>
              </div>

              <div class="newsletter-title mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Newsletter title:
                </h2>
                <n-input
                  type="text"
                  v-model:value="newsLetter"
                  bordered="false"
                  placeholder="Stay Connected to EUN"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>

              <div class="newsletter mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Newsletter description:
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="newsLetter_description"
                  placeholder="Get news, admissions alerts, and student stories straight to your inbox"
                  class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>

              <div class="faq mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Add FAQ
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="faq"
                  placeholder="Select FAQ"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
              <div class="sections mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Add New Section
                  <span
                    @click="addSection"
                    class="cursor-pointer bg-[rgba(36,173,241,1)] w-[20px] h-[20px] flex justify-center items-center rounded-full"
                  >
                    <i class="fa fa-plus text-white text-[10px]"></i>
                  </span>
                </h2>

                <div class="space-y-2">
                  <div
                    class="flex items-center gap-2"
                    v-for="(section, index) in sections"
                    :key="section.id"
                  >
                    <n-input
                      v-model:value="section.value"
                      type="text"
                      bordered="false"
                      placeholder="Enter section name..."
                      class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                    />
                    <button
                      @click="removeSection(index)"
                      class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                    >
                      <i class="fa fa-minus text-red-500"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <button
                type="submit"
                class="bg-[rgba(63,47,124,1)] font-[700] text-[16px] py-[12px] w-full block text-white px-[16px] rounded-lg mt-5"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </section>
</template>

<script setup>
import Logo from "@/assets/logo.jpg";
import HomeImage from "@/assets/imgs/hero.jpg";
import SideBar from "../../components/SideBar.vue";
import Header from "../../components/Header.vue";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { Image as ImageIcon } from "@vicons/fa";
import { Trash as TrashIcon } from "@vicons/fa";

import { ref, reactive } from "vue";
import { NButton, NUpload } from "naive-ui";

const showInput = ref(false);

// input values
const hero_title = ref("");
const hero_sub_title = ref("");
const requirement = ref("");
const hero_cta = ref("");

// About
const about_title = ref("");
const about_description = ref("");
const statistics = reactive({
  faculty_count: "",
  faculty_count_val: "",
  courses_count: "",
  courses_count_val: "",
  globa_outlook: "",
  globa_outlook_val: "",
});

// Why Choose EUN
const why_EUN_title = ref("");
const why_EUN_description = ref("");
const why_EUN_quote = ref("");

// Add Programs
const program_title = ref("");
const program = ref("");

// Testimonial and News
const student_name = ref("");
const student_program = ref("");
const student_quote = ref("");

const newsdata = ref("");
const eventdata = ref("");

// NewsLetter
const newsLetter = ref("");
const newsLetter_description = ref("");
const faq = ref("");

// Submit form
const submitForm = () => {
  console.log(hero_title.value, hero_sub_title.value);
};

// Progress and Upload States
const percent = ref(0);
const uploading = ref(false);
const uploaded = ref(false);

const handleUpload = ({ file, onFinish }) => {
  uploading.value = true;
  percent.value = 0;

  const simulate = () => {
    if (percent.value < 100) {
      percent.value += 10;
      setTimeout(simulate, 300);
    } else {
      uploading.value = false;
      uploaded.value = true;
      onFinish();
    }
  };

  simulate();
};

const resetUpload = () => {
  percent.value = 0;
  uploading.value = false;
  uploaded.value = false;
};

const handleFileUpload = ({ fileList }) => {
  console.log("Selected files:", fileList);
  // handle file logic here (e.g., upload to server)
};

// Active and InActive States
let home,
  about,
  scholarship,
  faculties,
  courses,
  footer,
  admission,
  research = ref(false);

const showUser = ref(false);
const toggleUser = () => {
  showUser.value = !showUser.value;
  if (showUser.value) {
    document.querySelectorAll(".user").forEach((el) => {
      el.classList.add("hidden");
    });
  } else {
    document.querySelectorAll(".user").forEach((el) => {
      el.classList.remove("hidden");
    });
  }
};

// Add New Section
const sections = ref([]);

function addSection() {
  sections.value.push({ id: Date.now(), value: "" });
}

function removeSection(index) {
  sections.value.splice(index, 1);
}
// Add News
const news = ref([]);

function addNews() {
  news.value.push({ id: Date.now(), value: "" });
}

function removeNews(index) {
  news.value.splice(index, 1);
}
// Add Events
const events = ref([]);

function addEvents() {
  events.value.push({ id: Date.now(), value: "" });
}

function removeEvents(index) {
  events.value.splice(index, 1);
}

// Add Top Programs
const topPrograms = ref([]);
function addTopProgram() {
  topPrograms.value.push({ id: Date.now(), value: "" });
}
function removeTopProgram(index) {
  topPrograms.value.splice(index);
}

// Add Addmission Requirements
const addmissionRequirements = ref([]);
function addAddmissionRequirement() {
  addmissionRequirements.value.push({ id: Date.now(), value: "" });
}
function removeAddmissionRequirement(index) {
  addmissionRequirements.value.splice(index, 1);
}
</script>
