<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Faculty Highlights
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
        Update
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import {
  editFacultyHighlights,
  facultyHighlightDetails,
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
  faculty_news: "",
  faculty_name: "",
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
// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await facultyHighlightDetails(id);
    Object.assign(formData, data.data);
    photoPreview.value = formData["image"];
    delete formData["image"];
  } catch (error) {
    message.error("Failed to load  data");
  }
};

// Handle image select
const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};

// Update data
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
    await editFacultyHighlights(route.params.id, formData);
    message.success("Updated successfully");
    router.push("/faculty-highlights");
  } catch (err) {
    console.error(err);
    message.error("Data not updated");
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

onMounted(fetchData);

// Rules
const rules = {};
</script>
