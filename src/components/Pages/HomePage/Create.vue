<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Home Page
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
      <n-form-item label="Hero CTA Text" path="hero_cta_text">
        <n-input
          v-model:value="formData.hero_cta_text"
          placeholder="Apply Now"
        />
      </n-form-item>
      <n-form-item label="Hero CTA URL" path="hero_cta_url">
        <n-input
          v-model:value="formData.hero_cta_url"
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
      <n-form-item label="Faculties Count" path="faculties_count">
        <n-input v-model:value="formData.faculties_count" placeholder="35" />
      </n-form-item>
      <n-form-item label="Courses Count" path="courses_count">
        <n-input v-model:value="formData.courses_count" placeholder="500" />
      </n-form-item>
      <n-form-item label="Global Outlook Text" path="global_outlook_text">
        <n-input
          v-model:value="formData.global_outlook_text"
          placeholder="Global Outlook, African Roots"
        />
      </n-form-item>
      <n-form-item label="Why Choose Description" path="why_choose_description">
        <n-input
          v-model:value="formData.why_choose_description"
          placeholder="Why Choose Description"
        />
      </n-form-item>
      <n-form-item label="Why Choose Quote" path="why_choose_quote">
        <n-input
          v-model:value="formData.why_choose_quote"
          placeholder="Why Choose Quote"
        />
      </n-form-item>
      <n-form-item label="Why Choose Title" path="why_choose_title">
        <n-input
          v-model:value="formData.why_choose_title"
          placeholder="Why Choose Title"
        />
      </n-form-item>
      <n-form-item label="Program Title" path="programs_title">
        <n-input
          v-model:value="formData.programs_title"
          placeholder="Explore Our Top Programs"
        />
      </n-form-item>
      <n-form-item label="Admission Title" path="admissions_title">
        <n-input
          v-model:value="formData.admissions_title"
          placeholder="Admissions Now Open"
        />
      </n-form-item>
      <n-form-item label="Admission Description" path="admissions_description">
        <n-input
          v-model:value="formData.admissions_description"
          placeholder="Ready to begin your journey with us?"
        />
      </n-form-item>
      <n-form-item
        label="Admission Background"
        path="admissions_background"
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
        label="Why Choose Image 1"
        path="why_choose_image1"
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
        label="Why Choose Image 2"
        path="why_choose_image2"
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
        label="About Image"
        path="about_image"
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

      <n-form-item label="News Title" path="news_title">
        <n-input
          v-model:value="formData.news_title"
          placeholder="Latest News"
        />
      </n-form-item>
      <n-form-item label="News Letter Title" path="newsletter_title">
        <n-input
          v-model:value="formData.newsletter_title"
          placeholder="Stay Connected to EUN"
        />
      </n-form-item>
      <n-form-item
        label="News Letter Description"
        path="newsletter_description"
      >
        <n-input
          v-model:value="formData.newsletter_description"
          placeholder="Get news, admissions alerts, and student stories straight to your inbox"
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
        Create
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

import { createHomePage } from "@/services/Pages";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);
const photoFile3 = ref(null);
const photoPreview3 = ref(null);
const photoFile4 = ref(null);
const photoPreview4 = ref(null);

const formData = reactive({
  admissions_description: "",
  admissions_title: "",
  news_title: "",
  newsletter_title: "",
  newsletter_description: "",
  why_choose_quote: "",
  programs_title: "",
  why_choose_description: "",
  why_choose_title: "",
  hero_subtitle: "",
  hero_title: "",
  hero_cta_text: "",
  hero_cta_url: "",
  about_title: "",
  about_description: "",
  faculties_count: "",
  courses_count: "",
  global_outlook_text: "",
  slides_count: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

// Handle image select
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
  submitting.value = true;
  try {
    await form.value?.validate();

    // ✅ Build FormData manually (required for file upload)
    const payload = new FormData();

    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        payload.append(key, formData[key]);
      }
    }

    // ✅ Add the file fields manually
    if (photoFile1.value)
      payload.append("admissions_background", photoFile1.value);
    if (photoFile2.value) payload.append("why_choose_image1", photoFile2.value);
    if (photoFile3.value) payload.append("why_choose_image2", photoFile3.value);
    if (photoFile4.value) payload.append("about_image", photoFile4.value);

    // ✅ Send request (axios will set correct multipart boundary automatically)

    await createHomePage(payload);

    message.success("Created successfully");
    router.push("/home/");
  } catch (err) {
    console.error(err);
    message.error("Data not created");
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    submitting.value = false;
  }
};

// Rules
const rules = {
  hero_title: [
    { required: true, message: "Hero title is required", trigger: "blur" },
  ],
  hero_subtitle: [
    {
      required: true,
      message: "Hero Sub Title is required",
      trigger: "blur",
    },
  ],
  courses_count: [
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
      required: true,
      message: "Courses count is required",
      trigger: "blur",
    },
  ],
  hero_cta_url: [
    {
      required: true,
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    {
      required: true,
      message: "Hero CTA URL count is required",
      trigger: "blur",
    },
  ],
  hero_cta_text: [
    {
      required: true,
      message: "Hero CTA Text is required",
      trigger: "blur",
    },
  ],
  about_description: [
    {
      required: true,
      message: "About description is required",
      trigger: "blur",
    },
  ],
  about_title: [
    {
      required: true,
      message: "About title is required",
      trigger: "blur",
    },
  ],
  faculties_count: [
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
      required: true,
      message: "Faculties count is required",
      trigger: "blur",
    },
  ],
  why_choose_quote: [
    {
      required: true,
      message: "Why Choose Quote is required",
      trigger: "blur",
    },
  ],
  why_choose_title: [
    {
      required: true,
      message: "Why Choose Title is required",
      trigger: "blur",
    },
  ],
  why_choose_description: [
    {
      required: true,
      message: "Why Choose Description is required",
      trigger: "blur",
    },
  ],
  admissions_description: [
    {
      required: true,
      message: "Admission Description is required",
      trigger: "blur",
    },
  ],
  global_outlook_text: [
    {
      required: true,
      message: "Global outlook text is required",
      trigger: "blur",
    },
  ],
  admissions_title: [
    {
      required: true,
      message: "Admission Title is required",
      trigger: "blur",
    },
  ],
  programs_title: [
    {
      required: true,
      message: "Program Title is required",
      trigger: "blur",
    },
  ],
  newsletter_title: [
    {
      required: true,
      message: "News Letter Title is required",
      trigger: "blur",
    },
  ],
  news_title: [
    {
      required: true,
      message: "News  Title is required",
      trigger: "blur",
    },
  ],
  newsletter_description: [
    {
      required: true,
      message: "News Description Title is required",
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
      required: true,
      message: "Slides Count is required",
      trigger: "blur",
    },
  ],

  created_at: [
    {
      required: true,
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
      required: true,
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
  about_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile4.value) {
          return new Error("about image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  why_choose_image1: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("Why Choose Image 1 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  why_choose_image2: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile3.value) {
          return new Error("Why Choose Image 2 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  admissions_background: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("Get started background image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
