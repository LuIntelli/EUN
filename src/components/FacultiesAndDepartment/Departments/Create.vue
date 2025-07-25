<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Department
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
          placeholder="Department of Computer Science"
        />
      </n-form-item>
      <n-form-item label="Slug" path="slug">
        <n-input
          v-model:value="formData.slug"
          placeholder="department-of-computer-science"
        />
      </n-form-item>
      <n-form-item label="Faculty Name" path="faculty_name">
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

      <n-form-item label="Short Description" path="short_description">
        <n-input
          v-model:value="formData.short_description"
          placeholder="Artificial Intelligence\\r\\nCybersecurity\\r\\nSoftware Engineering"
        />
      </n-form-item>
      <n-form-item label="Description" path="description">
        <n-input
          v-model:value="formData.description"
          placeholder="Artificial Intelligence\\r\\nCybersecurity\\r\\nSoftware Engineering"
        />
      </n-form-item>

      <n-form-item label="Vision" path="vision">
        <n-input
          v-model:value="formData.vision"
          placeholder="To be Africa's leading tech education hub"
        />
      </n-form-item>
      <n-form-item label="Mission" path="mission">
        <n-input
          v-model:value="formData.mission"
          placeholder="Deliver world-class computing education through hands-on learning"
        />
      </n-form-item>
      <n-form-item label="Name of the HOD" path="hod_name">
        <n-input
          v-model:value="formData.hod_name"
          placeholder="Dr. Grace Hopper"
        />
      </n-form-item>

      <n-form-item label="Hod's title" path="hod_title">
        <n-input
          v-model:value="formData.hod_title"
          placeholder="Professor of Computer Science"
        />
      </n-form-item>
      <n-form-item label="Hod's Message" path="hod_message">
        <n-input
          v-model:value="formData.hod_message"
          placeholder="We empower students to solve real-world problems through technology"
        />
      </n-form-item>

      <n-form-item
        label="Hero Background Image"
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
      <n-form-item
        label="About Image 1"
        path="about_image1"
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
        label="About Image 2"
        path="about_image2"
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
        label="Hod's Photo"
        path="hod_photo"
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

      <n-form-item label="Order" path="order">
        <n-input v-model:value="formData.order" placeholder="1" type="number" />
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
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css"; //

import {
  createDepartments,
  listFaculties,
} from "@/services/facultiesAndDepartment";

const router = useRouter();
const route = useRoute();
const form = ref(null);
const message = useMessage();
const submitting = ref(false);

const photoFile = ref(null);
const photoPreview = ref(null);
const photoFile1 = ref(null);
const photoPreview1 = ref(null);
const photoFile2 = ref(null);
const photoPreview2 = ref(null);
const photoFile3 = ref(null);
const photoPreview3 = ref(null);

const formData = reactive({
  order: "",
  faculty: null,
  faculty_name: "",
  hod_message: "",
  hod_title: "",
  slug: "",
  name: "",
  short_description: "",
  description: "",
  vision: "",
  mission: "",
  hod_name: "",
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

// Create data
const handleSubmit = async () => {
  console.log("Start submitting...");
  try {
    submitting.value = true;
    await form.value?.validate();

    console.log("Start submitting...", formData);

    if (photoFile.value) {
      formData["hero_background"] = photoFile.value;
    }
    if (photoFile1.value) {
      formData["about_image1"] = photoFile1.value;
    }
    if (photoFile2.value) {
      formData["about_image2"] = photoFile2.value;
    }
    if (photoFile3.value) {
      formData["hod_photo"] = photoFile3.value;
    }

    console.log("Start submitting...", formData);
    await createDepartments(formData);
    message.success("Created successfully");
    router.push("/departments");
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
  name: [{ required: true, message: "Name is required", trigger: "blur" }],
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
    {
      required: true,
      type: "number",
      message: "Faculty is required",
      trigger: "blur",
    },
  ],
  slug: [
    {
      required: true,
      message: "Slug is required",
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
  short_description: [
    {
      required: true,
      message: "Short description Text is required",
      trigger: "blur",
    },
  ],
  mission: [
    {
      required: true,
      message: "Mission is required",
      trigger: "blur",
    },
  ],
  vision: [
    {
      required: true,
      message: "Vision is required",
      trigger: "blur",
    },
  ],
  hod_name: [
    {
      required: true,
      message: "Hod's name is required",
      trigger: "blur",
    },
  ],
  hod_message: [
    {
      required: true,
      message: "Hod's message is required",
      trigger: "blur",
    },
  ],

  hod_title: [
    {
      required: true,
      message: "Hod's title is required",
      trigger: "blur",
    },
  ],

  order: [
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

  is_active: [
    {
      required: false,
      type: "boolean",
      message: "Is active is required",
      trigger: "change",
    },
  ],

  hero_background: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile.value) {
          return new Error("Hero background image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  about_image2: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile2.value) {
          return new Error("About Image 2 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  hod_photo: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile3.value) {
          return new Error("Hod's photo is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  about_image1: [
    {
      required: true,
      validator(rule, value) {
        if (!photoFile1.value) {
          return new Error("About image 1 is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
};
</script>
