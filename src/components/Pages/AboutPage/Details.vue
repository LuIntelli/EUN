<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update About Page
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Hero Title" path="hero_title">
        <n-input
          v-model:value="formData.hero_title"
          placeholder="Empowering Future Leaders Through Innovation and Excellence"
        />
      </n-form-item>
      <n-form-item label="Hero Sub Title" path="hero_subtitle">
        <n-input
          v-model:value="formData.hero_subtitle"
          placeholder="Welcome to the European University of Nigeria — an innovative hub for academic excellence, entrepreneurship, and global leadership."
        />
      </n-form-item>
      <n-form-item label="Hero CTA Text" path="partnership_description">
        <n-input
          v-model:value="formData.partnership_description"
          placeholder="Apply Now"
        />
      </n-form-item>
      <n-form-item label="Hero CTA URL" path="facilities_title">
        <n-input
          v-model:value="formData.facilities_title"
          placeholder="#applynow"
        />
      </n-form-item>
      <n-form-item label="About Title" path="about_title">
        <n-input v-model:value="formData.about_title" placeholder="About EUN" />
      </n-form-item>
      <n-form-item label="About Description" path="about_description">
        <n-input
          v-model:value="formData.about_description"
          placeholder="European University of Nigeria is a private, forward-thinking university empowering the next generation of African leaders and innovators."
        />
      </n-form-item>
      <n-form-item label="Faculties Description" path="facilities_description">
        <n-input
          v-model:value="formData.facilities_description"
          placeholder="35"
        />
      </n-form-item>

      <n-form-item label="Leadership title" path="leadership_title">
        <n-input
          v-model:value="formData.leadership_title"
          placeholder="Our Leadership Team"
        />
      </n-form-item>
      <n-form-item label="Leadership Quote" path="leadership_quote">
        <n-input
          v-model:value="formData.leadership_quote"
          placeholder="We're not just producing graduates — we're nurturing creators, innovators, and solution-driven leaders."
        />
      </n-form-item>
      <n-form-item
        label="Accreditation Description"
        path="accreditation_description"
      >
        <n-input
          v-model:value="formData.accreditation_description"
          placeholder="At EUN, we don’t just offer degrees — we build future entrepreneurs, technologists, leaders, and thinkers"
        />
      </n-form-item>
      <n-form-item label="Core Values Title" path="core_values_title">
        <n-input
          v-model:value="formData.core_values_title"
          placeholder="Our Core Values"
        />
      </n-form-item>
      <n-form-item label="Mission Title" path="mission_title">
        <n-input
          v-model:value="formData.mission_title"
          placeholder="At EUN, we don’t just offer degrees — we build future entrepreneurs, technologists, leaders, and thinkers"
        />
      </n-form-item>
      <n-form-item label="Main Description" path="main_description">
        <n-input
          v-model:value="formData.main_description"
          placeholder="At EUN, we don’t just offer degrees — we build future entrepreneurs, technologists, leaders, and thinkers"
        />
      </n-form-item>
      <n-form-item
        label="Main Image"
        path="main_image"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange_"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
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
        <span v-if="Preview" class="block mt-2">
          <img :src="Preview" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Vision Mission Image 1"
        path="vision_mission_image1"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
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
        <span v-if="photoPreview" class="block mt-2">
          <img :src="photoPreview" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Vision Mission Image 2"
        path="vision_mission_image2"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange1"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
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
        <span v-if="photoPreview1" class="block mt-2">
          <img :src="photoPreview1" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Core Values Image 1"
        path="core_values_image1"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange2"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
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
        <span v-if="photoPreview2" class="block mt-2">
          <img :src="photoPreview2" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Core Values Image 2"
        path="core_values_image2"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange3"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
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
        <span v-if="photoPreview3" class="block mt-2">
          <img :src="photoPreview3" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>
      <n-form-item
        label="Accreditation Background"
        path="accreditation_background"
        class="w-full border p-3 my-5 rounded-xl"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handlePhotoChange4"
        >
          <n-upload-dragger
            style="border-radius: 20px; padding: 20px; text-align: center"
          >
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>

            <n-text class="text-[rgba(71,84,103,1)]" style="font-size: 16px">
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
        <span v-if="photoPreview4" class="block mt-2">
          <img :src="photoPreview4" class="h-24 w-24 object-cover rounded-lg" />
        </span>
      </n-form-item>

      <n-form-item label="Mission Text" path="mission_text">
        <n-input
          v-model:value="formData.mission_text"
          placeholder="At EUN, we don’t just offer degrees — we build future entrepreneurs, technologists, leaders, and thinkers"
        />
      </n-form-item>
      <n-form-item label="Vision Title" path="vision_title">
        <n-input v-model:value="formData.vision_title" placeholder="Vision" />
      </n-form-item>
      <n-form-item label="Vision Text" path="vision_text">
        <n-input
          v-model:value="formData.vision_text"
          placeholder="At EUN, we don’t just offer degrees — we build future entrepreneurs, technologists, leaders, and thinkers"
        />
      </n-form-item>
      <n-form-item label="Slide Count" path="slides_count">
        <n-input v-model:value="formData.slides_count" placeholder="3" />
      </n-form-item>

      <n-form-item label="Creation Date" path="created_at">
        <n-date-picker
          v-model:value="formData.created_at"
          type="datetime"
          placeholder="Pick creation date"
          class="w-full"
        />
      </n-form-item>

      <n-form-item label="Date updated" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick date"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-2">
        <div class="flex items-center gap-5">
          <n-form-item label="Is Active" path="is_active">
            <n-switch v-model:value="formData.is_active" />
          </n-form-item>
        </div>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import { editAboutPage, aboutPageDetail } from "@/services/Pages";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photo = ref(null);
