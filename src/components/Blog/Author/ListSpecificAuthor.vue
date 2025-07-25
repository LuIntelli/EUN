<template>
  <div v-if="submitting" class="relative my-10 flex justify-center">
    <PulseLoader v-if="submitting" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Author Details
    </h2>

    <n-form
      :model="formData"
      :rules="rules"
      label-placement="top"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <n-form-item label="First Name" path="first_name">
        <n-input
          v-model:value="formData.first_name"
          class=""
          placeholder="First Name"
        />
      </n-form-item>
      <n-form-item label="Last Name" path="last_name">
        <n-input v-model:value="formData.last_name" placeholder="Last Name" />
      </n-form-item>

      <n-form-item label="Email" path="email">
        <n-input v-model:value="formData.email" placeholder="Email address" />
      </n-form-item>

      <n-form-item label="Photo" path="photo" class="w-full border p-1">
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

      <n-form-item label="Position" path="position">
        <n-input v-model:value="formData.position" placeholder="Position" />
      </n-form-item>

      <n-form-item label="Bio" path="bio">
        <n-input v-model:value="formData.bio" placeholder="Bio" />
      </n-form-item>

      <n-form-item label="Title" path="title">
        <n-input v-model:value="formData.title" placeholder="Example Mr." />
      </n-form-item>

      <n-form-item label="LinkedIn URL" path="linkedin_url">
        <n-input
          v-model:value="formData.linkedin_url"
          placeholder="LinkedIn URL"
        />
      </n-form-item>
      <n-form-item label="Twitter URL" path="twitter_url">
        <n-input
          v-model:value="formData.twitter_url"
          placeholder="Twitter URL"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          v-model:value="formData.slug"
          placeholder="Example sam-emeka"
        />
      </n-form-item>
      <n-form-item label="Faculty" path="faculty">
        <n-input v-model:value="formData.faculty" placeholder="Faculty" />
      </n-form-item>
      <n-form-item label="Department" path="department">
        <n-select
          v-model:value="formData.department"
          :options="departmentOptions"
          placeholder="Select Department"
          :loading="loadingData"
          filterable
        />
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
          placeholder="Pick updated date"
          class="w-full"
        />
      </n-form-item>

      <div class="flex items-center gap-5">
        <n-form-item label="Is Active" path="is_active">
          <n-switch v-model:value="formData.is_active" />
        </n-form-item>
      </div>

      <button
        type="submit"
        class="py-3 text-white bg-[rgba(43,54,116,1)] rounded-xl font-medium text-center block w-full"
        :loading="submitting"
        @click="handleSubmit"
      >
        Update Author Details
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { authDetails, editAuthor } from "@/services/Blog";
import {
  listFaculties,
  listDepartments,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);
const photoFile = ref(null);
const photoPreview = ref(null);

const formData = reactive({
  id: "",
  title: "",
  email: "",
  position: "",
  bio: "",
  last_name: "",
  first_name: "",
  department: null,
  faculty: "",
  twitter_url: "",
  linkedin_url: "",
  is_active: false,
});

const faculties = ref([]);
const departmentOptions = ref([]);
const loadingData = ref(false);
// const loadingDepartment = ref(false);

// Load Author by ID
const fetchAuthor = async () => {
  try {
    const id = route.params.id;
    const data = await authDetails(id);
    Object.assign(formData, data);
    photoPreview.value = data.photo;
    delete formData.photo;
  } catch (error) {
    message.error("Failed to load university data");
  }
};

onMounted(async () => {
  loadingData.value = true;
  try {
    faculties.value = await listFaculties();
    const departments = await listDepartments();
    // console.log(departmentOptions.results.data)

    departmentOptions.value = departments.results.data.map((department) => ({
      label: department.name || `Department ID ${department.id}`,
      value: Number(department.id),
      faculty: department.faculty_name,
    }));
  } catch (err) {
    console.error("Error loading staff data", err);
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
    loadingData.value = false;
  }
});

watch(
  () => formData.department,
  (newVal, oldVal) => {
    const selected = departmentOptions.value.find(
      (department) => department.value === newVal
    );
    // formData.department_name = selected.label;
    // formData.faculty_name = selected.faculty;
    console.log(faculties.value.results, departmentOptions.value);

    if (selected) {
      faculties.value.results.data.forEach((data) => {
        if (data.name === selected.faculty) formData.faculty = Number(data.id);
      });
      console.log(selected);
    }
  }
);

// Handle image select
const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};

// Submit update
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();

    if (photoFile.value) {
      formData["photo"] = photoFile.value;
    }

    await editAuthor(route.params.id, formData);
    message.success("Author updated successfully");
    router.push("/list-authors");
  } catch (err) {
    console.error(err);
    message.error("Update failed");
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

onMounted(fetchAuthor);

// Rules
const rules = {};
</script>
