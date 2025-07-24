<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Faculty Highlights
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Link Url" path="link_url">
        <n-input
          v-model:value="formData.link_url"
          placeholder="http://127.0.0.1:8000/faculties/faculty-of-music/news/"
        />
      </n-form-item>
      <n-form-item label="Link Text" path="link_text">
        <n-input
          v-model:value="formData.link_text"
          placeholder="View Details"
        />
      </n-form-item>
      <n-form-item label="Faculty News" path="faculty_news">
        <n-select
          v-model:value="formData.faculty_news"
          :options="facultiesNewsOption"
          placeholder="Select Faculty ID"
          :loading="loadingFacultyNews"
          a
          @change="selectFaculty(formData.faculty_news)"
          filterable
        />
      </n-form-item>

      <n-form-item label="Faculty Name" path="faculty_name">
        <n-input
          v-model:value="formData.faculty_name"
          placeholder="Faculty of Medical Sciences"
        />
      </n-form-item>
      <n-form-item label="Title" path="title">
        <n-input
          v-model:value="formData.title"
          placeholder="New AI Research Breakthrough"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Our team develops innovative neural network architecture"
        />
      </n-form-item>

      <n-form-item
        label="Image"
        path="image"
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
import { watch, ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import {
  createFacultyHighlight,
  listFacultyNews,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile = ref(null);
const photoPreview = ref(null);

const formData = reactive({
  faculty_news: null,
  faculty_name: null,
  title: "",
  link_url: "",
  link_text: "",
  description: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

const facultiesNewsOption = ref([]);
const loadingFacultyNews = ref(false);

onMounted(async () => {
  loadingFacultyNews.value = true;
  try {
    const res = await listFacultyNews();
    facultiesNewsOption.value = res.results.data.map((page) => ({
      label: page.faculty_name || `Faculty ID of ${page.id}`,
      value: Number(page.id),
    }));
  } catch (err) {
    console.error("Error loading data", err);
    err?.error?.message?.forEach((msg) => {
      message.error(msg);
    });
  } finally {
    loadingFacultyNews.value = false;
  }
});

watch(
  () => formData.faculty_news,
  (newValue) => {
    const selected = facultiesNewsOption.value.find(
      (opt) => opt.value === newValue
    );
    if (selected) {
      // formData.value.faculty_label = selected.label;
      console.log("Selected label:", selected.label);
      formData.faculty_name = selected.label;
    }
  }
);
// const selectFaculty = (value) => {
//   const selected = facultiesNewsOption.value.find((opt) => opt.value === value);

//   if (selected) {
//     // Optional: Save the label somewhere
//     console.log(formData.faculty_name)
//   }
// };

const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photoFile.value) {
      formData["image"] = photoFile.value;
    }

    console.log("Start submitting...", formData);
    await createFacultyHighlight(formData);
    message.success("Created successfully");
    router.push("/faculty-highlights");
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
  description: [
    {
      required: true,
      message: "description Text is required",
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
  link_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    {
      required: true,
      message: "Url link is required",
      trigger: "blur",
    },
  ],
  link_text: [
    {
      required: true,
      message: "Hero subtitle is required",
      trigger: "blur",
    },
  ],
  faculty_name: [
    {
      required: true,
      message: "Faculty name is required",
      trigger: "blur",
    },
  ],
  faculty_news: [
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
      message: "Faculty news  is required",
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

  image: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
          return new Error("Image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