const Preview = ref(null);
const photoFile = ref(null);
const photoPreview = ref(null);
const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);
const photoFile3 = ref(null);
const photoPreview3 = ref(null);
const photoFile4 = ref(null);
const photoPreview4 = ref(null);

const formData = reactive({
  main_description: "",
  mission_title: "",
  mission_text: "",
  vision_title: "",
  vision_text: "",
  leadership_quote: "",
  core_values_title: "",
  leadership_title: "",
  accreditation_description: "",
  hero_subtitle: "",
  hero_title: "",
  partnership_description: "",
  facilities_title: "",
  about_title: "",
  about_description: "",
  facilities_description: "",
  slides_count: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await aboutPageDetail(id);
    Object.assign(formData, data.data);
    Preview.value = formData["main_image"];
    photoPreview.value = formData["vision_mission_image1"];
    photoPreview1.value = formData["vision_mission_image2"];
    photoPreview2.value = formData["core_values_image1"];
    photoPreview3.value = formData["core_values_image2"];
    photoPreview4.value = formData["accreditation_background"];

    console.log(data.data);
  } catch (error) {
    message.error("Failed to load  data");
  }
};
// Handle image select
const handlePhotoChange_ = (options) => {
  const file = options.file.file;
  photo.value = file;
  Preview.value = URL.createObjectURL(file);
};
const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};
const handlePhotoChange1 = (options) => {
  const file = options.file.file;
  photoFile1.value = file;
  photoPreview1.value = URL.createObjectURL(file);
};
const handlePhotoChange2 = (options) => {
  const file = options.file.file;
  photoFile2.value = file;
  photoPreview2.value = URL.createObjectURL(file);
};
const handlePhotoChange3 = (options) => {
  const file = options.file.file;
  photoFile3.value = file;
  photoPreview3.value = URL.createObjectURL(file);
};
const handlePhotoChange4 = (options) => {
  const file = options.file.file;
  photoFile4.value = file;
  photoPreview4.value = URL.createObjectURL(file);
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    const payload = new FormData();

    // Append all normal fields from formData object
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== undefined) {
        payload.append(key, formData[key]);
      }
    }

    // Append actual files (important!)
    if (photo.value) {
      payload.append("main_image", photo.value);
    }
    if (photoFile.value) {
      payload.append("vision_mission_image1", photoFile.value);
    }
    if (photoFile1.value) {
      payload.append("vision_mission_image2", photoFile1.value);
    }
    if (photoFile2.value) {
      payload.append("core_values_image1", photoFile2.value);
    }
    if (photoFile3.value) {
      payload.append("core_values_image2", photoFile3.value);
    }
    if (photoFile4.value) {
      payload.append("accreditation_background", photoFile4.value);
    }

    console.log("Start submitting...", payload);
    await editAboutPage(route.params.id, payload);
    message.success("Updated successfully");
    router.push("/about/");
  } catch (err) {
    console.error(err);
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data).message || "An error occurred");
        break;
      }
    }
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchData);

