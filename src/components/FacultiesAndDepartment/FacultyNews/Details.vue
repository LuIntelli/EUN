<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Faculty News
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
          placeholder="Faculty of Science"
        />
      </n-form-item>
      <n-form-item label="Hero Sub Title" path="hero_subtitle">
        <n-input
          v-model:value="formData.hero_subtitle"
          placeholder="Discover groundbreaking research and academic programs in our science faculty"
        />
      </n-form-item>
      <n-form-item label="Faculty Names" path="faculty_name">
        <n-input
          v-model:value="formData.faculty_name"
          placeholder="Placeholder Faculty"
        />
      </n-form-item>
      <n-form-item label="Faculty" path="faculty">
        <n-select
          v-model:value="formData.faculty"
          :options="facultiesOption"
          placeholder="Select Faculty"
          :loading="loadingFaculty"
          filterable
        />
      </n-form-item>
      <n-form-item label="Page Description" path="page_description">
        <n-input v-model:value="formData.page_description" placeholder="" />
      </n-form-item>

      <n-form-item label="Featured Content" path="featured_content">
        <n-input v-model:value="formData.featured_content" placeholder="" />
      </n-form-item>
      <n-form-item label="Newsletter Title" path="newsletter_title">
        <n-input
          v-model:value="formData.newsletter_title"
          placeholder="Science Updates"
        />
      </n-form-item>
      <n-form-item label="Newsletter Description" path="newsletter_description">
        <n-input
          v-model:value="formData.newsletter_description"
          placeholder="New AI Research Lab"
        />
      </n-form-item>

      <n-form-item
        label="Hero Image"
        path="hero_background"
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
  editFacultyNews,
  facultyNewsDetails,
  listFaculties,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();

const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile = ref(null);
const photoPreview = ref(null);

const formData = reactive({
  featured_content: "",
  newsletter_title: "",
  newsletter_description: "",
  faculty_name: "",
  faculty: "",
  hero_title: "",
  hero_subtitle: "",
  page_description: "",
  created_at: null,
  updated_at: null,
  is_active: "false",
});

const facultiesOption = ref([]);
const loadingFaculty = ref(false);

onMounted(async () => {
  loadingFaculty.value = true;
  try {
    const res = await listFaculties();
    facultiesOption.value = res.results.data.map((page) => ({
      label: page.name || `Faculty ${page.id}`,
      value: Number(page.id),
    }));
  } catch (err) {
    console.error("Error loading home pages", err);
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
    loadingFaculty.value = false;
  }
});

watch(
  () => formData.faculty,
  (newVal, oldVal) => {
    const selected = facultiesOption.value.find((fac) => fac.value === newVal);
    formData.faculty_name = selected.label;
    console.log(selected);
  }
);
// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await facultyNewsDetails(id);
    Object.assign(formData, data.data);
    Preview.value = formData["hero_background"];
    delete formData["hero_background"];
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
      formData["hero_background"] = photoFile.value;
    }

    console.log("Start submitting...", formData);
    await editFacultyNews(route.params.id, formData);
    message.success("Updated successfully");
    router.push("/faculty-news");
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
const rules = {};
</script>
