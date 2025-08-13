<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Update Scholarship
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="Name" path="name">
        <n-input
          v-model:value="formData.name"
          class=""
          placeholder="Women in STEM Scholarship"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          class=""
          v-model:value="formData.slug"
          placeholder="women-in-stem-scholarship"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          class=""
          v-model:value="formData.description"
          placeholder="A scholarship for female students pursuing science, technology, engineering, and mathematics programs."
        />
      </n-form-item>
      <n-form-item label="Eligibility Criteria" path="eligibility_criteria">
        <n-input
          class=""
          v-model:value="formData.eligibility_criteria"
          placeholder="Amina"
        />
      </n-form-item>
      <n-form-item label="Application Deadline" path="application_deadline">
        <n-date-picker
          class="w-full"
          type="datetime"
          v-model:value="formData.application_deadline"
          placeholder="Application deadline"
        />
      </n-form-item>
      <n-form-item label="Amount" path="amount">
        <n-input class="" v-model:value="formData.amount" placeholder="" />
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

      <n-form-item
        label="Image"
        path="image"
        class="w-full border p-3 rounded-xl my-5"
      >
        <n-upload
          :default-upload="false"
          directory-dnd
          accept="image/*"
          :max="5"
          @change="handleImageChange"
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
        <span v-if="imagePreview2" class="block mt-2">
          <img :src="imagePreview2" class="h-24 w-24 object-cover rounded-lg" />
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
      <n-form-item label="Updated Date" path="updated_at">
        <n-date-picker
          v-model:value="formData.updated_at"
          type="datetime"
          placeholder="Pick date updated"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-5">
        <n-form-item label="Is Active" path="is_active">
          <n-switch v-model:value="formData.is_active" />
        </n-form-item>
        <n-form-item label="Is Featured" path="is_featured">
          <n-switch v-model:value="formData.is_featured" />
        </n-form-item>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update Scholarship
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { editScholarship, scholarshipDetails } from "@/services/Scholarship";
import { listFaculties } from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const imageFile2 = ref(null);
const imagePreview2 = ref(null);

const formData = reactive({
  slug: "",
  name: "",
  faculty_name: "",
  faculty: "",
  amount: "",
  application_deadline: null,
  eligibility_criteria: "",
  description: "",
  is_active: false,
  is_featured: false,
  created_at: null,
  updated_at: null,
});
// image
const handleImageChange = (options) => {
  const file = options.file.file;
  imageFile2.value = file;
  imagePreview2.value = URL.createObjectURL(file);
};

watch(
  () => formData.application_deadline,
  (newVal) => {
    if (newVal) {
      formData.application_deadline = new Date(newVal)
        .toISOString()
        .split("T")[0];
      console.log(formData.application_deadline);
    } else {
      formData.application_deadline = null;
    }
  }
);

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
        message.error((err.response?.data).message || "An error occurred");
        break;
      }
    }
  } finally {
    loadingFaculty.value = false;
  }
});

// Load Data by ID
const fetchData = async () => {
  try {
    const id = route.params.id;
    const data = await scholarshipDetails(id);
    Object.assign(formData, data.data);
    imagePreview2.value = formData["image"];
    delete formData["image"];
  } catch (error) {
    message.error("Failed to load  data");
  }
};
// Submit
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();
    if (imageFile2.value) {
      formData["image"] = imageFile2.value;
    }
    await editScholarship(route.params.id, formData);
    message.success("data Updated successfully");
    router.push("/scholarship/lists");
  } catch (err) {
    console.error(err);
    message.error("data not updated...");
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