// Rules
const rules = {
  hero_title: [
    { required: false, message: "Hero title is required", trigger: "blur" },
  ],
  hero_subtitle: [
    {
      required: false,
      message: "Hero Sub Title is required",
      trigger: "blur",
    },
  ],
  main_description: [
    {
      required: false,
      message: "Main description is required",
      trigger: "blur",
    },
  ],
  facilities_title: [
    {
      required: false,
      message: "Hero CTA URL count is required",
      trigger: "blur",
    },
  ],
  partnership_description: [
    {
      required: false,
      message: "Partnership description Text is required",
      trigger: "blur",
    },
  ],
  about_description: [
    {
      required: false,
      message: "About description is required",
      trigger: "blur",
    },
  ],
  about_title: [
    {
      required: false,
      message: "About title is required",
      trigger: "blur",
    },
  ],
  facilities_description: [
    {
      required: false,
      message: "Faculties description is required",
      trigger: "blur",
    },
  ],
  leadership_quote: [
    {
      required: false,
      message: "Leadership quote is required",
      trigger: "blur",
    },
  ],
  accreditation_description: [
    {
      required: false,
      message: "Accreditation description Title is required",
      trigger: "blur",
    },
  ],
  leadership_title: [
    {
      required: false,
      message: "Leadership title is required",
      trigger: "blur",
    },
  ],

  mission_title: [
    {
      required: false,
      message: "Mission title is required",
      trigger: "blur",
    },
  ],
  core_values_title: [
    {
      required: false,
      message: "Core values title is required",
      trigger: "blur",
    },
  ],
  vision_title: [
    {
      required: false,
      message: "Vision title is required",
      trigger: "blur",
    },
  ],
  mission_text: [
    {
      required: false,
      message: "Mission text is required",
      trigger: "blur",
    },
  ],
  vision_text: [
    {
      required: false,
      message: "Vision text Title is required",
      trigger: "blur",
    },
  ],

  slides_count: [
    {
      validator(rule, value) {
        const number = Number(value);
        if (!value || isNaN(number)) {
          return Promise.reject("Must be a valid number");
        }
        return Promise.resolve();
      },
      trigger: "blur",
    },
    {
      required: false,
      message: "Slides Count is required",
      trigger: "blur",
    },
  ],

  created_at: [
    {
      required: false,
      validator(_, value) {
        if (!value) return new Error("Created date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],

  updated_at: [
    {
      required: false,
      validator(_, value) {
        if (!value) return new Error("Updated date is required");
        if (isNaN(new Date(value).getTime())) return new Error("Invalid date");
        return true;
      },
      trigger: ["change", "blur"],
    },
  ],

  is_active: [
    {
      required: false,
      type: "boolean",
      message: "Is active is required",
      trigger: "change",
    },
  ],
  accreditation_background: [
    {
      required: false,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Accreditation Background is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  main_image: [
    {
      required: false,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Main image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  vision_mission_image1: [
    {
      required: false,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Vision Mission Image 1 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  core_values_image1: [
    {
      required: false,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("Core values Image 1 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  core_values_image2: [
    {
      required: false,
      validator(rule, value) {
        if (!photoFile3.value) {
          return new Error("Core values image 2 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  vision_mission_image2: [
    {
      required: false,
      validator(rule, value) {
        if (!photoFile4.value) {
          return new Error("Vision mission image 2 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
