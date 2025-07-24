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
        <n-form
          @submit.prevent="submitForm"
          class="edit border my-5 px-5 py-5 rounded-[20px] border-[rgba(228,231,236,1)]"
        >
          <h2
            class="text-center font-[700] text-[rgba(69,77,90,1)] text-[20px] leading-[140%]"
          >
            Edit About Page
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
                v-model:value="hero_sub_title"
                bordered="false"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
          </div>
          <div class="w-full mt-10">
            <!-- About -->
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Main Content</h2>
            </div>
            <h2
              class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
            >
              Main image:
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
                Leadership quote
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="leadership_quote"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
          </div>
          <!-- Vision & Mission -->

          <div class="w-full mt-10">
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Vision & Mission</h2>
            </div>

            <!-- Vision -->
            <div class="vision-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Vision title:
              </h2>
              <n-input
                type="text"
                bordered="false"
                placeholder="Vision"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>

            <div class="vision-text mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Vision text:
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="vision_text"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>

            <!-- Mission -->
            <div class="mission-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Mission title:
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="mission_title"
                placeholder="Mission"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>

            <div class="vision-text mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Mission text:
              </h2>
              <n-input
                type="text"
                v-model:value="mission_text"
                bordered="false"
                placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
                class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>

            <div class="vision-img my-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Vision image:
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
            <div class="mission-img my-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Mission image:
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
          <!-- Core Values -->
          <div class="w-full mt-10">
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Core Values</h2>
            </div>
            <div class="core-values-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Core values title:
              </h2>
              <n-input
                type="text"
                v-model:value="core_values_title"
                bordered="false"
                placeholder="Core values title"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="core-values-img1 my-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Core values image1:
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
            <div class="core-values-img2 my-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Core values image2:
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
            <div class="about-core-value-texts mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Core Values Texts
                <span
                  class="bg-[rgba(36,173,241,1)] w-[20px] flex justify-center items-center rounded-full h-[20px]"
                  ><i class="fa fa-plus text-white text-[10px]"></i
                ></span>
              </h2>
              <div class="grid grid-cols-2 gap-2">
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="core_values.first"
                  placeholder="Excellence"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  v-model:value="core_values.first_val"
                  bordered="false"
                  placeholder="We strive for excellence in what we do"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  placeholder="Value"
                  v-model:value="core_values.second"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  placeholder="Description"
                  v-model:value="core_values.second_val"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  placeholder="Value"
                  v-model:value="core_values.third"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
                <n-input
                  type="text"
                  bordered="false"
                  placeholder="Description"
                  v-model:value="core_values.third_val"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
            </div>
          </div>

          <!-- Leadership -->
          <div class="w-full mt-10">
            <div
              class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
            >
              <i class="fa fa-caret-down text-[20px]"></i>
              <h2 class="text-[16px]">Leadership</h2>
            </div>
            <div class="leadership-title mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Leadership title:
              </h2>
              <n-input
                type="text"
                bordered="false"
                v-model:value="leadership_title"
                placeholder="Our Leadership Team"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />
            </div>
            <div class="programs-quote mt-5">
              <h2
                class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
              >
                Select Leaders from Staff:

                <span
                  @click="addLeader"
                  class="bg-[rgba(36,173,241,1)] w-[20px] cursor-pointer flex justify-center items-center rounded-full h-[20px]"
                  ><i class="fa fa-plus text-white text-[10px]"></i
                ></span>
              </h2>
              <n-input
                size="large"
                type="text"
                bordered="false"
                placeholder="Vice Chancellor"
                class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
              />

              <div class="space-y-2 mt-3">
                <div
                  class="flex items-center gap-2"
                  v-for="(leader, index) in leaders"
                  :key="leader.id"
                >
                  <n-input
                    v-model:value="leader.value"
                    type="text"
                    bordered="false"
                    placeholder="Enter Staff..."
                    class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                  />
                  <button
                    @click="removeLeader(index)"
                    class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                  >
                    <i class="fa fa-minus text-red-500"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Accreditation -->
            <div class="w-full">
              <div
                class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
              >
                <i class="fa fa-caret-down text-[20px]"></i>
                <h2 class="text-[16px]">Accreditation</h2>
              </div>

              <div class="accreditation-name mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Accreditation description:
                </h2>
                <n-input
                  type="text"
                  v-model:value="accreditation_description"
                  bordered="false"
                  placeholder="Nice school"
                  class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
              <div class="student-program mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Partnership description:
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="partnership_description"
                  placeholder="Nice school"
                  class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>

              <div class="accreditation-lists mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Accreditation List
                  <span
                    @click="addAccreditationList"
                    class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                    ><i class="fa fa-plus text-white text-[10px]"></i
                  ></span>
                </h2>
                <!-- <n-input
                  type="text"
                  bordered="false"
                  placeholder="NUC Accreditation"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                /> -->
                <div class="space-y-2 mt-3">
                  <div
                    class="flex items-center gap-2"
                    v-for="(accreditationlist, index) in accreditationLists"
                    :key="accreditationlist.id"
                  >
                    <n-input
                      v-model="accreditationlist.value"
                      type="text"
                      bordered="false"
                      placeholder="Enter accreditation..."
                      class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                    />
                    <button
                      @click="removeAccreditationList(index)"
                      class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                    >
                      <i class="fa fa-minus text-red-500"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Campus Facilities -->
            <div class="w-full">
              <div
                class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
              >
                <i class="fa fa-caret-down text-[20px]"></i>
                <h2 class="text-[16px]">Campus Facilities</h2>
              </div>

              <div class="campus-facilities mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Facilities title:
                </h2>
                <n-input
                  type="text"
                  v-model:value="facilities_title"
                  bordered="false"
                  placeholder="Our Campus Facilities"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>

              <div class="newsletter mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Facilities description:
                </h2>
                <n-input
                  type="text"
                  bordered="false"
                  v-model:value="facilities_description"
                  placeholder="Our campus in Duboyi District offers a serene, modern learning environment with:"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>

              <div class="faculty-lists mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Facilities List:
                  <span
                    @click="addFaculties"
                    class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                    ><i class="fa fa-plus text-white text-[10px]"></i
                  ></span>
                </h2>
                <!-- <n-input
                  type="text"
                  bordered="false"
                  placeholder="Facility title:"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                /> -->
                <div class="space-y-2 mt-3">
                  <div
                    class="flex items-center gap-2"
                    v-for="(faculty, index) in faculties"
                    :key="faculty.id"
                  >
                    <n-input
                      v-model:value="faculty.value"
                      type="text"
                      bordered="false"
                      placeholder="Enter faculty..."
                      class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                    />
                    <button
                      @click="removeFaculty(index)"
                      class="w-[30px] h-[30px] flex items-center justify-center border border-red-500 rounded-full"
                    >
                      <i class="fa fa-minus text-red-500"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="faculty-img1 my-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Faculty image
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
              <div class="faq mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Add FAQ
                </h2>
                <n-input
                  type="text"
                  v-model:value="faq"
                  bordered="false"
                  placeholder="Select FAQ"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
            </div>
            <!--Events And News Letter -->
            <div class="w-full mt-5">
              <div
                class="bg-green-100 font-bold my-4 text-green-800 flex items-center gap-2 px-3 py-3 rounded-lg mb-5"
              >
                <i class="fa fa-caret-down text-[20px]"></i>
                <h2 class="text-[16px]">News Letter</h2>
              </div>
              <div class="news mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] flex justify-between items-center leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Enter News to display
                  <span
                    @click="addNews"
                    class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                    ><i class="fa fa-plus text-white text-[10px]"></i
                  ></span>
                </h2>
                <!-- <n-input
                  type="text"
                  bordered="false"
                  placeholder="Enter news"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                /> -->
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
                  Enter Events to display
                  <span
                    @click="addEvents"
                    class="bg-[rgba(36,173,241,1)] cursor-pointer w-[20px] flex justify-center items-center rounded-full h-[20px]"
                    ><i class="fa fa-plus text-white text-[10px]"></i
                  ></span>
                </h2>
                <!-- <n-input
                  type="text"
                  bordered="false"
                  placeholder="Apply Now"
                  class="w-full text-[rgba(187,210,236,1)] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                /> -->
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
                      placeholder="Enter event..."
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
              <div class="newsletter-title mt-5">
                <h2
                  class="text-[rgba(61,58,121,1)] leading-[140%] tracking-[0%] font-[600] text-[16px] mb-2"
                >
                  Newsletter title:
                </h2>
                <n-input
                  v-model:value="newsLetter"
                  type="text"
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
                  v-model:value="newsLetter_description"
                  type="text"
                  bordered="false"
                  placeholder="Get news, admissions alerts, and student stories straight to your inbox"
                  class="w-full text-[rgba(187,210,236,1)] h-[90px] font-[400] text-[16px] leading-[140%] tracking-[0%] py-[8px] px-[12px] rounded-[6px]"
                />
              </div>
            </div>
            <div>
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
                      v-model="section.value"
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
        </n-form>
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

