<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create About Hero Slides
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="About Page" path="about_page">
        <n-select
          v-model:value="formData.about_page"
          :options="aboutPageOptions"
          placeholder="Select an About Page"
          :loading="loadingAboutPages"
          filterable
        />
      </n-form-item>
      <n-form-item label="About Page Title" path="about_page_title">
        <n-input
          v-model:value="formData.about_page_title"
          placeholder="Africa's STEM Leadership Hub"
        />
      </n-form-item>
      <n-form-item label="Title" path="title">
        <n-input
          v-model:value="formData.title"
          placeholder="Next-Gen Tech Education Hub"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Developing world-class talent in AI, blockchain and cloud computing with industry partnerships"
        />
      </n-form-item>

      <n-form-item label="Order" path="order">
        <n-input v-model:value="formData.order" placeholder="1" type="number" />
      </n-form-item>

      <n-form-item
        label="Background Image"
        path="background_image"
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

import { createAboutHeroSlide, listAboutPage } from "@/services/Pages";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photo = ref(null);
const Preview = ref(null);

const formData = reactive({
  about_page_title: "",
  about_page: null,
  title: "",
  description: "",
  order: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

const aboutPageOptions = ref([]);
const loadingAboutPages = ref(false);

onMounted(async () => {
  loadingAboutPages.value = true;
  try {
    const res = await listAboutPage();
    aboutPageOptions.value = res.results.data.map((page) => ({
      label: page.hero_title || `About Page ${page.id}`,
      value: Number(page.id),
    }));
  } catch (err) {
    console.error("Error loading about pages", err[0]);
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data)[key]);
      }
    }
  } finally {
    loadingAboutPages.value = false;
  }
});

// Handle image select
const handlePhotoChange_ = (options) => {
  const file = options.file.file;
  photo.value = file;
  Preview.value = URL.createObjectURL(file);
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  console.log("Start submitting...", formData);

  try {
    submitting.value = true;
    await form.value?.validate();

    // ✅ Build FormData manually (required for file upload)
    const payload = new FormData();

    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        payload.append(key, formData[key]);
      }
    }
    if (photo.value) {
      payload.append("background_image", photo.value);
    }
    console.log("Selected About Page ID:", formData.about_page);

    console.log("Start submitting...", formData);
    await createAboutHeroSlide(payload);
    message.success("Created successfully");
    router.push("/about-slide/");
  } catch (err) {
    console.error(err);
    message.error("Data not created");
    for (const key in err.response?.data) {
      if (
        (err.response?.data)[key] &&
        Array.isArray((err.response?.data)[key])
      ) {
        err.response?.data[key].forEach((msg) => {
          message.error(`${key}: ${msg}`);
        });
      } else {
        message.error((err.response?.data)[key]);
      }
    }
  } finally {
    submitting.value = false;
  }
};

// Rules
const rules = {
  about_page: [
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
      type: "number",
      message: "About page is required",
      trigger: "change",
    },
  ],
  about_page_title: [
    {
      required: true,
      message: "About page title is required",
      trigger: "blur",
    },
  ],

  description: [
    {
      required: true,
      message: "Description is required",
      trigger: "blur",
    },
  ],
  title: [
    {
      required: true,
      message: "Title is required",
      trigger: "blur",
    },
  ],
  order: [
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
      message: "Order is required",
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

  is_active: [],
  background_image: [
    {
      required: true,
      validator(rule, value) {
        if (!photo.value) {
          return new Error("Background image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
