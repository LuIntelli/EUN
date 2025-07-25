<template>
  <div
    v-if="submitting"
    class="absolute left-[30%] w-[50%] py-5 text-white top-[12%] z-30 my-10 text-center"
  >
    <PulseLoader v-if="submitting" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Add Author to List of Authors
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

      <n-form-item
        label="Photo"
        path="photo"
        class="w-full border p-2 rounded-xl"
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

      <!-- <n-form-item label="Faculty" path="faculty">
        <n-input type="number" v-model:value="formData.faculty" placeholder="1" />
      </n-form-item> -->
      <n-form-item label="Faculty" path="faculty">
        <n-input
          v-model:value="formData.faculty"
          placeholder="Select Faculty ID"
          filterable
        />
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
      <!-- <n-form-item label="Department" path="department">
        <n-input type="number" v-model:value="formData.department" placeholder="2" />
      </n-form-item> -->

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
        Add Author
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
import { createAuthor } from "@/services/Blog";
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
    // console.log(faculties)
    faculties.value.results.data.forEach((data) => {
      if (data.name === selected.faculty) formData.faculty = Number(data.id);
    });
    console.log(selected);
  }
);

// Handle image select
const handlePhotoChange = (options) => {
  const file = options.file.file;
  photoFile.value = file;
  photoPreview.value = URL.createObjectURL(file);
};

// Submit Add Author to the List
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();

    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }

    if (photoFile.value) {
      payload.append("photo", photoFile.value);
    }

    await createAuthor(payload);
    message.success("Author added successfully");
    router.push("/list-authors");
  } catch (err) {
    console.error(err);
    message.error("Author not added to the list");
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
  title: [{ required: true, message: "Title is required", trigger: "blur" }],
  first_name: [
    { required: true, message: "First Name is required", trigger: "blur" },
  ],
  last_name: [
    { required: true, message: "Last Name is required", trigger: "blur" },
  ],
  bio: [{ required: true, message: "Bio is required", trigger: "blur" }],
  slug: [{ required: true, message: "Slug is required", trigger: "blur" }],
  faculty: [
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
  ],
  department: [
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
  ],
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    { type: "email", message: "Enter a valid email", trigger: "blur" },
  ],

  position: [
    { required: true, message: "Position is required", trigger: "blur" },
  ],
  linkedin_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    { required: true, message: "LinkedIn URL is required", trigger: "blur" },
    { type: "url", message: "Enter a valid URL", trigger: "blur" },
  ],
  twitter_url: [
    {
      type: "url",
      message: "Enter a valid URL (e.g., https://example.com)",
      trigger: ["blur", "input"],
    },
    { required: true, message: "Twitter URL is required", trigger: "blur" },
    { type: "url", message: "Enter a valid URL", trigger: "blur" },
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
    { required: true, type: "boolean", message: "Required", trigger: "change" },
  ],
  photo: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
          return new Error("photo image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