// About
const about_title = ref("");
const core_values = reactive({
  first: "",
  first_val: "",
  second: "",
  second_val: "",
  third: "",
  third_val: "",
});

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

// Add and Remove New Section
const sections = ref([{ id: Date.now(), value: "" }]);
console.log(sections.value);

function addSection() {
  sections.value.push({ id: Date.now(), value: "" });
  console.log(sections.value);
}

function removeSection(index) {
  sections.value.splice(index, 1);
}
// Add and Remove News
const news = ref([{ id: Date.now(), value: "" }]);

function addNews() {
  news.value.push({ id: Date.now(), value: "" });
}
function removeNews(index) {
  news.value.splice(index, 1);
}
// Add and Remove Faculties

// Add and Remove AccreditationLists
const accreditationLists = ref([{ id: Date.now(), value: "" }]);

function addAccreditationList() {
  accreditationLists.value.push({ id: Date.now(), value: "" });
}
function removeAccreditationList(index) {
  accreditationLists.value.splice(index, 1);
}

// Add Events
const events = ref([{ id: Date.now(), value: "" }]);

function addEvents() {
  events.value.push({ id: Date.now(), value: "" });
}

function removeEvents(index) {
  events.value.splice(index, 1);
}

// Add Top Leaders
const leaders = ref([{ id: Date.now(), value: "" }]);
function addLeader() {
  leaders.value.push({ id: Date.now(), value: "" });
}
function removeLeader(index) {
  leaders.value.splice(index);
}

// Add Faculty
const faculties = ref([{ id: Date.now(), value: "" }]);
function addFaculties() {
  faculties.value.push({ id: Date.now(), value: "" });
}
function removeFaculty(index) {
  faculties.value.splice(index, 1);
}
</script>
