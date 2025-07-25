<template>
  <div v-if="loading" class="relative my-10 flex justify-center">
    <PulseLoader v-if="loading" />
  </div>
  <div class="p-6 w-full mx-auto">
    <h2 class="text-2xl font-bold text-[rgba(61,58,121,1)] mb-6">
      Create Scholarship
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

      <n-form-item label="Amount" path="amount">
        <n-input
          class=""
          v-model:value="formData.amount"
          type="number"
          placeholder="2"
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
      <n-form-item label="Application Deadline" path="application_deadline">
        <n-date-picker
          class="w-full"
          type="datetime"
          v-model:value="formData.application_deadline"
          placeholder="Application deadline"
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
        Create Scholarship
      </button>
    </n-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useMessage } from "naive-ui";
import { createScholarship } from "@/services/Scholarship";
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
  faculty: null,
  amount: "",
  application_deadline: null,
  eligibility_criteria: "",
  description: "",
  is_active: false,
  is_featured: false,
  created_at: null,
  updated_at: null,
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
        message.error((err.response?.data)[key]);
      }
    }
  } finally {
    loadingFaculty.value = false;
  }
});

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
// image
const handleImageChange = (options) => {
  const file = options.file.file;
  imageFile2.value = file;
  imagePreview2.value = URL.createObjectURL(file);
};
// Submit
const handleSubmit = async () => {
  try {
    submitting.value = true;
    await form.value?.validate();
    if (imageFile2.value) {
      formData["image"] = imageFile2.value;
    }
    await createScholarship(formData);
    message.success("data added successfully");
    router.push("/scholarship/lists");
  } catch (err) {
    console.error(err);
    message.error("data not created...");
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
    {
      required: true,
      type: "number",
      message: "Faculty is required",
      trigger: "blur",
    },
  ],

  eligibility_criteria: [
    { required: true, message: "First name is required", trigger: "blur" },
  ],
  application_deadline: [
    {
      validator(rule, value) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        const formattedDate = new Date(value).toISOString().split("T")[0];
        if (!regex.test(formattedDate)) {
          return new Error("Date must be in YYYY-MM-DD format");
        }
        return true;
      },
      trigger: ["change"],
    },
  ],
  amount: [{ required: true, message: "Amount is required", trigger: "blur" }],

  description: [
    { required: true, message: "Description is required", trigger: "blur" },
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
  is_featured: [
    {
      required: false,
      type: "boolean",
      message: "Is featured is required",
      trigger: "change",
    },
  ],

  image: [
    {
      required: true,
      validator(rule, value) {
        if (!imageFile2.value) {
          return new Error("image is required");
        }
        return true;
      },
      trigger: "change",
    },
  ],
  is_active: [
    {
      required: false,
      type: "boolean",
      message: "Required",
      trigger: "change",
    },
  ],
};
</script>
